import { businessDictionaryText } from '/@/locales/business/dictionaryAdapter';
import type { BasicColumn } from '/@/components/Table';
import type { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';
export const fields = [
  'customerEmail',
  'shopifySub',
  'shopifyCustomerGid',
  'candidateMemberId',
  'reviewStatus',
  'userEmailSendCount',
  'createTime',
  'reviewTime',
  'reviewBy',
];
export const detailFields = [
  ...fields,
  'customerFirstName',
  'customerLastName',
  'customerPhone',
  'conflictSysUserId',
  'conflictThirdAccountId',
  'reviewAction',
  'reviewRemark',
  'userEmailLastSendTime',
  'userEmailLastSendResult',
  'adminNoticeSendTime',
];
export type Dictionaries = Record<string, { value: string; text?: string; label?: string }[]>;
export function displayValue(dicts: Dictionaries, field: string, record: Record<string, unknown>) {
  return field === 'reviewStatus'
    ? businessDictionaryText('shopify_third_account_binding_review_status', record[field])
    : (record[`${field}_dictText`] ?? record[field] ?? '—');
}
export function createColumns(dicts: Dictionaries): BasicColumn[] {
  const { t } = useI18n();
  return fields.map((field) => ({
    title: t(`shopify.bindingReview.${field}`),
    dataIndex: field,
    width:
      field === 'shopifyCustomerGid'
        ? 320
        : ['customerEmail', 'candidateMemberId'].includes(field)
          ? 240
          : ['reviewStatus', 'userEmailSendCount'].includes(field)
            ? 130
            : 190,
    ellipsis: true,
    align: 'center',
    customRender: ({ record }) => displayValue(dicts, field, record),
  }));
}
export function createSearchSchemas(): FormSchema[] {
  const { t } = useI18n();
  return ['customerEmail', 'shopifySub', 'shopifyCustomerGid'].map((field) => ({
    field,
    label: t(`shopify.bindingReview.${field}`),
    component: 'Input',
    componentProps: { allowClear: true },
    colProps: { xs: 24, md: 12, xl: 6 },
  }));
}
