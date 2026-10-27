import type { BasicColumn } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
export const editFields = [
  'topic',
  'callbackUri',
  'format',
  'localStatus',
  'includeFields',
  'filterRule',
  'syncStatus',
  'remoteSubscriptionId',
  'lastSyncTime',
  'lastCheckTime',
  'lastError',
  'remark',
];
export const readonlyFields = ['syncStatus', 'remoteSubscriptionId', 'lastSyncTime', 'lastCheckTime', 'lastError'];
export const dictionaryCodes: Record<string, string> = {
  topic: 'shopify_webhook_topic',
  localStatus: 'shopify_enabled_status',
  syncStatus: 'shopify_webhook_sync_status',
};
export type Dictionaries = Record<string, { value: string; text?: string; label?: string }[]>;
export const options = (dicts: Dictionaries, field: string) =>
  (dicts[dictionaryCodes[field]] ?? []).map((item) => ({ value: item.value, label: item.text ?? item.label ?? item.value }));
export function display(dicts: Dictionaries, field: string, record: Record<string, unknown>) {
  return options(dicts, field).find((item) => item.value === record[field])?.label ?? record[`${field}_dictText`] ?? record[field] ?? '—';
}
export function createColumns(dicts: Dictionaries): BasicColumn[] {
  const { t } = useI18n();
  return [
    'topic',
    'callbackUri',
    'format',
    'localStatus',
    'syncStatus',
    'remoteSubscriptionId',
    'lastSyncTime',
    'lastCheckTime',
    'lastError',
    'remark',
  ].map((field) => ({
    title: t(`shopify.webhookConfig.${field}`),
    dataIndex: field,
    width: ['callbackUri', 'remoteSubscriptionId'].includes(field) ? 280 : 180,
    ellipsis: true,
    customRender: ({ record }) => display(dicts, field, record),
  }));
}
