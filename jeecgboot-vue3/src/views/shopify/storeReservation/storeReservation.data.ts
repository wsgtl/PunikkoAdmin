import type { BasicColumn } from '/@/components/Table';
import type { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';

export const reservationFields = [
  'code',
  'customerName',
  'customerEmail',
  'customerPhone',
  'storeName',
  'status',
  'reservedAt',
  'expiresAt',
  'remark',
] as const;

export function createColumns(): BasicColumn[] {
  const { t } = useI18n();
  const widths = [220, 160, 230, 150, 230, 110, 180, 180, 180];
  return reservationFields.map((field, index) => ({
    title: t(`shopify.storeReservation.${field}`),
    dataIndex: field,
    width: widths[index],
    ellipsis: true,
    align: 'center',
    ...(field === 'status' ? { slots: { customRender: 'status' } } : {}),
  }));
}

export function createSearchSchemas(statusOptions: () => { label: string; value: string | number }[]): FormSchema[] {
  const { t } = useI18n();
  return ['code', 'customerName', 'customerEmail', 'customerPhone', 'storeName', 'status'].map((field) => ({
    field,
    label: t(`shopify.storeReservation.${field}`),
    component: field === 'status' ? 'Select' : 'Input',
    colProps: { xs: 24, md: 12, xl: 6 },
    componentProps: () => ({
      allowClear: true,
      ...(field === 'status' ? { options: statusOptions() } : {}),
    }),
  }));
}

export function createSuperQueryConfig() {
  const { t } = useI18n();
  return Object.fromEntries(
    reservationFields
      .filter((field) => field !== 'status')
      .map((field, order) => [
        field,
        {
          title: t(`shopify.storeReservation.${field}`),
          view: field === 'reservedAt' || field === 'expiresAt' ? 'datetime' : 'text',
          type: 'string',
          order,
        },
      ])
  );
}
