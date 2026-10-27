import { defHttp } from '/@/utils/http/axios';
export interface BindingReview {
  id: string;
  [key: string]: string | number | null | undefined;
}
const base = '/shopify/member/shopifyThirdAccountBindingReview';
export const list = (params: Record<string, unknown>) => defHttp.get<{ records: BindingReview[]; total: number }>({ url: `${base}/list`, params });
export const queryById = (id: string) => defHttp.get<BindingReview>({ url: `${base}/queryById`, params: { id } });
