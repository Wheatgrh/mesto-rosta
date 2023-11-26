<template>
  <div class="navbar" :class="{ 'navbar_scrolled': scrollPosition > 0 }">
    <Transition>
      <div v-if="isOpened" class="navbar__mobile-menu">
        <div class="container mx-auto h-full flex flex-col justify-around">
          <navbar class="flex flex-col items-center gap-7 text-[24px]">
            <NuxtLink v-for="item in menu" class="navbar__link-item"
              :class="{ 'navbar__link-item_active': route.path === item.url }" :to="item.url">{{ item.title }}
            </NuxtLink>
          </navbar>
          <div class="flex flex-col gap-5 items-center">
            <div>
              <i class="icon-phone navbar__icon mr-2" />
              <a href="tel:+79222222222" class="font-medium">+7(922)222 22 22</a>
            </div>
            <VButton class="w-full">Войти</VButton>
          </div>
        </div>
      </div>
    </Transition>

    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <img class="navbar__logo" src="/logo.svg" alt="Точка роста">
      </NuxtLink>
      <navbar class="navbar__links">
        <NuxtLink v-for="item in menu" class="navbar__link-item"
          :class="{ 'navbar__link-item_active': route.path === item.url }" :to="item.url">{{ item.title }}</NuxtLink>
      </navbar>
      <div class="items-center gap-10 hidden laptop:flex">
        <div class="navbar__phone">
          <div>
            <i class="icon-phone navbar__icon mr-2" />
            <a href="tel:+79222222222" class="font-medium">+7(922)222 22 22</a>
          </div>
        </div>
        <Avatarka v-if="authStore.isAuth()" :url="user?.avatar.url" />
        <NuxtLink to="/login" v-else class="button">Войти</NuxtLink>
        <!-- <VButton v-else>Войти</VButton> -->
      </div>
      <button class="navbar__burger" :class="{ 'navbar__burger_active': isOpened }" @click="onToggle">
        <span class="navbar__burger-middle" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import VButton from './common/VButton.vue';
const authStore = useAuthStore()
const user = computed(() => authStore.user)

const route = useRoute()
const menu = [{
  title: 'Главная',
  url: '/'
},
{
  title: 'На взлет',
  url: '/takeoff'
},
{
  title: 'Меры поддержки',
  url: '/supports'
},
{
  title: 'Мероприятия',
  url: '/events'
}]
const scrollPosition = ref(0)
const isOpened = ref(false)
const onToggle = () => {
  isOpened.value = !isOpened.value
  if (isOpened.value) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = 'auto'

}
const scrollListener = () => {
  scrollPosition.value = window.scrollY
}
onMounted(() => {
  window.addEventListener('scroll', scrollListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollListener)
})

</script>

<style lang="scss">
.navbar {
  z-index: 10;
  transition: background .3s ease-in-out;

  &__burger {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    transition: filter 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    display: none;

    @media (max-width: theme('screens.laptop')) {
      display: flex;
    }

    &-middle {
      width: 40px;
      height: 3px;
      background: var(--primary);
      display: block;
      border-radius: 5px;
      transition: transform 0.3s ease-in-out;
    }

    &::before {
      content: '';
      width: 40px;
      height: 3px;
      background: var(--primary);
      display: block;
      border-radius: 5px;
      position: absolute;
      bottom: 16px;
      transition: transform 0.3s ease-in-out;
    }

    &::after {
      content: '';
      width: 40px;
      height: 3px;
      background: var(--primary);
      display: block;
      border-radius: 5px;
      position: absolute;
      top: 16px;
      transition: transform 0.3s ease-in-out;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(85%);
    }
  }

  .navbar__burger_active {
    .navbar__burger-middle {
      transform: rotateY(90deg);
    }

    &::before {
      transform: translateY(-12px) rotateZ(45deg);
    }

    &::after {
      transform: translateY(12px) rotateZ(-45deg);
    }
  }

  &_scrolled {
    background: var(--white);
    filter: drop-shadow(0px 0px 44.79999923706055px rgba(0, 0, 0, 0.10));
  }

  &__logo {
    width: 100px;
    padding: 10px 0;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: theme('screens.laptop')) {
      display: none;
    }
  }

  &__link-item {
    &_active {
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
      cursor: pointer;
    }
  }

  &__icon {
    color: var(--primary);
  }

  &__phone {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.navbar__mobile-menu {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 77px;
  background: var(--white);
  z-index: 5;
  height: calc(100vh - 77px);
  padding: 30px 0;

}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>