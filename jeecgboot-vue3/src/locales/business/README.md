# 业务字典翻译

`dictionaries.ts` 是本地枚举翻译表，按 `语言 → 字典编码 → 原始 value` 查找，覆盖当前提供的 50 个字典（含 `yn`）。新增枚举时应同步添加中、英、日三个语言的条目，不能使用中文 label 作为翻译键。

- `businessDictionaryText(code, value)`：列表、详情展示。未收录的值显示原始 value；空值显示 `—`。
- `businessDictionaryOptions(code, items)`：选择框展示。接口仍决定选项集合、顺序和值，只复制对象并替换展示文字，不修改原数组或提交值。
- `businessDictionaryListText(code, values)`：逗号分隔的多选值展示，例如营业日。
- `adaptBusinessDictionaryItems(code, items)`：公共字典加载器入口；仅对本地表内的枚举字典生效。门店、用户、角色等动态表字典保持原样。

不要将门店名称、地址、备注、客户姓名等实际数据放入枚举翻译表。不要修改服务端字典缓存或使用翻译后的文字组装提交参数。服务端错误提示也不通过此层猜测翻译。

当前保持框架原有语言切换刷新行为；框架公共文案位于 `../lang/ja-JP/`，Ant Design Vue 组件文案仍由 ConfigProvider 的 locale 管理。
