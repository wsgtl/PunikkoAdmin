<template>
  <div class="daily-unlock-page">
    <BasicTable @register="registerTable" :columns="columns" :rowSelection="rowSelection">
      <template #action="{ record }"
        ><TableAction
          :actions="[
            { label: t('shopify.dailyUnlock.release'), onClick: () => openRelease(record) },
            { label: t('shopify.storeReservation.detail'), onClick: () => showDetail(record) },
          ]"
      /></template>
    </BasicTable>
    <BasicModal
      @register="registerRelease"
      :title="t('shopify.dailyUnlock.confirmRelease')"
      :okText="t('shopify.dailyUnlock.confirmRelease')"
      :width="900"
      :confirmLoading="submitting"
      :okButtonProps="{ disabled: storesLoading || !storesReady }"
      :closeFunc="canClose"
      @ok="submitRelease"
    >
      <a-spin :spinning="storesLoading">
        <a-alert type="info" show-icon :message="t('shopify.dailyUnlock.hint')" class="release-hint" />
        <a-form v-if="draft" ref="releaseForm" :model="draft" layout="vertical">
          <a-row :gutter="24">
            <a-col :span="12"
              ><a-form-item :label="t('shopify.dailyUnlock.mode')" name="mode" :rules="[{ required: true }]"
                ><a-select v-model:value="draft.mode" :options="modeOptions" :disabled="submitting" /></a-form-item
            ></a-col>
            <a-col :span="12"
              ><a-form-item :label="t('shopify.dailyUnlock.storeRef')" name="storeRef" :rules="[{ required: true }]"
                ><a-select
                  v-model:value="draft.storeRef"
                  :options="storeOptions"
                  show-search
                  option-filter-prop="label"
                  :disabled="submitting" /></a-form-item
            ></a-col>
            <a-col :span="24"
              ><a-form-item :label="t('shopify.dailyUnlock.customerId')" name="customerId" :rules="[{ required: true, whitespace: true }]"
                ><a-input v-model:value="draft.customerId" :disabled="submitting" /></a-form-item
            ></a-col>
            <a-col :span="12"
              ><a-form-item :label="t('shopify.dailyUnlock.reservationDate')" name="reservationDate" :rules="[{ required: true }]"
                ><a-date-picker
                  v-model:value="draft.reservationDate"
                  value-format="YYYY-MM-DD"
                  style="width: 100%"
                  :disabled="submitting" /></a-form-item
            ></a-col>
            <a-col :span="12"
              ><a-form-item :label="t('shopify.dailyUnlock.unlockCount')" name="unlockCount" :rules="[{ required: true, type: 'integer', min: 1 }]"
                ><a-input-number v-model:value="draft.unlockCount" :min="1" :precision="0" :disabled="submitting" /></a-form-item
            ></a-col>
            <a-col :span="24"
              ><a-form-item :label="t('shopify.dailyUnlock.reason')"
                ><a-textarea v-model:value="draft.reason" :rows="2" :disabled="submitting" /></a-form-item
            ></a-col>
            <a-col :span="12"
              ><a-form-item :label="t('shopify.dailyUnlock.operatorId')"><a-input :value="draft.operatorId" readonly /></a-form-item
            ></a-col>
            <a-col :span="12"
              ><a-form-item :label="t('shopify.dailyUnlock.operatorName')"><a-input :value="draft.operatorName" readonly /></a-form-item
            ></a-col>
          </a-row>
        </a-form>
      </a-spin>
    </BasicModal>
    <BasicModal @register="registerDetail" :title="t('shopify.dailyUnlock.detail')" :showOkBtn="false" :width="760">
      <a-descriptions v-if="detail" bordered :column="1"
        ><a-descriptions-item v-for="field in detailFields" :key="field" :label="t(`shopify.dailyUnlock.${field}`)">{{
          detailValue(field)
        }}</a-descriptions-item></a-descriptions
      >
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { computed, nextTick, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { list, getStoreOptions, releaseCustomer } from './reservationDailyUnlock.api';
  import type { DailyUnlock } from './reservationDailyUnlock.api';
  import { createColumns, createSearchSchemas, detailFields } from './reservationDailyUnlock.data';
  defineOptions({ name: 'ShopifyReservationDailyUnlockList' });
  const { t } = useI18n();
  const { createMessage } = useMessage();
  // 固定业务值由已确认的接口响应提供；显示文案跟随页面语言。
  const modeOptions = computed(() => ['store', 'product'].map((value) => ({ value, label: t(`shopify.dailyUnlock.${value}Mode`) })));
  const columns = computed(createColumns);
  const schemas = computed(() => createSearchSchemas(() => modeOptions.value));
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: createColumns(),
      formConfig: { schemas: schemas.value, labelWidth: 110, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10, pageSizeOptions: ['10', '20', '50', '100'] },
      actionColumn: { width: 150, fixed: 'right', title: t('shopify.storeReservation.actions') },
      scroll: { x: 1350 },
    },
  });
  const [registerTable, { reload, getForm }, { rowSelection }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerRelease, { openModal, closeModal }] = useModal();
  const [registerDetail, { openModal: openDetail }] = useModal();
  const draft = ref<DailyUnlock>();
  const detail = ref<DailyUnlock>();
  const releaseForm = ref();
  const submitting = ref(false);
  const storesLoading = ref(false);
  const storesReady = ref(false);
  const storeOptions = ref<{ label: string; value: string }[]>([]);
  async function canClose() {
    return !submitting.value;
  }
  async function openRelease(record: DailyUnlock) {
    if (storesLoading.value || submitting.value) return;
    draft.value = { ...record };
    storesReady.value = false;
    storeOptions.value = [];
    storesLoading.value = true;
    openModal(true);
    await nextTick();
    releaseForm.value?.clearValidate();
    try {
      const items = await getStoreOptions();
      storeOptions.value = items.map((item) => ({ value: item.value, label: item.text ?? item.label ?? item.value }));
      storesReady.value = true;
    } catch (error) {
      createMessage.error(error instanceof Error ? error.message : t('sys.api.apiRequestFailed'));
    } finally {
      storesLoading.value = false;
    }
  }
  async function submitRelease() {
    if (submitting.value || !storesReady.value || !draft.value) return;
    try {
      await releaseForm.value.validate();
    } catch {
      return;
    }
    if (!storeOptions.value.some((item) => item.value === draft.value?.storeRef)) {
      createMessage.warning(t('shopify.dailyUnlock.chooseStore'));
      return;
    }
    submitting.value = true;
    try {
      await releaseCustomer({ ...draft.value, customerId: draft.value.customerId.trim() });
      createMessage.success(t('shopify.dailyUnlock.success'));
      submitting.value = false;
      closeModal();
      await reload();
    } catch (error) {
      createMessage.error(error instanceof Error ? error.message : t('sys.api.apiRequestFailed'));
    } finally {
      submitting.value = false;
    }
  }
  function showDetail(record: DailyUnlock) {
    detail.value = record;
    openDetail(true);
  }
  function detailValue(field: (typeof detailFields)[number]) {
    if (!detail.value) return '—';
    const record = detail.value;
    const value =
      field === 'mode' ? (record.mode_dictText ?? record.mode) : field === 'storeRef' ? (record.storeRef_dictText ?? record.storeRef) : record[field];
    return value == null || value === '' ? '—' : value;
  }
</script>
<style lang="less" scoped>
  .daily-unlock-page {
    padding: 16px;
  }
  .release-hint {
    margin-bottom: 20px;
  }
</style>
