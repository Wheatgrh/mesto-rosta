
import { useAuthStore } from '../stores/auth';
export default defineNuxtPlugin(async (): Promise<void> => {
  const authStore = useAuthStore()
  const {$api} = useNuxtApp()  

  const token = useCookie('token')
  if(token.value) {
    try {
      const res = await $api.modules.auth.refresh({refreshToken: token.value})
      token.value = res.tokens.refresh
      authStore.updateState(res)
    } catch (error) {
      token.value = undefined
    }
  }  
});