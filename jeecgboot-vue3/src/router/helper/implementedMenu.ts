import type { AppRouteRecordRaw } from '/@/router/types';

// 仅筛选后台已授权的菜单，不创建菜单、不扩大账号权限。
export const implementedShopifyComponents = new Set([
  'shopify/member/levelAccount/ShopifyMemberLevelAccountList',
  'shopify/member/customer/ShopifyMemberCustomerList',
  'shopify/store/ShopifyStoreList',
  'shopify/storeI18n/ShopifyStoreI18nList',
  'shopify/storeCalendar/ShopifyStoreCalendarList',
  'shopify/store/ShopifyStoreRecycleList',
  'shopify/storeReservation/ShopifyStoreReservationList',
  'shopify/reservationSlotStat/ShopifyReservationSlotStatList',
  'shopify/reservationDailyUnlock/ShopifyReservationDailyUnlockList',
  'shopify/accountDeletion/ShopifyAccountDeletionList',
  'shopify/metaobjectMapping/ShopifyMetaobjectMappingList',
  'shopify/member/customerSubscriptionConfig/ShopifyCustomerSubscriptionConfigList',
  'shopify/subscription/ShopifyCustomerSubscriptionConfigList',
  'shopify/member/webhookConfig/ShopifyWebhookSubscriptionConfigList',
  'shopify/accountBindingReview/ShopifyThirdAccountBindingReviewList',
]);

/** 在组件解析、路由注册和侧边栏生成前过滤未实现页面及空目录。 */
export function filterImplementedMenus(menus: AppRouteRecordRaw[]): AppRouteRecordRaw[] {
  return (menus ?? []).flatMap((menu) => {
    const component = typeof menu.component === 'string' ? menu.component.replace(/^\/+/, '').replace(/\.vue$/, '') : '';
    if (menu.children?.length) {
      const children = filterImplementedMenus(menu.children);
      if (!children.length) return [];
      // 目录默认入口也必须指向保留下来的页面。
      const firstPath = children[0].path.startsWith('/') ? children[0].path : `${menu.path.replace(/\/$/, '')}/${children[0].path}`;
      return [{ ...menu, redirect: firstPath, children } as AppRouteRecordRaw];
    }
    return implementedShopifyComponents.has(component) ? [{ ...menu }] : [];
  });
}
