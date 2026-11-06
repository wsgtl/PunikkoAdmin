import { defHttp } from '/@/utils/http/axios';
export interface MemberPointRule {
  id: string;
  [key: string]: string | number | null | undefined;
}
export const fields = ['ruleCode', 'ruleName', 'channel', 'baseAmount', 'points', 'startTime', 'endTime', 'status', 'priority', 'remark'];
const base = '/shopify/member/shopifyMemberPointRule';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: MemberPointRule[]; total: number }>({ url: `${base}/list`, params: { column: 'createTime', order: 'desc', ...params } });
export const queryById = (id: string) => defHttp.get<MemberPointRule>({ url: `${base}/queryById`, params: { id } });
export const save = (record: MemberPointRule) =>
  defHttp.put({ url: `${base}/edit`, data: Object.fromEntries(['id', ...fields].map((key) => [key, record[key] ?? null])) });

export const add = (record: MemberPointRule) =>
  defHttp.post({ url: `${base}/add`, data: Object.fromEntries(fields.map((key) => [key, record[key] ?? null])) });
