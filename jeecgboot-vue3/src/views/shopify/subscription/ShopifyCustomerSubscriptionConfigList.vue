<template>
  <div class="subscription-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #action="{ record }"
        ><TableAction
          :actions="[
            { label: label('edit'), auth: permission('edit'), disabled: !!busyId || saving, onClick: () => openEdit(record) },
            {
              label: label('sync'),
              auth: permission('syncRemote'),
              loading: busyId === record.id,
              disabled: !!busyId || saving,
              onClick: () => sync(record),
            },
          ]"
      /></template>
    </BasicTable>
    <BasicModal @register="registerModal" :title="label('editTitle')" :width="1100" :closeFunc="canClose">
      <a-form v-if="draft" ref="form" :model="draft" layout="vertical">
        <a-row :gutter="24">
          <a-col
            v-for="field in editFields"
            :key="field"
            :xs="24"
            :md="['customerId', 'shopifySub', 'lastError', 'remark'].includes(field) ? 24 : 12"
          >
            <a-form-item
              :label="label(field)"
              :name="field"
              :rules="['customerId', 'configKey', 'configName', 'localStatus'].includes(field) ? [{ required: true, whitespace: true }] : []"
            >
              <a-textarea
                v-if="['lastError', 'remark'].includes(field)"
                v-model:value="draft[field]"
                :rows="2"
                :disabled="saving || readonlyFields.includes(field)"
              />
              <a-select
                v-else-if="selectFields.includes(field) || ['remoteStatus', 'remoteOptInLevel', 'syncStatus'].includes(field)"
                v-model:value="draft[field]"
                :options="options(field)"
                :disabled="saving || readonlyFields.includes(field)"
                show-search
                option-filter-prop="label"
                style="width: 100%"
              />
              <a-input v-else-if="readonlyFields.includes(field)" :value="displayValue(field)" disabled />
              <a-input v-else v-model:value="draft[field]" :disabled="saving" allow-clear />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template #footer>
        <a-button :disabled="saving" @click="closeModal()">{{ label('cancel') }}</a-button>
        <a-button v-auth="permission('edit')" :loading="savingMode === 'local'" :disabled="saving" @click="submit(false)">{{
          label('localSave')
        }}</a-button>
        <a-button v-auth="permission('syncRemote')" type="primary" :loading="savingMode === 'sync'" :disabled="saving" @click="submit(true)">{{
          label('syncSave')
        }}</a-button>
      </template>
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { computed, nextTick, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useUserStore } from '/@/store/modules/user';
  import type { SubscriptionDictionaries } from './customerSubscription.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { list, saveLocal, saveAndSync, syncRemote } from './customerSubscription.api';
  import type { SubscriptionConfig } from './customerSubscription.api';
  import { createColumns, editFields, selectFields, readonlyFields, dictionaryOptions, dictionaryText } from './customerSubscription.data';
  defineOptions({ name: 'ShopifyCustomerSubscriptionConfigList' });
  const { t } = useI18n();
  const label = (key: string) => t(`shopify.customerSubscription.${key}`);
  const permission = (action: string) => `shopify:shopify_customer_subscription_config:${action}`;
  const { createMessage } = useMessage();
  const userStore = useUserStore();
  const dictionaries = computed(() => (userStore.getAllDictItems ?? {}) as unknown as SubscriptionDictionaries);
  const columns = computed(() => createColumns(dictionaries.value));
  const draft = ref<SubscriptionConfig>();
  const options = (field: string) => dictionaryOptions(dictionaries.value, field);
  const displayValue = (field: string) => (draft.value ? dictionaryText(dictionaries.value, field, draft.value) : '');
  const schemas = computed<FormSchema[]>(() =>
    ['customerEmail', 'configSource', 'localStatus'].map((field) => ({
      field,
      label: label(field),
      component: field === 'customerEmail' ? 'Input' : 'Select',
      componentProps: { allowClear: true, ...(field === 'customerEmail' ? {} : { options: options(field) }) },
      colProps: { xs: 24, md: 12, xl: 6 },
    }))
  );
  const { tableContext } = useListPage({
    tableProps: {
      title: label('title'),
      api: list,
      columns: createColumns(dictionaries.value),
      formConfig: { schemas: schemas.value, labelWidth: 110, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10 },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 200, fixed: 'right' },
      scroll: { x: 2200 },
    },
  });
  const [registerTable, { reload, getForm }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerModal, { openModal, closeModal }] = useModal();
  const form = ref();
  const savingMode = ref('');
  const saving = computed(() => !!savingMode.value);
  const busyId = ref('');
  async function canClose() {
    return !saving.value;
  }
  async function openEdit(record: SubscriptionConfig) {
    if (saving.value || busyId.value) return;
    draft.value = { ...record };
    openModal(true);
    await nextTick();
    form.value?.clearValidate();
  }
  async function submit(remote: boolean) {
    if (saving.value || !draft.value) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    savingMode.value = remote ? 'sync' : 'local';
    try {
      await (remote ? saveAndSync : saveLocal)(draft.value);
      createMessage.success(label('saved'));
      savingMode.value = '';
      closeModal();
      await reload();
    } catch {
      /* HTTP 客户端统一显示接口错误，保留弹窗。 */
    } finally {
      savingMode.value = '';
    }
  }
  async function sync(record: SubscriptionConfig) {
    if (busyId.value || saving.value) return;
    busyId.value = record.id;
    try {
      await syncRemote(record.id);
      createMessage.success(label('synced'));
      await reload();
    } catch {
      /* HTTP 客户端统一显示接口错误。 */
    } finally {
      busyId.value = '';
    }
  }
</script>
<style lang="less" scoped>
  .subscription-page {
    padding: 16px;
  }
</style>
