<template>
  <footer class="footer__main__container container mx-auto">
    <div class="footer__map__block">
      <div class="footer__contact__block">
        <div class="footer__contact__text">
          <h3>Наши контакты</h3>
          <li class="flex items-center">
            <i class="icon-geo text-primary text-[30px]" />
            <p>Ханты-Мансийск,ул. Промышленная, 19</p>
          </li>
          <li class="flex items-center">
            <i class="icon-phone text-primary text-[25px]" />
            <p>+7 (3467) 388-217</p>
          </li>
          <li class="flex items-center">
            <i class="icon-mail text-primary text-[21px]" />
            <p>tp@tp86.ru</p>
          </li>
          <li class="flex items-center">
            <i class="icon-telegram text-primary text-[25px]" />
            <p>@tp86</p>
          </li>
        </div>
        <div class="footer__logo__block">
          <img class="footer__img__style" src="logoWithoutText.svg" alt="">
        </div>
      </div>
      <iframe class="footer__map__style"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9638366f421897a1a4d31230f5c478a061054c799b5f271986c2fd7f94d52f1&amp;source=constructor"
        width="100%" height="622" frameborder="0"></iframe>
    </div>

    <div class="footer__under__block">
      <div class="footer__img__with__text">
        <img class="mr-5" src="/logo.svg" />
        <p class="footer__p__style">Развиваем IT<br />предпринимательство<br />в Югре вместе</p>
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

  &__logo__block {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__contact__text {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 30px;
    margin-left: 3vw;
  }

  &__contact__text li {
    text-decoration: none;
    display: flex;
    margin: 10px 0;

  }

  &__contact__text li p {
    font-size: 15px;
    margin-left: 0.7vw;
  }

  &__contact__text h3 {
    font-size: 25px;
  }

  &__contact__block {
    display: grid;
    grid-template-columns: 55% 45%;
    position: absolute;
    width: 487px;
    height: 308px;
    background-color: #fff;
    z-index: 2;
    border-radius: 50px;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;
    filter: drop-shadow(0px 0px 0.5vw rgba(0, 0, 0, 0.10));

    @media (max-width: theme('screens.laptop')) {
      top: 50px;
      bottom: 50px;
      left: 50px;
      right: 50px;
    }
  }

  &__map__block {
    position: relative;
  }

  &__founder__text {
    width: 100%;
  }

  &__map__style {
    border-radius: 20px;
    filter: drop-shadow(0px 0px 0.5vw rgba(0, 0, 0, 0.10));
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