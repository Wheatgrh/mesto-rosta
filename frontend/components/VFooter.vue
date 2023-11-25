<template>
  <footer class="footer__main__container container mx-auto">
    <div class="footer__under__block">
      <div class="footer__img__with__text">
        <img class="mr-5" src="/logo.svg" />
      </div>
      <div class="footer__founder__text">
        <NuxtLink to="https://www.tp86.ru">
          <p>© АУ «Технопарк высоких технологий», 2012 — 2023</p>
        </NuxtLink>
      </div>

      <div class="footer__social__network">
        <img src="logoFooterYandex.svg" alt="">
        <img src="logoFooterTg.svg" alt="">
        <img src="logoFooterVk.svg" alt="">
      </div>
      <div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  &__icon__style {
    width: 25px;
    height: 25px;
    color: #589BFB;
  }

  &__img__style {
    width: 104px;
    height: 138px;
  }

  &__founder__text {
    width: 100%;
  }

  &__img__with__text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-size: 20px;
    width: 100%;

  }

  &__under__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4vw 0;
  }

  &__p__style {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    line-height: 1.1vw;
  }

  &__social__network {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: end;
    gap: 7vw;
  }
}
</style>