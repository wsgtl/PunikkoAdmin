import { defHttp } from '/@/utils/http/axios';

export interface DailyUnlock {
  id: string;
  mode: string;
  storeRef: string;
  customerId: string;
  reservationDate: string;
  unlockCount: number;
  reason?: string;
  operatorId?: string;
  operatorName?: string;
  mode_dictText?: string;
  storeRef_dictText?: string;
  createTime?: string;
  updateTime?: string;
}
export interface StoreOption {
  value: string;
  text?: string;
  label?: string;
}
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: DailyUnlock[]; total: number }>({ url: '/shopify/shopifyReservationDailyUnlock/list', params });
// 弹窗每次打开时重新获取门店选项。
export const getStoreOptions = () => defHttp.get<StoreOption[]>({ url: '/sys/dict/getDictItems/shopify_store,store_name,id' });
export const releaseCustomer = (data: DailyUnlock) =>
  defHttp.put(
    {
      url: '/shopify/shopifyReservationDailyUnlock/edit',
      data: {
        id: data.id,
        mode: data.mode,
        storeRef: data.storeRef,
        customerId: data.customerId,
        reservationDate: data.reservationDate,
        unlockCount: data.unlockCount,
        reason: data.reason,
        operatorId: data.operatorId,
        operatorName: data.operatorName,
      },
    },
    { errorMessageMode: 'none' }
  );
