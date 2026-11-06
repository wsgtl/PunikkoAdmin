// Run: node tests/i18n-regression.cjs
// Exercises actual component setup/handlers and locale logic with mocked UI/network boundaries; no browser or backend writes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const vue = require('vue');
const { parse, compileScript } = require('@vue/compiler-sfc');
function load(file, deps = {}, globals = {}) {
  let source = fs.readFileSync(file, 'utf8');
  if (file.endsWith('.vue')) {
    const { descriptor } = parse(source);
    source = descriptor.scriptSetup ? compileScript(descriptor, { id: 'regression' }).content : descriptor.script.content;
  }
  const exports = {};
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText,
    { exports, require: key => { assert(key in deps, `Unmocked dependency: ${key}`); return deps[key]; }, ...globals });
  return exports;
}
const tick = () => new Promise(resolve => setImmediate(resolve));
const deferred = () => { let resolve, reject; const promise = new Promise((a, b) => { resolve = a; reject = b; }); return { promise, resolve, reject }; };
async function main() {
  const guard = load('src/locales/localeSwitchGuard.ts', { vue });
  const locale = vue.ref('zh_CN');
  let switches = 0, reloads = 0, errors = 0, fail = false;
  const picker = load('src/components/Application/src/AppLocalePicker.vue', {
    vue, '/@/components/Dropdown': {}, '/@/components/Icon': {}, '/@/settings/localeSetting': { localeList: [] },
    '/@/locales/localeSwitchGuard': guard,
    '/@/hooks/web/useI18n': { useI18n: () => ({ t: key => key }) },
    '/@/hooks/web/useMessage': { useMessage: () => ({ createConfirmSync: () => { throw Error("Unexpected language confirmation"); }, createMessage: { error: () => errors++ } }) },
    '/@/locales/useLocale': { useLocale: () => ({ getLocale: locale, changeLocale: async lang => { switches++; if (fail) throw Error('load failed'); locale.value = lang; return lang; } }) },
  }, { location: { reload: () => reloads++ } }).default;
  const scope = vue.effectScope();
  const setup = props => scope.run(() => picker.setup(props, { expose() {} }));
  const first = setup({ reload: true }), second = setup({ reload: true });
  const pending = first.toggleLocale('ja_JP');
  await second.toggleLocale('en');
  assert.equal(switches, 1); assert.equal(guard.localeSwitchPending.value, true);
  await pending;
  assert.equal(locale.value, 'ja_JP'); assert.equal(reloads, 1); assert.equal(guard.localeSwitchPending.value, true);
  guard.releaseLocaleSwitch();
  fail = true; await first.toggleLocale('en');
  assert.equal(errors, 1); assert.equal(reloads, 1); assert.equal(guard.localeSwitchPending.value, false);
  fail = false; await first.toggleLocale('zh_CN');
  assert.equal(reloads, 2); assert.equal(locale.value, 'zh_CN');
  guard.releaseLocaleSwitch();
  const login = setup({ reload: false }); await login.toggleLocale('en'); assert.equal(reloads, 2); assert.equal(guard.localeSwitchPending.value, false);
  scope.stop();

  // Out-of-order module loading must never replace a newer requested locale.
  const ja = deferred(), en = deferred(); const current = vue.ref('zh_CN'); const pool = ['zh_CN'];
  const localeModule = load('src/locales/useLocale.ts', {
    vue, './setupI18n': { i18n: { mode: 'composition', global: { locale: current, setLocaleMessage() {}, getLocaleMessage() {} } } },
    '/@/store/modules/locale': { useLocaleStoreWithOut: () => ({ getLocale: current.value, setLocaleInfo() {} }) },
    './helper': { loadLocalePool: pool, setHtmlPageLang() {} }, './lang/ja_JP.ts': ja.promise, './lang/en.ts': en.promise,
  });
  const change = localeModule.useLocale().changeLocale;
  const oldRequest = change('ja_JP'), newRequest = change('en');
  en.resolve({ default: { message: {} } }); await newRequest;
  ja.resolve({ default: { message: {} } }); assert.equal(await oldRequest, undefined); assert.equal(current.value, 'en');
  // A request to keep the current locale also invalidates an in-flight request.
  // Japanese wasn't cached because its request was superseded; its module promise is now resolved.
  const stale = change('ja_JP'); await change('en'); await stale; assert.equal(current.value, 'en');

  const { businessDictionaries } = load('src/locales/business/dictionaries.ts');
  const adapter = load('src/locales/business/dictionaryAdapter.ts', { vue, '../setupI18n': { i18n: { global: { locale: vue.ref('ja_JP') } } }, './dictionaries': { businessDictionaries } });
  const raw = [{ value: '1', text: '周一' }, { value: 7, text: '周日' }];
  const translated = adapter.businessDictionaryOptions('shopify_business_day', raw);
  assert.equal(translated[0].label, '月曜日'); assert.equal(raw[0].text, '周一');
  assert.equal(translated[0].value, '1'); assert.equal(translated[1].value, 7);
  const dynamic = [{ value: 'store-1', text: '表参道店' }];
  assert.equal(adapter.adaptBusinessDictionaryItems('shopify_store,store_name,id', dynamic), dynamic);
  const type = { def: () => ({}) };
  const props = { string: type, number: type, array: type, bool: type, any: type, oneOfType: () => type };
  const component = load('src/components/Form/src/jeecg/components/JDictSelectTag.vue', {
    vue, 'ant-design-vue': { Form: { useInjectFormItemContext: () => ({ onFieldChange() {} }) } },
    '/@/utils/propTypes': { propTypes: props }, '/@/hooks/core/useAttrs': { useAttrs: () => ({}) },
    '/@/utils/dict': { initDictOptions: async () => translated },
    'lodash-es': { omit: (obj, keys) => Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key))) },
    '/@/enums/CompTypeEnum': { CompTypeEnum: {} }, '@ant-design/icons-vue': {},
  }).default;
  async function check(mode, handler, input, expected, stringToNumber = false) {
    const emitted = []; const effects = vue.effectScope();
    const instance = effects.run(() => component.setup({ dictCode: 'shopify_business_day', mode, value: '', stringToNumber }, { emit: (...args) => emitted.push(args), refs: {} }));
    await tick();
    assert.equal(instance.dictOptions.value[0].label, '月曜日');
    assert.equal(instance.dictOptions.value[0].value, stringToNumber ? 1 : '1');
    instance[handler](input);
    for (const event of ['update:value', 'change']) assert.equal(JSON.stringify(emitted.find(x => x[0] === event)?.[1]), JSON.stringify(expected));
    effects.stop();
  }
  await check(undefined, 'handleChange', '1', '1');
  await check('multiple', 'handleChange', ['1', 7, '', null], ['1', 7]);
  await check('multiple', 'handleChange', undefined, []);
  await check(undefined, 'handleChangeRadio', { target: { value: '1' } }, '1');
  await check(undefined, 'handleChange', 1, 1, true);
  console.log('PASS: direct language switch without confirmation, shared lock, failure retry, login without refresh, stale locale requests, dictionary values and unmodified source data.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
