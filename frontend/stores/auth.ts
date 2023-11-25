import { defineStore } from 'pinia'
import { ILoginResponse } from '../plugins/api-modules/auth'
import { IUser } from '../assets/types'

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

  const getUser = () => user.value
  const updateUser = (usr: IUser) => {
    user.value = usr
  }

  const getChecklist = () => {
    if (user.value && user.value.checkList) {
      return user.value.checkList
    }
    return null
  }
  return { updateState, isAuth, getUser, updateUser, getChecklist, token, refresh, user }
})
