import { defHttp } from '/@/utils/http/axios';
export interface SubscriptionConfig {
  id: string;
  sysUserId?: string | null;
  username?: string | null;
  customerId?: string | null;
  customerName?: string | null;
  customerEmail?: string | null;
  shopifySub?: string | null;
  configKey?: string | null;
  configName?: string | null;
  configSource?: string | null;
  localStatus?: string | null;
  localOptInLevel?: string | null;
  remoteStatus?: string | null;
  remoteOptInLevel?: string | null;
  remoteUpdatedAt?: string | null;
  syncStatus?: string | null;
  lastSyncTime?: string | null;
  lastRefreshTime?: string | null;
  lastError?: string | null;
  remark?: string | null;
  [key: string]: string | null | undefined;
}
const base = '/shopify/subscription/shopifyCustomerSubscriptionConfig';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: SubscriptionConfig[]; total: number }>({ url: `${base}/list`, params });
export const loadDictionaries = () =>
  defHttp.get<Record<string, { value: string; text?: string; label?: string }[]>>({ url: '/sys/dict/queryAllDictItems' });
export function payload(record: SubscriptionConfig) {
  const keys = [
    'id',
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
  return Object.fromEntries(keys.filter((key) => record[key] !== undefined).map((key) => [key, record[key]]));
}
export const saveLocal = (record: SubscriptionConfig) => defHttp.put({ url: `${base}/edit`, data: payload(record) });
export const saveAndSync = (record: SubscriptionConfig) => defHttp.post({ url: `${base}/saveAndSyncRemote`, data: payload(record) });
export const syncRemote = (id: string) => defHttp.put({ url: `${base}/syncRemote?id=${encodeURIComponent(id)}` });
