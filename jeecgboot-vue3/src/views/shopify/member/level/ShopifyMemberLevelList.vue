<template>
  <div class="level-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #action="{ record }">
        <TableAction
          :actions="[{ label: label('edit'), auth: permission('edit'), disabled: saving, onClick: () => openRecord(record, false) }]"
          :dropDownActions="[{ label: label('detail'), auth: permission('queryById'), disabled: saving, onClick: () => openRecord(record, true) }]"
        />
      </template>
    </BasicTable>
    <BusinessDetailPanel
      :detail-mode="readonly"
      @register="registerModal"
      :title="label(readonly ? 'detailTitle' : 'editTitle')"
      :width="950"
      :showOkBtn="!readonly"
      :confirmLoading="saving"
      :okButtonProps="{ disabled: loading || failed || !draft || !hasPermission(permission('edit')) }"
      :closeFunc="canClose"
      @ok="submit"
      @cancel="cancel"
    >
      <a-spin :spinning="loading">
        <a-alert v-if="failed" type="error" :message="label('loadFailed')" show-icon>
          <template #action
            ><a-button size="small" @click="loadDetail">{{ label('retry') }}</a-button></template
          >
        </a-alert>
        <a-form v-else-if="draft" ref="form" :model="draft" layout="vertical">
          <a-row :gutter="20">
            <a-col v-for="field in fields" :key="field" :xs="24" :md="field === 'remark' ? 24 : 12">
              <a-form-item :name="field" :label="label(field)" :rules="readonly ? [] : rules(field)">
                <JDictSelectTag v-if="dictCodes[field]" v-model:value="draft[field]" :dictCode="dictCodes[field]" :disabled="readonly || saving" />
                <a-input-number
                  v-else-if="numberFields.includes(field)"
                  v-model:value="draft[field]"
                  :min="field === 'priority' ? undefined : 0"
                  :precision="field === 'priority' ? 0 : 2"
                  :disabled="readonly || saving"
                  :placeholder="field === 'maxCumulativeAmount' ? label('noLimit') : undefined"
                  style="width: 100%"
                />
                <a-textarea v-else-if="field === 'remark'" v-model:value="draft[field]" :rows="2" :disabled="readonly || saving" />
                <a-input v-else v-model:value="draft[field]" :disabled="readonly || saving" allow-clear />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </BusinessDetailPanel>
  </div>
</template>
<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import BusinessDetailPanel from '/@/components/BusinessDetail/BusinessDetailPanel.vue';
  import { useModal } from '/@/components/Modal';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { list, queryById, save, fields } from './memberLevel.api';
  import type { MemberLevel } from './memberLevel.api';
  defineOptions({ name: 'ShopifyMemberLevelList' });
  const { t } = useI18n();
  const label = (key: string) => t(`memberLevel.${key}`);
  const permission = (action: string) => `shopify:shopify_member_level:${action}`;
  const { hasPermission } = usePermission();
  const { createMessage } = useMessage();
  const dictCodes: Record<string, string> = { shopifyCustomerTag: 'shopify_member_level_tag', status: 'shopify_enabled_status' };
  const numberFields = ['minCumulativeAmount', 'maxCumulativeAmount', 'priority'];
  const columns = computed<BasicColumn[]>(() =>
    fields.map((field) => ({
      title: label(field),
      dataIndex: field,
      width: 180,
      ellipsis: true,
      customRender: ({ record }) =>
        dictCodes[field] ? businessDictionaryText(dictCodes[field], record[field], undefined, record[`${field}_dictText`]) : (record[field] ?? '—'),
    }))
  );
  const schemas: FormSchema[] = ['levelCode', 'levelName', 'status'].map((field) => ({
    field,
    label: label(field),
    component: field === 'status' ? 'JDictSelectTag' : 'Input',
    componentProps: field === 'status' ? { dictCode: dictCodes.status } : {},
    colProps: { xs: 24, md: 12, xl: 8 },
  }));
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      rowKey: 'id',
      formConfig: { schemas, labelWidth: 140, actionColOptions: { span: 24 } },
      pagination: { pageSize: 10 },
      scroll: { x: 1600 },
      actionColumn: { title: label('actions'), width: 160, fixed: 'right' },
    },
  });
  const [registerTable, { reload }] = tableContext;
  const [registerModal, { openModal, closeModal }] = useModal();
  const draft = ref<MemberLevel>();
  const readonly = ref(false),
    saving = ref(false),
    loading = ref(false),
    failed = ref(false),
    detailId = ref('');
  const form = ref();
  let version = 0;
  async function canClose() {
    return !saving.value;
  }
  function cancel() {
    version++;
    draft.value = undefined;
    loading.value = false;
  }
  onBeforeUnmount(cancel);
  function rules(field: string) {
    return ['levelCode', 'levelName', 'shopifyCustomerTag', 'status'].includes(field)
      ? [{ required: true, whitespace: true, message: label('required') }]
      : [];
  }
  async function openRecord(record: MemberLevel, detail: boolean) {
    if (saving.value || !hasPermission(permission(detail ? 'queryById' : 'edit'))) return;
    version++;
    readonly.value = detail;
    failed.value = false;
    loading.value = false;
    draft.value = undefined;
    detailId.value = record.id;
    openModal(true);
    if (detail) await loadDetail();
    else {
      draft.value = { ...record };
      await nextTick();
      form.value?.clearValidate();
    }
  }
  async function loadDetail() {
    if (!readonly.value || !hasPermission(permission('queryById'))) return;
    const request = ++version;
    loading.value = true;
    failed.value = false;
    draft.value = undefined;
    try {
      const data = await queryById(detailId.value);
      if (request !== version) return;
      if (!data?.id) throw Error('Missing detail');
      draft.value = data;
    } catch {
      if (request === version) failed.value = true;
    } finally {
      if (request === version) loading.value = false;
    }
  }
  async function submit() {
    if (saving.value || loading.value || readonly.value || !draft.value || !hasPermission(permission('edit'))) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    const lower = draft.value.minCumulativeAmount,
      upper = draft.value.maxCumulativeAmount;
    if (upper != null && Number(upper) !== 0 && Number(upper) <= Number(lower ?? 0)) {
      createMessage.warning(label('invalidRange'));
      return;
    }
    saving.value = true;
    try {
      await save(draft.value);
      createMessage.success(label('saved'));
      saving.value = false;
      closeModal();
      await reload();
    } catch {
      /* Shared HTTP client reports errors; keep draft after a failed save. */
    } finally {
      saving.value = false;
    }
  }
</script>
<style scoped lang="less">
  .level-page {
    padding: 16px;
  }
</style>
