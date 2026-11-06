import { unref } from 'vue';
import { i18n } from '../setupI18n';
import { businessDictionaries } from './dictionaries';

/** Only enum dictionaries belong here. Store/user/role names are business data. */
export function businessDictionaryText(code: string, value: unknown, locale = String(unref(i18n?.global.locale) ?? 'zh_CN')): string {
  if (value === null || value === undefined || value === '') return '—';
  const key = String(value);
  // Unknown values remain visible, without silently displaying a different language.
  return businessDictionaries[locale]?.[code]?.[key] ?? key;
}

/** The API controls the available values; this layer controls only their presentation. */
export function businessDictionaryOptions<T extends { value: string | number }>(code: string, items: readonly T[]) {
  return items.map((item) => ({
    ...item,
    label: businessDictionaryText(code, item.value),
    text: businessDictionaryText(code, item.value),
    title: businessDictionaryText(code, item.value),
  }));
}

export function businessDictionaryListText(code: string, values: unknown): string {
  if (values === null || values === undefined || values === '') return '—';
  return String(values)
    .split(',')
    .map((value) => businessDictionaryText(code, value.trim()))
    .join('、');
}

/** Shared framework dictionary loaders use this whitelist to leave table dictionaries untouched. */
export function adaptBusinessDictionaryItems<T>(code: string, items: T): T {
  if (!Object.prototype.hasOwnProperty.call(businessDictionaries.zh_CN, code) || !Array.isArray(items)) return items;
  return businessDictionaryOptions(code, items) as T;
}
