import { ofetch, $Fetch } from 'ofetch'
import { CitiesApi } from './api-modules/cities'
import { ProductGroupsApi } from './api-modules/product-groups'
import { ColorsApi } from './api-modules/colors'
import { UploadsApi } from './api-modules/uploads'
import { ProductsApi } from './api-modules/products'
import { ApiError } from './api-modules/api-error'
import { AmoApi } from './api-modules/amo'
import { SubstandardApi } from './api-modules/substandard'
import { ConcreteApi } from './api-modules/concrete'
import { AuthApi } from './api-modules/auth'

export let fetchInstance: $Fetch;

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const counter = ref(0)

  fetchInstance = ofetch.create({
    baseURL: config.public.apiBase,
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
    cities: new CitiesApi(fetchInstance),
    productGroups: new ProductGroupsApi(fetchInstance),
    colors: new ColorsApi(fetchInstance),
    uploads: new UploadsApi(fetchInstance),
    products: new ProductsApi(fetchInstance),
    substandard: new SubstandardApi(fetchInstance),
    concrete: new ConcreteApi(fetchInstance),
    amo: new AmoApi(fetchInstance),
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