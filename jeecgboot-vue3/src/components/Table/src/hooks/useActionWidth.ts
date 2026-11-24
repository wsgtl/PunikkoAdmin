import { provide, ref } from 'vue';
import type { InjectionKey } from 'vue';

export const actionWidthKey: InjectionKey<(element: HTMLElement, width?: number) => void> = Symbol('table-action-width');

export function provideActionWidth() {
  const width = ref(220);
  const measurements = new Map<HTMLElement, number>();
  provide(actionWidthKey, (element, measured) => {
    if (measured === undefined) measurements.delete(element);
    else measurements.set(element, measured);
    width.value = Math.max(220, ...measurements.values());
  });
  return width;
}
