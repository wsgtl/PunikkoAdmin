<template>
  <BasicModal v-if="!detailMode" :title="title" v-bind="$attrs" @register="registerEditor" @cancel="editorCancelled" @ok="$emit('ok')">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </BasicModal>
  <a-drawer
    v-else
    :open="opened"
    :title="title"
    placement="right"
    :width="fullscreen ? '100vw' : 'min(560px, 100vw)'"
    root-class-name="business-detail-drawer"
    :destroy-on-close="true"
    @close="closeDetail"
  >
    <template #extra>
      <a-button type="text" :aria-label="t(fullscreen ? 'component.modal.restore' : 'component.modal.maximize')" @click="fullscreen = !fullscreen">
        <FullscreenExitOutlined v-if="fullscreen" />
        <FullscreenOutlined v-else />
      </a-button>
    </template>
    <div class="business-detail-content"><slot /></div>
    <template #footer>
      <div style="text-align: right"
        ><a-button @click="closeDetail">{{ t('common.closeText') }}</a-button></div
      >
    </template>
  </a-drawer>
</template>

<script setup lang="ts">
  import { getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';
  import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';
  import { BasicModal } from '/@/components/Modal';
  import type { ModalMethods, ModalProps } from '/@/components/Modal/src/typing';
  import { useI18n } from '/@/hooks/web/useI18n';

  // Retain the existing useModal registration contract so page loading and cancellation remain local.
  defineOptions({ inheritAttrs: false });
  const props = withDefaults(defineProps<{ detailMode?: boolean; title?: string }>(), { detailMode: true, title: '' });
  const emit = defineEmits(['register', 'cancel', 'ok']);
  const { t } = useI18n();
  const opened = ref(false);
  const fullscreen = ref(false);
  const uid = getCurrentInstance()!.uid;
  let editor: ModalMethods | undefined;
  let pending: Partial<ModalProps> = {};
  const methods: ModalMethods = {
    setModalProps(value) {
      pending = { ...pending, ...value };
      if (value.open !== undefined) {
        opened.value = value.open;
        if (value.open) fullscreen.value = false;
        methods.emitVisible?.(value.open, uid);
      }
      // Mode can change immediately before openModal, before the editor has mounted.
      nextTick(() => {
        if (!props.detailMode) editor?.setModalProps(pending);
      });
    },
    redoModalHeight() {
      if (!props.detailMode) editor?.redoModalHeight?.();
    },
  };
  onMounted(() => emit('register', methods, String(uid)));
  function registerEditor(instance: ModalMethods) {
    editor = instance;
    instance.setModalProps(pending);
  }
  function editorCancelled() {
    opened.value = false;
    pending.open = false;
    methods.emitVisible?.(false, uid);
    emit('cancel');
  }
  function closeDetail() {
    methods.setModalProps({ open: false });
    emit('cancel');
  }
  watch(
    () => props.detailMode,
    () => {
      editor = undefined;
    }
  );
</script>

<style lang="less">
  .business-detail-drawer {
    .ant-drawer-header {
      padding: 18px 20px;
    }
    .ant-drawer-body {
      padding: 8px 24px 24px;
    }
    .ant-drawer-footer {
      padding: 12px 20px;
    }
    .business-detail-content {
      .ant-descriptions-view {
        border: 0;
      }
      .ant-descriptions-row {
        border-bottom: 1px solid #f0f0f0;
      }
      .ant-descriptions-item-label,
      .ant-descriptions-item-content {
        background: transparent;
        border: 0;
        padding: 16px 0;
        vertical-align: top;
      }
      .ant-descriptions-item-label {
        width: 128px;
        color: #8c8c8c;
        font-weight: normal;
        padding-right: 16px;
      }
      .ant-descriptions-item-content {
        overflow-wrap: anywhere;
        white-space: pre-wrap;
      }
      .ant-form > .ant-row {
        display: block;
        margin: 0 !important;
      }
      .ant-form > .ant-row > .ant-col {
        max-width: 100%;
        width: 100%;
        padding: 0 !important;
      }
      .ant-form-item {
        margin: 0;
        padding: 14px 0;
        border-bottom: 1px solid #f0f0f0;
      }
      .ant-form-item-row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
      }
      .ant-form-item-label {
        flex: 0 0 128px !important;
        width: 128px !important;
        padding: 4px 16px 0 0;
        text-align: left;
        white-space: normal;
      }
      .ant-form-item-label > label {
        color: #8c8c8c;
        height: auto;
        white-space: normal;
      }
      .ant-form-item-label > label::after,
      .ant-form-item-label > label::before {
        display: none !important;
      }
      .ant-form-item-control {
        flex: 1;
        min-width: 0;
      }
      .ant-input,
      .ant-input-number,
      .ant-select-selector,
      .ant-picker,
      .ant-input-affix-wrapper {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        color: #333 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .ant-input-number-input,
      .ant-picker-input > input,
      .ant-select-selection-item {
        color: #333 !important;
        -webkit-text-fill-color: #333;
        padding-left: 0;
      }
      textarea.ant-input {
        resize: none;
      }
      .ant-select-arrow,
      .ant-select-clear,
      .ant-picker-suffix,
      .ant-picker-clear,
      .ant-input-number-handler-wrap {
        display: none;
      }
      .ant-table-wrapper {
        margin-top: 16px;
      }
      .ant-divider {
        margin-top: 24px;
      }
      @media (max-width: 420px) {
        .ant-form-item-label {
          flex-basis: 100px !important;
          width: 100px !important;
        }
        .ant-descriptions-item-label {
          width: 100px;
        }
      }
    }
  }
</style>
