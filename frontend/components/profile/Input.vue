<template>
    <span class="p-float-label input-border col-start-3 col-end-11 grid">
        <InputText :id="id" v-model="internalValue" />
        <label :for="id">{{ placeholder }}</label>
    </span>
</template>


<script setup lang="ts">
const props = defineProps<{
    value: any,
    placeholder: string,
    id: string
}>()

const internalValue = ref(props.value)

watch(internalValue, (newValue) => {
    internalValue.value = newValue
})
</script>

<style lang="scss" scoped>
.input-border {
    box-shadow: 4px 6px 15px 0px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    height: 54px;
}
</style>