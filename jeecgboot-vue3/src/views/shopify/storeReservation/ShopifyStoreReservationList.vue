<template>
  <div class="reservation-page">
    <BasicTable @register="registerTable" :columns="columns" :rowSelection="rowSelection">
      <template #tableTitle>
        <SuperQuery
          :config="superQueryConfig"
          :queryBtnCfg="{ buttonName: t('shopify.storeReservation.advancedQuery'), buttonIcon: 'ant-design:filter-outlined' }"
          @search="handleSuperQuery"
        />
      </template>
      <template #status="{ record }">{{ statusText(record) }}</template>
      <template #action="{ record }">
        <TableAction :actions="[{ label: t('shopify.storeReservation.detail'), onClick: () => showDetail(record) }]" />
      </template>
    </BasicTable>
    <BasicModal @register="registerDetail" :title="t('shopify.storeReservation.detail')" :showOkBtn="false" :width="760">
      <a-descriptions v-if="detail" bordered :column="1" size="small">
        <a-descriptions-item v-for="field in detailFields" :key="field" :label="t(`shopify.storeReservation.${field}`)">
          {{ field === 'status' ? statusText(detail) : detail[field] || '—' }}
        </a-descriptions-item>
      </a-descriptions>
    </BasicModal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, reactive, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { BasicModal, useModal } from '/@/components/Modal';
  import SuperQuery from '/@/views/super/online/cgform/auto/comp/superquery/SuperQuery.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { list, loadDictionaries } from './storeReservation.api';
  import type { DictItem, StoreReservation } from './storeReservation.api';
  import { createColumns, createSearchSchemas, createSuperQueryConfig, reservationFields } from './storeReservation.data';

  defineOptions({ name: 'ShopifyStoreReservationList' });
  const { t } = useI18n();
  const userStore = useUserStore();
  const { createMessage } = useMessage();
  const dictionaries = ref<Record<string, DictItem[]>>({});
  const detail = ref<StoreReservation>();
  const detailFields = [...reservationFields, 'customerId', 'storeRef', 'storeAddress', 'createTime'] as const;
  const superQueryParams = reactive<Record<string, unknown>>({});
  const columns = computed(createColumns);

  // 优先使用项目文档约定的 code；兼容现有全量字典中的门店预约状态 code。
  // 不使用硬编码 label/value，未找到字典时列表回退到接口的 status_dictText。
  const statusDictCode = computed(() => {
    const data = { ...(userStore.getAllDictItems as unknown as Record<string, DictItem[]>), ...dictionaries.value };
    const codes = ['shopify_store_reservation_status', 'shopify_reservation_status'];
    const known = codes.find((code) => Array.isArray(data[code]) && data[code].length);
    if (known) return known;
    const candidates = Object.keys(data).filter(
      (code) => /reservation/i.test(code) && /status/i.test(code) && !/product/i.test(code) && Array.isArray(data[code])
    );
    return candidates.length === 1 ? candidates[0] : '';
  });
  const statusItems = computed(() => dictionaries.value[statusDictCode.value] ?? userStore.getAllDictItems?.[statusDictCode.value] ?? []);
  const statusOptions = computed(() =>
    statusItems.value.map((item: DictItem) => ({ value: item.value, label: item.text ?? item.label ?? String(item.value) }))
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
      actionColumn: { width: 110, fixed: 'right', title: t('shopify.storeReservation.actions') },
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
    const item = statusItems.value.find((item: DictItem) => String(item.value) === record.status);
    return item?.text ?? item?.label ?? record.status_dictText ?? record.status;
  }
  function handleSuperQuery(params?: Record<string, unknown>) {
    Object.keys(superQueryParams).forEach((key) => delete superQueryParams[key]);
    Object.assign(superQueryParams, params ?? {});
    selectedRowKeys.value = [];
    reload({ page: 1 });
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
  .reservation-page {
    padding: 16px;
  }
</style>
