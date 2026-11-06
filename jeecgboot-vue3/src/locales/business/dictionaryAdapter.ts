import { unref } from 'vue';
import { i18n } from '../setupI18n';
import { businessDictionaries } from './dictionaries';

/** Only enum dictionaries belong here. Store/user/role names are business data. */
export function businessDictionaryText(
  code: string,
  value: unknown,
  locale = String(unref(i18n?.global.locale) ?? 'zh_CN'),
  defaultText?: unknown
): string {
  if (value === null || value === undefined || value === '') return '—';
  const key = String(value);
  const translated = businessDictionaries[locale]?.[code]?.[key];
  if (typeof translated === 'string' && translated.trim()) return translated;
  if (typeof defaultText === 'string' && defaultText.trim()) return defaultText;
  return businessDictionaries.zh_CN?.[code]?.[key] || key;
}

/** The API controls the available values; this layer controls only their presentation. */
export function businessDictionaryOptions<T extends { value: string | number; text?: string; label?: string; title?: string }>(code: string, items: readonly T[]) {
  return items.map((item) => {
    const defaultText = [item.text, item.label, item.title].find((text) => typeof text === 'string' && text.trim());
    const text = businessDictionaryText(code, item.value, undefined, defaultText);
    return { ...item, label: text, text, title: text };
  });
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
