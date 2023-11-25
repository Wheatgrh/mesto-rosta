<script setup lang="ts">
import ContainerWithShadow from '~/components/supports/ContainerWithShadow.vue';
import Filters from '~/components/supports/Filters.vue';
import SupportItem from '~/components/supports/SupportItem.vue'

// const supports = [
//     {
//         date: '23.11.2023',
//         tags: [
//             { color: 'var(--primary)', text: 'Льготы ипотека' },
//             { color: 'var(--green)', text: 'Госуслуги' }
//         ],
//         description: [
//             {
//                 title: 'Перед заполнением формы',
//                 text: 'Проверьте актуальность согласия на раскрытие налоговой тайны или подайте его по инструкции. Компании, не подавшие согласие, лишатся аккредитации'
//             }
//         ]
//     },
//     {
//         date: '23.11.2023',
//         tags: [
//             { color: 'var(--primary)', text: 'Льготы ипотека' },
//             { color: 'var(--green)', text: 'Госуслуги' }
//         ],
//         description: [
//             {
//                 title: 'Перед заполнением формы',
//                 text: 'Проверьте актуальность согласия на раскрытие налоговой тайны или подайте его по инструкции. Компании, не подавшие согласие, лишатся аккредитации'
//             }
//         ]
//     },
// ]

import { fetchData } from '@/api/gosuslugi.js'
interface SupportData {
    date: string;
    categories: any[]; // You can replace 'any[]' with the actual type for categories
    content: any[]; // You can replace 'any[]' with the actual type for content
}
const supports = ref<SupportData[]>([]);
onMounted(async () => {
    try {
        supports.value = await fetchData('https://www.gosuslugi.ru/api/content-store/v1/store/measures/news'); // Используйте функцию из модуля API
        console.log('as', await fetchData('https://www.gosuslugi.ru/api/content-store/v1/store/measures/news'));
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
        <component :is="ContainerWithShadow">
            <component v-for="item in supports" :is="SupportItem" :date="item.date" :tags="item.categories"
                :description="item.content" iconSrc="/images/arrow.svg" />
        </component>
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