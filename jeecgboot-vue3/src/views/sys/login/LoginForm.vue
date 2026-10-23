<template>
  <div class="enter-x">
    <h2 class="mb-8 text-2xl font-bold text-center xl:text-3xl">
      {{ t('sys.login.signInFormTitle') }}
    </h2>
  </div>
  <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef" @keypress.enter="handleLogin">
    <!-- 账号 -->
    <FormItem name="account" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.account"
        :placeholder="t('sys.login.accountPlaceholder')"
        class="fix-auto-fill"
      >
        <template #prefix>
          <UserOutlined />
        </template>
      </Input>
    </FormItem>

    <!-- 密码 -->
    <FormItem name="password" class="enter-x">
      <Input
        size="large"
        :type="showPassword ? 'text' : 'password'"
        v-model:value="formData.password"
        :placeholder="t('sys.login.passwordPlaceholder')"
        class="fix-auto-fill"
      >
        <template #prefix>
          <LockOutlined />
        </template>
        <template #suffix>
          <EyeInvisibleOutlined v-if="showPassword" @click="togglePasswordVisibility" class="cursor-pointer" />
          <EyeOutlined v-else @click="togglePasswordVisibility" class="cursor-pointer" />
        </template>
      </Input>
    </FormItem>

    <!-- 验证码 - 暂时隐藏，待后端接口可用后启用 -->
    <!-- <ARow class="enter-x" :gutter="8">
      <ACol :span="16">
        <FormItem name="inputCode" class="enter-x">
          <Input
            size="large"
            v-model:value="formData.inputCode"
            :placeholder="t('sys.login.inputCode')"
            class="fix-auto-fill"
          >
            <template #prefix>
              <SafetyOutlined />
            </template>
          </Input>
        </FormItem>
      </ACol>
      <ACol :span="8">
        <FormItem class="enter-x">
          <img
            v-if="randCodeData.requestCodeSuccess"
            style="height: 40px; cursor: pointer; border-radius: 4px;"
            :src="randCodeData.randCodeImage"
            @click="handleChangeCheckCode"
          />
          <img
            v-else
            style="height: 40px; cursor: pointer; border-radius: 4px;"
            src="../../../assets/images/checkcode.png"
            @click="handleChangeCheckCode"
          />
        </FormItem>
      </ACol>
    </ARow> -->

    <!-- 记住我 & 忘记密码 -->
    <ARow class="enter-x">
      <ACol :span="12">
        <FormItem>
          <Checkbox v-model:checked="rememberMe" size="small">
            {{ t('sys.login.rememberMe') }}
          </Checkbox>
        </FormItem>
      </ACol>
      <ACol :span="12">
        <FormItem :style="{ 'text-align': 'right' }">
          <Button type="link" size="small" @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">
            {{ t('sys.login.forgetPassword') }}
          </Button>
        </FormItem>
      </ACol>
    </ARow>

    <!-- 登录按钮 -->
    <FormItem class="enter-x">
      <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
        {{ t('sys.login.loginButton') }}
      </Button>
    </FormItem>
  </Form>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRaw, unref, computed, onMounted } from 'vue';
  import { Checkbox, Form, Input, Row, Col, Button } from 'ant-design-vue';
  import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';
  import { LoginStateEnum, useLoginState, useFormRules, useFormValid } from './useLogin';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { encryptAESCBC } from '/@/utils/cipher';

  const ACol = Col;
  const ARow = Row;
  const FormItem = Form.Item;
  const { t } = useI18n();
  const { notification } = useMessage();
  const { prefixCls } = useDesign('login');
  const userStore = useUserStore();

  const { setLoginState } = useLoginState();
  const { getFormRules } = useFormRules();

  const formRef = ref();
  const loading = ref(false);
  const rememberMe = ref(false);
  const showPassword = ref(false);

  const formData = reactive({
    account: '',
    password: '',
  });

  const { validForm } = useFormValid(formRef);

  const getShow = computed(() => true);

  function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
  }

  async function handleLogin() {
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;

      // 密码使用AES加密传输
      const encryptedPassword = encryptAESCBC(data.password);
      const { userInfo } = await userStore.login(
        toRaw({
          password: encryptedPassword,
          username: data.account,
          mode: 'none',
        })
      );
      if (userInfo) {
        notification.success({
          message: t('sys.login.loginSuccessTitle'),
          description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realname}`,
          duration: 3,
        });
      }
    } catch (error: any) {
      notification.error({
        message: t('sys.api.errorTip'),
        description: error.message || t('sys.api.networkExceptionMsg'),
        duration: 3,
      });
      loading.value = false;
    }
  }

  onMounted(() => {
    // 验证码功能暂时禁用
    // handleChangeCheckCode();
  });
</script>