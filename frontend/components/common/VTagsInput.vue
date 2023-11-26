<template>
  <div class="v-tags-input" ref="selectRef">
    <label class="v-tags-input__label">{{ label }}</label>
    <div class="v-tags-input__field">
      <input class="v-tags-input__input" v-model="inputVal" :placeholder="placeholder || 'Не выбрано'" />
      <div class="v-tags-input__button" @click="onClick">+</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  placeholder: string
  current?: string[]
}>()
const emit = defineEmits(['update:current'])
const inputVal: Ref<string | null> = ref(null)
const onClick = () => {
  if (inputVal.value && inputVal.value.length && props.current) {
    if (props.current.includes(inputVal.value)) {
      inputVal.value = null
      return
    }
    emit('update:current', [...props.current, inputVal.value])
    inputVal.value = null
  }
}
</script>

<style lang="scss">
.v-tags-input {
  font-size: 14px;
  height: fit-content;

  .v-tags-input__label {
    font-size: 14px;
    font-weight: 600;
  }

  .v-tags-input__field {
    border: 1px solid #D2D5DA;
    padding: 14px 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    .v-tags-input__input {
      background: none;
      flex-grow: 1;

      &:focus-visible {
        outline: none;
      }
    }

    .v-tags-input__button {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      background-color: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>