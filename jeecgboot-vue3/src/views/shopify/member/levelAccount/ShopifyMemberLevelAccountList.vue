<template>
  <div class="level-account-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #action="{ record }">
        <TableAction :actions="[{ label: label('detail'), auth: detailPermission, onClick: () => openDetail(record) }]" />
      </template>
    </BasicTable>
    <BusinessDetailPanel @register="registerDetail" :title="label('detailTitle')" :width="1000" :showOkBtn="false" @cancel="cancelDetail">
      <a-spin :spinning="loading">
        <a-alert v-if="failed" type="error" :message="label('loadFailed')" show-icon>
          <template #action
            ><a-button size="small" @click="loadDetail">{{ label('retry') }}</a-button></template
          >
        </a-alert>
        <a-form v-else-if="detail" layout="vertical">
          <a-row :gutter="20">
            <a-col v-for="field in detailFields" :key="field" :xs="24" :md="wideFields.includes(field) ? 24 : 12">
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
                <a-textarea v-else-if="field === 'lastSyncError'" :value="display(detail, field)" :rows="2" readonly />
                <a-input v-else :value="display(detail, field)" readonly />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </BusinessDetailPanel>
  </div>
</template>
<script setup lang="ts">
  import { computed, onBeforeUnmount, ref } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import BusinessDetailPanel from '/@/components/BusinessDetail/BusinessDetailPanel.vue';
  import { useModal } from '/@/components/Modal';
  import JSelectSingle from '/@/components/Form/src/jeecg/components/JSelectSingle.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { list, queryById, memberDictionary } from './memberLevelAccount.api';
  import type { MemberLevelAccount } from './memberLevelAccount.api';
  defineOptions({ name: 'ShopifyMemberLevelAccountList' });
  const { t } = useI18n();
  const label = (key: string) => t(`memberLevelAccount.${key}`);
  const { hasPermission } = usePermission();
  const detailPermission = 'shopify:shopify_member_level_account:queryById';
  const detailFields = [
    'memberId',
    'shopifyCustomerGid',
    'currentLevelCode',
    'currentLevelName',
    'cumulativeConsumptionAmount',
    'offlineConsumptionAmount',
    'onlineConsumptionAmount',
    'lastRecalculateTime',
    'levelChangedTime',
    'status',
    'shopifyMetaobjectHandle',
    'shopifyMetaobjectGid',
    'shopifySyncStatus',
    'lastSyncTime',
    'lastSyncError',
  ];
  const wideFields = ['shopifyCustomerGid', 'shopifyMetaobjectHandle', 'shopifyMetaobjectGid', 'lastSyncError'];
  const listFields = [
    'memberId',
    'currentLevelCode',
    'currentLevelName',
    'cumulativeConsumptionAmount',
    'offlineConsumptionAmount',
    'onlineConsumptionAmount',
    'lastRecalculateTime',
    'levelChangedTime',
    'status',
    'shopifySyncStatus',
    'lastSyncTime',
    'lastSyncError',
  ];
  function display(record: MemberLevelAccount, field: string): string {
    const value = record[field];
    if (field === 'memberId') return String(record.memberId_dictText || value || '—');
    if (field === 'status' || field === 'shopifySyncStatus')
      return businessDictionaryText(
        field === 'status' ? 'shopify_member_level_account_status' : 'shopify_sync_status',
        value,
        undefined,
        record[`${field}_dictText`]
      );
    return value === null || value === undefined || value === '' ? '—' : String(value);
  }
  const columns = computed<BasicColumn[]>(() =>
    listFields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'lastSyncError' ? 260 : 180,
      ellipsis: true,
      customRender: ({ record }) => display(record as MemberLevelAccount, field),
    }))
  );
  const schemas: FormSchema[] = ['memberId', 'currentLevelCode', 'currentLevelName'].map((field) => ({
    field,
    label: label(field),
    component: field === 'memberId' ? 'JSelectSingle' : 'Input',
    componentProps:
      field === 'memberId'
        ? { dictCode: memberDictionary, scrollLoad: true, showSearch: true, pageSize: 10, placeholder: label('memberPlaceholder') }
        : {},
    colProps: { xs: 24, md: 12, xl: 8 },
  }));
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      rowKey: 'id',
      formConfig: { schemas, labelWidth: 140, actionColOptions: { span: 24 } },
      pagination: { pageSize: 10 },
      scroll: { x: 2250 },
      actionColumn: { title: label('actions'), width: 100, fixed: 'right' },
    },
  });
  const [registerTable] = tableContext;
  const [registerDetail, { openModal }] = useModal();
  const detail = ref<MemberLevelAccount>();
  const loading = ref(false),
    failed = ref(false),
    detailId = ref('');
  let version = 0;
  function cancelDetail() {
    version++;
    loading.value = false;
    detail.value = undefined;
  }
  onBeforeUnmount(cancelDetail);
  async function openDetail(record: MemberLevelAccount) {
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
    try {
      const result = await queryById(detailId.value);
      if (request !== version) return;
      if (!result?.id) throw new Error('Missing account detail');
      detail.value = result;
    } catch {
      if (request === version) failed.value = true;
    } finally {
      if (request === version) loading.value = false;
    }
  }
</script>
<style scoped lang="less">
  .level-account-page {
    padding: 16px;
  }
</style>
