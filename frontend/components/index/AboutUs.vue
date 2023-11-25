<template>
  <div class="about-us">
    <div class="about-us__top-bg" />
    <div class="container mx-auto">
      <div class="about-us__top">

        <h2 class="about-us__header">Что такое <br> ТОЧКА РОСТА?</h2>
        <div>
          <p class="mb-3">
            Место роста - это честный сервис с проверенной информацией о некоммерческом
            секторе,
            где судят по делам.
          </p>
          <p class="mb-3">
            Мы агрегируем информацию о деятельности СО НКО, добровольческих объединений (ДВО) и гражданских активистов из
            разных открытых источников, и формируем на ее основе открытую базу данных.</p>
          <p>
            На основании алгоритма ранжирования информации, разработанного Фондом "Центр гражданских и социальных
            инициатив"
            совместно с отраслевыми экспертами, мы добиваемся, чтобы на виду были те, кто реально работает и развивает
            сектор
            своими делами.
          </p>
        </div>
      </div>
      <div class="about-us__bottom">
        <div class="about-us__item">
          <i class="icon-search" />
          <div class="about-us__item-title">Собираем</div>
          <p class="about-us__item-text">Автоматически парсим все основные площадки Югры, а так же предоставляем удобное
            API
            для партнеров</p>
        </div>
        <div class="about-us__item">
          <i class="icon-filter" />
          <div class="about-us__item-title">Упорядочиваем</div>
          <p class="about-us__item-text">Удобный поиск и категоризация услуг и мер
            поддержки в одном месте для вашего
            удобства</p>
        </div>
        <div class="about-us__item">
          <i class="icon-plus" />
          <div class="about-us__item-title">Дополняем</div>
          <p class="about-us__item-text">Помимо агрегации, мы так же проводим свои
            мероприятия и оказываем поддержку IT предпринимателям нашего региона</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.about-us {
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;

  @media (max-width: theme('screens.laptop')) {
    padding-bottom: 50px;
  }

  &__top {
    display: grid;
    grid-template-columns: 40% 60%;
    margin-bottom: 100px;
    gap: 30px;

    @media (max-width: theme('screens.desktop')) {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    &-bg {
      position: absolute;
      left: 0;
      right: 60%;
      z-index: -1;
      height: 200px;
      background: var(--primary);
      border-radius: 0 30px 30px 0;

      @media (max-width: theme('screens.desktop')) {
        right: 50%;
        height: 200px;
        top: 80px;
      }

      @media (max-width: theme('screens.laptop')) {
        width: 100%;
        height: 100px;
        background: var(--primary);
        top: 90px;
        border-radius: 0;
      }
    }
  }

  &__header {
    font-size: 52px;
    font-weight: 700;
    color: var(--white);
    display: flex;
    align-items: center;

    @media (max-width: theme('screens.laptop')) {
      font-size: 40px;
    }

    @media (max-width: theme('screens.laptop')) {
      font-size: 25px;
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: theme('screens.laptop')) {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 340px;
    margin: 0 auto;

    i {
      font-size: 50px;
      color: var(--secondary);
    }

    &-title {
      font-size: 26px;
      font-weight: 400;
    }

    &-text {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
    }
  }
}
</style>