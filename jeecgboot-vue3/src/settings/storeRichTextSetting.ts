import { featureSetting } from './featureSetting';
import { simplePlugins, simpleToolbar } from '/@/components/Tinymce/src/tinymce';

// Keep formatting/fullscreen; restore all original media controls through one feature flag.
const showMedia = featureSetting.showStoreRichTextMedia;
export const storeRichTextSetting = {
  toolbar: showMedia
    ? simpleToolbar
    : simpleToolbar.map((row) =>
        row
          .split(' ')
          .filter((item) => !['image', 'media', 'link'].includes(item))
          .join(' ')
      ),
  plugins: showMedia ? simplePlugins : 'lists fullscreen',
  showImageUpload: showMedia,
};
