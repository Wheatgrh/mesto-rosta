
<template>
  <VNavbar />
  <main>
    <slot />
  </main>
  <VFooter />
</template>

<script setup lang="ts">
import VFooter from '../components/VFooter.vue';
import VNavbar from '../components/VNavbar.vue';
</script>