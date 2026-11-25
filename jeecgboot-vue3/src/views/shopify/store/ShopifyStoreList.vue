<template>
  <div class="store-page">
    <BasicTable @register="registerTable" :columns="columns" :title="label('title')">
      <template #tableTitle>
        <a-button v-auth="'shopify:shopify_store:add'" type="primary" :disabled="loading || saving" @click="openAdd">{{ label('add') }}</a-button>
      </template>
      <template #action="{ record }"
        ><TableAction
          :divider="false"
          :dropDownActions="[
            {
              label: label('delete'),
              auth: 'shopify:shopify_store:delete',
              color: 'error',
              disabled: saving || loading || deletePending,
              onClick: () => confirmDelete(record),
            },
          ]"
          :actions="[
            {
              label: t('shopify.webhookConfig.edit'),
              auth: 'shopify:shopify_store:edit',
              disabled: saving || loading,
              onClick: () => openEdit(record),
            },
            { label: label('slots'), auth: 'shopify:shopify_store:queryById', onClick: () => openSlots(record) },
          ]"
      /></template>
    </BasicTable>
    <SectionedEditorModal
      @register="registerEdit"
      :title="label(isAdding ? 'add' : 'edit')"
      :confirmDiscard="true"
      :editData="draft"
      :editExtra="{ days, slotLimitDraft }"
      :confirmLoading="saving"
      :okButtonProps="{ disabled: loading || !draft || !hasPermission(savePermission) }"
      :closeFunc="canClose"
      @ok="submit"
    >
      <a-spin :spinning="loading" class="store-editor-loading">
        <a-alert v-if="editFailed" type="error" :message="label('loadFailed')" />
        <a-form v-if="draft" ref="form" :model="draft" layout="horizontal">
          <a-tabs v-model:activeKey="activeEditorSection" class="store-editor-tabs">
            <a-tab-pane v-for="tab in editorTabs" :key="tab.key" :tab="tab.label" />
          </a-tabs>
          <template v-if="activeEditorSection !== 'translations'">
            <EditorSection v-for="section in visibleEditorSections" :key="section.title" :title="label(section.title)">
              <a-row :gutter="[24, 0]">
                <a-col v-for="field in section.fields" :key="field" :xs="24" :md="fieldSpan(field)">
                  <a-form-item
                    :name="field"
                    :label="label(field)"
                    :rules="
                      ['longitude', 'latitude'].includes(field)
                        ? [
                            {
                              type: 'number',
                              min: field === 'longitude' ? -180 : -90,
                              max: field === 'longitude' ? 180 : 90,
                              message: label(field + 'Hint'),
                            },
                          ]
                        : field === 'qrcodeValidSeconds'
                          ? [{ required: true, type: 'integer', min: 15, max: 300, message: label('qrcodeValidSecondsHint') }]
                          : requiredFields.includes(field)
                            ? [{ required: true }]
                            : []
                    "
                  >
                    <Tinymce
                      :autoFocus="false"
                      v-bind="storeRichTextSetting"
                      v-if="['reservationNotice', 'storeMatters'].includes(field)"
                      :key="`${draft.id}-${field}`"
                      v-model="draft[field]"
                      :height="180"
                      :options="{ min_height: 150, statusbar: false }"
                      :disabled="saving"
                    />
                    <a-checkbox-group v-else-if="field === 'businessDays'" v-model:value="days" :options="businessOptions" :disabled="saving" />
                    <a-select
                      v-else-if="dictCodes[field]"
                      v-model:value="draft[field]"
                      :options="dictOptions(field)"
                      :disabled="saving || (isAdding && field === 'hasReservableProducts')"
                    />
                    <JSelectUser
                      v-else-if="staffFields.includes(field)"
                      :key="`${editorKey}-${field}`"
                      v-model:value="draft[field]"
                      rowKey="id"
                      labelKey="realname"
                      :pagination="{ pageSize: 10 }"
                      :disabled="saving"
                    />
                    <a-input-number
                      v-else-if="['longitude', 'latitude'].includes(field)"
                      v-model:value="draft[field]"
                      :min="field === 'longitude' ? -180 : -90"
                      :max="field === 'longitude' ? 180 : 90"
                      :precision="7"
                      :step="0.0000001"
                      :placeholder="label(field + 'Hint')"
                      :disabled="saving"
                      style="width: 100%"
                    />
                    <a-input-number
                      v-else-if="numberFields.includes(field)"
                      class="editor-number"
                      v-model:value="draft[field]"
                      :min="field === 'qrcodeValidSeconds' ? 15 : 0"
                      :max="field === 'qrcodeValidSeconds' ? 300 : undefined"
                      :precision="0"
                      :disabled="saving"
                      style="width: 100%"
                    />
                    <a-time-picker
                      v-else-if="['openTime', 'closeTime'].includes(field)"
                      v-model:value="draft[field]"
                      format="HH:mm"
                      value-format="HH:mm"
                      :disabled="saving"
                      style="width: 100%"
                    />
                    <a-textarea
                      v-else-if="field === 'remark'"
                      v-model:value="draft[field]"
                      :auto-size="{ minRows: 3, maxRows: 6 }"
                      :disabled="saving"
                    />
                    <a-textarea
                      v-else-if="field === 'storeAddress'"
                      v-model:value="draft[field]"
                      :auto-size="{ minRows: 1, maxRows: 2 }"
                      :disabled="saving"
                    />
                    <a-input v-else v-model:value="draft[field]" :disabled="saving" allow-clear />
                  </a-form-item>
                </a-col>
              </a-row>
              <template v-if="section.title === 'reservationSection'">
                <div class="slot-limit-heading">{{ label('reservationSlotLimits') }}</div>
                <a-alert class="slot-limit-hint" type="info" :show-icon="true" :message="label('reservationSlotLimitsHint')" />
                <a-table
                  class="slot-limit-table"
                  :columns="reservationLimitColumns"
                  :data-source="reservationLimitRows"
                  row-key="time"
                  size="small"
                  bordered
                  :pagination="false"
                  :scroll="{ y: 600 }"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.dataIndex === 'limit'">
                      <a-input-number
                        v-model:value="slotLimitDraft[record.time]"
                        :min="0"
                        :max="2147483647"
                        :precision="0"
                        :disabled="saving"
                        :placeholder="t('shopify.storeManagement.inheritSlotLimit', { count: draft?.reservableNumber ?? 0 })"
                        style="width: 100%"
                      />
                    </template>
                    <span v-else-if="column.dataIndex === 'defaultLimit'">{{ draft?.reservableNumber ?? '—' }}</span>
                    <span v-else-if="column.dataIndex === 'businessRange'">{{ label('withinBusinessHours') }}</span>
                  </template>
                </a-table>
              </template>
            </EditorSection>
          </template>
          <EditorSection v-if="activeEditorSection === 'translations' || activeEditorSection === 'all'" :title="label('translations')">
            <p class="translation-help">{{ label('translationExpandHint') }}</p>
            <a-table
              :data-source="draft.shopifyStoreI18nList"
              :columns="translationColumns"
              row-key="language"
              :pagination="false"
              :scroll="{ x: 760 }"
              size="small"
            >
              <template #bodyCell="{ column, record }">
                <span v-if="column.dataIndex === 'language'">{{ businessDictionaryText('shopify_language', record.language) }}</span>
                <a-textarea
                  v-else-if="column.dataIndex === 'remark'"
                  v-model:value="record[column.dataIndex]"
                  :disabled="saving"
                  :placeholder="label('translationFallback')"
                  :auto-size="{ minRows: 2, maxRows: 5 }"
                />
                <a-input v-else v-model:value="record[column.dataIndex]" :disabled="saving" :placeholder="label('translationFallback')" />
              </template>
              <template #expandedRowRender="{ record }">
                <a-form-item v-for="field in ['reservationNotice', 'storeMatters']" :key="field" :label="label(field)">
                  <Tinymce
                    :autoFocus="false"
                    :key="`${editorKey}-${record.language}-${field}`"
                    v-model="record[field]"
                    v-bind="storeRichTextSetting"
                    :height="180"
                    :options="{ min_height: 150, statusbar: false }"
                    :disabled="saving"
                  />
                </a-form-item>
              </template>
            </a-table>
          </EditorSection>
        </a-form>
      </a-spin>
    </SectionedEditorModal>
    <BasicModal
      @register="registerSlots"
      :title="`${slotName} - ${label('slots')}`"
      :width="1320"
      :showOkBtn="false"
      :cancelText="t('common.closeText')"
      :closeFunc="async () => !slotSaving"
      @cancel="invalidateSlots"
    >
      <a-spin :spinning="slotsLoading">
        <a-alert v-if="slotsFailed" type="error" :message="label('loadFailed')" />
        <a-tabs v-else-if="slotDays.length" v-model:activeKey="activeDate" class="slot-tabs">
          <a-tab-pane v-for="day in slotDays" :key="day.date" :tab="day.date" :disabled="slotSaving">
            <a-table :columns="slotColumns" :dataSource="day.slots" rowKey="reservedAt" :pagination="false" :scroll="{ x: 1200, y: 520 }" bordered>
              <template #bodyCell="{ column, record }">
                <a-tag v-if="column.dataIndex === 'available'" :color="record.available && !record.full ? 'green' : 'red'">{{
                  label(record.full ? 'full' : record.available ? 'bookable' : 'unavailable')
                }}</a-tag>
                <template v-else-if="column.dataIndex === 'limitNumber'">
                  <a-space>
                    <template v-if="editingSlot === record.reservedAt">
                      <a-input-number
                        v-model:value="slotLimit"
                        :min="0"
                        :max="2147483647"
                        :precision="0"
                        :disabled="slotSaving"
                        style="width: 85px"
                      />
                      <a-button size="small" type="primary" :loading="slotSaving" @click="saveSlotLimit(record.reservedAt)">{{
                        t('common.saveText')
                      }}</a-button>
                      <a-button size="small" :disabled="slotSaving" @click="editingSlot = ''">{{ t('common.cancelText') }}</a-button>
                    </template>
                    <template v-else>
                      <span>{{ record.limitNumber }}</span>
                      <a-button
                        v-if="hasPermission('shopify:shopify_store:edit')"
                        size="small"
                        :disabled="slotSaving"
                        @click="
                          editingSlot = record.reservedAt;
                          slotLimit = record.limitNumber;
                        "
                        >{{ label('modifySlotLimit') }}</a-button
                      >
                    </template>
                  </a-space>
                </template>
              </template>
            </a-table>
          </a-tab-pane>
        </a-tabs>
        <a-empty v-else-if="!slotsLoading" />
        <div v-if="slotDays.length" class="slot-summary">{{
          t('shopify.storeManagement.slotSummary', { count: slotDays.find((day) => day.date === activeDate)?.slots.length ?? 0 })
        }}</div>
      </a-spin>
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { businessDictionaryText, businessDictionaryOptions, businessDictionaryListText } from '/@/locales/business/dictionaryAdapter';
  import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import JSelectUser from '/@/components/Form/src/jeecg/components/JSelectUser.vue';
  import { storeRichTextSetting } from '/@/settings/storeRichTextSetting';
  import SectionedEditorModal from '/@/components/SectionedEditor/SectionedEditorModal.vue';
  import EditorSection from '/@/components/SectionedEditor/EditorSection.vue';
  import { Tinymce } from '/@/components/Tinymce';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  import {
    list,
    queryForm,
    getBusinessDays,
    save,
    add,
    getSlots,
    updateSlotLimit,
    createStoreDraft,
    deleteStore,
    initializeStoreTranslations,
  } from './store.api';
  import type { StoreRecord, StoreSlots } from './store.api';
  import { listFields, staffFields, numberFields, dictCodes, slotFields } from './store.data';
  defineOptions({ name: 'ShopifyStoreList' });
  const { t } = useI18n();
  const { hasPermission } = usePermission();
  const { createMessage, createConfirm, createConfirmSync } = useMessage();
  const label = (key: string) => t(`shopify.storeManagement.${key}`);
  const userStore = useUserStore();
  const dictionaries = computed(
    () => (userStore.getAllDictItems ?? {}) as unknown as Record<string, { value: string; text?: string; label?: string }[]>
  );
  const dictOptions = (field: string) => businessDictionaryOptions(dictCodes[field], dictionaries.value[dictCodes[field]] ?? []);
  const columns = computed<BasicColumn[]>(() =>
    listFields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: ['storeName', 'storeAddress', ...staffFields].includes(field) ? 220 : 160,
      ellipsis: true,
      customRender: ({ record }) =>
        field === 'businessDays'
          ? businessDictionaryListText('shopify_business_day', record[field])
          : dictCodes[field]
            ? businessDictionaryText(dictCodes[field], record[field], undefined, record[`${field}_dictText`])
            : (record[`${field}_dictText`] ?? record[field] ?? '—'),
    }))
  );
  const schemas = computed<FormSchema[]>(() =>
    ['code', 'storeName', 'publishStatus'].map((field) => ({
      field,
      label: label(field),
      component: field === 'publishStatus' ? 'Select' : 'Input',
      componentProps: { allowClear: true, ...(field === 'publishStatus' ? { options: dictOptions(field) } : {}) },
      colProps: { xs: 24, md: 12, xl: 6 },
    }))
  );
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      formConfig: { schemas: schemas.value, labelWidth: 100, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10 },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 220, fixed: 'right' },
      scroll: { x: 2700 },
    },
  });
  const [registerTable, { reload, getForm }] = tableContext;
  watch(schemas, (v) => getForm().updateSchema(v));
  const [registerEdit, { openModal: showEdit, closeModal: closeEdit }] = useModal();
  const [registerSlots, { openModal: showSlots }] = useModal();
  const isAdding = ref(false);
  const editorKey = ref(0);
  const translationColumns = computed(() =>
    ['language', 'storeName', 'storeAddress', 'remark'].map((field) => ({
      title: field === 'language' ? t('shopify.storeI18n.language') : label(field),
      dataIndex: field,
      width: field === 'language' ? 110 : 220,
    }))
  );
  const activeEditorSection = ref('all');
  const editorSectionFields: Record<string, string[]> = {
    basicSection: ['code', 'storeName', 'storeAddress', 'longitude', 'latitude', 'phone'],
    publishSection: ['publishStatus', 'hasReservableProducts', 'reservationNotice'],
    businessSection: ['businessDays', 'openTime', 'closeTime'],
    reservationSection: ['reservableDays', 'reservableNumber', 'dailyReservableNumber', 'qrcodeValidSeconds'],
    staffSection: ['storeManagerId', 'deputyManagerIds', 'salesclerkIds'],
    notesSection: ['storeMatters', 'remark'],
  };
  const editorSections = [
    { title: 'basicSection', fields: editorSectionFields.basicSection },
    { title: 'publishSection', fields: editorSectionFields.publishSection },
    { title: 'businessSection', fields: editorSectionFields.businessSection },
    { title: 'reservationSection', fields: editorSectionFields.reservationSection },
    { title: 'staffSection', fields: editorSectionFields.staffSection },
    { title: 'notesSection', fields: editorSectionFields.notesSection },
  ];
  const visibleEditorSections = computed(() =>
    activeEditorSection.value === 'all'
      ? editorSections
      : activeEditorSection.value === 'translations'
        ? []
        : editorSections.filter((section) => section.title === activeEditorSection.value)
  );
  const editorTabs = computed(() =>
    ['all', ...editorSections.map((section) => section.title), 'translations'].map((key) => ({ key, label: label(key) }))
  );
  const slotLimitDraft = ref<Record<string, number | null>>({});
  const originalSlotLimits = ref<Record<string, number | null>>({});
  const reservationLimitColumns = computed(() =>
    ['time', 'limit', 'defaultLimit', 'businessRange'].map((key) => ({ title: label(key), dataIndex: key, width: key === 'limit' ? 220 : 140 }))
  );
  const reservationLimitRows = computed(() => {
    const start = parseTime(draft.value?.openTime);
    const end = parseTime(draft.value?.closeTime);
    if (start == null || end == null || end <= start) return [];
    const rows: { time: string }[] = [];
    for (let minutes = Math.ceil(start / 30) * 30; minutes < end; minutes += 30) {
      rows.push({ time: `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}` });
    }
    return rows;
  });
  function parseTime(value: unknown): number | null {
    const match = /^(\d{1,2}):(\d{2})$/.exec(String(value ?? ''));
    if (!match) return null;
    const hour = Number(match[1]);
    const minute = Number(match[2]);
    return hour < 24 && minute < 60 ? hour * 60 + minute : null;
  }
  function parseReservationSlotLimits(value: unknown): Record<string, number | null> {
    if (!value) return {};
    try {
      const parsed = typeof value === 'string' ? JSON.parse(value) : value;
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
      return Object.fromEntries(Object.entries(parsed).map(([time, limit]) => [time, limit === '' || limit == null ? null : Number(limit)]));
    } catch {
      return {};
    }
  }
  function loadSlotLimitDraft(value: unknown) {
    originalSlotLimits.value = parseReservationSlotLimits(value);
    slotLimitDraft.value = { ...originalSlotLimits.value };
  }
  function serializeSlotLimits(): string {
    const visibleTimes = new Set(reservationLimitRows.value.map((row) => row.time));
    const limits: Record<string, number> = {};
    Object.entries(originalSlotLimits.value).forEach(([time, limit]) => {
      if (!visibleTimes.has(time) && limit != null && Number.isInteger(limit) && limit >= 0) limits[time] = limit;
    });
    reservationLimitRows.value.forEach(({ time }) => {
      const limit = slotLimitDraft.value[time];
      if (limit != null && Number.isInteger(Number(limit)) && Number(limit) >= 0) limits[time] = Number(limit);
    });
    return JSON.stringify(limits);
  }
  const savePermission = computed(() => `shopify:shopify_store:${isAdding.value ? 'add' : 'edit'}`);
  const draft = ref<StoreRecord>();
  const originalReservableNumber = ref<number>();
  const form = ref();
  const loading = ref(false);
  const saving = ref(false);
  const editFailed = ref(false);
  const days = ref<string[]>([]);
  const businessOptions = ref<{ value: string; label: string }[]>([]);
  const requiredFields = ['code', 'storeName', 'publishStatus', 'businessDays', ...numberFields, ...staffFields, 'openTime', 'closeTime'];
  function fieldSpan(field: string) {
    return ['storeAddress', 'businessDays', 'reservationNotice', 'storeMatters', 'remark'].includes(field) ? 24 : 12;
  }
  const splitIds = (value: unknown) =>
    String(value ?? '')
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
  watch(days, (v) => {
    if (draft.value) draft.value.businessDays = v.join(',');
  });
  async function canClose() {
    return !saving.value && !loading.value;
  }
  async function openEdit(record: StoreRecord) {
    if (loading.value || saving.value) return;
    loading.value = true;
    editFailed.value = false;
    draft.value = undefined;
    isAdding.value = false;
    activeEditorSection.value = 'all';
    editorKey.value++;
    showEdit(true);
    try {
      const [data, dict] = await Promise.all([queryForm(record.id), getBusinessDays()]);
      businessOptions.value = dict.map((x) => ({ value: String(x.value), label: businessDictionaryText('shopify_business_day', x.value) }));
      originalReservableNumber.value = data.reservableNumber == null ? undefined : Number(data.reservableNumber);
      days.value = splitIds(data.businessDays);
      draft.value = {
        ...data,
        qrcodeValidSeconds: data.qrcodeValidSeconds ?? 60,
        shopifyStoreI18nList: initializeStoreTranslations(data.shopifyStoreI18nList ?? []),
      };
      loadSlotLimitDraft(data.reservationSlotLimits);
      await nextTick();
      form.value?.clearValidate();
    } catch {
      editFailed.value = true;
    } finally {
      loading.value = false;
    }
  }
  async function openAdd() {
    if (loading.value || saving.value || !hasPermission('shopify:shopify_store:add')) return;
    isAdding.value = true;
    activeEditorSection.value = 'all';
    editorKey.value++;
    loading.value = true;
    editFailed.value = false;
    draft.value = undefined;
    showEdit(true);
    try {
      const dict = await getBusinessDays();
      businessOptions.value = dict.map((x) => ({ value: String(x.value), label: businessDictionaryText('shopify_business_day', x.value) }));
      const initial = createStoreDraft();
      days.value = splitIds(initial.businessDays);
      draft.value = initial;
      loadSlotLimitDraft(initial.reservationSlotLimits);
      await nextTick();
      form.value?.clearValidate();
    } catch {
      editFailed.value = true;
    } finally {
      loading.value = false;
    }
  }
  async function submit() {
    if (!draft.value || loading.value || saving.value || !hasPermission(savePermission.value)) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    saving.value = true;
    try {
      if (!isAdding.value && Number(draft.value.reservableNumber) !== originalReservableNumber.value) {
        const confirmed = await createConfirmSync({
          title: label('capacityResetTitle'),
          content: t('shopify.storeManagement.capacityResetConfirm', {
            before: originalReservableNumber.value ?? '—',
            after: draft.value.reservableNumber,
          }),
          okText: label('capacityResetSave'),
          cancelText: t('common.cancelText'),
        });
        if (!confirmed) return;
      }
      await (isAdding.value ? add : save)({ ...draft.value, reservationSlotLimits: serializeSlotLimits() });
      createMessage.success(label('saved'));
      saving.value = false;
      closeEdit();
      await reload(isAdding.value ? { page: 1 } : undefined);
    } catch {
      /* HTTP客户端显示错误并保留输入。 */
    } finally {
      saving.value = false;
    }
  }
  const deletePending = ref(false);
  function confirmDelete(record: StoreRecord) {
    if (!record.id || deletePending.value || saving.value || loading.value || !hasPermission('shopify:shopify_store:delete')) return;
    const id = record.id;
    deletePending.value = true;
    createConfirm({
      iconType: 'warning',
      title: label('deleteTitle'),
      content: t('shopify.storeManagement.deleteConfirm', { name: record.storeName || record.code || id }),
      okText: label('delete'),
      okButtonProps: { danger: true },
      maskClosable: false,
      onCancel: () => {
        deletePending.value = false;
      },
      onOk: async () => {
        try {
          await deleteStore(id);
          createMessage.success(label('deleted'));
          await reload({ page: 1 });
        } finally {
          deletePending.value = false;
        }
      },
    });
  }
  const slotDays = ref<StoreSlots['slotList']>([]);
  const activeDate = ref('');
  const slotName = ref('');
  const slotsLoading = ref(false);
  const slotsFailed = ref(false);
  let slotVersion = 0;
  const slotStoreRef = ref('');
  const editingSlot = ref('');
  const slotLimit = ref<number | null>(null);
  const slotSaving = ref(false);
  watch(activeDate, () => {
    editingSlot.value = '';
  });
  async function saveSlotLimit(reservedAt: string) {
    if (slotSaving.value || !hasPermission('shopify:shopify_store:edit')) return;
    const value = slotLimit.value;
    if (value == null || !Number.isInteger(value) || value < 0 || value > 2147483647) {
      createMessage.warning(label('slotLimitInvalid'));
      return;
    }
    slotSaving.value = true;
    const version = slotVersion;
    try {
      await updateSlotLimit(slotStoreRef.value, reservedAt, value);
      createMessage.success(label('saved'));
      editingSlot.value = '';
      try {
        const data = await getSlots(slotStoreRef.value);
        if (version === slotVersion) slotDays.value = data.slotList ?? [];
      } catch {
        if (version === slotVersion) slotsFailed.value = true;
      }
    } catch {
      // HTTP 客户端显示错误，保留输入以便重试。
    } finally {
      slotSaving.value = false;
    }
  }
  const slotColumns = computed(() =>
    slotFields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'limitNumber' ? 280 : field === 'reservedAt' ? 190 : field === 'disabledReason' ? 180 : 110,
    }))
  );
  function invalidateSlots() {
    slotVersion++;
    slotsLoading.value = false;
  }
  async function openSlots(record: StoreRecord) {
    if (slotSaving.value) return;
    slotStoreRef.value = record.id;
    editingSlot.value = '';
    const version = ++slotVersion;
    slotDays.value = [];
    activeDate.value = '';
    slotName.value = record.storeName;
    slotsFailed.value = false;
    slotsLoading.value = true;
    showSlots(true);
    try {
      const data = await getSlots(record.id);
      if (version !== slotVersion) return;
      slotName.value = data.storeName;
      slotDays.value = data.slotList ?? [];
      activeDate.value = slotDays.value[0]?.date ?? '';
    } catch {
      if (version === slotVersion) slotsFailed.value = true;
    } finally {
      if (version === slotVersion) slotsLoading.value = false;
    }
  }
  onBeforeUnmount(() => {
    slotVersion++;
  });
</script>
<style lang="less" scoped>
  .store-editor-loading :deep(> .ant-spin-container) {
    overflow: visible;
  }
  .store-editor-tabs {
    position: sticky;
    top: 0;
    z-index: 20;
    background: var(--component-background, #fff);
    :deep(.ant-tabs-nav) {
      margin-bottom: 0;
    }
    margin-bottom: 16px;
  }
  .slot-summary {
    padding: 16px 0 4px;
    color: #8c8c8c;
  }
  .slot-tabs :deep(.ant-tabs-tab-active) {
    background: #fceef1;
  }
  .slot-tabs :deep(.ant-tabs-tab) {
    padding: 12px 24px;
  }
  .store-page {
    padding: 16px;
  }
  .translation-help {
    color: #8c8c8c;
    font-size: 12px;
    margin-bottom: 12px;
  }
</style>
