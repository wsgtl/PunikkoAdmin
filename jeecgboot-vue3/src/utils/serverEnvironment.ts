const SERVER_ENVIRONMENTS = {
  test: 'https://www-api.h94b53add.nyat.app:59382/yueran',
  production: 'https://shopify.tokotoyz.lifestyle-hobby.top/yueran',
} as const;

export function getServerEnvironment(apiUrl?: string): 'testEnvironment' | 'productionEnvironment' | 'unknownEnvironment' {
  const normalizedUrl = (apiUrl ?? '').trim().replace(/\/+$/, '');
  if (normalizedUrl === SERVER_ENVIRONMENTS.test) return 'testEnvironment';
  if (normalizedUrl === SERVER_ENVIRONMENTS.production) return 'productionEnvironment';
  return 'unknownEnvironment';
}
