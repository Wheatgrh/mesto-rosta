<template>
    <div class="upcoming-events container mx-auto">
        <h2 class="upcoming-events__header">Ближайшие мероприятия</h2>
        <swiper-container class="py-[30px] px-[30px]" ref="swiperEl" init="false">
            <swiper-slide v-for="event in upcomingEvents">
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