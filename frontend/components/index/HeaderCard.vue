<template>
  <div class="header-card">
    <span>{ <i class="icon-ok text-primary" /> }</span>
    <p class="text-center">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string,
}>()
</script>

<style lang="scss">
.header-card {
  background: var(--white);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 14px;
  gap: 10px;
}
</style>