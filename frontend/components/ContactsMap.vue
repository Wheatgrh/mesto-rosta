<template>
  <div class="container mx-auto footer__map__block">
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
</template>

<style lang="scss">
.footer__map__block {
  position: relative;
}

.footer__contact__block {
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


.footer__contact__text {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 30px;
  margin-left: 3vw;
}

.footer__contact__text li {
  text-decoration: none;
  display: flex;
  margin: 10px 0;

}

.footer__contact__text li p {
  font-size: 15px;
  margin-left: 0.7vw;
}

.footer__contact__text h3 {
  font-size: 25px;
}


.footer__logo__block {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__map__style {
  border-radius: 20px;
  filter: drop-shadow(0px 0px 0.5vw rgba(0, 0, 0, 0.10));
}
</style>