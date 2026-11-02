import { defHttp } from '/@/utils/http/axios';
import type { StoreRecord } from './store.api';
const base = '/shopify/shopifyStore/recycle';
export const list = (params: Record<string, unknown>) => defHttp.get<{ records: StoreRecord[]; total: number }>({ url: `${base}/list`, params });
export const queryById = (id: string) => defHttp.get<StoreRecord>({ url: `${base}/queryById`, params: { id } });
export const restore = (id: string) => defHttp.post({ url: `${base}/restore?id=${encodeURIComponent(id)}` });
export const physicalDelete = (id: string) => defHttp.delete({ url: `${base}/physicalDelete?id=${encodeURIComponent(id)}` });
