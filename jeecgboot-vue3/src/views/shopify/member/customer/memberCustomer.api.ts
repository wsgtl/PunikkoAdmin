import { defHttp } from '/@/utils/http/axios';
export interface MemberCustomer {
  id: string;
  customerSex?: number | null;
  [key: string]: string | number | null | undefined;
}
export interface PendingUser {
  sysUserId: string;
  username: string;
  realname: string;
  email: string;
  phone: string;
  shopifySub: string;
}
export interface SyncResult {
  requestedCount: number;
  successCount: number;
  skippedCount: number;
  failedCount: number;
  failedMessages?: string[];
}
const base = '/shopify/member/shopifyMemberCustomer';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: MemberCustomer[]; total: number }>({ url: `${base}/list`, params: { column: 'createTime', order: 'desc', ...params } });
export const pendingUsers = (params: Record<string, unknown>) =>
  defHttp.get<{ records: PendingUser[]; total: number }>({ url: `${base}/pendingSyncUsers`, params });
export const editFields = [
  'memberCode',
  'shopifyCustomerGid',
  'shopifyCustomerId',
  'customerEmail',
  'customerPhone',
  'customerName',
  'customerFirstName',
  'customerLastName',
  'customerBirthday',
  'customerSex',
  'smaregiCustomerCode',
  'status',
  'lastSyncTime',
  'shopifyUpdatedAt',
  'remark',
] as const;
export const save = (record: MemberCustomer) =>
  defHttp.post({
    url: `${base}/edit`,
    data: Object.fromEntries(
      ['id', 'sysUserId', 'smaregiCustomerId', ...editFields].filter((key) => record[key] !== undefined).map((key) => [key, record[key]])
    ),
  });
export const syncAllPendingUsers = () => defHttp.post<SyncResult>({ url: `${base}/syncAllPendingUsers` });
export const syncSelectedUsers = (sysUserIds: string[]) => defHttp.post<SyncResult>({ url: `${base}/syncSelectedUsers`, data: { sysUserIds } });
export const syncAllLevelAccounts = () => defHttp.post<SyncResult>({ url: `${base}/syncAllLevelAccounts` });
export const syncSelectedLevelAccounts = (memberIds: string[]) =>
  defHttp.post<SyncResult>({ url: `${base}/syncSelectedLevelAccounts`, data: { memberIds } });
