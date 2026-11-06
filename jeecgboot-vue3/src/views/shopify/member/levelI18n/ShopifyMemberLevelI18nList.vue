<template>
  <div class="level-i18n-page">
    <BasicTable @register="registerTable" :columns="columns">
      <template #tableTitle>
        <a-button v-auth="permission('add')" type="primary" preIcon="ant-design:plus-outlined" :disabled="busy" @click="openAdd">{{
          label('add')
        }}</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[{ label: label('edit'), auth: permission('edit'), disabled: busy, onClick: () => openRecord(record, false) }]"
          :dropDownActions="[
            { label: label('detail'), auth: permission('queryById'), disabled: busy, onClick: () => openRecord(record, true) },
            { label: label('delete'), auth: permission('delete'), color: 'error', disabled: busy, onClick: () => deleteRecord(record) },
          ]"
        />
      </template>
    </BasicTable>
    <BasicModal
      @register="registerModal"
      :title="label(readonly ? 'detailTitle' : adding ? 'addTitle' : 'editTitle')"
      :width="850"
      :showOkBtn="!readonly"
      :confirmLoading="saving"
      :okButtonProps="{ disabled: loading || failed || !draft || !hasPermission(permission(adding ? 'add' : 'edit')) }"
      :closeFunc="canClose"
      @cancel="cancel"
      @ok="submit"
    >
      <a-spin :spinning="loading">
        <a-alert v-if="failed" type="error" :message="label('loadFailed')" show-icon>
          <template #action
            ><a-button size="small" @click="loadRecord">{{ label('retry') }}</a-button></template
          >
        </a-alert>
        <a-form v-else-if="draft" ref="form" :model="draft" layout="vertical">
          <a-row :gutter="20">
            <a-col v-for="field in fields" :key="field" :xs="24" :md="field === 'remark' ? 24 : 12">
              <a-form-item
                :name="field"
                :label="label(field)"
                :rules="!readonly && field !== 'remark' ? [{ required: true, whitespace: true, message: label('required') }] : []"
              >
                <a-select
                  v-if="field === 'levelId'"
                  v-model:value="draft.levelId"
                  :options="editLevelOptions"
                  show-search
                  option-filter-prop="label"
                  :disabled="readonly || saving"
                />
                <a-select v-else-if="field === 'language'" v-model:value="draft.language" :options="languages" :disabled="readonly || saving" />
                <a-textarea v-else-if="field === 'remark'" v-model:value="draft.remark" :rows="4" :disabled="readonly || saving" />
                <a-input v-else v-model:value="draft.levelName" allow-clear :disabled="readonly || saving" />
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
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { list, queryById, getLevels, save, add, remove } from './memberLevelI18n.api';
  import type { LevelTranslation } from './memberLevelI18n.api';
  defineOptions({ name: 'ShopifyMemberLevelI18nList' });
  const { t } = useI18n();
  const label = (key: string) => t(`memberLevelI18n.${key}`);
  const permission = (action: string) => `shopify:shopify_member_level_i18n:${action}`;
  const { hasPermission } = usePermission();
  const { createMessage, createConfirmSync } = useMessage();
  const fields = ['levelId', 'language', 'levelName', 'remark'];
  const languages = computed(() => ['zh', 'en', 'ja'].map((value) => ({ value, label: businessDictionaryText('shopify_language', value) })));
  const levelOptions = ref<{ value: string; label: string }[]>([]);
  const draft = ref<LevelTranslation>();
  const editLevelOptions = computed(() => {
    const options = [...levelOptions.value];
    if (draft.value?.levelId && !options.some((item) => item.value === draft.value?.levelId))
      options.push({ value: draft.value.levelId, label: draft.value.levelId_dictText || draft.value.levelId });
    return options;
  });
  const columns = computed<BasicColumn[]>(() =>
    [...fields, 'updateTime'].map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'remark' ? 300 : 180,
      ellipsis: true,
      customRender: ({ record }) =>
        field === 'language'
          ? businessDictionaryText('shopify_language', record.language, undefined, record.language_dictText)
          : field === 'levelId'
            ? record.levelId_dictText || levelOptions.value.find((item) => item.value === record.levelId)?.label || record.levelId || '—'
            : (record[field] ?? '—'),
    }))
  );
  const schemas: FormSchema[] = [
    {
      field: 'levelId',
      label: label('levelId'),
      component: 'JDictSelectTag',
      componentProps: { dictCode: 'shopify_member_level,level_name,id' },
      colProps: { xs: 24, md: 12, xl: 8 },
    },
    {
      field: 'language',
      label: label('language'),
      component: 'Select',
      componentProps: { options: languages.value, allowClear: true },
      colProps: { xs: 24, md: 12, xl: 8 },
    },
    { field: 'levelName', label: label('levelName'), component: 'Input', colProps: { xs: 24, md: 12, xl: 8 } },
  ];
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      rowKey: 'id',
      formConfig: { schemas, labelWidth: 130, actionColOptions: { span: 24 } },
      pagination: { pageSize: 10 },
      scroll: { x: 1200 },
      actionColumn: { title: label('actions'), width: 160, fixed: 'right' },
    },
  });
  const [registerTable, { reload }] = tableContext;
  const [registerModal, { openModal, closeModal }] = useModal();
  const adding = ref(false);
  const readonly = ref(false),
    saving = ref(false),
    loading = ref(false),
    failed = ref(false),
    deleting = ref(false);
  const busy = computed(() => saving.value || deleting.value);
  const form = ref();
  let version = 0;
  let selected: LevelTranslation | undefined;
  async function canClose() {
    return !busy.value;
  }
  function cancel() {
    version++;
    loading.value = false;
    draft.value = undefined;
  }
  onBeforeUnmount(cancel);
  async function openRecord(record: LevelTranslation, detail: boolean) {
    if (busy.value || !hasPermission(permission(detail ? 'queryById' : 'edit'))) return;
    adding.value = false;
    selected = { ...record };
    readonly.value = detail;
    openModal(true);
    await loadRecord();
  }
  async function openAdd() {
    if (busy.value || !hasPermission(permission('add'))) return;
    adding.value = true;
    readonly.value = false;
    selected = { id: '', levelId: '', language: '', levelName: '', remark: '' };
    openModal(true);
    await loadRecord();
  }
  async function loadRecord() {
    if (!selected || !hasPermission(permission(readonly.value ? 'queryById' : adding.value ? 'add' : 'edit'))) return;
    const request = ++version;
    loading.value = true;
    failed.value = false;
    draft.value = undefined;
    try {
      const [levels, record] = await Promise.all([getLevels(), readonly.value ? queryById(selected.id) : Promise.resolve({ ...selected })]);
      if (request !== version) return;
      if (!adding.value && !record?.id) throw Error('Missing detail');
      levelOptions.value = levels.map((item) => ({ value: item.value, label: item.text || item.label || item.title || item.value }));
      draft.value = record;
      await nextTick();
      form.value?.clearValidate();
    } catch {
      if (request === version) failed.value = true;
    } finally {
      if (request === version) loading.value = false;
    }
  }
  async function submit() {
    if (busy.value || loading.value || readonly.value || !draft.value || !hasPermission(permission(adding.value ? 'add' : 'edit'))) return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    saving.value = true;
    try {
      await (adding.value ? add(draft.value) : save(draft.value));
      createMessage.success(label('saved'));
      saving.value = false;
      closeModal();
      await reload(adding.value ? { page: 1 } : undefined);
    } catch {
      /* HTTP client reports errors; preserve the draft on save failure. */
    } finally {
      saving.value = false;
    }
  }
  async function deleteRecord(record: LevelTranslation) {
    if (busy.value || !record.id || !hasPermission(permission('delete'))) return;
    deleting.value = true;
    try {
      const confirmed = await createConfirmSync({
        title: label('deleteTitle'),
        content: t('memberLevelI18n.deleteConfirm', {
          name: record.levelName,
          language: businessDictionaryText('shopify_language', record.language),
        }),
        okText: label('delete'),
        cancelText: t('common.cancelText'),
      });
      if (!confirmed || !hasPermission(permission('delete'))) return;
      await remove(record.id);
      createMessage.success(label('deleted'));
      await reload({ page: 1 });
    } catch {
      /* HTTP client reports errors. */
    } finally {
      deleting.value = false;
    }
  }
</script>
<style scoped lang="less">
  .level-i18n-page {
    padding: 16px;
  }
</style>
