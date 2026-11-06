<template>
  <div class="recycle-page">
    <BasicTable @register="registerTable" :columns="columns" :title="label('title')">
      <template #tableTitle><a-alert type="warning" show-icon :message="label('hint')" /></template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            { label: t('shopify.storeReservation.detail'), auth: permission('recycleList'), onClick: () => showDetail(record) },
            { label: label('restore'), auth: permission('recycleRestore'), disabled: pending, onClick: () => confirmAction(record, false) },
            {
              label: label('delete'),
              auth: permission('recyclePhysicalDelete'),
              color: 'error',
              disabled: pending,
              onClick: () => confirmAction(record, true),
            },
          ]"
        />
      </template>
    </BasicTable>
    <BasicModal @register="registerDetail" :title="label('detail')" :width="900" :showOkBtn="false" @cancel="invalidateDetail">
      <a-spin :spinning="detailLoading"
        ><a-descriptions v-if="detail" bordered :column="1" size="small">
          <a-descriptions-item v-for="field in detailFields" :key="field" :label="fieldLabel(field)"
            ><span class="detail-value">{{ display(field, detail) }}</span></a-descriptions-item
          >
        </a-descriptions></a-spin
      >
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { businessDictionaryText, businessDictionaryListText } from '/@/locales/business/dictionaryAdapter';
  import { computed, onBeforeUnmount, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { list, queryById, restore, physicalDelete } from './storeRecycle.api';
  import type { StoreRecord } from './store.api';
  import { dictCodes, editFields } from './store.data';
  defineOptions({ name: 'ShopifyStoreRecycleList' });
  const { t } = useI18n();
  const { hasPermission } = usePermission();
  const { createMessage, createConfirm } = useMessage();
  const label = (key: string) => t(`shopify.storeRecycle.${key}`);
  const fieldLabel = (key: string) => (['createBy', 'updateTime'].includes(key) ? label(key) : t(`shopify.storeManagement.${key}`));
  const permission = (action: string) => `shopify:shopify_store:${action}`;
  function display(field: string, record: StoreRecord) {
    return field === 'businessDays'
      ? businessDictionaryListText('shopify_business_day', record[field])
      : dictCodes[field]
        ? businessDictionaryText(dictCodes[field], record[field])
        : (record[`${field}_dictText`] ?? record[field] ?? '—');
  }
  const fields = ['code', 'storeName', 'createBy', 'storeManagerId', 'storeAddress', 'publishStatus', 'hasReservableProducts', 'updateTime'];
  const detailFields = [...editFields, 'createBy', 'updateTime'];
  const columns = computed<BasicColumn[]>(() =>
    fields.map((field) => ({
      title: fieldLabel(field),
      dataIndex: field,
      width: field === 'storeAddress' ? 300 : ['createBy', 'storeManagerId'].includes(field) ? 220 : 160,
      ellipsis: true,
      customRender: ({ record }) => display(field, record),
    }))
  );
  const schemas = computed<FormSchema[]>(() =>
    ['code', 'storeName'].map((field) => ({
      field,
      label: fieldLabel(field),
      component: 'Input',
      componentProps: { allowClear: true },
      colProps: { xs: 24, md: 8 },
    }))
  );
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      formConfig: { schemas: schemas.value, labelWidth: 100, actionColOptions: { xs: 24, md: 8 } },
      pagination: { pageSize: 10, pageSizeOptions: ['10', '20', '50', '100'] },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 240, fixed: 'right' },
      scroll: { x: 1800 },
    },
  });
  const [registerTable, { reload, getForm }] = tableContext;
  watch(schemas, (v) => getForm().updateSchema(v));
  const pending = ref(false);
  function confirmAction(record: StoreRecord, permanent: boolean) {
    const action = permanent ? 'recyclePhysicalDelete' : 'recycleRestore';
    if (!record.id || pending.value || !hasPermission(permission(action))) return;
    const id = record.id;
    pending.value = true;
    createConfirm({
      iconType: 'warning',
      title: label(permanent ? 'delete' : 'restore'),
      content: t(`shopify.storeRecycle.${permanent ? 'deleteConfirm' : 'restoreConfirm'}`, { name: record.storeName || record.code || id }),
      okText: label(permanent ? 'delete' : 'restore'),
      okButtonProps: { danger: permanent },
      maskClosable: false,
      afterClose: () => {
        pending.value = false;
      },
      onOk: async () => {
        await (permanent ? physicalDelete : restore)(id);
        createMessage.success(label(permanent ? 'deleted' : 'restored'));
        await reload({ page: 1 });
      },
    });
  }
  const [registerDetail, { openModal }] = useModal();
  const detail = ref<StoreRecord>();
  const detailLoading = ref(false);
  let version = 0;
  function invalidateDetail() {
    version++;
    detailLoading.value = false;
  }
  async function showDetail(record: StoreRecord) {
    if (!record.id) return;
    const current = ++version;
    detail.value = { ...record };
    detailLoading.value = true;
    openModal(true);
    try {
      const result = await queryById(record.id);
      if (current === version) detail.value = { ...record, ...result };
    } catch {
      /* HTTP客户端显示错误，保留列表数据。 */
    } finally {
      if (current === version) detailLoading.value = false;
    }
  }
  onBeforeUnmount(invalidateDetail);
</script>
<style lang="less" scoped>
  .recycle-page {
    padding: 16px;
  }
  .detail-value {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
</style>
