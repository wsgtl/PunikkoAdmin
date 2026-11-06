import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
import type { BasicColumn } from '/@/components/Table';
import type { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';
export const fields = ['mode', 'storeRef', 'customerId', 'reservationDate', 'unlockCount', 'reason'] as const;
export const detailFields = [...fields, 'operatorId', 'operatorName', 'createTime', 'updateTime'] as const;
export function createColumns(): BasicColumn[] {
  const { t } = useI18n();
  return fields.map((field) => ({
    title: t(`shopify.dailyUnlock.${field}`),
    dataIndex: field,
    width: field === 'customerId' || field === 'reason' ? 280 : 160,
    align: 'center',
    ellipsis: true,
    ...(['mode', 'storeRef'].includes(field)
      ? {
          customRender: ({ record }) =>
            field === 'mode' ? businessDictionaryText('shopify_reservation_mode', record.mode, undefined, record.mode_dictText) : (record[`${field}_dictText`] ?? record[field]),
        }
      : {}),
  }));
}
export function createSearchSchemas(modeOptions: () => { label: string; value: string }[]): FormSchema[] {
  const { t } = useI18n();
  return [
    {
      field: 'mode',
      label: t('shopify.dailyUnlock.mode'),
      component: 'Select',
      componentProps: () => ({ options: modeOptions(), allowClear: true }),
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    {
      field: 'storeRef',
      label: t('shopify.dailyUnlock.storeRef'),
      component: 'JDictSelectTag',
      componentProps: { dictCode: 'shopify_store,store_name,id', showSearch: true, allowClear: true },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
    { field: 'customerId', label: t('shopify.dailyUnlock.customerId'), component: 'Input', colProps: { xs: 24, md: 12, xl: 6 } },
    {
      field: 'reservationDate',
      label: t('shopify.dailyUnlock.reservationDate'),
      component: 'DatePicker',
      componentProps: { valueFormat: 'YYYY-MM-DD', style: { width: '100%' } },
      colProps: { xs: 24, md: 12, xl: 6 },
    },
  ];
}
