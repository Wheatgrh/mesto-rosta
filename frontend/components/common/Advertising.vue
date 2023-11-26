<template>
    <swiper-container class="py-[30px] px-[30px]" ref="swiperEl" init="false">
        <swiper-slide v-for="event in [1, 2, 3, 5, 4, 6, 7,]">
            <div class="adv__main__block">
                <div class="adv__title__blue">
                    <span>{{ title }}</span>
                </div>
                <h3>{{ subj }}</h3>
                <p>{{ mainText }}</p>
                <div class="adv__spliter__style"></div>
                <h1>Срок обучения:<span class="adv__mounth__style">{{ mounth }}</span></h1>
                <div class="adv__popular__block">
                    <img src="/flame.png" alt="">
                    <span class="adv__popular__style">Самая популярная программа</span>
                </div>
                <div class="adv__block__bottom">
                    <div class="adv__title__blue__mini">
                        <span>+{{ cvalPer }}% к квалификации</span>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper-container>
</template>


<script setup lang="ts">
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';

export interface Props {
    title?: string,
    subj?: string,
    mainText?: string,
    mounth?: string,
    cvalPer?: number

}

const props = withDefaults(defineProps<Props>(), {
    title: "Технологии: Python",
    mainText: "Стань сеньором, покори мир современных технологий Стань сеньором, покори мир современных технологийСтань сеньором, покори мир современных технологий",
    mounth: "12 месяцев",
    subj: "Разработчик python: старт в IT с нуля до Junior",
    cvalPer: 30
})

register();
const swiperEl: Ref<undefined | { swiper: Swiper, initialize: () => void }> = ref()
const swiperParams: SwiperOptions = {
    autoplay: true,
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        760: {
            slidesPerView: 2
        },

    }
}
onMounted(() => {
    Object.assign(swiperEl.value!, swiperParams);
    swiperEl.value?.initialize()
})
</script>

<style lang="scss">
.adv {
    &__popular__block img {
        width: 20px;
        height: 20px;
        color: #63D2B4;
        margin-right: 10px;
    }

    &__title__blue {
        background-color: #589BFB;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 193px;
        height: 26px;
        border-radius: 5px;
    }

    &__title__blue span {
        color: #fff;
        font-size: 15px;
    }

    &__main__block h3 {
        width: 381px;
        font-size: 25px;
        font-weight: 600;
        margin: 20px 0;
    }

    &__main__block {
        font-size: 25px;
        font-weight: 600;
        filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
        background-color: #fff;
        padding: 20px;
        border-radius: 30px;
    }

    &__main__block p {
        font-size: 15px;
        margin-bottom: 10px;
    }

    &__spliter__style {
        background-color: #EAEAEA;
        height: 2px;
        width: 100%;
        margin: 10px 0;
    }

    &__main__block h1 {
        font-size: 15px;
        color: #393939;

    }

    &__mounth__style {
        color: #000000;
        margin-left: 10px;
    }

    &__popular__style {
        color: #63D2B4;
        font-size: 15px;
    }

    &__popular__block {
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin-top: 10px;
    }

    &__title__blue__mini {
        background-color: #589BFB;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 193px;
        height: 26px;
        border-radius: 5px;


    }

    &__title__blue__mini span {
        color: #fff;
        font-size: 15px;
    }

    &__block__bottom {
        display: flex;
        justify-content: end;
        margin-top: 20px;
    }




}
</style>