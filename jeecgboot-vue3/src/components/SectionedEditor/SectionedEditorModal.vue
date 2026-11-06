<template>
  <BasicModal v-bind="$attrs" :width="1000" :okText="t('common.saveText')" @register="forwardRegister">
    <div class="sectioned-editor"><slot /></div>
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';
  import type { ModalMethods } from '/@/components/Modal/src/typing';
  defineOptions({ inheritAttrs: false });
  const emit = defineEmits(['register']);
  const { t } = useI18n();
  function forwardRegister(methods: ModalMethods, uid: string) {
    emit('register', methods, uid);
  }
</script>
<style scoped lang="less">
  .sectioned-editor {
    padding: 16px 12px 4px;
    :deep(.ant-form-item) {
      margin-bottom: 14px;
    }
    :deep(.ant-form-item-row) {
      flex-wrap: nowrap;
    }
    :deep(.ant-form-item-label) {
      flex: 0 0 140px;
      padding: 5px 10px 0 0;
      white-space: normal;
      text-align: right;
    }
    :deep(.ant-form-item-label > label) {
      height: auto;
      min-height: 22px;
      white-space: normal;
      font-size: 12px;
    }
    :deep(.ant-form-item-control) {
      flex: 1;
      min-width: 0;
    }
    :deep(.ant-checkbox-group) {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 14px;
      padding-top: 5px;
    }
    :deep(.ant-checkbox-wrapper) {
      margin-inline-start: 0;
    }
    :deep(.editor-number) {
      width: 100px !important;
    }
    @media (max-width: 600px) {
      padding: 8px 0;
      :deep(.ant-form-item-row) {
        flex-direction: column;
      }
      :deep(.ant-form-item-label) {
        flex: none;
        text-align: left;
        padding: 0 0 6px;
      }
    }
  }
</style>
