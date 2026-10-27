import { defHttp } from '/@/utils/http/axios';

export interface AccountDeletion {
  id: string;
  requestNo: string;
  username: string;
  shopifyCustomerGid: string;
  status: string;
  status_dictText?: string;
  progress: number | null;
  currentHandler?: string;
  retryCount: number;
  lastError?: string | null;
  requestedTime?: string;
  completedTime?: string | null;
}
export const list = (params: Record<string, unknown>) =>
  defHttp.get<{ records: AccountDeletion[]; total: number }>({ url: '/shopify/accountDeletion/list', params });
