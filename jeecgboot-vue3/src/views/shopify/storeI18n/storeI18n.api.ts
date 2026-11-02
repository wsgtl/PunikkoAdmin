import { defHttp } from '/@/utils/http/axios';
export interface StoreTranslation {
  id?: string;
  storeId: string;
  language: string;
  storeName: string;
  storeAddress: string;
  storeMatters: string;
  reservationNotice: string;
  remark: string;
  storeId_dictText?: string;
  language_dictText?: string;
}
const base = '/shopify/shopifyStoreI18n';
export const list = (params: Record<string, unknown>) => defHttp.get<{ records: StoreTranslation[]; total: number }>({ url: `${base}/list`, params });
export const getStores = () =>
  defHttp.get<{ value: string; text?: string; label?: string }[]>({ url: '/sys/dict/getDictItems/shopify_store,store_name,id' });
export function payload(record: StoreTranslation, adding: boolean) {
  const { storeId, language, storeName, storeAddress, storeMatters, reservationNotice, remark } = record;
  return { storeId, language, storeName, storeAddress, storeMatters, reservationNotice, remark, ...(!adding ? { id: record.id } : {}) };
}
export const save = (record: StoreTranslation, adding: boolean) =>
  adding ? defHttp.post({ url: `${base}/add`, data: payload(record, true) }) : defHttp.put({ url: `${base}/edit`, data: payload(record, false) });

export const queryById = (id: string) => defHttp.get<StoreTranslation>({ url: `${base}/queryById`, params: { id } });
export const deleteTranslation = (id: string) => defHttp.delete({ url: `${base}/delete?id=${encodeURIComponent(id)}` });
