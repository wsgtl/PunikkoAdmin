<template>
  <div class="mapping-page">
    <BasicTable @register="registerTable" :columns="columns" :rowSelection="featureSetting.showBusinessBatchSelection ? rowSelection : undefined">
      <template #action="{ record }"
        ><TableAction
          :actions="[
            { label: t('shopify.metaobjectMapping.edit'), auth: 'shopify:shopify_metaobject_mapping:edit', onClick: () => openEdit(record) },
            { label: t('shopify.metaobjectMapping.remote'), auth: 'shopify:shopify_metaobject_mapping:queryById', onClick: () => openRemote(record) },
          ]"
      /></template>
    </BasicTable>
    <BasicModal
      @register="registerEdit"
      :title="t('shopify.metaobjectMapping.editTitle')"
      :width="900"
      :confirmLoading="saving"
      :okButtonProps="{ disabled: !rolesReady || rolesLoading }"
      :closeFunc="canClose"
      @ok="submit"
    >
      <a-spin :spinning="rolesLoading"
        ><a-form v-if="draft" ref="form" :model="draft" layout="vertical">
          <a-row :gutter="24"
            ><a-col :span="12"
              ><a-form-item name="metaobjectType" :label="label('metaobjectType')" :rules="[{ required: true, whitespace: true }]"
                ><a-input v-model:value="draft.metaobjectType" :disabled="saving" /></a-form-item
            ></a-col>
            <a-col :span="12"
              ><a-form-item name="metaobjectName" :label="label('metaobjectName')" :rules="[{ required: true, whitespace: true }]"
                ><a-input v-model:value="draft.metaobjectName" :disabled="saving" /></a-form-item></a-col
          ></a-row>
          <a-form-item :label="label('roleIds')" required
            ><a-select v-model:value="selectedRoles" mode="multiple" :options="roles" :disabled="saving" show-search option-filter-prop="label"
          /></a-form-item>
          <a-form-item :label="label('fieldCacheJson')"><a-textarea :value="draft.fieldCacheJson ?? ''" :rows="3" disabled /></a-form-item>
          <a-form-item :label="label('dataCacheJson')"><a-textarea :value="draft.dataCacheJson ?? ''" :rows="3" disabled /></a-form-item>
          <a-form-item :label="label('remark')"><a-textarea v-model:value="draft.remark" :rows="3" :disabled="saving" /></a-form-item> </a-form
      ></a-spin>
    </BasicModal>
    <BasicDrawer
      @register="registerRemote"
      :title="`${remoteRecord?.metaobjectName ?? ''} - ${label('remote')}`"
      :width="960"
      :showFooter="false"
      @close="invalidateRemote"
    >
      <a-alert type="info" show-icon :message="label('hint')" />
      <a-space class="remote-buttons">
        <a-button type="primary" :loading="fieldsLoading" :disabled="dataLoading" @click="queryRemote('fields')">{{
          label('refreshFields')
        }}</a-button>
        <a-button :loading="dataLoading" :disabled="fieldsLoading" @click="queryRemote('data')">{{ label('queryData') }}</a-button>
      </a-space>
      <a-tabs v-model:activeKey="activeTab">
        <a-tab-pane key="fields" :tab="label('attributes')">
          <a-table
            :columns="fieldColumns"
            :dataSource="fieldRows ?? []"
            :pagination="false"
            :loading="fieldsLoading"
            :rowKey="rowKey"
            :scroll="{ x: 800 }"
          />
          <pre v-if="fieldRows === null" class="json-data">{{ pretty(fieldRaw) }}</pre>
        </a-tab-pane>
        <a-tab-pane key="data" :tab="label('remoteData')">
          <a-table :columns="dataColumns" :dataSource="dataRows ?? []" :loading="dataLoading" :rowKey="rowKey" :scroll="{ x: 850 }">
            <template #bodyCell="{ column, record }">
              <pre v-if="column.dataIndex === 'payload'" class="json-data">{{ pretty(record) }}</pre>
            </template>
          </a-table>
          <pre v-if="dataRows === null" class="json-data">{{ pretty(dataRaw) }}</pre>
        </a-tab-pane>
      </a-tabs>
    </BasicDrawer>
  </div>
</template>
<script lang="ts" setup>
  import { featureSetting } from '/@/settings/featureSetting';
  import { computed, nextTick, ref, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { BasicDrawer, useDrawer } from '/@/components/Drawer';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { list, getRoles, saveMapping, getRemoteData, getRemoteFields } from './metaobjectMapping.api';
  import type { MetaobjectMapping } from './metaobjectMapping.api';
  import { createColumns, createSearchSchemas, parseRemoteRows } from './metaobjectMapping.data';
  defineOptions({ name: 'ShopifyMetaobjectMappingList' });
  const { t } = useI18n();
  const { createMessage } = useMessage();
  const label = (key: string) => t(`shopify.metaobjectMapping.${key}`);
  const columns = computed(createColumns);
  const schemas = computed(createSearchSchemas);
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: createColumns(),
      formConfig: { schemas: schemas.value, labelWidth: 110, actionColOptions: { xs: 24, md: 12, xl: 8 } },
      pagination: { pageSize: 10 },
      actionColumn: { width: 200, fixed: 'right', title: t('shopify.storeReservation.actions') },
      scroll: { x: 1500 },
    },
  });
  const [registerTable, { reload, getForm }, { rowSelection }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerEdit, { openModal, closeModal }] = useModal();
  const [registerRemote, { openDrawer }] = useDrawer();
  const draft = ref<MetaobjectMapping>();
  const form = ref();
  const selectedRoles = ref<string[]>([]);
  const roles = ref<{ value: string; label: string }[]>([]);
  const rolesReady = ref(false);
  const rolesLoading = ref(false);
  const saving = ref(false);
  async function canClose() {
    return !saving.value;
  }
  async function openEdit(record: MetaobjectMapping) {
    if (rolesLoading.value || saving.value) return;
    draft.value = { ...record };
    selectedRoles.value = record.roleIds
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);
    rolesReady.value = false;
    roles.value = [];
    rolesLoading.value = true;
    openModal(true);
    await nextTick();
    form.value?.clearValidate();
    try {
      const items = await getRoles();
      roles.value = items.map((item) => ({ value: item.value, label: item.text ?? item.label ?? item.value }));
      rolesReady.value = true;
    } catch (error) {
      showError(error);
    } finally {
      rolesLoading.value = false;
    }
  }
  async function submit() {
    if (saving.value || !rolesReady.value || !draft.value) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    if (!selectedRoles.value.length) {
      createMessage.warning(label('chooseRoles'));
      return;
    }
    saving.value = true;
    try {
      await saveMapping({ ...draft.value, roleIds: selectedRoles.value.join(',') });
      createMessage.success(label('saved'));
      saving.value = false;
      closeModal();
      await reload();
    } catch (error) {
      showError(error);
    } finally {
      saving.value = false;
    }
  }
  const remoteRecord = ref<MetaobjectMapping>();
  const activeTab = ref('fields');
  const fieldsLoading = ref(false);
  const dataLoading = ref(false);
  const fieldRows = ref<Record<string, unknown>[] | null>([]);
  const dataRows = ref<Record<string, unknown>[] | null>([]);
  const fieldRaw = ref<unknown>();
  const dataRaw = ref<unknown>();
  let remoteVersion = 0;
  function invalidateRemote() {
    remoteVersion++;
    fieldsLoading.value = false;
    dataLoading.value = false;
  }
  function openRemote(record: MetaobjectMapping) {
    invalidateRemote();
    remoteRecord.value = { ...record };
    activeTab.value = 'fields';
    fieldRows.value = [];
    dataRows.value = [];
    fieldRaw.value = undefined;
    dataRaw.value = undefined;
    openDrawer(true);
  }
  async function queryRemote(kind: 'fields' | 'data') {
    if (!remoteRecord.value || fieldsLoading.value || dataLoading.value) return;
    const version = remoteVersion;
    const loading = kind === 'fields' ? fieldsLoading : dataLoading;
    loading.value = true;
    try {
      const result = await (kind === 'fields' ? getRemoteFields : getRemoteData)(remoteRecord.value.metaobjectType);
      if (version !== remoteVersion) return;
      if (kind === 'fields') {
        fieldRaw.value = result;
        fieldRows.value = parseRemoteRows(result);
      } else {
        dataRaw.value = result;
        dataRows.value = parseRemoteRows(result);
      }
      activeTab.value = kind;
      await reload();
    } catch (error) {
      if (version === remoteVersion) showError(error);
    } finally {
      if (version === remoteVersion) loading.value = false;
    }
  }
  const fieldColumns = computed(() =>
    ['key', 'name', 'type', 'required', 'description'].map((key) => ({
      title: label(key),
      dataIndex: key,
      width: key === 'description' ? 280 : 140,
      customRender: ({ text }) =>
        key === 'type' && text && typeof text === 'object'
          ? text.name
          : key === 'required'
            ? typeof text === 'boolean'
              ? label(text ? 'yes' : 'no')
              : text
            : text,
    }))
  );
  const dataColumns = computed(() => [
    { title: 'Shopify ID', dataIndex: '_shopifyMetaobjectId', width: 240 },
    { title: 'Handle', dataIndex: '_shopifyMetaobjectHandle', width: 180 },
    { title: label('type'), dataIndex: '_shopifyMetaobjectType', width: 160 },
    { title: label('payload'), dataIndex: 'payload', width: 360 },
  ]);
  const pretty = (value: unknown) => JSON.stringify(value, null, 2) ?? '';
  const rowKey = (record: Record<string, unknown>) => String(record.key ?? record._shopifyMetaobjectId ?? pretty(record));
  function showError(error: unknown) {
    createMessage.error(error instanceof Error ? error.message : t('sys.api.apiRequestFailed'));
  }
</script>
<style lang="less" scoped>
  .mapping-page {
    padding: 16px;
  }
  .remote-buttons {
    margin: 8px 0 16px;
  }
  .json-data {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    max-height: 360px;
    overflow: auto;
    margin: 0;
  }
</style>
