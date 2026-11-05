<template>
  <div class="sidebar-user-bar" :class="{ 'is-collapsed': collapsed }">
    <UserDropDown theme="light" placement="topLeft" />
    <div class="sidebar-user-bar__actions">
      <AppSearch v-if="getShowSearch" />
      <Notify v-if="getShowNotice" />
      <AppLocalePicker v-if="getShowLocalePicker" :reload="true" :showText="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AppSearch, AppLocalePicker } from '/@/components/Application';
  import { UserDropDown, Notify } from '../header/components';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useLocale } from '/@/locales/useLocale';

  defineProps({ collapsed: Boolean });
  const { getShowSearch, getShowNotice } = useHeaderSetting();
  const { getShowLocalePicker } = useLocale();
</script>

<style scoped lang="less">
  .sidebar-user-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 56px;
    padding: 6px 12px;
    border-top: 1px solid #f5dce0;
    background: #fff;
    color: #d77c87;
    overflow: hidden;

    :deep(.jeecg-header-user-dropdown) {
      width: 100%;
      flex: 1 1 auto;
      min-width: 0;
      height: 42px;
      padding: 0;
      color: #d77c87;
    }
    :deep(.jeecg-header-user-dropdown__header) { width: 24px; height: 24px; margin-right: 6px; }
    :deep(.jeecg-header-user-dropdown__info) { min-width: 0; overflow: hidden; }
    :deep(.jeecg-header-user-dropdown__name) { display: block; overflow: hidden; text-overflow: ellipsis; color: #d77c87; }

    &__actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 0 0 auto;
      gap: 2px;
      height: 40px;
      :deep(.ant-badge),
      :deep(.anticon) {
        color: inherit;
      }
      :deep(> *) {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 22px;
        height: 30px;
        padding: 0 2px;
        color: #d77c87;
        cursor: pointer;
      }
    }
    &.is-collapsed {
      padding: 8px 2px;
      justify-content: center;
      gap: 0;
      height: 88px;
      flex-direction: column;
      :deep(.jeecg-header-user-dropdown) { justify-content: center; }
      :deep(.jeecg-header-user-dropdown__header) { margin-right: 0; }
      :deep(.jeecg-header-user-dropdown__info) { display: none; }
      .sidebar-user-bar__actions { gap: 0; height: 30px; }
      .sidebar-user-bar__actions :deep(> *) { min-width: 0; padding: 0 2px; font-size: 14px; }
    }
  }
</style>
