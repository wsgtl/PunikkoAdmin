<template>
  <div class="reservation-page">
    <BasicTable @register="registerTable" :columns="columns" :rowSelection="featureSetting.showBusinessBatchSelection ? rowSelection : undefined">
      <template v-if="featureSetting.showSuperQuery" #tableTitle>
        <SuperQuery
          :config="superQueryConfig"
          :queryBtnCfg="{ buttonName: t('shopify.storeReservation.advancedQuery'), buttonIcon: 'ant-design:filter-outlined' }"
          @search="handleSuperQuery"
        />
      </template>
      <template #status="{ record }">
        <a-tag :bordered="false" :color="record.status === 'redeemed' ? 'success' : record.status === 'expired' ? 'error' : 'default'">{{
          statusText(record)
        }}</a-tag>
      </template>
      <template #reservationSource="{ record }">
        {{ reservationSourceText(record) }}
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: t('shopify.storeReservation.cancelBooking'),
              auth: 'shopify:shopify_store_reservation:cancel',
              ifShow: record.status === 'active',
              disabled: cancelPending || verifyBusy,
              onClick: () => handleCancel(record),
            },
            {
              label: t('shopify.storeReservation.verify'),
              ifShow: ['active', 'expired'].includes(record.status),
              loading: verifyingIds.has(record.id),
              disabled: verifyingIds.has(record.id) || cancelPending,
              onClick: () => openVerify(record),
            },
            { label: t('shopify.storeReservation.detail'), onClick: () => showDetail(record) },
          ]"
        />
      </template>
    </BasicTable>
    <BasicModal
      @register="registerVerify"
      :title="t('shopify.storeReservation.verifyTitle')"
      :width="480"
      :okText="t('shopify.storeReservation.confirmVerify')"
      :confirmLoading="verifyBusy"
      :okButtonProps="{ disabled: !!verifyBlocked || !verifyRecord }"
      :closeFunc="async () => !verifyBusy"
      @ok="confirmVerify"
    >
      <div v-if="verifyRecord" class="verify-confirm">
        <a-alert :type="verifyBlocked ? 'error' : 'info'" show-icon :message="verifyBlocked || t('shopify.storeReservation.verifyPrompt')" />
        <a-descriptions :column="1" size="small">
          <a-descriptions-item v-for="field in verifyFields" :key="field" :label="t(`shopify.storeReservation.${field}`)">
            <a-tag v-if="field === 'status'" :bordered="false" :color="verifyBlocked ? 'error' : 'processing'">{{ statusText(verifyRecord) }}</a-tag>
            <span v-else>{{ verifyRecord[field] || '—' }}</span>
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </BasicModal>
    <BusinessDetailPanel @register="registerDetail" :title="t('shopify.storeReservation.detail')" :showOkBtn="false" :width="760">
      <a-descriptions v-if="detail" bordered :column="1" size="small">
        <a-descriptions-item v-for="field in detailFields" :key="field" :label="t(`shopify.storeReservation.${field}`)">
          {{ field === 'status' ? statusText(detail) : field === 'reservationSource' ? reservationSourceText(detail) : detail[field] || '—' }}
        </a-descriptions-item>
      </a-descriptions>
    </BusinessDetailPanel>
  </div>
</template>

<script lang="ts" setup>
  import { featureSetting } from '/@/settings/featureSetting';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import dayjs from 'dayjs';
  import { computed, onMounted, reactive, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import BusinessDetailPanel from '/@/components/BusinessDetail/BusinessDetailPanel.vue';
  import { BasicModal, useModal } from '/@/components/Modal';
  import SuperQuery from '/@/views/super/online/cgform/auto/comp/superquery/SuperQuery.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useUserStore } from '/@/store/modules/user';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { list, loadDictionaries, verifyReservation, cancelReservation } from './storeReservation.api';
  import type { DictItem, StoreReservation } from './storeReservation.api';
  import { createColumns, createSearchSchemas, createSuperQueryConfig, reservationFields } from './storeReservation.data';

  defineOptions({ name: 'ShopifyStoreReservationList' });
  const { t } = useI18n();
  const userStore = useUserStore();
  const { hasPermission } = usePermission();
  const cancelPending = ref(false);
  const { createMessage, createConfirmSync } = useMessage();
  const dictionaries = ref<Record<string, DictItem[]>>({});
  const detail = ref<StoreReservation>();
  const verifyingIds = reactive(new Set<string>());
  const detailFields = [...reservationFields, 'customerId', 'storeRef', 'storeAddress', 'createTime'] as const;
  const superQueryParams = reactive<Record<string, unknown>>({});
  const columns = computed(createColumns);

  // Booking status differs from a store's reservability (Y/N/NO_RESERVATION).
  const statusDictCode = computed(() => 'shopify_reservation_status');
  const statusItems = computed(() => dictionaries.value[statusDictCode.value] ?? userStore.getAllDictItems?.[statusDictCode.value] ?? []);
  const statusOptions = computed(() =>
    statusItems.value.map((item: DictItem) => ({ value: item.value, label: businessDictionaryText(statusDictCode.value, item.value) }))
  );
  const schemas = computed(() => createSearchSchemas(() => statusOptions.value));
  const superQueryConfig = computed(() => ({
    ...createSuperQueryConfig(),
    ...(statusDictCode.value
      ? { status: { title: t('shopify.storeReservation.status'), view: 'list', type: 'string', dictCode: statusDictCode.value, order: 10 } }
      : {}),
  }));

  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: createColumns(),
      formConfig: {
        schemas: schemas.value,
        labelWidth: 100,
        showAdvancedButton: true,
        autoAdvancedCol: 3,
        actionColOptions: { xs: 24, md: 12, xl: 6 },
      },
      pagination: { pageSize: 10, pageSizeOptions: ['10', '20', '50', '100'] },
      actionColumn: { width: 220, fixed: 'right', title: t('shopify.storeReservation.actions') },
      scroll: { x: 1750 },
      beforeFetch(params) {
        Object.assign(params, superQueryParams);
      },
    },
  });
  const [registerTable, { reload, getForm }, { rowSelection, selectedRowKeys }] = tableContext;
  const [registerDetail, { openModal }] = useModal();

  watch(schemas, (value) => getForm().updateSchema(value));
  function statusText(record: StoreReservation) {
    return businessDictionaryText(statusDictCode.value, record.status, undefined, record.status_dictText);
  }
  function reservationSourceText(record: StoreReservation) {
    const value = record.reservationSource;
    return value ? t(`shopify.storeReservation.sourceValues.${value}`, record.reservationSource_dictText || value) : '—';
  }
  function handleSuperQuery(params?: Record<string, unknown>) {
    Object.keys(superQueryParams).forEach((key) => delete superQueryParams[key]);
    Object.assign(superQueryParams, params ?? {});
    selectedRowKeys.value = [];
    reload({ page: 1 });
  }
  const [registerVerify, { openModal: showVerify, closeModal: closeVerify }] = useModal();
  const verifyRecord = ref<StoreReservation>();
  const verifyBusy = ref(false);
  const verifyFields = ['code', 'customerName', 'customerEmail', 'storeName', 'status', 'reservedAt', 'expiresAt'] as const;
  function blockedReason(record?: StoreReservation) {
    if (!record) return '';
    if (record.status === 'expired' || (record.expiresAt && dayjs(record.expiresAt).isValid() && !dayjs(record.expiresAt).isAfter(dayjs())))
      return t('shopify.storeReservation.verifyExpired');
    return record.status !== 'active' ? t('shopify.storeReservation.verifyUnavailable') : '';
  }
  const verifyBlocked = computed(() => blockedReason(verifyRecord.value));
  function openVerify(record: StoreReservation) {
    if (verifyBusy.value || cancelPending.value || !record.id) return;
    verifyRecord.value = { ...record };
    showVerify(true);
  }
  async function confirmVerify() {
    const record = verifyRecord.value;
    if (!record || verifyBusy.value) return;
    const reason = blockedReason(record);
    if (reason) {
      createMessage.warning(reason);
      return;
    }
    verifyBusy.value = true;
    try {
      await handleVerify(record);
    } finally {
      verifyBusy.value = false;
    }
  }
  async function handleVerify(record: StoreReservation) {
    if (!record.id || verifyingIds.has(record.id) || blockedReason(record)) return;
    verifyingIds.add(record.id);
    try {
      await verifyReservation(record.id);
      record.status = 'redeemed';
      record.status_dictText = undefined;
      createMessage.success(t('shopify.storeReservation.verifySuccess'));
      verifyBusy.value = false;
      closeVerify();
      await reload();
    } catch (error) {
      createMessage.error(error instanceof Error ? error.message : t('sys.api.apiRequestFailed'));
    } finally {
      verifyingIds.delete(record.id);
    }
  }
  async function handleCancel(record: StoreReservation) {
    const permission = 'shopify:shopify_store_reservation:cancel';
    if (cancelPending.value || verifyBusy.value || record.status !== 'active' || !record.id || !hasPermission(permission)) return;
    cancelPending.value = true;
    try {
      const confirmed = await createConfirmSync({
        title: t('shopify.storeReservation.cancelTitle'),
        content: t('shopify.storeReservation.cancelPrompt', { code: record.code }),
        okText: t('shopify.storeReservation.confirmCancel'),
        cancelText: t('common.cancelText'),
      });
      if (!confirmed || record.status !== 'active' || !hasPermission(permission)) return;
      await cancelReservation(record.id);
      record.status = 'cancelled';
      record.status_dictText = undefined;
      createMessage.success(t('shopify.storeReservation.cancelSuccess'));
      await reload();
    } catch {
      // Shared HTTP client reports failures; do not change the row on failure.
    } finally {
      cancelPending.value = false;
    }
  }
  function showDetail(record: StoreReservation) {
    detail.value = record;
    openModal(true);
  }
  onMounted(async () => {
    try {
      dictionaries.value = await loadDictionaries();
      userStore.setAllDictItems(dictionaries.value);
    } catch {
      createMessage.warning(t('shopify.storeReservation.dictionaryError'));
    }
  });
</script>

<style lang="less" scoped>
  .verify-confirm {
    :deep(.ant-alert) {
      margin: 8px 0 16px;
    }
    :deep(.ant-descriptions-row > td) {
      padding: 16px 0;
      border-bottom: 1px solid #f0f0f0;
    }
    :deep(.ant-descriptions-item-label) {
      width: 100px;
      color: #8c8c8c;
    }
    :deep(.ant-descriptions-item-content) {
      overflow-wrap: anywhere;
    }
  }
  .reservation-page {
    padding: 16px;
  }
</style>
