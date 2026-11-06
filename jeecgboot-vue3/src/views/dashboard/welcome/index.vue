<template>
  <main class="welcome-page">
    <section class="welcome-card">
      <span class="welcome-label">PUNIKKO ADMIN</span>
      <img :src="logo" alt="Punikko" class="welcome-logo" />
      <h1>{{ t('punikko.welcome') }}</h1>
      <p class="welcome-greeting">{{ t('punikko.greeting', { name: userName }) }}</p>
      <p class="welcome-description">{{ t('punikko.description') }}</p>
      <nav v-if="shortcuts.length" class="welcome-topics" :aria-label="t('punikko.shortcuts')">
        <RouterLink v-for="item in shortcuts" :key="item.path" :to="item.path" class="welcome-shortcut">
          <component :is="item.icon" class="welcome-shortcut__icon" />
          <span class="welcome-shortcut__label">{{ item.label }}</span>
        </RouterLink>
      </nav>
    </section>
    <p class="welcome-footer">{{ t('punikko.admin') }}</p>
  </main>
</template>

<script setup lang="ts">
  import { useI18n } from '/@/hooks/web/useI18n';
  import { computed } from 'vue';
  import { ShopOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons-vue';
  import { RouterLink, useRouter } from 'vue-router';
  import { useUserStore } from '/@/store/modules/user';
  import logo from '/@/assets/images/logo.png';

  defineOptions({ name: 'PunikkoWelcomePage' });
  const { t } = useI18n();
  const userStore = useUserStore();
  const router = useRouter();
  // 使用已注册的授权路由，兼容后台菜单自定义路径。
  const shortcuts = computed(() => {
    const entries = [
      { label: t('shopify.storeManagement.title'), component: 'shopify/store/ShopifyStoreList', icon: ShopOutlined },
      { label: t('shopify.storeReservation.title'), component: 'shopify/storeReservation/ShopifyStoreReservationList', icon: CalendarOutlined },
      { label: t('shopify.storeCalendar.title'), component: 'shopify/storeCalendar/ShopifyStoreCalendarList', icon: ClockCircleOutlined },
    ];
    const routes = router.getRoutes();
    return entries.flatMap((entry) => {
      const route = routes.find((item) => {
        const component = item.meta.originComponent as string | undefined;
        return component?.replace(/^\/+/, '').replace(/\.vue$/, '') === entry.component;
      });
      return route ? [{ label: entry.label, icon: entry.icon, path: route.path }] : [];
    });
  });
  const userName = computed(() => userStore.getUserInfo.realname || userStore.getUserInfo.username || t('punikko.guest'));
</script>

<style scoped lang="less">
  .welcome-page {
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
    background: radial-gradient(ellipse at top, #fceef0, #f7f8fa 75%);
  }
  .welcome-card {
    width: 100%;
    max-width: 920px;
    padding: 48px 24px;
    text-align: center;
    background: #fff;
    border: 1px solid #f5dce0;
    border-radius: 20px;
    box-shadow: 0 12px 40px #b975850c;
  }
  .welcome-label { font-size: 12px; letter-spacing: 3px; color: #bb7c85; }
  .welcome-logo { display: block; width: 240px; max-width: 70%; height: auto; margin: 32px auto; }
  h1 { margin: 0; color: #633c36; font-size: clamp(22px, 3vw, 32px); font-weight: 600; }
  .welcome-greeting { margin: 20px 0 8px; color: #d77c87; font-size: 18px; }
  .welcome-description { color: #8c8587; line-height: 1.8; }
  .welcome-topics {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
  }
  .welcome-shortcut {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 48px;
    padding: 12px 20px;
    border: 1px solid transparent;
    border-radius: 10px;
    background: #fff5f7;
    color: #bd7a85;
    line-height: 20px;
    transition: background 0.2s, border-color 0.2s;
    &:hover { color: #d77c87; background: #fceef0; border-color: #edc0c8; }
    &:focus-visible { outline: 2px solid #d77c87; outline-offset: 3px; }
    &__icon { display: inline-flex; align-items: center; font-size: 16px; line-height: 1; }
    &__label { line-height: 20px; }
  }
  .welcome-footer { margin: 24px 0 0; color: #b6a5a9; font-size: 12px; }
</style>
