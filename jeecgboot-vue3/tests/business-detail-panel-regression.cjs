const assert = require('node:assert/strict');
const fs = require('node:fs');
const vue = require('vue');
const { parse, compileScript } = require('@vue/compiler-sfc');
const ts = require('typescript');
const filename = 'src/components/BusinessDetail/BusinessDetailPanel.vue';
const { descriptor } = parse(fs.readFileSync(filename, 'utf8'));
const compiled = compileScript(descriptor, { id: 'detail-test', inlineTemplate: true });
const code = ts.transpileModule(compiled.content, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
let editorProps, editorEvents;
const BasicModal = vue.defineComponent({
  name: 'BasicModal',
  props: ['title'],
  emits: ['register', 'cancel', 'ok'],
  setup(props, { emit, slots }) {
    editorProps = props;
    editorEvents = emit;
    const open = vue.ref(false);
    emit('register', { setModalProps: (value) => { if (value.open !== undefined) open.value = value.open; } });
    return () => vue.h('editor', { open: open.value, title: props.title }, slots.default?.());
  },
});
let drawerProps, drawerEvents;
const Drawer = vue.defineComponent({
  props: ['open', 'title', 'width'],
  emits: ['close'],
  setup(props, { slots, emit }) {
    drawerProps = props;
    drawerEvents = emit;
    return () => vue.h('drawer', { open: props.open }, props.open ? [slots.default?.(), slots.extra?.(), slots.footer?.()] : []);
  },
});
const moduleResult = { exports: {} };
new Function('require', 'module', 'exports', code)((id) => {
  if (id === '/@/components/Modal') return { BasicModal };
  if (id === '/@/hooks/web/useI18n') return { useI18n: () => ({ t: (key) => key }) };
  if (id === '@ant-design/icons-vue') return { FullscreenOutlined: 'full', FullscreenExitOutlined: 'exit' };
  return require(id);
}, moduleResult, moduleResult.exports);
const node = (type, text = '') => ({ type, text, children: [], props: {}, parent: null });
const renderer = vue.createRenderer({
  createElement: node, createText: (t) => node('text', t), createComment: (t) => node('comment', t),
  setText: (n, t) => { n.text = t; }, setElementText: (n, t) => { n.text = t; },
  patchProp: (n, k, _, v) => { n.props[k] = v; },
  parentNode: (n) => n.parent,
  nextSibling: (n) => n.parent?.children[n.parent.children.indexOf(n) + 1] || null,
  insert(n, parent, anchor) {
    if (n.parent) n.parent.children.splice(n.parent.children.indexOf(n), 1);
    n.parent = parent;
    const i = anchor ? parent.children.indexOf(anchor) : -1;
    parent.children.splice(i < 0 ? parent.children.length : i, 0, n);
  },
  remove(n) { if (n.parent) n.parent.children.splice(n.parent.children.indexOf(n), 1); },
});
(async () => {
  const mode = vue.ref(true);
  let methods, cancelled = 0, saved = 0, registrations = 0;
  const app = renderer.createApp({
    setup: () => () => vue.h(moduleResult.exports.default, {
      detailMode: mode.value, title: mode.value ? 'Details' : 'Edit',
      onRegister(m) { methods = m; registrations++; },
      onCancel() { cancelled++; }, onOk() { saved++; },
    }, { default: () => vue.h('content', 'record') }),
  });
  app.component('a-drawer', Drawer);
  app.component('a-button', vue.defineComponent({ setup: (_, { slots, attrs }) => () => vue.h('button', attrs, slots.default?.()) }));
  app.mount(node('root'));
  const flush = async () => { await vue.nextTick(); await vue.nextTick(); };
  methods.setModalProps({ open: true });
  await flush();
  assert.equal(drawerProps.open, true);
  assert.equal(drawerProps.title, 'Details');
  drawerEvents('close');
  await flush();
  assert.equal(drawerProps.open, false);
  assert.equal(cancelled, 1);
  mode.value = false;
  methods.setModalProps({ open: true });
  await flush();
  assert.equal(editorProps.title, 'Edit', 'editor must retain its title');
  editorEvents('ok');
  assert.equal(saved, 1);
  methods.setModalProps({ open: false });
  await flush();
  mode.value = true;
  methods.setModalProps({ open: true });
  await flush();
  assert.equal(drawerProps.open, true);
  assert.equal(registrations, 1, 'mode switches must preserve useModal registration');
  drawerEvents('close');
  await flush();
  assert.equal(cancelled, 2);
  assert.equal(saved, 1, 'details must never trigger a save');
  app.unmount();
  console.log('PASS: open/close, cancel cleanup, detail/edit/detail switching, editor title, save isolation, stable registration');
})().catch((error) => { console.error(error); process.exitCode = 1; });
