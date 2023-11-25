<template>
  <div class="navbar">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/"><img class="navbar__logo" src="/logo.svg" alt="Точка роста"></NuxtLink>
      <nav class="navbar__links">
        <NuxtLink class="navbar__link-item" to="/">Главная</NuxtLink>
        <NuxtLink class="navbar__link-item" to="/">На взлет</NuxtLink>
        <NuxtLink class="navbar__link-item" to="/">Меры поддержки</NuxtLink>
        <NuxtLink class="navbar__link-item" to="/">Мероприятия</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  &__logo {
    width: 100px;
    padding: 10px 0;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 50px;
  }
}
</style>