import { defHttp } from '/@/utils/http/axios';

export interface StoreReservation {
  id: string;
  code: string;
  customerId?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  storeRef?: string;
  storeName?: string;
  storeAddress?: string;
  status: string;
  status_dictText?: string;
  reservedAt?: string;
  expiresAt?: string;
  remark?: string;
  createTime?: string;
}

export interface ReservationPage {
  records: StoreReservation[];
  total: number;
  current: number;
  size: number;
}

export interface DictItem {
  value: string | number;
  text?: string;
  label?: string;
}

export const list = (params: Record<string, unknown>) => defHttp.get<ReservationPage>({ url: '/shopify/shopifyStoreReservation/list', params });

// 当前兼容全量字典，页面按 code 选择一组，选项值始终使用后端 value。
export const loadDictionaries = () => defHttp.get<Record<string, DictItem[]>>({ url: '/sys/dict/queryAllDictItems' });
