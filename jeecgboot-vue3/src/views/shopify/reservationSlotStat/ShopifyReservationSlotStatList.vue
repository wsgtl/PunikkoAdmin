<template>
  <div class="slot-stat-page">
    <BasicTable @register="registerTable" :columns="columns" :rowSelection="rowSelection">
      <template #tableTitle>
        <SuperQuery
          :config="superQueryConfig"
          :queryBtnCfg="{ buttonName: t('shopify.storeReservation.advancedQuery'), buttonIcon: 'ant-design:filter-outlined' }"
          @search="handleSuperQuery"
        />
      </template>
      <template #action="{ record }">
        <TableAction :actions="[{ label: t('shopify.storeReservation.detail'), onClick: () => showDetail(record) }]" />
      </template>
    </BasicTable>
    <BusinessDetailPanel @register="registerDetail" :title="t('shopify.reservationSlotStat.detail')" :showOkBtn="false" :width="800">
      <a-descriptions v-if="detail" bordered :column="1" size="small">
        <a-descriptions-item v-for="field in detailFields" :key="field" :label="t(`shopify.reservationSlotStat.${field}`)">
          {{ displayValue(field) }}
        </a-descriptions-item>
      </a-descriptions>
    </BusinessDetailPanel>
  </div>
</template>

<script lang="ts" setup>
  import { computed, reactive, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import BusinessDetailPanel from '/@/components/BusinessDetail/BusinessDetailPanel.vue';
  import { useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import SuperQuery from '/@/views/super/online/cgform/auto/comp/superquery/SuperQuery.vue';
  import { list } from './reservationSlotStat.api';
  import type { ReservationSlotStat } from './reservationSlotStat.api';
  import { createColumns, createSearchSchemas, createSuperQueryConfig, detailFields } from './reservationSlotStat.data';

  defineOptions({ name: 'ShopifyReservationSlotStatList' });
  const { t } = useI18n();
  const columns = computed(createColumns);
  const schemas = computed(createSearchSchemas);
  const superQueryConfig = computed(createSuperQueryConfig);
  const superQueryParams = reactive<Record<string, unknown>>({});
  const detail = ref<ReservationSlotStat>();
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: createColumns(),
      formConfig: { schemas: schemas.value, labelWidth: 100, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10, pageSizeOptions: ['10', '20', '50', '100'] },
      actionColumn: { width: 100, fixed: 'right', title: t('shopify.storeReservation.actions') },
      scroll: { x: 1450 },
      beforeFetch(params) {
        Object.assign(params, superQueryParams);
      },
    },
  });
  const [registerTable, { reload, getForm }, { rowSelection, selectedRowKeys }] = tableContext;
  const [registerDetail, { openModal }] = useModal();
  watch(schemas, (value) => getForm().updateSchema(value));

  function showDetail(record: ReservationSlotStat) {
    detail.value = record;
    openModal(true);
  }
  function displayValue(field: (typeof detailFields)[number]) {
    const record = detail.value;
    if (!record) return '—';
    let value: string | number | undefined = record[field];
    if (field === 'storeRef') value = record.storeRef_dictText ?? value;
    if (field === 'fullFlag') value = record.fullFlag_dictText ?? value;
    if (field === 'availableFlag') value = record.availableFlag_dictText ?? value;
    return value === '' || value == null ? '—' : value;
  }
  function handleSuperQuery(params?: Record<string, unknown>) {
    Object.keys(superQueryParams).forEach((key) => delete superQueryParams[key]);
    Object.assign(superQueryParams, params ?? {});
    selectedRowKeys.value = [];
    reload({ page: 1 });
  }
</script>

<style lang="less" scoped>
  .slot-stat-page {
    padding: 16px;
  }
</style>
