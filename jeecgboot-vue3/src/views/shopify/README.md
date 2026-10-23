# Shopify 模块前端开发文档

## 项目概述

本项目是潮玩连锁店 App 的管理后台前端，基于 **JeecgBoot Vue3** 框架开发。本文档涵盖 Shopify 模块所有业务页面的开发规范、接口对接说明及字典配置方案。

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.x | 前端框架 |
| TypeScript | 4.x | 类型系统 |
| Vite | 4.x | 构建工具 |
| Ant Design Vue | 3.x | UI 组件库 |
| JeecgBoot | 3.x | 低代码开发平台 |

---

## 目录结构

```
src/views/shopify/
├── reservation/              # 门店预约管理
│   ├── index.vue             # 列表页
│   ├── reservation.data.ts   # 列/表单配置
│   └── ReservationModal.vue  # 编辑弹窗
├── productReservation/       # 商品预约管理
│   ├── index.vue
│   └── productReservation.data.ts
├── store/                    # 门店管理
│   ├── index.vue
│   └── store.data.ts
├── calendar/                 # 营业日历
│   ├── index.vue
│   └── calendar.data.ts
├── member/                   # 会员等级多语言
│   ├── index.vue
│   └── member.data.ts
└── webhook/                  # Webhook 配置
    ├── index.vue
    └── webhook.data.ts
```

---

## 开发规范

### 1. 标准列表页模式

所有列表页统一使用 `useListPage` 钩子 + `BasicTable` 组件模式：

```typescript
import { useListPage } from '/@/hooks/system/useListPage';
import { BasicTable, TableAction } from '/@/components/Table';

const { tableContext } = useListPage({
  title: '页面标题',
  api: apiFunction,           // 列表查询 API
  columns,                   // 表格列配置
  formConfig: {
    schemas: searchFormSchema, // 搜索表单配置
  },
});

const [registerTable, { reload }, { rowSelection }] = tableContext;
```

### 2. 数据配置文件（`xxx.data.ts`）

每个模块必须包含三个核心配置：

| 配置项 | 类型 | 用途 |
|--------|------|------|
| `columns` | `BasicColumn[]` | 表格列定义 |
| `searchFormSchema` | `FormSchema[]` | 搜索表单字段 |
| `formSchema` | `FormSchema[]` | 编辑/新增表单字段 |

### 3. 字典使用规范

#### 表格中渲染字典（只读）

```typescript
import { render } from '/@/utils/common/renderUtils';

{
  title: '预约状态',
  dataIndex: 'status',
  customRender: ({ text }) => render.renderDict(text, '字典编码'),
}
```

#### 表单中使用字典选择

```typescript
{
  label: '预约状态',
  field: 'status',
  component: 'JDictSelectTag',
  componentProps: {
    dictCode: '字典编码',
  },
}
```

---

## 字典配置清单

以下字典编码需与后端确认并配置：

| 业务模块 | 字段 | 建议字典编码 | 字典项 |
|---------|------|------------|--------|
| 门店预约 | `status` | `shopify_reservation_status` | pending(待使用), redeemed(已核销), expired(已过期), cancelled(已取消) |
| 商品预约 | `status` | `shopify_product_reservation_status` | pending(待使用), redeemed(已核销), expired(已过期), cancelled(已取消) |
| 门店 | `status` | `shopify_store_status` | active(营业中), inactive(停业), maintenance(维护中) |
| Webhook | `status` | `shopify_webhook_status` | active(启用), inactive(禁用) |
| 会员等级 | `level` | `shopify_member_level` | bronze(青铜), silver(白银), gold(黄金), platinum(铂金) |

> **注意**：字典编码命名需与后端统一，确保 `sys_dict` 表中已配置对应字典项。

---

## API 接口清单

| 模块 | 接口路径 | 说明 |
|------|---------|------|
| 门店预约 | `/api/shopify/reservation` | 列表、新增、编辑、删除、核销 |
| 商品预约 | `/api/shopify/productReservation` | 列表、新增、编辑、删除 |
| 门店管理 | `/api/shopify/store` | 列表、新增、编辑、删除 |
| 营业日历 | `/api/shopify/calendar` | 列表、新增、编辑、删除 |
| 会员等级 | `/api/shopify/memberLevel` | 列表、新增、编辑、删除 |
| Webhook | `/api/shopify/webhook` | 列表、新增、编辑、删除、测试推送 |

---

## 页面 UI 规范

### 参考图样式要点

1. **页面标题**：面包屑导航 + 页面标题
2. **搜索区域**：表单字段横向排列，右侧放置「查询」「重置」「展开」按钮
3. **操作栏**：左侧放置「新增」「高级查询」按钮，右侧放置刷新、密度、列设置图标
4. **表格区域**：
   - 首列为多选框
   - 操作列固定右侧
   - 状态字段使用字典渲染
   - 时间字段格式化显示
5. **分页区域**：左下角显示总条数，中间页码，右侧每页条数选择 + 跳转

---

## 开发 checklist

- [ ] 与后端确认字典编码及字典项
- [ ] 创建 `src/views/shopify/` 目录结构
- [ ] 开发门店预约管理页面（作为标准模板）
- [ ] 复制模板完成其他模块页面
- [ ] 联调测试所有接口
- [ ] 检查字典渲染是否正常

---

## 常见问题

### Q: 字典值显示为原始值而非中文？
A: 检查 `sys_dict` 表中是否已配置对应字典编码和字典项，确认 `render.renderDict` 使用的编码与后端一致。

### Q: 搜索表单字典下拉无数据？
A: 确认 `JDictSelectTag` 组件的 `dictCode` 属性值正确，且后端字典接口正常返回数据。

### Q: 新增/编辑表单如何复用？
A: 使用 `useModal` 创建弹窗组件，通过 `isUpdate` 区分新增和编辑模式，表单配置统一放在 `formSchema` 中。

---

## 多语言（i18n）配置

本项目支持 **日文（ja_JP）、中文（zh_CN）、英文（en）** 三种语言。

### 语言切换规则

| 场景 | 默认语言 | 说明 |
|------|---------|------|
| 浏览器语言为日文 | 日文 | 自动检测 `navigator.language` |
| 浏览器语言为中文 | 中文 | 自动检测 `navigator.language` |
| 浏览器语言为其他 | 英文 | 回退语言 |
| 生产环境打包 | 日文 | 正式环境默认使用日文 |
| 开发环境 | 中文 | 测试环境默认使用中文 |

### 新增业务模块的翻译

在 `src/locales/lang/ja-JP/`、`src/locales/lang/zh-CN/`、`src/locales/lang/en/` 三个目录下同步添加对应的翻译文件。

### 在页面中使用翻译

```vue
<template>
  <div>{{ t('shopify.reservation.title') }}</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
```

---

## 相关文件参考

- [系统字典页面示例](file:///Volumes/Dpan/life/projcet/潮玩连锁店app管理后台/PunikkoAdmin/jeecgboot-vue3/src/views/system/dict/index.vue)
- [字典数据配置示例](file:///Volumes/Dpan/life/projcet/潮玩连锁店app管理后台/PunikkoAdmin/jeecgboot-vue3/src/views/system/dict/dict.data.ts)
- [字典渲染工具](file:///Volumes/Dpan/life/projcet/潮玩连锁店app管理后台/PunikkoAdmin/jeecgboot-vue3/src/utils/common/renderUtils.ts)
- [用户字典使用示例](file:///Volumes/Dpan/life/projcet/潮玩连锁店app管理后台/PunikkoAdmin/jeecgboot-vue3/src/views/system/user/user.data.ts)
- [语言配置](file:///Volumes/Dpan/life/projcet/潮玩连锁店app管理后台/PunikkoAdmin/jeecgboot-vue3/src/settings/localeSetting.ts)
- [日文语言包](file:///Volumes/Dpan/life/projcet/潮玩连锁店app管理后台/PunikkoAdmin/jeecgboot-vue3/src/locales/lang/ja_JP.ts)
## 门店预约管理（已接入）

- 后端菜单组件路径：`shopify/storeReservation/ShopifyStoreReservationList`。
- 列表接口：`GET /shopify/shopifyStoreReservation/list`，使用 `records`、`total` 分页；默认 `column=createTime&order=desc&pageSize=10`。
- 已实现列表、普通搜索、状态筛选、高级查询、行选择、详情、刷新及列设置。
- 当前字典仅使用 `GET /sys/dict/queryAllDictItems`，下拉项取返回分组中的 `text/value`，不写死中文或状态选项。不调用按 code 查询接口。未来新增按 code 接口时，替换 `storeReservation.api.ts` 的字典加载实现。
- 预约状态优先匹配 `shopify_store_reservation_status` 或本文档约定的 `shopify_reservation_status`；否则只接受全量字典中唯一的非商品预约状态分组。实际分组名称仍需结合接口响应确认，不按状态值猜测其他业务字典。未找到时状态列回退到 `status_dictText`，最后回退原值。
- 新增、编辑、删除、核销接口及核销可用状态尚未提供，页面暂不展示这些操作。截图中的过期记录也有核销入口，因此不能自行限定为仅 `pending` 可核销。
- 按钮、搜索字段、表格列是前端配置；字典只提供选项和显示文本，列表数据来自预约列表接口。
