import { defHttp } from '/@/utils/http/axios';
export interface StoreCalendar {
  id?: string;
  storeRef: string;
  calendarDate: string;
  ruleType: string;
  openTime?: string | null;
  closeTime?: string | null;
  remark?: string;
  updateTime?: string;
  storeRef_dictText?: string;
  ruleType_dictText?: string;
}
const base = '/shopify/shopifyStoreCalendar';
export const list = (params: Record<string, unknown>) => defHttp.get<{ records: StoreCalendar[]; total: number }>({ url: `${base}/list`, params });
export const getStores = () =>
  defHttp.get<{ value: string; text?: string; label?: string }[]>({ url: '/sys/dict/getDictItems/shopify_store,store_name,id' });
export function payload(record: StoreCalendar, adding: boolean) {
  const data: Record<string, unknown> = {
    storeRef: record.storeRef,
    calendarDate: record.calendarDate,
    ruleType: record.ruleType,
    openTime: record.openTime ?? '',
    closeTime: record.closeTime ?? '',
    remark: record.remark ?? '',
  };
  if (!adding) data.id = record.id;
  return data;
}
export const save = (record: StoreCalendar, adding: boolean) =>
  adding ? defHttp.post({ url: `${base}/add`, data: payload(record, true) }) : defHttp.put({ url: `${base}/edit`, data: payload(record, false) });

export interface StoreBusinessHours {
  openTime?: string | null;
  closeTime?: string | null;
}
export const getStoreBusinessHours = (id: string) => defHttp.get<StoreBusinessHours>({ url: '/shopify/shopifyStore/queryFormById', params: { id } });

// Compare numeric time values so HH:mm and HH:mm:ss have identical boundaries.
export function timeSeconds(value?: string | null): number | undefined {
  const match = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(value ?? '');
  if (!match) return undefined;
  const [, hours, minutes, seconds = '0'] = match;
  if (+hours > 23 || +minutes > 59 || +seconds > 59) return undefined;
  return +hours * 3600 + +minutes * 60 + +seconds;
}
export function isWithinBusinessHours(start: string, end: string, hours: StoreBusinessHours): boolean {
  const values = [start, end, hours.openTime, hours.closeTime].map(timeSeconds);
  if (values.some((value) => value === undefined)) return false;
  const [from, to, opens, closes] = values as number[];
  return from < to && from >= opens && to <= closes;
}

export function calendarDisabledTimes(hours: StoreBusinessHours, field: 'openTime' | 'closeTime', selected: StoreBusinessHours) {
  const opens = timeSeconds(hours.openTime);
  const closes = timeSeconds(hours.closeTime);
  const other = timeSeconds(field === 'openTime' ? selected.closeTime : selected.openTime);
  const allowed = (hour: number, minute: number) => {
    if (opens === undefined || closes === undefined) return false;
    const time = hour * 3600 + minute * 60;
    if (field === 'openTime') return time >= opens && time < closes && (other === undefined || time < other);
    return time > opens && time <= closes && (other === undefined || time > other);
  };
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  return {
    disabledHours: () => Array.from({ length: 24 }, (_, i) => i).filter((hour) => !minutes.some((minute) => allowed(hour, minute))),
    disabledMinutes: (hour: number) => minutes.filter((minute) => !allowed(hour, minute)),
  };
}

export const deleteCalendar = (id: string) => defHttp.delete({ url: `${base}/delete?id=${encodeURIComponent(id)}` });
