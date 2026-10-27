import { defHttp } from '/@/utils/http/axios';
export interface WebhookConfig {
  id: string;
  syncRetryCount?: number | null;
  [key: string]: string | number | null | undefined;
}
const base = '/shopify/member/shopifyWebhookSubscriptionConfig';
export const list = (params: Record<string, unknown>) => defHttp.get<{ records: WebhookConfig[]; total: number }>({ url: `${base}/list`, params });
export function payload(record: WebhookConfig) {
  const keys = [
    'id',
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
    'remoteTopic',
    'remoteUri',
    'remoteFormat',
    'remoteIncludeFields',
    'remoteFilterRule',
    'remoteCreatedAt',
    'syncRetryCount',
  ];
  return Object.fromEntries(keys.filter((key) => record[key] !== undefined).map((key) => [key, record[key]]));
}
export const save = (record: WebhookConfig) => defHttp.put({ url: `${base}/edit`, data: payload(record) });
export const syncRemote = (id: string) => defHttp.put({ url: `${base}/syncRemote?id=${encodeURIComponent(id)}` });
export const checkRemote = (id: string) => defHttp.get<WebhookConfig>({ url: `${base}/checkRemote`, params: { id } });
