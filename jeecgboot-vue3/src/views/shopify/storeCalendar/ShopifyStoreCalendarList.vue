<template>
  <div class="calendar-page">
    <BasicTable @register="registerTable" :columns="columns" :title="label('title')">
      <template #tableTitle
        ><a-button v-auth="permission('add')" type="primary" :disabled="saving" @click="openEditor()">{{ label('add') }}</a-button></template
      >
      <template #action="{ record }"
        ><TableAction
          :dropDownActions="[
            {
              label: label('delete'),
              auth: permission('delete'),
              color: 'error',
              disabled: saving || deletePending,
              onClick: () => confirmDelete(record),
            },
          ]"
          :actions="[{ label: t('shopify.webhookConfig.edit'), auth: permission('edit'), disabled: saving, onClick: () => openEditor(record) }]"
      /></template>
    </BasicTable>
    <BasicModal
      @register="registerEditor"
      :title="label(adding ? 'add' : 'edit')"
      :width="900"
      :confirmLoading="saving"
      :closeFunc="canClose"
      :okButtonProps="{ disabled: !draft || !storesReady || storesLoading || !hasPermission(permission(adding ? 'add' : 'edit')) }"
      @ok="submit"
    >
      <a-alert v-if="!storesReady && !storesLoading" type="error" :message="label('storeLoadFailed')"
        ><template #action
          ><a-button size="small" @click="loadStores">{{ label('retry') }}</a-button></template
        ></a-alert
      >
      <a-form v-if="draft" ref="form" :model="draft" layout="vertical" class="calendar-form">
        <a-alert
          v-if="draft.storeRef"
          :type="hoursError ? 'warning' : 'info'"
          :message="
            hoursLoading
              ? label('hoursLoading')
              : hoursError
                ? label('hoursFailed')
                : t('shopify.storeCalendar.businessHours', { start: businessHours?.openTime, end: businessHours?.closeTime })
          "
          show-icon
          style="margin-bottom: 16px"
        >
          <template v-if="hoursError" #action
            ><a-button size="small" @click="loadBusinessHours(draft.storeRef)">{{ label('retry') }}</a-button></template
          >
        </a-alert>
        <a-row :gutter="24">
          <a-col :xs="24" :md="12"
            ><a-form-item name="storeRef" :label="label('storeRef')" :rules="[{ required: true }]"
              ><a-select
                v-model:value="draft.storeRef"
                :options="editStoreOptions"
                show-search
                option-filter-prop="label"
                :loading="storesLoading"
                :disabled="saving" /></a-form-item
          ></a-col>
          <a-col :xs="24" :md="12"
            ><a-form-item name="calendarDate" :label="label('calendarDate')" :rules="[{ required: true }]"
              ><a-date-picker v-model:value="draft.calendarDate" value-format="YYYY-MM-DD" :disabled="saving" style="width: 100%" /></a-form-item
          ></a-col>
          <a-col :xs="24" :md="12"
            ><a-form-item name="ruleType" :label="label('ruleType')" :rules="[{ required: true }]"
              ><a-select v-model:value="draft.ruleType" :options="ruleOptions" :disabled="saving" /></a-form-item
          ></a-col>
          <a-col :xs="24" :md="12">
            <a-form-item :label="label('timeMode')">
              <a-radio-group v-model:value="timeMode" :disabled="saving" @change="clearTimes">
                <a-radio-button value="allDay">{{ label('allDay') }}</a-radio-button>
                <a-radio-button value="period">{{ label('period') }}</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col v-for="field in timeMode === 'period' ? timeFields : []" :key="field" :xs="24" :md="12"
            ><a-form-item :name="field" :label="label(field)"
              ><a-time-picker
                v-model:value="draft[field]"
                format="HH:mm"
                value-format="HH:mm"
                :placeholder="label(field)"
                :disabled-time="() => disabledTimes(field)"
                hide-disabled-options
                :show-now="false"
                :input-read-only="true"
                :disabled="saving || hoursLoading || hoursError || !businessHours"
                style="width: 100%" /></a-form-item
          ></a-col>
          <a-col :span="24"
            ><a-form-item name="remark" :label="label('remark')"><a-textarea v-model:value="draft.remark" :rows="2" :disabled="saving" /></a-form-item
          ></a-col>
        </a-row>
      </a-form>
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { computed, nextTick, onMounted, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useUserStore } from '/@/store/modules/user';
  import {
    list,
    getStores,
    save,
    getStoreBusinessHours,
    timeSeconds,
    isWithinBusinessHours,
    calendarDisabledTimes,
    deleteCalendar,
  } from './storeCalendar.api';
  import type { StoreCalendar, StoreBusinessHours } from './storeCalendar.api';
  defineOptions({ name: 'ShopifyStoreCalendarList' });
  const { t } = useI18n();
  const { createMessage, createConfirm } = useMessage();
  const { hasPermission } = usePermission();
  const userStore = useUserStore();
  const label = (key: string) => t(`shopify.storeCalendar.${key}`);
  const permission = (action: string) => `shopify:shopify_store_calendar:${action}`;
  const stores = ref<{ value: string; label: string }[]>([]);
  const storesLoading = ref(false);
  const storesReady = ref(false);
  const ruleOptions = computed(() =>
    (
      (userStore.getAllDictItems as unknown as Record<string, { value: string; text?: string; label?: string }[]>)
        ?.shopify_store_calendar_rule_type ?? []
    ).map((item) => ({ value: item.value, label: businessDictionaryText('shopify_store_calendar_rule_type', item.value) }))
  );
  async function loadStores() {
    if (storesLoading.value) return;
    storesLoading.value = true;
    try {
      stores.value = (await getStores()).map((item) => ({ value: String(item.value), label: item.text ?? item.label ?? String(item.value) }));
      storesReady.value = true;
    } catch {
      storesReady.value = false;
    } finally {
      storesLoading.value = false;
    }
  }
  onMounted(loadStores);
  const columns = computed<BasicColumn[]>(() =>
    ['storeRef', 'calendarDate', 'ruleType', 'openTime', 'closeTime', 'remark', 'updateTime'].map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'storeRef' ? 240 : field === 'remark' ? 240 : 160,
      ellipsis: true,
      customRender: ({ record }) =>
        field === 'storeRef'
          ? (stores.value.find((item) => item.value === record.storeRef)?.label ?? record.storeRef_dictText ?? record.storeRef)
          : field === 'ruleType'
            ? businessDictionaryText('shopify_store_calendar_rule_type', record.ruleType)
            : (record[field] ?? '—'),
    }))
  );
  const schemas = computed<FormSchema[]>(() => [
    {
      field: 'storeRef',
      label: label('storeRef'),
      component: 'Select',
      componentProps: { options: stores.value, loading: storesLoading.value, showSearch: true, optionFilterProp: 'label', allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    {
      field: 'calendarDate',
      label: label('calendarDate'),
      component: 'DatePicker',
      componentProps: { valueFormat: 'YYYY-MM-DD', style: { width: '100%' } },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    {
      field: 'ruleType',
      label: label('ruleType'),
      component: 'Select',
      componentProps: { options: ruleOptions.value, allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
  ]);
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      formConfig: { schemas: schemas.value, labelWidth: 90, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10 },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 160, fixed: 'right' },
      scroll: { x: 1350 },
    },
  });
  const [registerTable, { reload, getForm }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerEditor, { openModal, closeModal }] = useModal();
  const form = ref();
  const draft = ref<StoreCalendar>();
  const adding = ref(false);
  const saving = ref(false);
  const deletePending = ref(false);
  function confirmDelete(record: StoreCalendar) {
    if (!record.id || saving.value || deletePending.value || !hasPermission(permission('delete'))) return;
    const id = record.id;
    const name = stores.value.find((item) => item.value === record.storeRef)?.label ?? record.storeRef_dictText ?? record.storeRef;
    deletePending.value = true;
    createConfirm({
      iconType: 'warning',
      title: label('deleteTitle'),
      content: t('shopify.storeCalendar.deleteConfirm', { name, date: record.calendarDate }),
      okText: label('delete'),
      okButtonProps: { danger: true },
      maskClosable: false,
      onCancel: () => {
        deletePending.value = false;
      },
      onOk: async () => {
        try {
          await deleteCalendar(id);
          createMessage.success(label('deleted'));
          await reload({ page: 1 });
        } finally {
          deletePending.value = false;
        }
      },
    });
  }
  const timeMode = ref<'allDay' | 'period'>('allDay');
  function clearTimes() {
    if (!draft.value) return;
    draft.value.openTime = '';
    draft.value.closeTime = '';
    form.value?.clearValidate();
  }
  function disabledTimes(field: 'openTime' | 'closeTime') {
    return calendarDisabledTimes(businessHours.value ?? {}, field, draft.value ?? {});
  }
  const businessHours = ref<StoreBusinessHours>();
  const hoursLoading = ref(false);
  const hoursError = ref(false);
  let hoursRequest = 0;
  async function loadBusinessHours(id: string) {
    const request = ++hoursRequest;
    businessHours.value = undefined;
    hoursError.value = false;
    hoursLoading.value = Boolean(id);
    if (!id) return;
    try {
      const data = await getStoreBusinessHours(id);
      if (request !== hoursRequest) return;
      businessHours.value = data;
      hoursError.value =
        timeSeconds(data.openTime) === undefined ||
        timeSeconds(data.closeTime) === undefined ||
        timeSeconds(data.openTime)! >= timeSeconds(data.closeTime)!;
      if (!hoursError.value && draft.value && timeMode.value === 'period') {
        const start = timeSeconds(draft.value.openTime);
        const end = timeSeconds(draft.value.closeTime);
        const lower = timeSeconds(data.openTime)!;
        const upper = timeSeconds(data.closeTime)!;
        if ((start !== undefined && (start < lower || start >= upper)) || (end !== undefined && (end <= lower || end > upper))) {
          clearTimes();
          createMessage.warning(label('timesCleared'));
        }
      }
    } catch {
      if (request === hoursRequest) hoursError.value = true;
    } finally {
      if (request === hoursRequest) hoursLoading.value = false;
    }
  }
  watch(
    () => draft.value?.storeRef,
    (id) => {
      void loadBusinessHours(id ?? '');
    },
    { flush: 'sync' }
  );
  const timeFields = ['openTime', 'closeTime'] as const;
  const editStoreOptions = computed(() => {
    const options = [...stores.value];
    if (draft.value?.storeRef && !options.some((item) => item.value === draft.value?.storeRef))
      options.push({ value: draft.value.storeRef, label: draft.value.storeRef_dictText || draft.value.storeRef });
    return options;
  });
  async function canClose() {
    return !saving.value;
  }
  async function openEditor(record?: StoreCalendar) {
    if (saving.value) return;
    adding.value = !record;
    timeMode.value = record?.openTime || record?.closeTime ? 'period' : 'allDay';
    const previousStore = draft.value?.storeRef;
    draft.value = record ? { ...record } : { storeRef: '', calendarDate: '', ruleType: 'open', openTime: '', closeTime: '', remark: '' };
    if (draft.value.storeRef && previousStore === draft.value.storeRef) void loadBusinessHours(draft.value.storeRef);
    openModal(true);
    await nextTick();
    form.value?.clearValidate();
    if (!storesReady.value) void loadStores();
  }
  async function submit() {
    if (saving.value || !draft.value || !storesReady.value || !hasPermission(permission(adding.value ? 'add' : 'edit'))) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    const submission = { ...draft.value };
    if (timeMode.value === 'allDay') {
      if (submission.ruleType === 'open') {
        if (hoursLoading.value || hoursError.value || !businessHours.value) {
          createMessage.warning(label(hoursLoading.value ? 'hoursLoading' : 'hoursFailed'));
          return;
        }
        submission.openTime = businessHours.value.openTime;
        submission.closeTime = businessHours.value.closeTime;
      } else {
        submission.openTime = '';
        submission.closeTime = '';
      }
    }
    const { openTime, closeTime } = submission;
    if (
      (timeMode.value === 'period' && (!openTime || !closeTime)) ||
      Boolean(openTime) !== Boolean(closeTime) ||
      (openTime &&
        closeTime &&
        (timeSeconds(openTime) === undefined || timeSeconds(closeTime) === undefined || timeSeconds(openTime)! >= timeSeconds(closeTime)!))
    ) {
      createMessage.warning(label('invalidTime'));
      return;
    }
    if (timeMode.value === 'period' && openTime && closeTime) {
      if (hoursLoading.value || hoursError.value || !businessHours.value) {
        createMessage.warning(label(hoursLoading.value ? 'hoursLoading' : 'hoursFailed'));
        return;
      }
      if (!isWithinBusinessHours(openTime, closeTime, businessHours.value)) {
        createMessage.warning(t('shopify.storeCalendar.outsideHours', { start: businessHours.value.openTime, end: businessHours.value.closeTime }));
        return;
      }
    }
    saving.value = true;
    try {
      await save(submission, adding.value);
      createMessage.success(label('saved'));
      saving.value = false;
      closeModal();
      await reload(adding.value ? { page: 1 } : undefined);
    } catch {
      /* HTTP客户端显示错误，保留表单。 */
    } finally {
      saving.value = false;
    }
  }
</script>
<style lang="less" scoped>
  .calendar-page {
    padding: 16px;
  }
  .calendar-form {
    padding-top: 8px;
  }
</style>
