import type { BasicColumn } from '/@/components/Table';
import type { FormSchema } from '/@/components/Form';
import { useI18n } from '/@/hooks/web/useI18n';
export function createColumns(): BasicColumn[] {
  const { t } = useI18n();
  return ['metaobjectType', 'metaobjectName', 'roleIds', 'lastSyncTime', 'remark'].map((field) => ({
    title: t(`shopify.metaobjectMapping.${field}`),
    dataIndex: field,
    width: field === 'remark' ? 450 : 220,
    align: 'center',
    ...(field === 'roleIds' ? { customRender: ({ record }) => record.roleIds_dictText ?? record.roleIds } : {}),
  }));
}
export function createSearchSchemas(): FormSchema[] {
  const { t } = useI18n();
  return ['metaobjectType', 'metaobjectName'].map((field) => ({
    field,
    label: t(`shopify.metaobjectMapping.${field}`),
    component: 'Input',
    componentProps: { allowClear: true },
    colProps: { xs: 24, md: 12, xl: 8 },
  }));
}
// Preserve unrecognised response objects for raw JSON display instead of dropping data.
export function parseRemoteRows(value: unknown): Record<string, unknown>[] | null {
  if (typeof value === 'string') {
    try {
      return parseRemoteRows(JSON.parse(value));
    } catch {
      return null;
    }
  }
  if (Array.isArray(value)) return value.every((item) => item && typeof item === 'object' && !Array.isArray(item)) ? value : null;
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if (Object.keys(obj).length === 0 || (obj.empty === true && obj.innerMap && Object.keys(obj.innerMap as object).length === 0)) return [];
    for (const key of ['records', 'data', 'fields', 'fieldDefinitions', 'nodes', 'items'])
      if (Array.isArray(obj[key])) return parseRemoteRows(obj[key]);
  }
  return null;
}
