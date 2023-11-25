<template>
    <div class="filter-container">
        <div class="title text-2xl">Что нового</div>
        <VInput v-model:value="cValue" placeholder="Поиск" />
        <div class="filter-container__button">
            <div>
                <img src="/images/filter.svg">
            </div>
            <div>Показать фильтры</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import VInput from '../common/VInput.vue';
const props = defineProps<{
    value: string
}>()
const emit = defineEmits(['update:value'])
const cValue = computed({
    get() {
        return props.value
    },
    set(val) {
        emit('update:value', val)
    }
})

</script>


<style lang="scss" scoped>
.filter-container__button {
    display: flex;
    margin: 30px;
    gap: 15px;
    color: var(--primary);
}

.filter-container {
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    justify-content: space-between;
}

.title {
    margin-left: 65px;
}
</style>