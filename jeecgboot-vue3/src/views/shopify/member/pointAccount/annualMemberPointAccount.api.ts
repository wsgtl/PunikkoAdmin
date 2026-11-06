import { defHttp } from '/@/utils/http/axios';
export interface AnnualMemberPointAccount {
  id: string;
  memberId?: string;
  [key: string]: string | number | null | undefined;
}
const base = '/shopify/member/shopifyAnnualMemberPointAccount';
export const memberDictionary = 'shopify_member_customer,customer_name,id';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: AnnualMemberPointAccount[]; total: number }>({
    url: `${base}/list`,
    params: { column: 'createTime', order: 'desc', ...params },
  });
export const queryById = (id: string) => defHttp.get<AnnualMemberPointAccount>({ url: `${base}/queryById`, params: { id } });
