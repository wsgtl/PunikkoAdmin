<template>
  <section class="editor-section">
    <h3 class="editor-section__title">{{ title }}</h3>
    <slot />
  </section>
</template>
<script setup lang="ts">
  defineProps<{ title: string }>();
</script>
<style scoped lang="less">
  .editor-section {
    margin-bottom: 28px;
  }
  .editor-section__title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 18px;
    font-size: 14px;
    font-weight: 500;
    &::before {
      content: '';
      width: 3px;
      height: 12px;
      border-radius: 2px;
      background: var(--ant-primary-color, #e995a5);
    }
  }
</style>
