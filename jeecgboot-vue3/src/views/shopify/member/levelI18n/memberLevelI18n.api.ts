import { defHttp } from '/@/utils/http/axios';
export interface LevelTranslation {
  id: string;
  levelId: string;
  language: string;
  levelName: string;
  remark?: string | null;
  [key: string]: string | null | undefined;
}
export interface LevelOption {
  value: string;
  text?: string;
  label?: string;
  title?: string;
}
const base = '/shopify/shopifyMemberLevelI18n';
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: LevelTranslation[]; total: number }>({ url: `${base}/list`, params: { column: 'createTime', order: 'desc', ...params } });
export const queryById = (id: string) => defHttp.get<LevelTranslation>({ url: `${base}/queryById`, params: { id } });
export const getLevels = () => defHttp.get<LevelOption[]>({ url: '/sys/dict/getDictItems/shopify_member_level,level_name,id' });
export const save = (record: LevelTranslation) =>
  defHttp.put({
    url: `${base}/edit`,
    data: { id: record.id, levelId: record.levelId, language: record.language, levelName: record.levelName, remark: record.remark ?? '' },
  });
export const remove = (id: string) => defHttp.delete({ url: `${base}/delete`, params: { id } }, { joinParamsToUrl: true });

export const add = (record: LevelTranslation) =>
  defHttp.post({
    url: `${base}/add`,
    data: { levelId: record.levelId, language: record.language, levelName: record.levelName, remark: record.remark ?? '' },
  });
