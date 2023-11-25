import {defineStore} from 'pinia'
import { ILoginResponse, ITokens, IUser } from '../plugins/api-modules/auth'

export const useAuthStore = defineStore('auth', () => {
  const token: Ref<null | string> = ref(null)
  const refresh: Ref<null | string> = ref(null)
  const user: Ref<null | IUser> = ref(null)

  const updateState = (dto: ILoginResponse) => {
    token.value = dto.tokens.token
    refresh.value = dto.tokens.refresh
    user.value = dto.user
  }
  const isAuth = () => token.value ? true : false
  const isAdmin = () => {
    if(!user.value) {
      return false
    }
    return user.value.isAdmin
  }
  const getUser = () => user.value
  return {updateState, isAuth, isAdmin, getUser, token, refresh, user}
})
