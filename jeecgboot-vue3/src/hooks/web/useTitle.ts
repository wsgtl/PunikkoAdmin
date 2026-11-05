import { useTitle as usePageTitle } from '@vueuse/core';

/** Keep the browser tab title consistent across all pages. */
export function useTitle() {
  usePageTitle('Punikko Admin');
}
