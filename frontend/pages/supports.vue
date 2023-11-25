<script setup lang="ts">
import ContainerWithShadow from '../components/supports/ContainerWithShadow.vue';
import Filters from '../components/supports/Filters.vue';
import SupportItem from '../components/supports/SupportItem.vue'
import { ref, onMounted } from 'vue'
import { fetchData } from '../api/gosuslugi.js'
export interface SupportData {
    title: string;
    date: string;
    categories: any[]
    content: any[];
}
const supports = ref<SupportData[]>([]);
const isLoading = ref(false)
const filteredSupports = computed(() => {
    if (query.value.length) {
        return supports.value.filter(i => i.title.toLowerCase().includes(query.value.toLowerCase()))
    }
    return supports.value
})
const query = ref('')
onMounted(async () => {
    try {
        const responseData = await fetchData('https://www.gosuslugi.ru/api/content-store/v1/store/measures/news'); // Используйте функцию из модуля API
        supports.value = responseData
    } catch (error) {
        console.error('Ошибка при запросе данных:', error);
    } finally {
        isLoading.value = false
    }
});
</script>

<template>
    <div class="wrapper">
        <component :is="ContainerWithShadow" :styles="{ minHeight: '145px' }">
            <component :is="Filters" v-model:value="query" />
        </component>
        <LoadingComponent v-if="isLoading" />
        <div class="wrapper" style="gap: 25px" v-else>
            <component v-for="item in filteredSupports" :is="SupportItem" :date="item.date" :title="item.title"
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