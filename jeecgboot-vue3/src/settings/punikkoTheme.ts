import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

// 集中配置 Ant Design Vue 原生主题参数，不修改业务组件。
export const punikkoTheme: ThemeConfig = {
  token: {
    colorPrimary: '#e995a0',
    colorPrimaryHover: '#d77c87',
    colorPrimaryActive: '#c66b78',
    colorPrimaryBg: '#fceef0',
    colorPrimaryBgHover: '#f8dfe4',
    colorPrimaryBorder: '#efb2bb',
    colorText: '#343840',
    colorTextSecondary: '#7c8494',
    colorTextDisabled: '#b8bdc7',
    colorBorder: '#e1e4eb',
    colorBorderSecondary: '#eef0f4',
    colorBgContainer: '#ffffff',
    colorBgContainerDisabled: '#f4f5f7',
    colorBgLayout: '#f7f7fa',
    colorSuccess: '#609a80',
    colorSuccessBg: '#edf5f0',
    colorError: '#ed7085',
    colorErrorBg: '#fdeef1',
    colorInfo: '#e995a0',
    colorInfoBg: '#fceef0',
    colorInfoBorder: '#efb2bb',
    borderRadius: 4,
    controlHeight: 32,
    fontSize: 14,
  },
  components: {
    Button: { controlOutlineWidth: 0 },
    Menu: { colorItemText: '#d98290', colorItemTextSelected: '#ffffff', colorItemBgSelected: '#e995a0', colorItemBgHover: '#fceef0' },
    Tabs: { colorPrimary: '#e995a0', colorPrimaryHover: '#d77c87' },
    Tag: { colorBorder: 'transparent', colorText: '#7c8494', colorFillAlter: '#f4f5f7' },
  },
};
