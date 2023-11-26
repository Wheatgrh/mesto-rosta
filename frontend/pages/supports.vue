<script setup lang="ts">
import ContainerWithShadow from '../components/supports/ContainerWithShadow.vue';
import Filters from '../components/supports/Filters.vue';
import SupportItem from '../components/supports/SupportItem.vue'
import { ref, onMounted } from 'vue'
import { fetchData } from '../api/gosuslugi.js'
import VButton from '~/components/common/VButton.vue';
export interface SupportData {
    title: string;
    date: string;
    categories: any[];
    content: any[];
}
const supports = ref<SupportData[]>([]);
const isLoading = ref(false)
const loadButtonShow = ref(true)
const showCount = ref<number>(5)
const filteredSupports = computed(() => {
    if (query.value.length) {
        return supports.value.filter(i => i.title.toLowerCase().includes(query.value.toLowerCase())).slice(0, showCount.value)
    }
    return supports.value.slice(0, showCount.value)
})
const query = ref('')
const sortDescending = ref(false)

const supportsSorted = (responseData: Array<SupportData> = supports.value) => {
    supports.value = responseData.sort((a: any, b: any) => {
        const aSplit = a?.date?.split('.')
        const bSplit = b?.date?.split('.')
        const newDateA = new Date([aSplit[2], aSplit[1], aSplit[0]].join('-'))
        const newDateB = new Date([bSplit[2], bSplit[1], bSplit[0]].join('-'))
        return sortDescending.value ? newDateB.getTime() - newDateA.getTime() : newDateA.getTime() - newDateB.getTime()
    })
    sortDescending.value = !sortDescending.value
}

const loadMore = () => {
    const supportsLength = supports.value.length
    if (supportsLength >= (showCount.value + 5)) {
        showCount.value += 5
    } else {
        showCount.value = supportsLength
        loadButtonShow.value = false
    }
}
onMounted(async () => {
    try {
        isLoading.value = true
        const responseData = await fetchData('https://www.gosuslugi.ru/api/content-store/v1/store/measures/news'); // Используйте функцию из модуля API
        supportsSorted(responseData)
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
            <component :is="Filters" v-model:value="query" :supportsSorted="supportsSorted" />
        </component>
        <LoadingComponent v-if="isLoading" />
        <div class="wrapper" style="gap: 25px" v-else>
            <component v-for="item in filteredSupports" :is="SupportItem" :date="item.date" :title="item.title"
                :tags="item.categories" :loadButtonShow="loadButtonShow" :description="item.content"
                iconSrc="/images/arrow.svg" />
        </div>
        <VButton @click="loadMore">Загрузить еще</VButton>
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