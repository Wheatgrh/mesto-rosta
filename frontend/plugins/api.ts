import { ofetch, $Fetch } from 'ofetch'
import { UploadsApi } from './api-modules/uploads'
import { ApiError } from './api-modules/api-error'
import { AuthApi } from './api-modules/auth'

export let fetchInstance: $Fetch;

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const counter = ref(0)
  console.log(config.public.apiBase);

  fetchInstance = ofetch.create({
    baseURL: config.public.apiBase || 'localhost',
    onRequest({ options }) {
      options.headers = { count: `${counter.value++}`}
      console.log('On Request Hook');
    },
    onResponseError(_ctx) {
      const error = new ApiError({
        details: {},
        ..._ctx.response?._data,
      })
      if (_ctx.response.status === 500) {
        error.message = 'Ошибка сервера'
      }
      if(_ctx.response.status === 404) {
        showError(error)
      }
      console.error(error);
      throw error
    }
  })

  const modules = {
    uploads: new UploadsApi(fetchInstance),
    auth: new AuthApi(fetchInstance)
  }

  Object.freeze(modules)

  return {
    provide: {
      api: {
        modules,
        fetch: fetchInstance
      }
    }
  }
})