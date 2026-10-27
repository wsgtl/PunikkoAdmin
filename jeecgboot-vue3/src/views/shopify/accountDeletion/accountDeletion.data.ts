import type { BasicColumn } from '/@/components/Table';
import type { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';

export const fields = [
  'requestNo',
  'username',
  'shopifyCustomerGid',
  'status',
  'progress',
  'currentHandler',
  'retryCount',
  'lastError',
  'requestedTime',
  'completedTime',
] as const;
export function createColumns(): BasicColumn[] {
  const { t } = useI18n();
  return fields.map((field) => ({
    title: t(`shopify.accountDeletion.${field}`),
    dataIndex: field,
    width: field === 'shopifyCustomerGid' ? 300 : ['status', 'progress', 'retryCount'].includes(field) ? 110 : 220,
    align: 'center',
    ellipsis: true,
    ...(field === 'status'
      ? {
          customRender: ({ record }) =>
            record.status_dictText ?? (record.status === 'SUCCEEDED' ? t('shopify.accountDeletion.succeeded') : record.status),
        }
      : {}),
    ...(field === 'progress' ? { customRender: ({ text }) => (text == null ? '—' : `${text}%`) } : {}),
    ...(field === 'lastError' || field === 'completedTime' ? { customRender: ({ text }) => text ?? '—' } : {}),
  }));
}
export function createSearchSchemas(): FormSchema[] {
  const { t } = useI18n();
  return ['requestNo', 'username', 'shopifyCustomerGid'].map((field) => ({
    field,
    label: t(`shopify.accountDeletion.${field}`),
    component: 'Input',
    componentProps: { allowClear: true },
    colProps: { xs: 24, md: 12, xl: 6 },
  }));
}
