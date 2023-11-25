
<template>
  <VNavbar class="layout__navbar" />
  <main>
    <slot />
  </main>
  <VFooter />
</template>

<script setup lang="ts">
import VFooter from '../components/VFooter.vue';
import VNavbar from '../components/VNavbar.vue';
</script>

<style lang="scss">
.layout__navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
</style>