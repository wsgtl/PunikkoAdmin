import { defHttp } from '/@/utils/http/axios';
export interface MemberPointLedger {
  id: string;
  memberId?: string;
  [key: string]: string | number | null | undefined;
}
const base = '/shopify/member/shopifyMemberPointLedger';
export const memberDictionary = 'shopify_member_customer,customer_name,id';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: MemberPointLedger[]; total: number }>({
    url: `${base}/list`,
    params: { column: 'createTime', order: 'desc', ...params },
  });
export const queryById = (id: string) => defHttp.get<MemberPointLedger>({ url: `${base}/queryById`, params: { id } });
