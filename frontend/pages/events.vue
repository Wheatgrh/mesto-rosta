<template>
    <div class="event__main__block container mx-auto">
        <div class="event__filter__block">
            <h3>Фильтр</h3>
            <input placeholder="Поиск мероприятия" class="event__input__block" type="text">
            <select placeholder="Год мероприятия" class="event__select__block">
                <option>2023 год</option>
                <option>2022 год</option>
                <option>2021 год</option>
                <option>2020 год</option>
            </select>
            <select placeholder="Место проведения" class="event__select__block">
                <option>г. Сургут</option>
                <option>г. Нижневартовск</option>
                <option>ХМАО-Югра</option>
            </select>
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
            <div v-for="item in mass" class="event__card__block">
                <EventBlock :title="item.title" :stats="item.stat" :mainInfo="item.mainInfo"
                    :company-name="item.companyName" :to-link="item.toLink" :count-participant="item.countParticipant"
                    :photo="item.photo">
                </EventBlock>
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

const mass = [{
    title: "Лидер региона - 2023",
    stat: "Прием заявок",
    mainInfo: "Конкурсный отбор участников специального проекта поощрения активной молодежи в Ханты-Мансийском автономном округе – Югре «Лидеры региона – 2023» программы гражданско-патриотического и общественно полезного молодежного туризма «Больше, чем путешествие»",
    companyName: 'Фонд "Центр гражданских и социальных инициатив Югры"',
    toLink: "https://elkanko.ru/competitions/lidery-regiona-2023",
    countParticipant: 639,

},
{
    title: "Конкурс «Грант Губернатора Югры для физических лиц 2023»",
    stat: "Завершен",
    mainInfo: "Поддержим социально-значимые инициативы и проекты югорчан по 18 (восемнадцати) направлениям. Максимальная сумма гранта 1 000 000 (один миллион) рублей. Заявки принимаются по 2 октября 2023 до 23:30 по местному времени включительно.",
    companyName: 'Фонд "Центр гражданских и социальных инициатив Югры"',
    toLink: "https://elkanko.ru/contests/gfl-2023",
    countParticipant: 233,
    photo: "/grant.png"
},
{
    title: "Конкурс «Премия Губернатора Югры в целях поощрения и поддержки талантливой молодежи»",
    stat: "Комиссия",
    mainInfo: "Для физических лиц в возрасте от 14 до 35 лет , проживающих в Югре, проявивших себя в профессии или общественной работе.",
    companyName: 'Фонд "Центр гражданских и социальных инициатив Югры"',
    toLink: "https://elkanko.ru/contests/premiia-gubernatora",
    countParticipant: 214,
    photo: "/premia.png"
},
{
    title: "Конкурс «МЕДИА-ВЫШКА 2023»",
    stat: "Завершен",
    mainInfo: "Конкурс проектов в области культуры, искусства и креативных индустрий на грант Губернатора Югры",
    companyName: 'Фонд "Центр гражданских и социальных инициатив Югры"',
    toLink: "https://elkanko.ru/competitions/media-vyska-2023",
    countParticipant: 121,
    photo: "/media.png"
}
]

</script>

<style lang="scss">
.event {
    &__select__block {
        filter: drop-shadow(0px 0px 2.200000047683716px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        width: 397px;
        height: 35px;
        font-size: 15px;
        background-color: #fff;


    }

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