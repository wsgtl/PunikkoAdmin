<template>
  <div class="point-ledger-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #action="{ record }">
        <TableAction :actions="[{ label: label('detail'), auth: detailPermission, onClick: () => openDetail(record) }]" />
      </template>
    </BasicTable>
    <BasicModal @register="registerDetail" :title="label('detailTitle')" :width="1200" :showOkBtn="false" @cancel="cancelDetail">
      <a-spin :spinning="loading">
        <a-alert v-if="failed" type="error" :message="label('loadFailed')" show-icon>
          <template #action
            ><a-button size="small" @click="loadDetail">{{ label('retry') }}</a-button></template
          >
        </a-alert>
        <a-form v-else-if="detail" layout="horizontal" :label-col="{ style: { width: '120px' } }">
          <a-row :gutter="20">
            <a-col
              v-for="field in detailFields"
              :key="field"
              :xs="24"
              :sm="field === 'lastErrorMessage' ? 24 : 12"
              :lg="field === 'lastErrorMessage' ? 24 : 8"
            >
              <a-form-item :label="label(field)">
                <JSelectSingle
                  v-if="field === 'memberId'"
                  :value="detail.memberId"
                  :dictCode="memberDictionary"
                  :scrollLoad="true"
                  :showSearch="true"
                  :pageSize="10"
                  :disabled="true"
                  :placeholder="label('memberId')"
                />
                <a-textarea
                  v-else-if="['lastErrorMessage', 'sourceRawJson'].includes(field)"
                  :value="display(detail, field)"
                  :auto-size="{ minRows: 2, maxRows: 4 }"
                  disabled
                />
                <a-input v-else :value="display(detail, field)" disabled />
              </a-form-item>
            </a-col>
          </a-row>
          <a-divider orientation="left">{{ label('items') }}</a-divider>
          <a-table :columns="itemColumns" :data-source="items" :pagination="false" row-key="id" size="small" :scroll="{ x: 1100 }" />
        </a-form>
      </a-spin>
    </BasicModal>
  </div>
</template>
<script setup lang="ts">
  import { computed, onBeforeUnmount, ref } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import JSelectSingle from '/@/components/Form/src/jeecg/components/JSelectSingle.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { list, queryById, memberDictionary } from './memberPurchaseArchive.api';
  import type { MemberPurchaseArchive } from './memberPurchaseArchive.api';
  defineOptions({ name: 'ShopifyMemberPurchaseArchiveList' });
  const { t } = useI18n();
  const label = (key: string) => t(`memberPurchaseArchive.${key}`);
  const { hasPermission } = usePermission();
  const detailPermission = 'shopify:shopify_member_purchase_archive:queryById';
  const archiveFields = [
    'archiveNo',
    'memberId',
    'sourceType',
    'sourceOrderNo',
    'channel',
    'storeName',
    'orderTime',
    'currency',
    'originalAmount',
    'discountAmount',
    'paidAmount',
    'refundAmount',
    'netAmount',
    'paymentMethod',
    'orderStatus',
    'archiveStatus',
    'processStatus',
    'itemCount',
    'totalQuantity',
    'retryCount',
    'nextRetryTime',
    'lastErrorMessage',
    'lastArchiveTime',
    'sourceId',
    'sourceTransactionHeadId',
    'sourceShopifyOrderGid',
    'reconcileId',
    'shopifyCustomerGid',
    'storeId',
    'smaregiStoreId',
    'terminalId',
    'sourcePayloadVersion',
    'sourceRawJson',
    'createBy',
    'createTime',
    'updateBy',
    'updateTime',
  ];
  const detailFields = [
    'archiveNo',
    'memberId',
    'sourceType',
    'sourceOrderNo',
    'orderTime',
    'storeName',
    'paymentMethod',
    'originalAmount',
    'discountAmount',
    'paidAmount',
    'refundAmount',
    'netAmount',
    'orderStatus',
    'archiveStatus',
    'processStatus',
    'lastErrorMessage',
  ];
  const itemFields = [
    'productName',
    'sku',
    'quantity',
    'refundedQuantity',
    'originalUnitPrice',
    'paidUnitPrice',
    'discountAmount',
    'linePaidAmount',
    'lineStatus',
  ];
  const items = ref<Record<string, string | number | null>[]>([]);
  const itemColumns = computed<BasicColumn[]>(() =>
    itemFields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'productName' ? 240 : 120,
      ellipsis: true,
      customRender: ({ record }) =>
        field === 'lineStatus'
          ? businessDictionaryText('shopify_purchase_order_status', record[field], undefined, record.lineStatus_dictText)
          : (record[field] ?? '—'),
    }))
  );
  const listFields = archiveFields.filter((field) => !['sourceRawJson', 'lastErrorMessage'].includes(field));
  function display(record: MemberPurchaseArchive, field: string): string {
    const value = record[field];
    if (field === 'memberId') return String(record.memberId_dictText || value || '—');
    const dictionaries: Record<string, string> = {
      sourceType: 'shopify_purchase_source_type',
      channel: 'shopify_purchase_channel',
      paymentMethod: 'shopify_purchase_payment_method',
      orderStatus: 'shopify_purchase_order_status',
      archiveStatus: 'shopify_purchase_archive_status',
      processStatus: 'shopify_process_status',
    };
    if (dictionaries[field]) return businessDictionaryText(dictionaries[field], value, undefined, record[`${field}_dictText`]);
    return value === null || value === undefined || value === '' ? '—' : String(value);
  }
  const columns = computed<BasicColumn[]>(() =>
    listFields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: 180,
      ellipsis: true,
      customRender: ({ record }) => display(record as MemberPurchaseArchive, field),
    }))
  );
  const schemas: FormSchema[] = [
    {
      field: 'memberId',
      label: label('memberId'),
      component: 'JSelectSingle',
      componentProps: { dictCode: memberDictionary, scrollLoad: true, showSearch: true, pageSize: 10, placeholder: label('memberPlaceholder') },
      colProps: { xs: 24, md: 12, xl: 8 },
    },

    ...['archiveNo', 'sourceOrderNo'].map((field): FormSchema => ({
      field,
      label: label(field),
      component: 'Input',
      colProps: { xs: 24, md: 12, xl: 8 },
    })),
    {
      field: 'sourceType',
      label: label('sourceType'),
      component: 'JDictSelectTag',
      componentProps: { dictCode: 'shopify_purchase_source_type' },
      colProps: { xs: 24, md: 12, xl: 8 },
    },
    {
      field: 'channel',
      label: label('channel'),
      component: 'JDictSelectTag',
      componentProps: { dictCode: 'shopify_purchase_channel' },
      colProps: { xs: 24, md: 12, xl: 8 },
    },
  ];
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      rowKey: 'id',
      formConfig: { schemas, labelWidth: 140, actionColOptions: { span: 24 } },
      pagination: { pageSize: 10 },
      scroll: { x: 6000 },
      actionColumn: { title: label('actions'), width: 100, fixed: 'right' },
    },
  });
  const [registerTable] = tableContext;
  const [registerDetail, { openModal }] = useModal();
  const detail = ref<MemberPurchaseArchive>();
  const loading = ref(false),
    failed = ref(false),
    detailId = ref('');
  let version = 0;
  function cancelDetail() {
    version++;
    loading.value = false;
    detail.value = undefined;
    items.value = [];
  }
  onBeforeUnmount(cancelDetail);
  async function openDetail(record: MemberPurchaseArchive) {
    if (!record.id || !hasPermission(detailPermission)) return;
    detailId.value = record.id;
    openModal(true);
    await loadDetail();
  }
  async function loadDetail() {
    if (!hasPermission(detailPermission)) return;
    const request = ++version;
    loading.value = true;
    failed.value = false;
    detail.value = undefined;
    items.value = [];
    try {
      const result = await queryById(detailId.value);
      if (request !== version) return;
      if (!result || typeof result !== 'object' || !Object.keys(result).length) throw new Error('Missing archive detail');
      const archive = result.archive;
      if (!archive || typeof archive !== 'object' || Array.isArray(archive) || !(archive as MemberPurchaseArchive).id)
        throw new Error('Missing archive record');
      detail.value = archive as MemberPurchaseArchive;
      items.value = Array.isArray(result.items) ? result.items : [];
    } catch {
      if (request === version) failed.value = true;
    } finally {
      if (request === version) loading.value = false;
    }
  }
</script>
<style scoped lang="less">
  .point-ledger-page {
    padding: 16px;
  }
</style>
