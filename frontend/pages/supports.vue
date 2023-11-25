<script setup lang="ts">
import ContainerWithShadow from '../components/supports/ContainerWithShadow.vue';
import Filters from '../components/supports/Filters.vue';
import SupportItem from '../components/supports/SupportItem.vue'
import { ref, onMounted } from 'vue'
import { fetchData } from '../api/gosuslugi.js'
interface SupportData {
    title: string;
    date: string;
    categories: any[]; // You can replace 'any[]' with the actual type for categories
    content: any[]; // You can replace 'any[]' with the actual type for content
}
const supports = ref<SupportData[]>([]);
onMounted(async () => {
    try {
        supports.value = await fetchData('https://www.gosuslugi.ru/api/content-store/v1/store/measures/news'); // Используйте функцию из модуля API
    } catch (error) {
        // Обработка ошибок здесь, если необходимо
        console.error('Ошибка при запросе данных:', error);
    }
});
</script>

<template>
    <div class="wrapper">
        <component :is="ContainerWithShadow" :styles="{ minHeight: '145px' }">
            <component :is="Filters" />
        </component>
        <div class="wrapper" style="gap: 25px">
            <component v-for="item in supports" :is="SupportItem" :date="item.date" :title="item.title"
                :tags="item.categories" :description="item.content" iconSrc="/images/arrow.svg" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 45px;
}
</style>