<template>
    <div class="upcoming-events container mx-auto">
        <h2 class="upcoming-events__header">Ближайшие мероприятия</h2>
        <swiper-container class="py-[30px] px-[30px]" ref="swiperEl" init="false">
            <swiper-slide v-for="event in mass">
                <UpcomingBlock :event="event" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>


<script setup lang="ts">
import UpcomingBlock from '../common/UpcomingBlock.vue';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
const mass = [{
    name: "Лидеры региона - 2023",
    url: "https://elkanko.ru/competitions/lidery-regiona-2023",
    image: 'https://www.susu.ru/sites/default/files/styles/wide_news_image/public/field/image/bez_imeni_11.png?itok=-DnwYtnU',
    date: '23 ноября'
},
{
    name: "Конкурс «Грант Губернатора Югры для физических лиц 2023»",
    url: "https://elkanko.ru/contests/gfl-2023",
    image: "/grant.png",
    date: '30 января'
},
{
    name: "Конкурс «Премия Губернатора Югры в целях поощрения и поддержки талантливой молодежи»",
    url: "https://elkanko.ru/contests/premiia-gubernatora",
    image: "/premia.png",
    date: '10 февраля'
},
{
    name: "Конкурс «МЕДИА-ВЫШКА 2023»",
    url: "https://elkanko.ru/competitions/media-vyska-2023",
    image: "/media.png",
    date: '18 марта'
},
{
    name: "Лидеры региона - 2023",
    url: "https://elkanko.ru/competitions/lidery-regiona-2023",
    image: 'https://www.susu.ru/sites/default/files/styles/wide_news_image/public/field/image/bez_imeni_11.png?itok=-DnwYtnU',
    date: '23 ноября'
},
{
    name: "Конкурс «Грант Губернатора Югры для физических лиц 2023»",
    url: "https://elkanko.ru/contests/gfl-2023",
    image: "/grant.png",
    date: '30 января'
},
{
    name: "Конкурс «Премия Губернатора Югры в целях поощрения и поддержки талантливой молодежи»",
    url: "https://elkanko.ru/contests/premiia-gubernatora",
    image: "/premia.png",
    date: '10 февраля'
},
{
    name: "Конкурс «МЕДИА-ВЫШКА 2023»",
    url: "https://elkanko.ru/competitions/media-vyska-2023",
    image: "/media.png",
    date: '18 марта'
},

]
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
            slidesPerView: 4
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
const upcomingEvents = [
    {
        name: 'm1',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
    {
        name: 'm2',
        date: '25 ноября',
        image: 'https://torg.1c.ru/upload/iblock/4b5/x4b5addfd73b377127fc6f217722bb3a1.png.pagespeed.ic.RNBIfeitYz.png'
    },
]

</script>

<style lang="scss" scoped>
.upcoming-events {
    padding-top: 50px;

    &__header {
        font-size: 30px;
        font-weight: 700;
    }
}

.container {
    position: relative;
}
</style>