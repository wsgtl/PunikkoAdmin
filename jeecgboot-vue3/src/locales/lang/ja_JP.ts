import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/ja_JP';

const modules = import.meta.glob('./ja-JP/**/*.ts', { eager: true });
export default {
  message: {
    ...genMessage(modules as Recordable<Recordable>, 'ja-JP'),
    antdLocale,
  },
  dateLocale: null,
  dateLocaleName: 'ja',
};