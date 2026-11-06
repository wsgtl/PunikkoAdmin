import { businessDictionaryText, businessDictionaryOptions } from '/@/locales/business/dictionaryAdapter';
import type { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
export const editFields = [
  'sysUserId',
  'username',
  'customerId',
  'customerName',
  'customerEmail',
  'shopifySub',
  'configKey',
  'configName',
  'configSource',
  'localStatus',
  'localOptInLevel',
  'remoteStatus',
  'remoteOptInLevel',
  'remoteUpdatedAt',
  'syncStatus',
  'lastSyncTime',
  'lastRefreshTime',
  'lastError',
  'remark',
];
export const selectFields = ['configSource', 'localStatus', 'localOptInLevel'];
export const readonlyFields = [
  'sysUserId',
  'username',
  'remoteStatus',
  'remoteOptInLevel',
  'remoteUpdatedAt',
  'syncStatus',
  'lastSyncTime',
  'lastRefreshTime',
  'lastError',
];
export interface SubscriptionDictItem {
  value: string;
  text?: string;
  label?: string;
}
export type SubscriptionDictionaries = Record<string, SubscriptionDictItem[]>;
export const dictionaryCodes: Record<string, string> = {
  configSource: 'shopify_customer_subscription_source',
  localStatus: 'shopify_customer_subscription_status',
  remoteStatus: 'shopify_customer_subscription_status',
  localOptInLevel: 'shopify_marketing_opt_in_level',
  remoteOptInLevel: 'shopify_marketing_opt_in_level',
  syncStatus: 'shopify_customer_subscription_sync_status',
  configKey: 'shopify_customer_subscription_key',
};
export function dictionaryOptions(dictionaries: SubscriptionDictionaries, field: string) {
  return businessDictionaryOptions(dictionaryCodes[field], dictionaries[dictionaryCodes[field]] ?? []);
}
export function dictionaryText(dictionaries: SubscriptionDictionaries, field: string, record: Record<string, any>) {
  return dictionaryCodes[field]
    ? businessDictionaryText(dictionaryCodes[field], record[field], undefined, record[`${field}_dictText`])
    : (record[`${field}_dictText`] ?? record[field] ?? '—');
}
export function createColumns(dictionaries: SubscriptionDictionaries = {}): BasicColumn[] {
  const { t } = useI18n();
  return [
    'customerName',
    'customerEmail',
    'configName',
    'configSource',
    'localStatus',
    'remoteStatus',
    'syncStatus',
    'remoteUpdatedAt',
    'lastSyncTime',
    'lastRefreshTime',
    'lastError',
    'remark',
  ].map((field) => ({
    title: t(`shopify.customerSubscription.${field}`),
    dataIndex: field,
    width: field.includes('Time') || field === 'remoteUpdatedAt' || field === 'customerEmail' ? 200 : 150,
    ellipsis: true,
    customRender: ({ record }) => dictionaryText(dictionaries, field, record),
  }));
}
