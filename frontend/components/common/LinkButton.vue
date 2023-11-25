<template>
  <button class="link-button">
    <slot />
  </button>
</template>

<style lang="scss">
.link-button {
  border: none;
  background: none;
  text-decoration: underline dashed;
  color: var(--primary);
  text-underline-offset: 5px;
  font-size: 12px;
}
</style>