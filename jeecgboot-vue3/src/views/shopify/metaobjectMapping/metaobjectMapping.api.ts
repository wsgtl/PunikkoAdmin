import { defHttp } from '/@/utils/http/axios';
export interface MetaobjectMapping {
  id: string;
  metaobjectType: string;
  metaobjectName: string;
  roleIds: string;
  roleIds_dictText?: string;
  fieldCacheJson: string | null;
  dataCacheJson: string | null;
  lastSyncTime?: string;
  remark?: string;
}
const base = '/shopify/common/shopifyMetaobjectMapping';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: MetaobjectMapping[]; total: number }>({ url: `${base}/list`, params });
export const getRoles = () =>
  defHttp.get<{ value: string; text?: string; label?: string }[]>({ url: '/sys/dict/getDictItems/sys_role,role_name,id' });
export const saveMapping = (data: MetaobjectMapping) =>
  defHttp.put(
    {
      url: `${base}/edit`,
      data: {
        id: data.id,
        metaobjectType: data.metaobjectType,
        metaobjectName: data.metaobjectName,
        roleIds: data.roleIds,
        fieldCacheJson: data.fieldCacheJson,
        dataCacheJson: data.dataCacheJson,
        remark: data.remark,
      },
    },
    { errorMessageMode: 'none' }
  );
export const getRemoteData = (type: string) =>
  defHttp.get<unknown>({ url: `${base}/remoteData`, params: { type, source: 'admin', refresh: true } }, { errorMessageMode: 'none' });
export const getRemoteFields = (type: string) =>
  defHttp.get<unknown>({ url: `${base}/fields`, params: { type, refresh: true } }, { errorMessageMode: 'none' });
