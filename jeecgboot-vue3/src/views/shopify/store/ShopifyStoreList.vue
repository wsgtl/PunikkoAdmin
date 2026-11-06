<template>
  <div class="store-page">
    <BasicTable @register="registerTable" :columns="columns" :title="label('title')">
      <template #tableTitle>
        <a-button v-auth="'shopify:shopify_store:add'" type="primary" :disabled="loading || saving" @click="openAdd">{{ label('add') }}</a-button>
      </template>
      <template #action="{ record }"
        ><TableAction
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
    <BasicModal
      @register="registerEdit"
      :title="label(isAdding ? 'add' : 'edit')"
      :width="1200"
      :confirmLoading="saving"
      :okButtonProps="{ disabled: loading || !draft || !hasPermission(savePermission) }"
      :closeFunc="canClose"
      @ok="submit"
    >
      <a-spin :spinning="loading">
        <a-alert v-if="editFailed" type="error" :message="label('loadFailed')" />
        <a-form v-if="draft" ref="form" :model="draft" layout="vertical" class="compact-store-form">
          <a-row :gutter="[16, 0]">
            <a-col
              v-for="field in editFields"
              :key="field"
              :xs="24"
              :md="['remark', 'reservationNotice', 'storeMatters'].includes(field) ? 24 : 12"
              :lg="fieldSpan(field)"
            >
              <a-form-item :name="field" :label="label(field)" :rules="requiredFields.includes(field) ? [{ required: true }] : []">
                <Tinymce
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
                  v-else-if="numberFields.includes(field)"
                  v-model:value="draft[field]"
                  :min="0"
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
                  v-else-if="['storeAddress', 'remark'].includes(field)"
                  v-model:value="draft[field]"
                  :auto-size="{ minRows: 1, maxRows: 2 }"
                  :disabled="saving"
                />
                <a-input v-else v-model:value="draft[field]" :disabled="saving" allow-clear />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </BasicModal>
    <BasicModal @register="registerSlots" :title="`${slotName} - ${label('slots')}`" :width="1100" :showOkBtn="false" @cancel="invalidateSlots">
      <a-spin :spinning="slotsLoading">
        <a-alert v-if="slotsFailed" type="error" :message="label('loadFailed')" />
        <a-tabs v-else-if="slotDays.length" v-model:activeKey="activeDate">
          <a-tab-pane v-for="day in slotDays" :key="day.date" :tab="day.date">
            <a-table :columns="slotColumns" :dataSource="day.slots" rowKey="reservedAt" :pagination="false" :scroll="{ x: 1000 }">
              <template #bodyCell="{ column, record }">
                <a-tag v-if="column.dataIndex === 'available'" :color="record.available && !record.full ? 'green' : 'red'">{{
                  label(record.full ? 'full' : record.available ? 'bookable' : 'unavailable')
                }}</a-tag>
                <a-tag v-else-if="column.dataIndex === 'remainingNumber'" :color="record.remainingNumber > 0 ? 'green' : 'red'">{{
                  record.remainingNumber
                }}</a-tag>
              </template>
            </a-table>
          </a-tab-pane>
        </a-tabs>
        <a-empty v-else-if="!slotsLoading" />
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
  import { Tinymce } from '/@/components/Tinymce';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { list, queryForm, getBusinessDays, save, add, getSlots, createStoreDraft, deleteStore } from './store.api';
  import type { StoreRecord, StoreSlots } from './store.api';
  import { editFields, listFields, staffFields, numberFields, dictCodes, slotFields } from './store.data';
  defineOptions({ name: 'ShopifyStoreList' });
  const { t } = useI18n();
  const { hasPermission } = usePermission();
  const { createMessage, createConfirm } = useMessage();
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
  const savePermission = computed(() => `shopify:shopify_store:${isAdding.value ? 'add' : 'edit'}`);
  const draft = ref<StoreRecord>();
  const form = ref();
  const loading = ref(false);
  const saving = ref(false);
  const editFailed = ref(false);
  const days = ref<string[]>([]);
  const businessOptions = ref<{ value: string; label: string }[]>([]);
  const requiredFields = ['code', 'storeName', 'publishStatus', 'businessDays', ...numberFields, ...staffFields, 'openTime', 'closeTime'];
  function fieldSpan(field: string) {
    if (['remark', 'reservationNotice', 'storeMatters'].includes(field)) return 24;
    if (['storeAddress', 'businessDays'].includes(field)) return 12;
    if (['code', 'storeName', 'publishStatus', 'hasReservableProducts'].includes(field)) return 6;
    return 8;
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
    editorKey.value++;
    showEdit(true);
    try {
      const [data, dict] = await Promise.all([queryForm(record.id), getBusinessDays()]);
      businessOptions.value = dict.map((x) => ({ value: String(x.value), label: businessDictionaryText('shopify_business_day', x.value) }));
      days.value = splitIds(data.businessDays);
      draft.value = { ...data };
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
      await (isAdding.value ? add : save)(draft.value);
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
  const slotColumns = computed(() =>
    slotFields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'reservedAt' ? 190 : field === 'disabledReason' ? 180 : 110,
    }))
  );
  function invalidateSlots() {
    slotVersion++;
    slotsLoading.value = false;
  }
  async function openSlots(record: StoreRecord) {
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
  .store-page {
    padding: 16px;
  }
  .compact-store-form {
    :deep(.ant-form-item) {
      margin-bottom: 10px;
    }
    :deep(.ant-form-item-label) {
      padding-bottom: 3px;
    }
    :deep(.ant-checkbox-group) {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      min-height: 32px;
      align-items: center;
    }
    :deep(.ant-checkbox-wrapper) {
      margin-inline-start: 0;
    }
  }
</style>
