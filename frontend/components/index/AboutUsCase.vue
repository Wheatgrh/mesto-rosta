<template>
    <div class="wrapper">
        <div class="wrapper__container-top grid-cols-12 gap-4">
            <div class="growth-point top-1 col-start-1 col-end-6">
                <div class="growth-point__container">
                    <div class="growth-point__arrow text-4xl my-1">Что такое</div>
                    <div class="growth-point__text text-4xl my-2">ТОЧКА РОСТА?</div>
                </div>
            </div>
            <div class="col-start-6 col-end-12 gap-3 grid">
                <div>
                    ЕЛКА (единый личный кабинет активиста) - это честный сервис с проверенной информацией о
                    некоммерческом
                    секторе, где судят по делам.
                </div>
                <div>
                    Мы агрегируем информацию о деятельности СО НКО, добровольческих объединений (ДВО) и гражданских
                    активистов
                    из разных открытых источников, и формируем на ее основе открытую базу данных.
                </div>
                <div>
                    На основании алгоритма ранжирования информации, разработанного Фондом "Центр гражданских и социальных
                    инициатив" совместно с отраслевыми экспертами, мы добиваемся, чтобы на виду были те, кто реально
                    работает и
                    развивает сектор своими делами.
                </div>
            </div>
        </div>
        <div class="wrapper__container-bottom">
            <WhatDoing v-for="step in steps" :image="step.img" :text="step.text" :title="step.title"
                :classes="step.classes" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Paragraph from '../aboutUsCase/Paragraph.vue';
import WhatDoing from '../aboutUsCase/WhatDoing.vue';

const steps = [
    {
        img: '/images/what-doing/collecting.svg',
        title: 'Собираем',
        classes: "col-start-1 col-end-4",
        text: 'Автоматически парсим все основные площадки Югры, а так же предоставляем удобное API для партнеров'
    },
    {
        img: '/images/what-doing/sorted.svg',
        title: 'Упорядочиваем',
        classes: "col-start-6 col-end-8",
        text: 'Удобный поиск и категоризация услуг и мер поддержки в одном месте для вашего удобства'
    },
    {
        img: '/images/what-doing/supplements.svg',
        title: 'Дополняем',
        classes: "col-start-10 col-end-12",
        text: 'Помимо агрегации, мы так же проводим свои мероприятия и оказываем поддержку IT предпринимателям нашего региона'
    }
]
</script>

<script lang="ts">
export default {
    components: {
        Paragraph,
        WhatDoing
    },
}
</script>

<style scoped lang="scss">
.wrapper {
    height: 732px;
    margin-top: 115px;

    &__container-top {
        display: grid;
        align-items: flex-end;
    }

    &__container-bottom {
        margin-top: 90px;
        display: grid;
    }
}

.growth-point {
    background-image: url('../../assets/icons/images/arrow.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 150%;
    position: relative;
    top: 40px;
    color: var(--white);
}

.growth-point__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    // line-height: ;
}

.growth-point__arrow {
    /* Стили для стрелки, если они вам нужны. */
}

.growth-point__text {
    /* Стили для текста, если они вам нужны. */
}
</style>
