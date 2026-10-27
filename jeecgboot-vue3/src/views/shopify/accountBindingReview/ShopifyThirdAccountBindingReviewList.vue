<template>
  <div class="binding-review-page">
    <BasicTable @register="registerTable" :columns="columns" :title="label('title')">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: t('shopify.storeReservation.detail'),
              auth: 'shopify:shopify_third_account_binding_review:queryById',
              onClick: () => showDetail(record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <BasicModal @register="registerDetail" :title="label('detail')" :showOkBtn="false" :width="900" @cancel="invalidateDetail">
      <a-spin :spinning="loading">
        <a-descriptions v-if="detail" bordered :column="1" size="small">
          <a-descriptions-item v-for="field in detailFields" :key="field" :label="label(field)"
            ><span class="detail-value">{{ displayValue(dictionaries, field, detail) }}</span></a-descriptions-item
          >
        </a-descriptions>
      </a-spin>
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useUserStore } from '/@/store/modules/user';
  import { list, queryById } from './accountBindingReview.api';
  import type { BindingReview } from './accountBindingReview.api';
  import { createColumns, createSearchSchemas, detailFields, displayValue } from './accountBindingReview.data';
  import type { Dictionaries } from './accountBindingReview.data';
  defineOptions({ name: 'ShopifyThirdAccountBindingReviewList' });
  const { t } = useI18n();
  const label = (key: string) => t(`shopify.bindingReview.${key}`);
  const userStore = useUserStore();
  const dictionaries = computed(() => (userStore.getAllDictItems ?? {}) as unknown as Dictionaries);
  const columns = computed(() => createColumns(dictionaries.value));
  const schemas = computed(createSearchSchemas);
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      formConfig: { schemas: schemas.value, labelWidth: 120, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10, pageSizeOptions: ['10', '20', '50', '100'] },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 100, fixed: 'right' },
      scroll: { x: 1950 },
    },
  });
  const [registerTable, { getForm }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerDetail, { openModal }] = useModal();
  const detail = ref<BindingReview>();
  const loading = ref(false);
  let version = 0;
  function invalidateDetail() {
    version++;
    loading.value = false;
  }
  async function showDetail(record: BindingReview) {
    const current = ++version;
    detail.value = { ...record };
    loading.value = true;
    openModal(true);
    try {
      const result = await queryById(record.id);
      if (current === version) detail.value = { ...record, ...result };
    } catch {
      /* HTTP客户端统一显示错误，保留列表信息。 */
    } finally {
      if (current === version) loading.value = false;
    }
  }
</script>
<style lang="less" scoped>
  .binding-review-page {
    padding: 16px;
  }
  .detail-value {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
</style>
