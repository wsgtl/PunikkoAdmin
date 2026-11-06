import { defHttp } from '/@/utils/http/axios';
export interface MemberPurchaseArchive {
  id: string;
  memberId?: string;
  [key: string]: string | number | null | undefined;
}
const base = '/shopify/member/purchaseArchive';
export const memberDictionary = 'shopify_member_customer,customer_name,id';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: MemberPurchaseArchive[]; total: number }>({
    url: `${base}/list`,
    params: { column: 'createTime', order: 'desc', ...params },
  });
export const queryById = (id: string) => defHttp.get<Record<string, unknown>>({ url: `${base}/queryById`, params: { id } });
