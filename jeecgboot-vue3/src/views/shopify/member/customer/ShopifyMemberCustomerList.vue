<template>
  <div class="member-page">
    <a-alert
      v-if="syncResult"
      :type="syncResult.failedCount ? 'warning' : 'success'"
      :message="resultText"
      class="result"
      closable
      @close="syncResult = undefined"
    >
      <template v-if="syncResult.failedMessages?.length" #description>
        <div v-for="(message, index) in syncResult.failedMessages" :key="index">{{ message }}</div>
      </template>
    </a-alert>
    <BasicTable @register="registerTable" :columns="columns" :rowSelection="featureSetting.showBusinessBatchSelection ? rowSelection : undefined">
      <template #tableTitle>
        <a-space wrap>
          <a-button v-auth="permission('list')" type="primary" :disabled="busy" @click="openHistory">{{ label('history') }}</a-button>
          <a-button
            v-if="featureSetting.showBusinessBatchSelection"
            v-auth="permission('edit')"
            :disabled="busy || !selectedRowKeys.length"
            @click="sync('selectedLevels')"
            >{{ label('selectedLevels') }}</a-button
          >
          <a-button v-auth="permission('edit')" type="primary" :loading="operation === 'allLevels'" :disabled="busy" @click="sync('allLevels')">{{
            label('allLevels')
          }}</a-button>
        </a-space>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[{ label: label('edit'), auth: permission('edit'), disabled: busy, onClick: () => openEditor(record) }]" />
      </template>
    </BasicTable>
    <BasicModal @register="registerHistory" :title="label('historyTitle')" :width="1100" :showOkBtn="false" :closeFunc="canClose">
      <a-space class="history-toolbar" wrap>
        <a-input-search
          v-model:value="keyword"
          :placeholder="label('keyword')"
          :disabled="busy"
          style="width: 320px; max-width: 100%"
          @search="searchHistory"
        />
        <a-button
          v-if="featureSetting.showBusinessBatchSelection"
          v-auth="permission('list')"
          :disabled="busy || !pendingKeys.length"
          @click="sync('selectedUsers')"
          >{{ label('selectedUsers') }}</a-button
        >
        <a-button v-auth="permission('list')" type="primary" :loading="operation === 'allUsers'" :disabled="busy" @click="sync('allUsers')">{{
          label('allUsers')
        }}</a-button>
      </a-space>
      <a-alert v-if="syncResult" :message="resultText" :type="syncResult.failedCount ? 'warning' : 'success'" class="result">
        <template v-if="syncResult.failedMessages?.length" #description>
          <div v-for="(message, index) in syncResult.failedMessages" :key="index">{{ message }}</div>
        </template>
      </a-alert>
      <a-table
        row-key="sysUserId"
        :columns="pendingColumns"
        :data-source="pendingRecords"
        :loading="pendingLoading"
        :scroll="{ x: 900 }"
        :pagination="{ current: pendingPage, pageSize: pendingSize, total: pendingTotal, showSizeChanger: true }"
        :row-selection="
          featureSetting.showBusinessBatchSelection
            ? { selectedRowKeys: pendingKeys, onChange: selectPending, getCheckboxProps: () => ({ disabled: busy }) }
            : undefined
        "
        @change="changePendingPage"
      />
    </BasicModal>
    <BasicModal
      @register="registerEditor"
      :title="label('editTitle')"
      :width="1000"
      :confirmLoading="saving"
      :closeFunc="canClose"
      :okButtonProps="{ disabled: !hasPermission(permission('edit')) }"
      @ok="submit"
    >
      <a-form v-if="draft" ref="form" :model="draft" layout="vertical">
        <a-row :gutter="20">
          <a-col v-for="field in editFields" :key="field" :xs="24" :md="field === 'remark' ? 24 : 12">
            <a-form-item :name="field" :label="label(field)" :rules="rules(field)">
              <a-select v-if="field === 'status'" v-model:value="draft.status" :options="statusOptions" :disabled="saving" />
              <a-select v-else-if="field === 'customerSex'" v-model:value="draft.customerSex" :options="sexOptions" :disabled="saving" />
              <a-date-picker
                v-else-if="dateFields.includes(field)"
                v-model:value="draft[field]"
                :show-time="field !== 'customerBirthday'"
                :value-format="field === 'customerBirthday' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss'"
                :disabled="saving"
                style="width: 100%"
              />
              <a-textarea v-else-if="field === 'remark'" v-model:value="draft[field]" :rows="2" :disabled="saving" />
              <a-input v-else v-model:value="draft[field]" allow-clear :disabled="saving" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </BasicModal>
  </div>
</template>
<script setup lang="ts">
  import { featureSetting } from '/@/settings/featureSetting';
  import { computed, nextTick, onBeforeUnmount, ref } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import {
    list,
    pendingUsers,
    editFields,
    save,
    syncAllPendingUsers,
    syncSelectedUsers,
    syncAllLevelAccounts,
    syncSelectedLevelAccounts,
  } from './memberCustomer.api';
  import type { MemberCustomer, PendingUser, SyncResult } from './memberCustomer.api';
  defineOptions({ name: 'ShopifyMemberCustomerList' });
  const { t } = useI18n();
  const label = (key: string) => t(`memberCustomer.${key}`);
  const permission = (action: string) => `shopify:shopify_member_customer:${action}`;
  const { hasPermission } = usePermission();
  const { createMessage } = useMessage();
  const saving = ref(false);
  const operation = ref('');
  const busy = computed(() => saving.value || !!operation.value);
  const statusOptions = computed(() =>
    ['normal', 'disabled', 'merged'].map((value) => ({ value, label: businessDictionaryText('shopify_member_status', value) }))
  );
  const sexOptions = computed(() => [0, 1, 2].map((value) => ({ value, label: label(['unknown', 'male', 'female'][value]) })));
  const dateFields = ['customerBirthday', 'lastSyncTime', 'shopifyUpdatedAt'];
  const columns = computed<BasicColumn[]>(() =>
    [...editFields, 'createTime'].map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'shopifyCustomerGid' ? 280 : 180,
      customRender: ({ text, record }) =>
        field === 'status'
          ? businessDictionaryText('shopify_member_status', text, undefined, record.status_dictText)
          : field === 'customerSex'
            ? (sexOptions.value.find((item) => item.value === Number(text))?.label ?? text ?? '—')
            : (text ?? '—'),
    }))
  );
  const schemas: FormSchema[] = ['memberCode', 'customerEmail', 'customerPhone', 'customerName', 'shopifyCustomerId', 'status'].map((field) => ({
    field,
    label: label(field),
    component: field === 'status' ? 'Select' : 'Input',
    componentProps: field === 'status' ? { options: statusOptions.value, allowClear: true } : {},
    colProps: { xs: 24, md: 12, xl: 8 },
  }));
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      rowKey: 'id',
      formConfig: { schemas, labelWidth: 140, showAdvancedButton: true, autoAdvancedCol: 3, actionColOptions: { span: 24 } },
      pagination: { pageSize: 10 },
      scroll: { x: 3000 },
      actionColumn: { title: label('actions'), width: 100, fixed: 'right' },
    },
  });
  const [registerTable, { reload }, { rowSelection, selectedRowKeys }] = tableContext;
  const [registerEditor, { openModal: showEditor, closeModal: closeEditor }] = useModal();
  const [registerHistory, { openModal: showHistory }] = useModal();
  const draft = ref<MemberCustomer>();
  const form = ref();
  async function canClose() {
    return !busy.value;
  }
  function rules(field: string) {
    if (['memberCode', 'shopifyCustomerGid', 'status'].includes(field)) return [{ required: true, whitespace: true, message: label('required') }];
    return field === 'customerEmail' ? [{ type: 'email' as const, message: label('invalidEmail') }] : [];
  }
  async function openEditor(record: MemberCustomer) {
    if (busy.value || !hasPermission(permission('edit'))) return;
    draft.value = { ...record };
    showEditor(true);
    await nextTick();
    form.value?.clearValidate();
  }
  async function submit() {
    if (busy.value || !draft.value || !hasPermission(permission('edit'))) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    saving.value = true;
    try {
      await save(draft.value);
      createMessage.success(label('saved'));
      saving.value = false;
      closeEditor();
      await reload();
    } catch {
      /* Shared HTTP client displays errors; keep the draft on save failure. */
    } finally {
      saving.value = false;
    }
  }
  const keyword = ref('');
  const pendingRecords = ref<PendingUser[]>([]);
  const pendingKeys = ref<string[]>([]);
  const pendingPage = ref(1),
    pendingSize = ref(10),
    pendingTotal = ref(0),
    pendingLoading = ref(false);
  let pendingVersion = 0;
  const pendingColumns = computed(() =>
    ['username', 'realname', 'email', 'phone', 'shopifySub'].map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'email' ? 240 : 180,
    }))
  );
  function selectPending(keys: (string | number)[]) {
    pendingKeys.value = keys.map(String);
  }
  async function loadPending() {
    const version = ++pendingVersion;
    pendingLoading.value = true;
    try {
      const result = await pendingUsers({ pageNo: pendingPage.value, pageSize: pendingSize.value, keyword: keyword.value.trim() || undefined });
      if (version !== pendingVersion) return;
      pendingRecords.value = result.records;
      pendingTotal.value = result.total;
    } catch {
      if (version === pendingVersion) {
        pendingRecords.value = [];
        pendingTotal.value = 0;
      }
    } finally {
      if (version === pendingVersion) pendingLoading.value = false;
    }
  }
  function searchHistory() {
    pendingPage.value = 1;
    pendingKeys.value = [];
    void loadPending();
  }
  function changePendingPage(pagination: { current: number; pageSize: number }) {
    pendingPage.value = pagination.current;
    pendingSize.value = pagination.pageSize;
    pendingKeys.value = [];
    void loadPending();
  }
  function openHistory() {
    if (busy.value || !hasPermission(permission('list'))) return;
    keyword.value = '';
    pendingPage.value = 1;
    pendingKeys.value = [];
    syncResult.value = undefined;
    showHistory(true);
    void loadPending();
  }
  onBeforeUnmount(() => {
    pendingVersion++;
  });
  const syncResult = ref<SyncResult>();
  const resultText = computed(() => (syncResult.value ? t('memberCustomer.syncSummary', { ...syncResult.value }) : ''));
  async function sync(kind: 'allUsers' | 'selectedUsers' | 'allLevels' | 'selectedLevels') {
    const history = kind === 'allUsers' || kind === 'selectedUsers';
    if (busy.value || !hasPermission(permission(history ? 'list' : 'edit'))) return;
    const ids = (history ? pendingKeys.value : selectedRowKeys.value).map(String);
    if (kind.startsWith('selected') && !ids.length) return;
    operation.value = kind;
    syncResult.value = undefined;
    try {
      syncResult.value = await (kind === 'allUsers'
        ? syncAllPendingUsers()
        : kind === 'selectedUsers'
          ? syncSelectedUsers(ids)
          : kind === 'allLevels'
            ? syncAllLevelAccounts()
            : syncSelectedLevelAccounts(ids));
      selectedRowKeys.value = [];
      pendingKeys.value = [];
      if (history) {
        pendingPage.value = 1;
        await Promise.all([reload(), loadPending()]);
      } else await reload();
    } catch {
      /* Shared HTTP client displays errors. */
    } finally {
      operation.value = '';
    }
  }
</script>
<style scoped lang="less">
  .member-page {
    padding: 16px;
  }
  .history-toolbar {
    margin-bottom: 16px;
    width: 100%;
  }
  .result {
    margin-bottom: 12px;
  }
</style>
