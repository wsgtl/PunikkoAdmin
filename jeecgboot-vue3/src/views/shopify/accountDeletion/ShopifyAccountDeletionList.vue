<template>
  <div class="account-deletion-page">
    <BasicTable @register="registerTable" :columns="columns" :title="t('shopify.accountDeletion.title')" />
  </div>
</template>
<script lang="ts" setup>
  import { computed, watch } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { list } from './accountDeletion.api';
  import { createColumns, createSearchSchemas } from './accountDeletion.data';

  defineOptions({ name: 'ShopifyAccountDeletionList' });
  const { t } = useI18n();
  const columns = computed(createColumns);
  const schemas = computed(createSearchSchemas);
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: createColumns(),
      formConfig: { schemas: schemas.value, labelWidth: 110, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10, pageSizeOptions: ['10', '20', '50', '100'] },
      showActionColumn: false,
      scroll: { x: 1950 },
    },
  });
  const [registerTable, { getForm }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
</script>
<style lang="less" scoped>
  .account-deletion-page {
    padding: 16px;
  }
</style>
