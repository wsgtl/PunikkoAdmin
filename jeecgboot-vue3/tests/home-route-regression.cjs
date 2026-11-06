// Run: node tests/home-route-regression.cjs (no browser/server required).
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const { createRouter, createMemoryHistory } = require('vue-router');
function load(file, dependencies) {
  const exports = {};
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(js, { exports, require: key => { assert(key in dependencies, key); return dependencies[key]; }, console, window: { location: { href: 'http://localhost/' } } });
  return exports;
}
const constants = { PAGE_NOT_FOUND_NAME: 'PageNotFound', PAGE_NOT_FOUND_NAME_404: 'PageNotFound404', REDIRECT_NAME: 'Redirect', LAYOUT: {}, EXCEPTION_COMPONENT: {} };
const basics = load('src/router/routes/basic.ts', { '/@/hooks/web/useI18n': { t: x => x }, '/@/router/constant': constants });
// Avoid loading Vue SFC files: exercise the actual route paths, names and hierarchy with inert components.
function inert(route) { return { ...route, component: { render() {} }, children: route.children?.map(inert) }; }
const home = inert(basics.WELCOME_ROUTE), notFound = inert(basics.PAGE_NOT_FOUND_ROUTE);
const { PageEnum } = load('src/enums/pageEnum.ts', {});
async function scenario(url, token = 'token') {
  let added = false, builds = 0;
  const permission = { get getIsDynamicAddedRoute() { return added; }, async buildRoutesAction() {
    builds++; await new Promise(resolve => setTimeout(resolve, 5));
    return [{ path: '/business', name: 'Business', component: { render() {} } }];
  }, setDynamicAddedRoute(value) { added = value; } };
  const user = { getToken: token, getSessionTimeout: false, getLastUpdateTime: 1 };
  const { createPermissionGuard } = load('src/router/guard/permissionGuard.ts', {
    '/@/store/modules/permission': { usePermissionStoreWithOut: () => permission }, '/@/store/modules/user': { useUserStoreWithOut: () => user },
    '/@/enums/pageEnum': { PageEnum }, '/@/router/routes/basic': { PAGE_NOT_FOUND_ROUTE: notFound }, '/@/router/constant': constants,
    '/@/views/sys/login/useLogin': { isOAuth2AppEnv: () => false, isOAuth2DingAppEnv: () => false },
    '/@/enums/cacheEnum': {}, '/@/utils/auth': { setAuthCache() {} },
  });
  const router = createRouter({ history: createMemoryHistory(), routes: [home, notFound, { path: '/', redirect: PageEnum.BASE_HOME }, { path: '/login', name: 'Login', component: { render() {} } }] });
  createPermissionGuard(router);
  await router.push(url);
  return { router, builds };
}
async function main() {
  const index = fs.readFileSync('src/router/routes/index.ts', 'utf8');
  assert(/export const basicRoutes = \[[^\]]*WELCOME_ROUTE/.test(index), 'Home must be available before backend menus load');
  for (const url of ['/', '/dashboard', '/dashboard/analysis', '/dashboard/analysis?source=reentry#section']) {
    const { router, builds } = await scenario(url);
    assert.equal(router.currentRoute.value.name, 'PunikkoWelcome', url);
    assert.equal(builds, 1);
    if (url.includes('?')) { assert.equal(router.currentRoute.value.query.source, 'reentry'); assert.equal(router.currentRoute.value.hash, '#section'); }
  }
  const deep = await scenario('/business?filter=test#row');
  assert.equal(deep.router.currentRoute.value.name, 'Business'); assert.equal(deep.router.currentRoute.value.fullPath, '/business?filter=test#row');
  const missing = await scenario('/really-missing'); assert.equal(missing.router.currentRoute.value.name, 'PageNotFound404');
  const anonymous = await scenario('/dashboard/analysis', ''); assert.equal(anonymous.router.currentRoute.value.path, '/login'); assert.equal(anonymous.builds, 0);
  console.log('PASS: root/home reentry, delayed dynamic routes, query/hash preservation, business deep links, real 404 and unauthenticated access.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
