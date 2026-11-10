import type { BasicColumn } from '/@/components/Table';
import type { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';

export const STORE_DICT_CODE = 'shopify_store,store_name,id';
export const listFields = [
  'statDate',
  'slotTime',
  'storeRef',
  'storeName',
  'limitNumber',
  'productReservedNumber',
  'storeReservedNumber',
  'reservedNumber',
  'disabledReason',
] as const;
export const detailFields = [
  ...listFields,
  'remainingNumber',
  'reservedAt',
  'fullFlag',
  'availableFlag',
  'disabledReason',
  'archivedAt',
  'snapshotKey',
  'createTime',
] as const;

export function createColumns(): BasicColumn[] {
  const { t } = useI18n();
  return listFields.map((field) => ({
    title: t(`shopify.reservationSlotStat.${field}`),
    dataIndex: field,
    width: field === 'storeRef' || field === 'storeName' ? 230 : field === 'disabledReason' ? 200 : 140,
    align: 'center',
    ellipsis: true,
    ...(field === 'storeRef' ? { customRender: ({ record }) => record.storeRef_dictText ?? record.storeRef } : {}),
  }));
}

export function createSearchSchemas(): FormSchema[] {
  const { t } = useI18n();
  return [
    {
      field: 'storeRef',
      label: t('shopify.reservationSlotStat.storeRef'),
      component: 'JDictSelectTag',
      componentProps: { dictCode: STORE_DICT_CODE, showSearch: true, allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    {
      field: 'statDate',
      label: t('shopify.reservationSlotStat.statDate'),
      component: 'DatePicker',
      componentProps: { valueFormat: 'YYYY-MM-DD', format: 'YYYY-MM-DD', style: { width: '100%' } },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    { field: 'slotTime', label: t('shopify.reservationSlotStat.slotTime'), component: 'Input', colProps: { xs: 24, md: 12, xl: 6 } },
  ];
}

export function createSuperQueryConfig() {
  const { t } = useI18n();
  return Object.fromEntries(
    listFields.map((field, order) => [
      field,
      {
        title: t(`shopify.reservationSlotStat.${field}`),
        view: field === 'statDate' ? 'date' : field === 'storeRef' ? 'list' : field.endsWith('Number') ? 'number' : 'text',
        type: field.endsWith('Number') ? 'number' : 'string',
        ...(field === 'storeRef' ? { dictCode: STORE_DICT_CODE } : {}),
        order,
      },
    ])
  );
}
