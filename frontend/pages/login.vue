<template>
  <div class="login-page">
    <form class="login-page__form" @submit.prevent="onLogin">
      <img class="login-page__logo" src="/logo.svg" alt="logo">
      <VInput class="w-full mb-3" placeholder="Введите логин" v-model:value="payload.phone" />
      <VInput class="w-full" placeholder="Введите пароль" v-model:value="payload.password" type="password" />
      <LoadingComponent v-if="pending" />
      <div class="login-page__gray">Забыли пароль?</div>
      <VButton>Войти</VButton>
      <div class="login-page__gray">Регистрация</div>
      <div class="login-page__error">{{ error?.message }}</div>
      <div class="login__hr mb-3" />
      <div class="flex items-center gap-10">
        <div class="login-page__social"><img src="/gos.png" alt="gos"></div>
        <div class="login-page__social"><img src="/ya.png" alt="yandex" /></div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import VButton from '../components/common/VButton.vue';
import VInput from '../components/common/VInput.vue';
import { ApiError } from '../plugins/api-modules/api-error';
import { ILoginPayload, ILoginResponse } from '../plugins/api-modules/auth';
import { useAuthStore } from '../stores/auth';

definePageMeta({
  layout: 'empty'
})
const router = useRouter()
const { $api } = useNuxtApp()
const payload: Ref<ILoginPayload> = ref({
  phone: '',
  password: ''
})
const { updateState } = useAuthStore()
const error: Ref<ApiError<ILoginResponse> | null> = ref(null)
const pending = ref(false)
const onLogin = async () => {
  error.value = null
  pending.value = true
  $api.modules.auth.login(payload.value)
    .then((res) => {
      updateState(res)
      const token = useCookie('token', {
        path: '/',
      })
      token.value = res.tokens.refresh
      router.push('/')
    })
    .catch((e: unknown) => {
      if (e instanceof ApiError) {
        error.value = e as ApiError
      }
    }).finally(() => pending.value = false)

}
</script>

<style lang="scss">
.login-page {
  height: 100vh;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  .login-page__social {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #e8e7e7;
  }

  .login-page__error {
    color: var(--secondary);
  }

  .login-page__gray {
    color: #959595;
  }

  .login__hr {
    width: 100%;
    height: 1px;
    background-color: #e8e7e7;
  }

  .login-page__form {
    width: 400px;
    background: var(--white);
    // border: 1px solid #2F2F2F;
    padding: 20px;
    border-radius: 10px 40px 10px 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .login-page__logo {
    width: 110px;
    margin-bottom: 10px;
  }
}
</style>