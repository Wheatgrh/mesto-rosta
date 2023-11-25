import { useAuthStore } from "../stores/auth"

export default defineNuxtRouteMiddleware((to, from)=>{
  // if(to.meta.layout === 'admin') {
  //   const authStore = useAuthStore()
  //   if(!authStore.isAuth()) {
  //     return navigateTo('/login')
  //   }
  // }
  // if(to.fullPath === '/admin') {
  //   return navigateTo('/admin/catalog')
  // }
})