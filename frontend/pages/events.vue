<template>
    <div class="event__main__block container mx-auto">
        <div class="event__filter__block">
            <h3>Фильтр</h3>
            <input placeholder="Поиск мероприятия" class="event__input__block" type="text">
            <VButton class="event__button__style">Применить</VButton>
        </div>
        <div class="event__block__with__event">
            <div class="event__message__block">
                <div class="event__title__with__logo">
                    <h3>Мероприятия</h3>
                    <img src="/logoWithoutText.svg" alt="">
                </div>
                <p>На нашем портале вы можете принять участие в мерпориятиях, организованных Правительством Югры,
                    администрациями муниципальных образований ХМАО-Югры, бизнес организациями, ищущими партнеров в
                    некоммерческом секторе</p>
            </div>
            <div class="event__count__block">
                <div class="event__count__event">
                    <h3>Найдено</h3>
                    <p>Результаты поиска: {{ countEvent }}</p>
                </div>
            </div>
            <div class="event__card__block">
                <EventBlock></EventBlock>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import VButton from '~/components/common/VButton.vue';
import EventBlock from '~/components/common/EventBlock.vue';

export interface Props {
    countEvent?: number
}

const props = withDefaults(defineProps<Props>(), {
    countEvent: 5,
})

</script>

<style lang="scss">
.event {

    &__card__block {}

    &__count__block {
        display: flex;
        justify-content: start;
        width: 100%;
    }

    &__count__event {
        margin: 20px 0;
    }

    &__count__event h3 {
        font-size: 20px;
        color: #959595;
    }

    &__count__event p {
        font-size: 15px;
        color: #959595;
    }

    &__title__with__logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    &__title__with__logo h3 {
        font-size: 20px;
        margin-right: 7px;
        margin-top: 20px;
    }

    &__message__block p {
        font-size: 15px;
        margin-top: 10px;
        text-align: center;
    }

    &__title__with__logo img {
        width: 18px;
        height: 24px;
        margin-top: 20px;
    }

    &__block__with__event {
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    &__message__block {
        // border: 2px red solid;
        width: 948px;
        height: 144px;
        border-radius: 15px;
        background-color: #fff;
        filter: drop-shadow(0px 0px 56.900001525878906px rgba(0, 0, 0, 0.10));
    }

    &__button__style {
        width: 132px;
    }

    &__filter__block {
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vw;
        width: 427px;
        height: 358px;
        border-radius: 15px;
        background-color: #fff;
        filter: drop-shadow(0px 0px 56.900001525878906px rgba(0, 0, 0, 0.10));
    }

    &__filter__block h3 {
        font-size: 20px;
        margin-top: 20px;
    }



    &__main__block {
        // border: 2px red solid;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 100px;

    }

    &__input__block {
        filter: drop-shadow(0px 0px 2.200000047683716px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        width: 397px;
        height: 35px;
        font-size: 15px;
    }

    &__input__block::-webkit-input-placeholder {
        color: #CACACA;
        font-weight: 400;
    }

    &__filter__block input[type=text] {
        padding-left: 10px;
    }

}
</style>