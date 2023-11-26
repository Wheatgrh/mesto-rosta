import { useAuthStore } from "../stores/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  // if(to.meta.layout === 'admin') {
  //   if(!authStore.isAuth()) {
  //     return navigateTo('/login')
  //   }
  // }
  // if (to.fullPath === '/takeoff' && !authStore.isAuth()) {
  //   return navigateTo('/login')
  // }
})