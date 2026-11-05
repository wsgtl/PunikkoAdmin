import { computed } from 'vue';
import { useAppInject } from '/@/hooks/web/useAppInject';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
import { useAppStore } from '/@/store/modules/app';

export function useSidebarUserBar() {
  const { getIsMobile } = useAppInject();
  const { getShowSidebar, getIsMixSidebar, getMenuHidden } = useMenuSetting();
  const appStore = useAppStore();
  return computed(() => !getIsMobile.value && getShowSidebar.value && !getIsMixSidebar.value &&
    !getMenuHidden.value && !appStore.getLayoutHideSider);
}
