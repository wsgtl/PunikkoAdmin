import type { DropMenu } from '../components/Dropdown';
import type { LocaleSetting, LocaleType } from '/#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
  JA_JP: 'ja_JP',
};

/**
 * 获取浏览器语言并映射到框架支持的语言
 * 日文(ja) -> ja_JP
 * 中文(zh) -> zh_CN
 * 其他 -> en
 */
export function getBrowserLocale(): LocaleType {
  const lang = navigator.language || (navigator as any).browserLanguage || 'en';
  if (lang.startsWith('ja')) {
    return LOCALE.JA_JP;
  }
  if (lang.startsWith('zh')) {
    return LOCALE.ZH_CN;
  }
  return LOCALE.EN_US;
}

/**
 * 根据环境获取默认语言
 * 生产环境 -> 日文（正式环境使用）
 * 开发/测试环境 -> 中文
 */
export function getDefaultLocaleByEnv(): LocaleType {
  // import.meta.env.PROD 为 true 时是生产构建
  if (import.meta.env.PROD) {
    return LOCALE.JA_JP;
  }
  return LOCALE.ZH_CN;
}

export const localeSetting: LocaleSetting = {
  // 是否显示语言选择器
  showPicker: true,
  // 当前语言（优先浏览器语言，其次根据环境）
  locale: getBrowserLocale(),
  // 默认语言（回退）
  fallback: LOCALE.EN_US,
  // 允许的语言
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US, LOCALE.JA_JP],
};

// 语言列表
export const localeList: DropMenu[] = [
  {
    text: '简体中文',
    event: LOCALE.ZH_CN,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
  {
    text: '日本語',
    event: LOCALE.JA_JP,
  },
];