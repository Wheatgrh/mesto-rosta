<template>
  <section class="algorithm container mx-auto">
    <div class="algorithm__title">
      <h2 class="algorithm__h2">Уникальный алгоритм построения
        карт развития</h2>
      <p class="algorithm__sub desktop:mt-5">
        Позволяет строить персонализированную карту развития личности или
        стартапа, основываясь на
        предыдущих заслугах и
        текущей ситуации на рынке
      </p>
    </div>
    <div class="algorithm__steps">
      <AlgorithmStep v-for="item, idx in steps" :idx="idx + 1" :text="item.text" :img="item.img" :title="item.title" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AlgorithmStep from './AlgorithmStep.vue';
const steps = [
  {
    img: '/images/profile.png',
    title: 'Заполните профиль',
    text: 'В личном кабинете необходимо максимально подробно заполнить информацию о себе, предыдущем опыты, достижениях и интересах'
  },
  {
    img: '/images/test.png',
    title: 'Пройдите тестирование',
    text: 'В личном кабинете необходимо максимально подробно заполнить информацию о себе, предыдущем опыты, достижениях и интересах'
  },
  {
    img: '/images/time.png',
    title: 'Дождитесь результатов',
    text: 'В личном кабинете необходимо максимально подробно заполнить информацию о себе, предыдущем опыты, достижениях и интересах'
  },
  {
    img: '/images/plan.png',
    title: 'Получите план развития',
    text: 'В личном кабинете необходимо максимально подробно заполнить информацию о себе, предыдущем опыты, достижениях и интересах'
  }
]
</script>

<style lang="scss">
.algorithm {
  padding-top: 70px;
  padding-bottom: 70px;

  &__title {
    display: flex;
    align-items: top;
    justify-content: space-between;
    margin-bottom: 60px;

    @media (max-width: theme('screens.laptop')) {
      flex-direction: column;
      margin-bottom: 30px;
    }
  }

  &__h2 {
    font-size: 50px;
    font-weight: 500;
    max-width: 60%;
    line-height: 60px;

    @media (max-width: theme('screens.desktop')) {
      font-size: 35px;
      line-height: 40px;
    }

    @media (max-width: theme('screens.laptop')) {
      font-size: 25px;
      line-height: 40px;
      max-width: 100%;
    }

    @media (max-width: theme('screens.tablet')) {
      line-height: 25px;
      margin-bottom: 10px;
    }
  }

  &__sub {
    font-size: 14px;
    font-weight: 300;
    max-width: 25%;
    text-align: end;

    @media (max-width: theme('screens.desktop')) {
      max-width: 30%;
    }

    @media (max-width: theme('screens.laptop')) {
      max-width: 100%;
      text-align: start;
    }
  }

  &__steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 2px solid var(--primary);
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: theme('screens.desktop')) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: theme('screens.tablet')) {
      grid-template-columns: 1fr;
    }

  }
}
</style>