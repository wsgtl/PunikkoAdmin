<template>
  <div :class="prefixCls" class="password-login">
    <AppLocalePicker v-if="showLocale && !sessionTimeout" class="locale-picker" :showText="false" />
    <main v-if="!forgotLoaded" class="login-card">
      <div class="login-art" aria-hidden="true">
        <img :src="adTextImg" alt="" />
      </div>
      <section class="login-panel">
        <h1>{{ t('sys.login.signInFormTitle') }}</h1>
        <a-form ref="loginRef" :model="formData" :rules="rules" @finish="accountLogin">
          <a-form-item name="username">
            <a-input
              v-model:value="formData.username"
              :placeholder="t('sys.login.accountPlaceholder')"
              :aria-label="t('sys.login.userName')"
              autocomplete="username"
              class="fix-auto-fill"
            >
              <template #prefix><SafetyCertificateFilled /></template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input
              v-model:value="formData.password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="t('sys.login.password')"
              :aria-label="t('sys.login.password')"
              autocomplete="current-password"
              class="fix-auto-fill"
            >
              <template #prefix><LockFilled /></template>
              <template #suffix>
                <button
                  class="password-toggle"
                  type="button"
                  :aria-label="t(showPassword ? 'sys.login.hidePassword' : 'sys.login.showPassword')"
                  :aria-pressed="showPassword"
                  @click="showPassword = !showPassword"
                >
                  <EyeInvisibleOutlined v-if="showPassword" /><EyeOutlined v-else />
                </button>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="captcha">
            <div class="captcha-row">
              <a-input
                v-model:value="formData.captcha"
                :placeholder="t('sys.login.inputCode')"
                :aria-label="t('sys.login.inputCode')"
                autocomplete="off"
              >
                <template #prefix><SafetyCertificateFilled /></template>
              </a-input>
              <button
                type="button"
                class="captcha-button"
                :disabled="captchaLoading || loginLoading"
                :aria-label="t('sys.login.refreshCaptcha')"
                :title="t('sys.login.refreshCaptcha')"
                @click="refreshCaptcha"
              >
                <img v-if="captchaImage" :src="captchaImage" :alt="t('sys.login.inputCode')" />
                <span v-else>{{ t(captchaLoading ? 'sys.login.captchaLoading' : 'sys.login.refreshCaptcha') }}</span>
              </button>
            </div>
          </a-form-item>
          <div class="login-options">
            <a-checkbox v-model:checked="rememberMe">{{ t('sys.login.rememberMe') }}</a-checkbox>
            <a-button type="link" size="small" @click="forgotLoaded = true">{{ t('sys.login.forgetPassword') }}</a-button>
          </div>
          <a-button class="login-submit" type="primary" html-type="submit" block :loading="loginLoading" :disabled="captchaLoading || !captchaImage">
            {{ t('sys.login.loginButton') }}
          </a-button>
        </a-form>
      </section>
    </main>
    <div v-else class="forgot-panel">
      <MiniForgotpad @go-back="goBack" @success="handleResetSuccess" />
    </div>
  </div>
</template>

<script lang="ts" setup name="login-mini">
  import { computed, defineAsyncComponent, onMounted, reactive, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { EyeInvisibleOutlined, EyeOutlined, LockFilled, SafetyCertificateFilled } from '@ant-design/icons-vue';
  import { getCodeInfo } from '/@/api/sys/user';
  import { AppLocalePicker } from '/@/components/Application';
  import { useUserStore } from '/@/store/modules/user';
  import { useLocaleStore } from '/@/store/modules/locale';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { createLocalStorage } from '/@/utils/cache';
  import { encryptAESCBC } from '/@/utils/cipher';
  import adTextImg from '/@/assets/loginmini/icon/jeecg_ad_text.png';

  const MiniForgotpad = defineAsyncComponent(() => import('./MiniForgotpad.vue'));
  defineProps({ sessionTimeout: Boolean });
  const { prefixCls } = useDesign('mini-login');
  const { t } = useI18n();
  const { notification } = useMessage();
  const userStore = useUserStore();
  const localeStore = useLocaleStore();
  const showLocale = computed(() => localeStore.getShowPicker);
  const route = useRoute();
  const storage = createLocalStorage();
  const REMEMBER_USERNAME_KEY = 'LOGIN_REMEMBER_USERNAME';
  const loginRef = ref();
  const loginLoading = ref(false);
  const captchaLoading = ref(false);
  const captchaImage = ref('');
  const checkKey = ref('');
  const showPassword = ref(false);
  const rememberMe = ref(false);
  const forgotLoaded = ref(false);
  const formData = reactive({ username: '', password: '', captcha: '' });
  const rules = computed(() => ({
    username: [{ required: true, whitespace: true, message: t('sys.login.accountPlaceholder'), trigger: 'blur' }],
    password: [{ required: true, message: t('sys.login.passwordPlaceholder'), trigger: 'blur' }],
    captcha: [{ required: true, whitespace: true, message: t('sys.login.inputCodePlaceholder'), trigger: 'blur' }],
  }));

  async function refreshCaptcha() {
    if (captchaLoading.value) return;
    captchaLoading.value = true;
    captchaImage.value = '';
    formData.captcha = '';
    checkKey.value = `${Date.now()}${Math.random().toString(36).slice(2)}`;
    try {
      const response = await getCodeInfo(checkKey.value);
      // Jeecg returns an envelope; also accept a direct image data URL.
      const image = typeof response === 'string' ? response : response?.result;
      if (typeof image !== 'string' || !image) throw new Error(t('sys.login.captchaLoadFailed'));
      captchaImage.value = image;
    } catch (error) {
      notification.error({ message: t('sys.login.captchaLoadFailed'), description: t('sys.login.refreshCaptcha') });
    } finally {
      captchaLoading.value = false;
    }
  }

  async function accountLogin() {
    if (loginLoading.value || captchaLoading.value || !captchaImage.value) return;
    loginLoading.value = true;
    try {
      const session = await userStore.login({
        username: formData.username.trim(),
        password: encryptAESCBC(formData.password),
        captcha: formData.captcha.trim(),
        checkKey: checkKey.value,
        tenantId: typeof route.query.tenantId === 'string' ? route.query.tenantId : undefined,
        mode: 'none',
      });
      if (session?.userInfo) {
        if (rememberMe.value) storage.set(REMEMBER_USERNAME_KEY, formData.username.trim());
        else storage.remove(REMEMBER_USERNAME_KEY);
        notification.success({ message: t('sys.login.loginSuccessTitle'), description: t('sys.login.loginSuccessDesc'), duration: 3 });
      }
    } catch (error) {
      notification.error({
        message: t('sys.api.errorTip'),
        description: error instanceof Error ? error.message : t('sys.api.networkExceptionMsg'),
        duration: 3,
      });
      await refreshCaptcha();
    } finally {
      loginLoading.value = false;
    }
  }

  function goBack() {
    forgotLoaded.value = false;
    showPassword.value = false;
    formData.password = '';
    refreshCaptcha();
  }

  function handleResetSuccess(value: { username?: string }) {
    if (value?.username) formData.username = value.username;
    goBack();
  }

  onMounted(() => {
    const saved = storage.get(REMEMBER_USERNAME_KEY);
    if (typeof saved === 'string' && saved) {
      formData.username = saved;
      rememberMe.value = true;
    }
    refreshCaptcha();
  });
</script>

<style lang="less" scoped>
  .password-login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 64px 24px;
    background: #e3f0ff url('/@/assets/loginmini/icon/jeecg_bg.png') center / cover no-repeat;
  }
  .locale-picker {
    position: absolute;
    top: 20px;
    right: 24px;
  }
  .login-card {
    display: grid;
    grid-template-columns: 3fr 2fr;
    width: 1000px;
    max-width: 100%;
    min-height: 518px;
    background: #fff;
    box-shadow: 0 4px 10px #213b5b40;
  }
  .login-art {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: #0198cd url('/@/assets/loginmini/icon/jeecg_ad.png') center / cover no-repeat;
    img {
      width: 100%;
      height: auto;
    }
  }
  .login-panel {
    min-width: 0;
    padding: 30px 20px 56px;
    h1 {
      position: relative;
      margin: 0 0 38px;
      padding-bottom: 14px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      &::after {
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        width: 30px;
        height: 4px;
        border-radius: 4px;
        background: #1b90ff;
        content: '';
      }
    }
    :deep(.ant-form-item) {
      margin-bottom: 16px;
    }
    :deep(.ant-input-affix-wrapper) {
      padding: 9px 0;
      border: 0;
      border-bottom: 1px solid #d9d9d9;
      border-radius: 0;
      box-shadow: none;
      background: transparent;
      &:focus-within {
        border-color: #1b90ff;
      }
    }
    :deep(.ant-input) {
      min-width: 0;
      background: transparent;
    }
    :deep(.ant-input-prefix) {
      margin-right: 12px;
      color: #1b90ff;
      font-size: 20px;
    }
  }
  .password-toggle {
    display: inline-flex;
    padding: 4px;
    border: 0;
    background: transparent;
    color: #8a929b;
    cursor: pointer;
    font-size: 18px;
  }
  .captcha-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    &:focus-within {
      border-color: #1b90ff;
    }
    :deep(.ant-input-affix-wrapper) {
      border-bottom: 0;
    }
  }
  .captcha-button {
    flex-shrink: 0;
    width: 110px;
    height: 36px;
    padding: 0;
    border: 0;
    background: #f5f7fa;
    color: #1677ff;
    font-size: 12px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .login-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: -8px;
    :deep(.ant-btn) {
      padding-right: 0;
      font-size: 12px;
    }
  }
  .login-submit {
    height: 42px;
    margin-top: 64px;
    border-radius: 8px;
    background: #1b90ff;
  }
  .forgot-panel {
    width: 100%;
  }
  @media (max-width: 700px) {
    .password-login {
      padding: 64px 16px;
    }
    .login-card {
      display: block;
      max-width: 420px;
      min-height: auto;
    }
    .login-art {
      display: none;
    }
    .login-panel {
      padding: 32px 24px 40px;
    }
    .login-options {
      flex-wrap: wrap;
    }
    .login-submit {
      margin-top: 40px;
    }
  }
  :global(html[data-theme='dark']) {
    .password-login {
      background-color: #182438;
      background-blend-mode: multiply;
    }
    .login-card {
      background: #232a3b;
    }
    .login-panel h1 {
      color: #e5e7eb;
    }
  }
</style>
