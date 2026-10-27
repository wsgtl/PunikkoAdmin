import { defHttp } from '/@/utils/http/axios';

export interface ReservationSlotStat {
  id: string;
  storeRef: string;
  storeName?: string;
  storeRef_dictText?: string;
  statDate: string;
  slotTime: string;
  reservedAt?: string;
  limitNumber: number;
  productReservedNumber: number;
  storeReservedNumber: number;
  reservedNumber: number;
  remainingNumber: number;
  fullFlag: string;
  availableFlag: string;
  fullFlag_dictText?: string;
  availableFlag_dictText?: string;
  disabledReason?: string;
  snapshotKey?: string;
  archivedAt?: string;
  createTime?: string;
}

export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: ReservationSlotStat[]; total: number }>({ url: '/shopify/shopifyReservationSlotStat/list', params });
