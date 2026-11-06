import { defHttp } from '/@/utils/http/axios';
export interface MemberLevel {
  id: string;
  [key: string]: string | number | null | undefined;
}
export const fields = ['levelCode', 'levelName', 'shopifyCustomerTag', 'minCumulativeAmount', 'maxCumulativeAmount', 'priority', 'status', 'remark'];
const base = '/shopify/member/shopifyMemberLevel';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: MemberLevel[]; total: number }>({ url: `${base}/list`, params: { column: 'createTime', order: 'desc', ...params } });
export const queryById = (id: string) => defHttp.get<MemberLevel>({ url: `${base}/queryById`, params: { id } });
export const save = (record: MemberLevel) =>
  defHttp.put({ url: `${base}/edit`, data: Object.fromEntries(['id', ...fields].map((key) => [key, record[key] ?? null])) });
