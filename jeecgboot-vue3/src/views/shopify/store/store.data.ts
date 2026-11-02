export const editFields = [
  'code',
  'storeName',
  'publishStatus',
  'hasReservableProducts',
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
  'remark',
  'reservationNotice',
  'storeMatters',
];
export const staffFields = ['storeManagerId', 'deputyManagerIds', 'salesclerkIds'];
export const numberFields = ['reservableDays', 'reservableNumber', 'dailyReservableNumber'];
export const dictCodes: Record<string, string> = {
  publishStatus: 'shopify_store_publish_status',
  hasReservableProducts: 'shopify_store_reservation_status',
};
export const listFields = [
  'code',
  'storeName',
  'storeAddress',
  'publishStatus',
  'hasReservableProducts',
  'businessDays',
  'reservableDays',
  'reservableNumber',
  'dailyReservableNumber',
  'storeManagerId',
  'deputyManagerIds',
  'salesclerkIds',
  'openTime',
  'closeTime',
];
export const slotFields = [
  'time',
  'limitNumber',
  'productReservedNumber',
  'storeReservedNumber',
  'reservedNumber',
  'remainingNumber',
  'available',
  'disabledReason',
  'reservedAt',
];
