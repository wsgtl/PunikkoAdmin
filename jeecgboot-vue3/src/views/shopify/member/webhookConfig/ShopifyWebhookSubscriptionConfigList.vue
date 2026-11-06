<template>
  <div class="webhook-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #action="{ record }">
        <TableAction
          :actions="[
            { label: label('edit'), auth: permission('edit'), disabled: !!busyId || saving, onClick: () => openRecord(record, false) },
            {
              label: label('sync'),
              auth: permission('syncRemote'),
              loading: busyId === record.id,
              disabled: !!busyId || saving,
              onClick: () => runRemote(record, 'sync'),
            },
          ]"
          :dropDownActions="[
            { label: label('check'), auth: permission('checkRemote'), disabled: !!busyId || saving, onClick: () => runRemote(record, 'check') },
            { label: label('detail'), auth: permission('queryById'), disabled: !!busyId || saving, onClick: () => openRecord(record, true) },
          ]"
        />
      </template>
    </BasicTable>
    <BusinessDetailPanel
      :detail-mode="detail"
      @register="registerModal"
      :title="label(detail ? 'detail' : 'editTitle')"
      :width="1000"
      :confirmLoading="saving"
      :showOkBtn="!detail"
      :okButtonProps="{ disabled: !hasPermission(permission('edit')) }"
      :closeFunc="canClose"
      @ok="submit"
    >
      <a-form v-if="draft" ref="form" :model="draft" layout="vertical">
        <a-row :gutter="24">
          <a-col
            v-for="field in editFields"
            :key="field"
            :xs="24"
            :md="['callbackUri', 'includeFields', 'filterRule', 'lastError', 'remark'].includes(field) ? 24 : 12"
          >
            <a-form-item :name="field" :label="label(field)" :rules="detail ? [] : rules(field)">
              <a-select
                v-if="dictionaryCodes[field]"
                v-model:value="draft[field]"
                :options="fieldOptions(field)"
                :disabled="detail || saving || readonlyFields.includes(field)"
                show-search
                option-filter-prop="label"
                style="width: 100%"
              />
              <a-textarea
                v-else-if="['includeFields', 'filterRule', 'lastError', 'remark'].includes(field)"
                v-model:value="draft[field]"
                :rows="2"
                :placeholder="field === 'includeFields' ? label('includeHint') : field === 'filterRule' ? label('filterHint') : undefined"
                :disabled="detail || saving || readonlyFields.includes(field)"
              />
              <a-input v-else v-model:value="draft[field]" :disabled="detail || saving || readonlyFields.includes(field)" allow-clear />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </BusinessDetailPanel>
  </div>
</template>
<script lang="ts" setup>
  import { computed, nextTick, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import BusinessDetailPanel from '/@/components/BusinessDetail/BusinessDetailPanel.vue';
  import { useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { list, save, syncRemote, checkRemote } from './webhookConfig.api';
  import type { WebhookConfig } from './webhookConfig.api';
  import { createColumns, editFields, readonlyFields, dictionaryCodes, options } from './webhookConfig.data';
  import type { Dictionaries } from './webhookConfig.data';
  defineOptions({ name: 'ShopifyWebhookSubscriptionConfigList' });
  const { t } = useI18n();
  const { hasPermission } = usePermission();
  const { createMessage } = useMessage();
  const label = (key: string) => t(`shopify.webhookConfig.${key}`);
  const permission = (action: string) => `shopify:shopify_webhook_subscription_config:${action}`;
  const userStore = useUserStore();
  const dictionaries = computed(() => (userStore.getAllDictItems ?? {}) as unknown as Dictionaries);
  const fieldOptions = (field: string) => options(dictionaries.value, field);
  const columns = computed(() => createColumns(dictionaries.value));
  const schemas = computed<FormSchema[]>(() =>
    ['topic', 'localStatus', 'syncStatus'].map((field) => ({
      field,
      label: label(field),
      component: 'Select',
      componentProps: { options: fieldOptions(field), allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    }))
  );
  const { tableContext } = useListPage({
    tableProps: {
      title: label('title'),
      api: list,
      columns: columns.value,
      formConfig: { schemas: schemas.value, labelWidth: 110, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10 },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 240, fixed: 'right' },
      scroll: { x: 2200 },
    },
  });
  const [registerTable, { reload, getForm }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerModal, { openModal, closeModal }] = useModal();
  const draft = ref<WebhookConfig>();
  const detail = ref(false);
  const saving = ref(false);
  const busyId = ref('');
  const form = ref();
  async function canClose() {
    return !saving.value;
  }
  function rules(field: string) {
    if (!['topic', 'callbackUri', 'format', 'localStatus'].includes(field)) return [];
    return [{ required: true, whitespace: true }, ...(field === 'callbackUri' ? [{ type: 'url' as const }] : [])];
  }
  async function openRecord(record: WebhookConfig, readonly: boolean) {
    if (saving.value || busyId.value) return;
    detail.value = readonly;
    draft.value = { ...record };
    openModal(true);
    await nextTick();
    form.value?.clearValidate();
  }
  async function submit() {
    if (saving.value || detail.value || !draft.value || !hasPermission(permission('edit'))) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    saving.value = true;
    try {
      await save(draft.value);
      createMessage.success(label('done'));
      saving.value = false;
      closeModal();
      await reload();
    } catch {
      /* HTTP客户端显示后台错误，保留编辑内容。 */
    } finally {
      saving.value = false;
    }
  }
  async function runRemote(record: WebhookConfig, kind: 'sync' | 'check') {
    if (saving.value || busyId.value) return;
    busyId.value = record.id;
    try {
      await (kind === 'sync' ? syncRemote : checkRemote)(record.id);
      createMessage.success(label('done'));
      await reload();
    } catch {
      /* HTTP客户端统一显示后台错误。 */
    } finally {
      busyId.value = '';
    }
  }
</script>
<style lang="less" scoped>
  .webhook-page {
    padding: 16px;
  }
</style>
