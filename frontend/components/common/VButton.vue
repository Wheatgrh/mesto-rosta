<template>
  <button class="button" :class="schema ? `button_${schema}` : ''">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  schema?: string
}>()
</script>
<style lang="scss">
.button {
  background: var(--white);
  color: var(--primary);
  border: 4px solid var(--primary);
  border-radius: 10px;
  padding: 5px 20px;
  transition: color .3s ease-in-out, background .3s ease-in-out;

  &:hover {
    color: var(--white);
    background: var(--primary);
  }

  &_secondary {
    color: var(--white);
    background: var(--secondary);
    border: 4px solid var(--secondary);

    &:hover {
      background: var(--secondary);
    }
  }

  &_primary {
    color: var(--white);
    background: var(--primary);
  }
}
</style>