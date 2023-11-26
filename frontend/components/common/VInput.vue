<template>
  <div class="v-input" :class="{ 'v-input_error': error, 'v-input_small': small, 'v-input_dark': dark }">
    <label v-if="label" class="v-input__label" v-html="label"></label>
    <input class="v-input__field" v-model="cValue" :type="type || 'text'" :placeholder="placeholder ? placeholder : ''"
      @focus="$emit('focus')" :inputmode="type === 'number' ? 'numeric' : undefined" :disabled="disabled" />
    <div class="v-input__error" v-if="error">error</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string,
  disabled?: boolean,
  value?: string | number,
  error?: string,
  type?: string,
  small?: boolean,
  placeholder?: string,
  dark?: boolean
}>()

const emit = defineEmits(['update:value', 'focus'])
const cValue = computed({
  get() {
    return props.value
  },
  set(val) {
    emit('update:value', val)
  }
})
</script>

<style lang="scss">
.v-input {
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .v-input__label {
    font-size: 14px;
    font-weight: 600;
  }

  .v-input__field {
    border: 1px solid var(--light);
    padding: 14px 20px;
    border-radius: 8px;
    // margin-bottom: 18px;

    min-width: 10px;

    &:focus-visible {
      outline: none;
    }
  }

  .v-input__error {
    color: var(--primary-color);
    font-size: 12px;
  }
}

.v-input_small {
  .v-input__field {
    padding: 7px 11px;
  }
}

.v-input_error {
  .v-input__field {
    border-color: var(--primary-color);
    margin-bottom: 0;
  }
}

.v-input_dark {
  .v-input__field {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
}
</style>