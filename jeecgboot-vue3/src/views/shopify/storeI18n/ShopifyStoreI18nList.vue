<template>
  <div class="store-i18n-page">
    <BasicTable @register="registerTable" :columns="columns" :title="label('title')">
      <template #tableTitle
        ><a-button v-auth="permission('add')" type="primary" @click="openEditor()">{{ label('add') }}</a-button></template
      >
      <template #action="{ record }"
        ><TableAction
          :dropDownActions="[
            {
              label: label('detail'),
              auth: permission('queryById'),
              disabled: saving || detailLoading || deletePending,
              onClick: () => showDetail(record),
            },
            {
              label: label('delete'),
              auth: permission('delete'),
              color: 'error',
              disabled: saving || detailLoading || deletePending,
              onClick: () => confirmDelete(record),
            },
          ]"
          :actions="[{ label: label('editAction'), auth: permission('edit'), onClick: () => openEditor(record) }]"
      /></template>
    </BasicTable>
    <BasicModal
      @register="registerEditor"
      :title="label(readOnly ? 'detail' : adding ? 'add' : 'edit')"
      :showOkBtn="!readOnly"
      :width="1100"
      :confirmLoading="saving"
      :closeFunc="canClose"
      :okButtonProps="{ disabled: !storesReady || !languages.length || !hasPermission(permission(adding ? 'add' : 'edit')) }"
      @ok="submit"
    >
      <a-alert v-if="!storesReady && !storesLoading" type="error" :message="t('shopify.storeCalendar.storeLoadFailed')"
        ><template #action
          ><a-button @click="loadStores">{{ t('shopify.storeCalendar.retry') }}</a-button></template
        ></a-alert
      >
      <a-form v-if="draft" ref="form" :model="draft" layout="vertical">
        <a-row :gutter="24">
          <a-col :xs="24" :md="12"
            ><a-form-item name="storeId" :label="label('storeId')" :rules="[{ required: true }]"
              ><a-select
                v-model:value="draft.storeId"
                :options="editStores"
                show-search
                option-filter-prop="label"
                :loading="storesLoading"
                :disabled="saving || readOnly" /></a-form-item
          ></a-col>
          <a-col :xs="24" :md="12"
            ><a-form-item name="language" :label="label('language')" :rules="[{ required: true }]"
              ><a-select v-model:value="draft.language" :options="languages" :disabled="saving || readOnly" /></a-form-item
          ></a-col>
          <a-col :xs="24" :md="12"
            ><a-form-item name="storeName" :label="label('storeName')" :rules="[{ required: true, whitespace: true }]"
              ><a-input v-model:value="draft.storeName" :disabled="saving || readOnly" /></a-form-item
          ></a-col>
          <a-col :xs="24" :md="12"
            ><a-form-item name="storeAddress" :label="label('storeAddress')"
              ><a-textarea v-model:value="draft.storeAddress" :rows="2" :disabled="saving || readOnly" /></a-form-item
          ></a-col>
          <a-col v-for="field in richFields" :key="field" :span="24"
            ><a-form-item :name="field" :label="label(field)"
              ><Tinymce
                :key="`${editorVersion}-${field}`"
                v-model="draft[field]"
                :height="180"
                :options="{ min_height: 150, statusbar: false }"
                :disabled="saving || readOnly" /></a-form-item
          ></a-col>
          <a-col :span="24"
            ><a-form-item name="remark" :label="label('remark')"
              ><a-textarea v-model:value="draft.remark" :rows="2" :disabled="saving || readOnly" /></a-form-item
          ></a-col>
        </a-row>
      </a-form>
    </BasicModal>
  </div>
</template>
<script setup lang="ts">
  import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
  import { computed, ref, onMounted, nextTick, watch } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import type { BasicColumn } from '/@/components/Table';
  import type { FormSchema } from '/@/components/Form';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { Tinymce } from '/@/components/Tinymce';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useUserStore } from '/@/store/modules/user';
  import { list, getStores, save, queryById, deleteTranslation } from './storeI18n.api';
  import type { StoreTranslation } from './storeI18n.api';
  defineOptions({ name: 'ShopifyStoreI18nList' });
  const { t } = useI18n();
  const label = (key: string) => t(`shopify.storeI18n.${key}`);
  const permission = (action: string) => `shopify:shopify_store_i18n:${action}`;
  const { hasPermission } = usePermission();
  const { createMessage, createConfirm } = useMessage();
  const userStore = useUserStore();
  const stores = ref<{ value: string; label: string }[]>([]);
  const storesReady = ref(false);
  const storesLoading = ref(false);
  const languages = computed(() =>
    ((userStore.getAllDictItems as unknown as Record<string, { value: string; text?: string; label?: string }[]>)?.shopify_language ?? []).map(
      (item) => ({ value: item.value, label: businessDictionaryText('shopify_language', item.value) })
    )
  );
  async function loadStores() {
    if (storesLoading.value) return;
    storesLoading.value = true;
    try {
      stores.value = (await getStores()).map((item) => ({ value: String(item.value), label: item.text ?? item.label ?? String(item.value) }));
      storesReady.value = true;
    } catch {
      storesReady.value = false;
    } finally {
      storesLoading.value = false;
    }
  }
  onMounted(loadStores);
  const columns = computed<BasicColumn[]>(() =>
    ['storeId', 'language', 'storeName', 'storeAddress', 'reservationNotice', 'storeMatters', 'remark'].map((field) => ({
      title: label(field),
      dataIndex: field,
      width: field === 'language' ? 120 : 230,
      ellipsis: true,
      customRender: ({ record }) =>
        field === 'storeId'
          ? (stores.value.find((item) => item.value === record.storeId)?.label ?? record.storeId_dictText ?? record.storeId)
          : field === 'language'
            ? businessDictionaryText('shopify_language', record.language)
            : record[field] || '—',
    }))
  );
  const schemas = computed<FormSchema[]>(() => [
    {
      field: 'storeId',
      label: label('storeId'),
      component: 'Select',
      componentProps: { options: stores.value, loading: storesLoading.value, showSearch: true, optionFilterProp: 'label', allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    {
      field: 'language',
      label: label('language'),
      component: 'Select',
      componentProps: { options: languages.value, allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    { field: 'storeName', label: label('storeName'), component: 'Input', colProps: { xs: 24, md: 12, xl: 6 } },
  ]);
  const { tableContext } = useListPage({
    tableProps: {
      api: list,
      columns: columns.value,
      formConfig: { schemas: schemas.value, labelWidth: 90, actionColOptions: { xs: 24, md: 12, xl: 6 } },
      pagination: { pageSize: 10 },
      actionColumn: { title: t('shopify.storeReservation.actions'), width: 160, fixed: 'right' },
      scroll: { x: 1600 },
    },
  });
  const [registerTable, { reload, getForm }] = tableContext;
  watch(schemas, (value) => getForm().updateSchema(value));
  const [registerEditor, { openModal, closeModal }] = useModal();
  const draft = ref<StoreTranslation>();
  const adding = ref(false);
  const saving = ref(false);
  const readOnly = ref(false);
  const detailLoading = ref(false);
  const deletePending = ref(false);
  async function showDetail(record: StoreTranslation) {
    if (!record.id || saving.value || detailLoading.value || !hasPermission(permission('queryById'))) return;
    detailLoading.value = true;
    try {
      const detail = await queryById(record.id);
      await openEditor({ ...record, ...detail }, true);
    } catch {
      /* HTTP客户端显示错误，不展示过期详情。 */
    } finally {
      detailLoading.value = false;
    }
  }
  function confirmDelete(record: StoreTranslation) {
    if (!record.id || saving.value || deletePending.value || !hasPermission(permission('delete'))) return;
    const id = record.id;
    const name = stores.value.find((item) => item.value === record.storeId)?.label ?? record.storeId_dictText ?? record.storeId;
    const language = businessDictionaryText('shopify_language', record.language);
    deletePending.value = true;
    createConfirm({
      iconType: 'warning',
      title: label('deleteTitle'),
      content: t('shopify.storeI18n.deleteConfirm', { name, language }),
      okText: label('delete'),
      okButtonProps: { danger: true },
      maskClosable: false,
      onCancel: () => {
        deletePending.value = false;
      },
      onOk: async () => {
        try {
          await deleteTranslation(id);
          createMessage.success(label('deleted'));
          await reload({ page: 1 });
        } finally {
          deletePending.value = false;
        }
      },
    });
  }
  const form = ref();
  const editorVersion = ref(0);
  const richFields = ['storeMatters', 'reservationNotice'] as const;
  const editStores = computed(() => {
    const options = [...stores.value];
    if (draft.value?.storeId && !options.some((item) => item.value === draft.value?.storeId))
      options.push({ value: draft.value.storeId, label: draft.value.storeId_dictText || draft.value.storeId });
    return options;
  });
  async function canClose() {
    return !saving.value;
  }
  async function openEditor(record?: StoreTranslation, detail = false) {
    if (saving.value || (detailLoading.value && !detail)) return;
    readOnly.value = detail;
    adding.value = !record;
    draft.value = { storeId: '', language: '', storeName: '', storeAddress: '', storeMatters: '', reservationNotice: '', remark: '', ...record };
    editorVersion.value++;
    openModal(true);
    await nextTick();
    form.value?.clearValidate();
    if (!storesReady.value) void loadStores();
  }
  async function submit() {
    if (
      readOnly.value ||
      saving.value ||
      !draft.value ||
      !storesReady.value ||
      !languages.value.length ||
      !hasPermission(permission(adding.value ? 'add' : 'edit'))
    )
      return;
    try {
      await form.value.validate();
    } catch {
      return;
    }
    saving.value = true;
    try {
      await save(draft.value, adding.value);
      createMessage.success(label('saved'));
      saving.value = false;
      closeModal();
      await reload(adding.value ? { page: 1 } : undefined);
    } catch {
      /* HTTP客户端显示错误，保留表单内容。 */
    } finally {
      saving.value = false;
    }
  }
</script>
<style scoped lang="less">
  .store-i18n-page {
    padding: 16px;
  }
</style>
