import { ref } from 'vue';

// Shared by every picker, including a picker inside a session-timeout dialog.
export const localeSwitchPending = ref(false);
export function acquireLocaleSwitch(): boolean {
  if (localeSwitchPending.value) return false;
  localeSwitchPending.value = true;
  return true;
}
export function releaseLocaleSwitch() {
  localeSwitchPending.value = false;
}
