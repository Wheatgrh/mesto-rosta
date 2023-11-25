<template>
  <button class="button" :class="{ 'button_disabled': disabled }" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  schema?: string,
  disabled?: boolean
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

  &[disabled] {
    color: var(--light);
    border-color: var(--light);

    &:hover {
      background-color: var(--white);
      color: var(--light);
    }
  }

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