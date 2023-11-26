<template>
  <header class="header">
    <div class="container mx-auto header__grid">
      <div class="header__info">
        <h1 class="header__h1">Развиваем IT предпринимательство в Югре вместе</h1>
        <p class="header__sub">Место Роста - сервис для IT-специалистов, обеспечивающий быстрый поиск мероприятий и
          государственной поддержки.</p>
        <div class="grid grid-cols-1 gap-5 tablet:grid-cols-3">
          <HeaderCard v-for="item in items" :text="item" />
        </div>
      </div>
      <div class="header__cub">
        <div class="header__cub-grid">
          <div class="header__cub-item">
            <p class="text-[30px] desktop:text-[40px] font-medium">20+</p>
            <p class="text-[16px]">партнеров</p>
          </div>
          <div class="header__cub-item">
            <p class="text-[30px] desktop:text-[40px] font-medium">15+</p>
            <p class="text-[16px]">лет опыта</p>
          </div>
          <div class="header__cub-item">
            <p class="text-[30px] desktop:text-[40px] font-medium">200+</p>
            <p class="text-[16px]">успешных кейсов</p>
          </div>
        </div>
        <div class="header__cub-img">
          <div class="header__triangle" />
          <img class="hidden desktop:block" src="/images/cub.png" alt="cub">
          <img class="block desktop:hidden" src="/images/cub_mobile.png" alt="cub">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderCard from './HeaderCard.vue';

const items = ['Поддержка IT предпринимателей', 'Бесплатные тренинги и обучение', 'Консультации ведущих специалистов региона']
</script>

<style lang="scss">
.header {
  // background: url('/images/header-bg.jpg') center no-repeat;
  background-size: cover;
  height: 900px;
  padding-top: 77px;
  margin-top: -77px;
  overflow: hidden;

  @media (max-width: theme('screens.desktop')) {
    height: auto;
    padding-top: 150px;
    padding-bottom: 50px;
  }

  &__info {
    z-index: 2;

    @media (max-width: theme('screens.desktop')) {
      order: 2;
    }
  }

  &__h1 {
    font-size: 55px;
    font-weight: 800;
    line-height: 74px;
    margin-bottom: 60px;
    text-shadow: 3px 0 3px var(--white),
      0 3px 3px var(--white),
      -3px 0 3px var(--white),
      0 -3px 3px var(--white);

    @media (max-width: theme('screens.laptop')) {
      font-size: 35px;
      line-height: 50px;
      margin-bottom: 30px;
    }

    @media (max-width: theme('screens.tablet')) {
      font-size: 25px;
      line-height: 35px;
    }
  }

  &__sub {
    font-size: 24px;
    text-shadow: 2px 0 2px var(--white),
      0 2px 2px var(--white),
      -2px 0 1px var(--white),
      0 -2px 2px var(--white);
    margin-bottom: 60px;

    @media (max-width: theme('screens.tablet')) {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    height: 100%;

    @media (max-width: theme('screens.desktop')) {
      grid-template-columns: 1fr;
    }
  }

  &__cub {
    @media (max-width: theme('screens.desktop')) {
      display: flex;
      flex-direction: column;
      order: 1;
    }

    &-item {
      margin: 0 auto;
      text-align: center;
      border: 2px dashed var(--primary);
      padding: 10px 30px;
      border-radius: 10px;
      background: var(--white);
      width: 100%;

      @media (max-width: theme('screens.desktop')) {
        border: none;
        margin: 0;
      }
    }

    &-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      z-index: 2;
      align-items: center;
      position: relative;
      gap: 20px;

      @media (max-width: theme('screens.desktop')) {
        order: 1;
        margin-bottom: 30px;
      }

      @media (max-width: theme('screens.tablet')) {
        grid-template-columns: 1fr;
      }
    }

    &-img {
      position: relative;
      display: flex;
      justify-content: center;


      .header__triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 1650px solid transparent;
        border-right: 1620px solid transparent;
        border-top: 1000px solid white;
        bottom: 65px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        filter: drop-shadow(0px 0px 44.79999923706055px rgba(0, 0, 0, 0.10));
      }

      img {
        z-index: 1;
      }
    }

  }
}
</style>