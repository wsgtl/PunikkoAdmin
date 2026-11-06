import { defHttp } from '/@/utils/http/axios';
export interface StoreRecord {
  id?: string;
  [key: string]: any;
}
export interface StoreTranslation {
  id?: string;
  storeId?: string;
  language: string;
  storeName?: string;
  storeAddress?: string;
  remark?: string;
  reservationNotice?: string;
  storeMatters?: string;
}
export function initializeStoreTranslations(rows: StoreTranslation[] = []): StoreTranslation[] {
  const languages = ['zh', 'en', 'ja'];
  return [
    ...languages.map((language) => ({
      storeName: '',
      storeAddress: '',
      remark: '',
      reservationNotice: '',
      storeMatters: '',
      ...rows.find((row) => row.language === language),
      language,
    })),
    ...rows.filter((row) => !languages.includes(row.language)).map((row) => ({ ...row })),
  ];
}
export interface Slot {
  time: string;
  reservedAt: string;
  limitNumber: number;
  productReservedNumber: number;
  storeReservedNumber: number;
  reservedNumber: number;
  remainingNumber: number;
  available: boolean;
  full: boolean;
  disabledReason: string;
}
export interface StoreSlots {
  storeName: string;
  slotList: { date: string; slots: Slot[] }[];
}
const base = '/shopify/shopifyStore';
export const list = (params: Record<string, unknown>) => defHttp.get<{ records: StoreRecord[]; total: number }>({ url: `${base}/list`, params });
export const queryForm = (id: string) => defHttp.get<StoreRecord>({ url: `${base}/queryFormById`, params: { id } });
export const getBusinessDays = () =>
  defHttp.get<{ value: string; text?: string; label?: string }[]>({ url: '/sys/dict/getDictItems/shopify_business_day' });
export const getUser = (id: string) =>
  defHttp.get<{ records: { id: string; realname?: string; username?: string }[] }>({
    url: '/sys/user/list',
    params: { isMultiTranslate: true, pageSize: 1, id },
  });
export const getSlots = (storeRef: string) => defHttp.get<StoreSlots>({ url: '/shopify/user/reservationSlots/store', params: { storeRef } });
export function payload(record: StoreRecord) {
  const fields = [
    'id',
    'code',
    'storeName',
    'publishStatus',
    'hasReservableProducts',
    'reservationNotice',
    'storeAddress',
    'businessDays',
    'reservableDays',
    'reservableNumber',
    'dailyReservableNumber',
    'storeManagerId',
    'deputyManagerIds',
    'salesclerkIds',
    'openTime',
    'closeTime',
    'phone',
    'storeMatters',
    'remark',
    'shopifyStoreI18nList',
  ];
  return Object.fromEntries(fields.filter((key) => record[key] !== undefined).map((key) => [key, record[key]]));
}
export const save = (record: StoreRecord) => defHttp.put({ url: `${base}/edit`, data: payload(record) });
export const searchUsers = (realname: string) =>
  defHttp.get<{ records: { id: string; realname?: string; username?: string }[] }>({
    url: '/sys/user/list',
    params: { isMultiTranslate: true, pageNo: 1, pageSize: 20, realname },
  });

// 初始值依据新增门店原型；每次打开返回独立对象，避免带入上次编辑内容。
export function createStoreDraft(): StoreRecord {
  return {
    shopifyStoreI18nList: initializeStoreTranslations(),
    code: '',
    storeName: '',
    publishStatus: 'N',
    hasReservableProducts: 'N',
    businessDays: '1,2,3,4,5',
    reservableDays: 1,
    reservableNumber: 40,
    dailyReservableNumber: 1,
    storeManagerId: '',
    deputyManagerIds: '',
    salesclerkIds: '',
    openTime: '',
    closeTime: '',
    reservationNotice: '',
    storeMatters: '',
    storeAddress: '',
    phone: '',
    remark: '',
  };
}
export const add = (record: StoreRecord) => {
  const data = payload(record);
  delete data.id;
  return defHttp.post({ url: `${base}/add`, data });
};

export const deleteStore = (id: string) => defHttp.delete({ url: `${base}/delete?id=${encodeURIComponent(id)}` });
