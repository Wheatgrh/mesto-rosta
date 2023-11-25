<template>
  <div class="algorithm-step">
    <div>
      <h3 class="algorithm-step__title">
        {{ title }}
      </h3>
      <p class="algorithm-step__text">{{ text }}</p>
    </div>
    <div class="algorithm-step__idx">{{ idx }}</div>
    <img class="algorithm-step__img" :src="img" alt="img">
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  text: string,
  img: string,
  idx: number
}>()
</script>

<style lang="scss">
.algorithm-step {
  background: var(--primary);
  border-left: 1px solid var(--white);
  border-right: 1px solid var(--white);
  color: var(--white);
  position: relative;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;

  @media (max-width: theme('screens.desktop')) {
    &:nth-child(1) {
      border-right: 1px solid var(--white);
      border-bottom: 1px solid var(--white);
    }

    &:nth-child(2) {
      border-left: 1px solid var(--white);
      border-bottom: 1px solid var(--white);
      border-right: none;
    }

    &:nth-child(3) {
      border-left: none;
      border-bottom: none;
      border-right: 1px solid var(--white);
      border-top: 1px solid var(--white);
    }

    &:nth-child(4) {
      border-left: 1px solid var(--white);
      border-bottom: none;
      border-right: none;
      border-top: 1px solid var(--white);
    }
  }

  @media (max-width: theme('screens.tablet')) {
    height: 430px;

    &:nth-child(1) {
      border-right: none;
      border-left: none;
    }

    &:nth-child(2) {
      border-right: none;
      border-left: none;
      border-top: 1px solid var(--white);
    }

    &:nth-child(3) {
      border-right: none;
      border-left: none;
      border-top: 1px solid var(--white);
      border-bottom: 1px solid var(--white);
    }

    &:nth-child(4) {
      border-right: none;
      border-left: none;
      border-top: 1px solid var(--white);
    }
  }

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

  &__title {
    font-size: 27px;
    font-weight: 400;
    margin-bottom: 35px;
    line-height: 35px;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: theme('screens.mobile')) {
      width: 170px;
    }
  }

  &__idx {
    font-size: 35px;
    font-weight: 400;
  }
}
</style>