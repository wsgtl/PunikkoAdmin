import { useI18n } from './useI18n';
import { navigationTitleKeys } from '/@/locales/business/navigation';

/** Translate navigation labels at render time, including titles restored from the tab cache. */
export function useNavigationI18n() {
  return {
    t: (title: string) => {
      const key = Object.prototype.hasOwnProperty.call(navigationTitleKeys, title) ? navigationTitleKeys[title] : title;
      return useI18n().t(key);
    },
  };
}
