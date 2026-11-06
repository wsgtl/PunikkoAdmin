<template>
  <div class="level-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #tableTitle>
        <a-button v-auth="permission('add')" type="primary" preIcon="ant-design:plus-outlined" :disabled="saving" @click="openAdd">
          {{ label('add') }}
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[{ label: label('edit'), auth: permission('edit'), disabled: saving, onClick: () => openRecord(record, false) }]"
          :dropDownActions="[{ label: label('detail'), auth: permission('queryById'), disabled: saving, onClick: () => openRecord(record, true) }]"
        />
      </template>
    </BasicTable>
    <BasicModal
      @register="registerModal"
      :title="label(readonly ? 'detailTitle' : adding ? 'addTitle' : 'editTitle')"
      :width="950"
      :showOkBtn="!readonly"
      :confirmLoading="saving"
      :okButtonProps="{ disabled: loading || failed || !draft || !hasPermission(permission(adding ? 'add' : 'edit')) }"
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
                  :min="field === 'priority' ? undefined : field === 'baseAmount' ? 0.01 : 0"
                  :precision="field === 'baseAmount' ? 2 : 0"
                  :disabled="readonly || saving"
                  style="width: 100%"
                />
                <a-date-picker
                  v-else-if="field === 'startTime' || field === 'endTime'"
                  v-model:value="draft[field]"
                  show-time
                  value-format="YYYY-MM-DD HH:mm:ss"
                  format="YYYY-MM-DD HH:mm:ss"
                  :disabled="readonly || saving"
                  style="width: 100%"
                />
                <a-textarea v-else-if="field === 'remark'" v-model:value="draft[field]" :rows="2" :disabled="readonly || saving" />
                <a-input
                  v-else
                  v-model:value="draft[field]"
                  :disabled="readonly || saving"
                  :placeholder="field === 'ruleName' ? label('nameFallback') : undefined"
                  allow-clear
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </BasicModal>
  </div>
</template>
<script setup lang="ts">
  import { computed, nextTick, onBeforeUnmount, ref } from 'vue';
  import dayjs from 'dayjs';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { list, queryById, save, add, fields } from './memberPointRule.api';
  import type { MemberPointRule } from './memberPointRule.api';
  defineOptions({ name: 'ShopifyMemberPointRuleList' });
  const { t } = useI18n();
  const label = (key: string) => t(`memberPointRule.${key}`);
  const permission = (action: string) => `shopify:shopify_member_point_rule:${action}`;
  const { hasPermission } = usePermission();
  const { createMessage } = useMessage();
  const dictCodes: Record<string, string> = { channel: 'shopify_apply_scope', status: 'shopify_enabled_status' };
  const numberFields = ['baseAmount', 'points', 'priority'];
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
  const schemas: FormSchema[] = ['ruleCode', 'ruleName', 'channel'].map((field) => ({
    field,
    label: label(field),
    component: field === 'channel' ? 'JDictSelectTag' : 'Input',
    componentProps: field === 'channel' ? { dictCode: dictCodes.channel } : {},
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
  const draft = ref<MemberPointRule>();
  const adding = ref(false);
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
    return ['ruleCode', 'channel', 'status', 'baseAmount', 'points', 'priority'].includes(field)
      ? [{ required: true, message: label('required') }]
      : [];
  }
  async function openAdd() {
    if (saving.value || !hasPermission(permission('add'))) return;
    version++;
    adding.value = true;
    readonly.value = false;
    failed.value = false;
    loading.value = false;
    detailId.value = '';
    draft.value = {
      id: '',
      ruleCode: '',
      ruleName: '',
      channel: 'both',
      baseAmount: 100,
      points: 1,
      startTime: null,
      endTime: null,
      status: 'enabled',
      priority: 0,
      remark: '',
    };
    openModal(true);
    await nextTick();
    form.value?.clearValidate();
  }
  async function openRecord(record: MemberPointRule, detail: boolean) {
    if (saving.value || !hasPermission(permission(detail ? 'queryById' : 'edit'))) return;
    version++;
    adding.value = false;
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
    if (saving.value || loading.value || readonly.value || !draft.value || !hasPermission(permission(adding.value ? 'add' : 'edit'))) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    const data = draft.value;
    if (
      !Number.isFinite(Number(data.baseAmount)) ||
      Number(data.baseAmount) <= 0 ||
      !Number.isInteger(Number(data.points)) ||
      Number(data.points) < 0 ||
      !Number.isInteger(Number(data.priority))
    ) {
      createMessage.warning(label('invalidNumbers'));
      return;
    }
    if (data.startTime && data.endTime && !dayjs(String(data.endTime)).isAfter(dayjs(String(data.startTime)))) {
      createMessage.warning(label('invalidRange'));
      return;
    }
    saving.value = true;
    try {
      const payload = { ...draft.value, ruleCode: String(draft.value.ruleCode ?? '').trim() };
      payload.ruleName = String(payload.ruleName ?? '').trim() || payload.ruleCode;
      if (adding.value) await add(payload);
      else await save(payload);
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
