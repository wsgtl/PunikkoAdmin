<template>
  <Dropdown :placement="placement" :overlayClassName="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]" class="flex">
      <span :class="`${prefixCls}__header`" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
        </svg>
      </span>
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name  `" class="truncate">
          {{ getUserInfo.realname }}
        </span>
      </span>
    </span>

    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem itemKey="doc" :text="t('layout.header.dropdownItemDoc')" icon="ion:document-text-outline" v-if="getShowDoc" />
        <MenuDivider v-if="getShowDoc" />
        <MenuItem v-if="showAccountSettings" itemKey="account" :text="t('layout.header.dropdownItemSwitchAccount')" icon="ant-design:setting-outlined" />
        <MenuItem itemKey="password" :text="t('layout.header.dropdownItemSwitchPassword')" icon="ant-design:edit-outlined" />
        <MenuItem itemKey="cache" :text="t('layout.header.dropdownItemRefreshCache')" icon="ion:sync-outline" />
        <!-- <MenuItem
            v-if="getUseLockPage"
            itemKey="lock"
            :text="t('layout.header.tooltipLock')"
            icon="ion:lock-closed-outline"
        />-->
        <MenuItem itemKey="logout" :text="t('layout.header.dropdownItemLoginOut')" icon="ion:power-outline" />
      </Menu>
    </template>
  </Dropdown>
  <LockAction v-if="lockActionVisible" ref="lockActionRef" @register="register" />
  <UpdatePassword v-if="passwordVisible" ref="updatePasswordRef" />
</template>
<script lang="ts">
  // components
  import { Dropdown, Menu } from 'ant-design-vue';

  import { defineComponent, computed, ref, nextTick } from 'vue';

  import { SITE_URL } from '/@/settings/siteSetting';

  import { useUserStore } from '/@/store/modules/user';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/src/hooks/web/useMessage';
  import { useGo } from '/@/hooks/web/usePage';
  import { propTypes } from '/@/utils/propTypes';
  import { openWindow } from '/@/utils';

  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';

  import { refreshCache, queryAllDictItems } from '/@/views/system/dict/dict.api';
  import { DB_DICT_DATA_KEY } from '/src/enums/cacheEnum';
  import { removeAuthCache, setAuthCache } from '/src/utils/auth';
  import { getRefPromise } from '/@/utils/index';
  import { refreshDragCache, refreshHomeCache } from "@/api/common/api";

  type MenuEvent = 'logout' | 'doc' | 'lock' | 'cache' | 'defaultHomePage' | 'password' | 'account';
  const { createMessage } = useMessage();
  export default defineComponent({
    name: 'UserDropdown',
    components: {
      Dropdown,
      Menu,
      MenuItem: createAsyncComponent(() => import('./DropMenuItem.vue')),
      MenuDivider: Menu.Divider,
      LockAction: createAsyncComponent(() => import('../lock/LockModal.vue')),
      UpdatePassword: createAsyncComponent(() => import('./UpdatePassword.vue')),
    },
    props: {
      theme: propTypes.oneOf(['dark', 'light']),
      placement: propTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']).def('bottomLeft'),
      // Account settings page is not available yet; enable this prop when the page is ready.
      showAccountSettings: propTypes.bool.def(false),
    },
    setup() {
      const { prefixCls } = useDesign('header-user-dropdown');
      const { t } = useI18n();
      const { getShowDoc, getUseLockPage } = useHeaderSetting();
      const userStore = useUserStore();
      const go = useGo();
      const passwordVisible = ref(false);
      const lockActionVisible = ref(false);
      const lockActionRef = ref(null);

      const getUserInfo = computed(() => ({ realname: userStore.getUserInfo?.realname || '' }));

      const [register, { openModal }] = useModal();
      /**
       * 多部门弹窗逻辑
       */
      // 代码逻辑说明: 【QQYUN-6333】空路由问题—首次访问资源太大
      async function handleLock() {
        await getRefPromise(lockActionRef);
        openModal(true);
      }
      //  login out
      function handleLoginOut() {
        userStore.confirmLoginOut();
      }

      // open doc
      function openDoc() {
        openWindow(SITE_URL);
      }

      // 清除缓存
      async function clearCache() {
        const result = await refreshCache();
        const dragRes = await refreshDragCache();
        console.log('dragRes', dragRes);
        await refreshHomeCache();
        await userStore.getUserInfoAction();
        if (result.success) {
          const res = await queryAllDictItems();
          removeAuthCache(DB_DICT_DATA_KEY);
          setAuthCache(DB_DICT_DATA_KEY, res.result);
          createMessage.success(t('layout.header.refreshCacheComplete'));
          // 代码逻辑说明: 【issues/7433】vue3 数据字典优化建议
          userStore.setAllDictItems(res.result);
        } else {
          createMessage.error(t('layout.header.refreshCacheFailure'));
        }
      }
      // 修改密码
      const updatePasswordRef = ref();
      // 代码逻辑说明: 【QQYUN-6333】空路由问题—首次访问资源太大
      async function updatePassword() {
        passwordVisible.value = true;
        await getRefPromise(updatePasswordRef);
        updatePasswordRef.value.show(userStore.getUserInfo.username);
      }
      function handleMenuClick(e: { key: MenuEvent }) {
        switch (e.key) {
          case 'logout':
            handleLoginOut();
            break;
          case 'doc':
            openDoc();
            break;
          case 'lock':
            handleLock();
            break;
          case 'cache':
            clearCache();
            break;
          case 'password':
            updatePassword();
            break;
          case 'account':
            // 代码逻辑说明: 进入用户设置页面------------
            go(`/system/usersetting`);
            break;
        }
      }

      return {
        prefixCls,
        t,
        getUserInfo,
        handleMenuClick,
        getShowDoc,
        register,
        getUseLockPage,
        updatePasswordRef,
        passwordVisible,
        lockActionVisible,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-user-dropdown';

  .@{prefix-cls} {
    height: @header-height;
    padding: 0 0 0 10px;
    padding-right: 10px;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    &__header {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      margin-right: 8px;
      border-radius: 50%;
      background: #fceef0;
      color: #d77c87;

      svg { width: 18px; height: 18px; }
    }

    &__name {
      font-size: 14px;
    }

    &--dark {
      &:hover {
        background-color: @header-dark-bg-hover-color;
      }
    }

    &--light {
      &:hover {
        background-color: @header-light-bg-hover-color;
      }

      .@{prefix-cls}__name {
        color: @text-color-base;
      }

      .@{prefix-cls}__desc {
        color: @header-light-desc-color;
      }
    }

    &-dropdown-overlay {
      width: max-content;
      min-width: 160px;
      max-width: calc(100vw - 24px);

      .ant-dropdown-menu-item {
        padding: 8px 16px;

        > .ant-dropdown-menu-title-content > span {
          gap: 6px;

          > :first-child {
            flex-shrink: 0;
          }

          > span:last-child {
            white-space: normal;
            overflow-wrap: anywhere;
          }
        }
      }
    }
  }
</style>
