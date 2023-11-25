<template>
    <div class="card__main__block">
        <div class="card__upper__block">
            <div class="card__status__block">
                <p>{{ status }}</p>
            </div>
        </div>
        <div class="card__down__block">
            <div class="card__image__block">
                <img class="card__img__style" src="/hmao.png" alt="">
            </div>
            <div class="card__block__text">
                <h3>
                    {{ title }}
                </h3>
                <p>{{ mainInfo }}</p>
                <span>
                    {{ countParticipant }} заявка
                </span>
                <p>{{ companyName }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

export interface Props {
    countParticipant?: number,
    title?: string,
    mainInfo: string,
    companyName: string,
    status: string,
    toLink?: string
}

const props = withDefaults(defineProps<Props>(), {
    countParticipant: 5,
    title: "Лидер региона - 2023",
    status: "В процессе",
    mainInfo: "Конкурсный отбор участников специального проекта поощрения активной молодежи в Ханты-Мансийском автономном округе – Югре «Лидеры региона – 2023» программы гражданско-патриотического и общественно полезного молодежного туризма «Больше, чем путешествие»",
    companyName: 'Фонд "Центр гражданских и социальных инициатив Югры"',
    toLink: "/"
})

</script>


<style lang="scss">
.card {
    &__main__block {
        width: 948px;
        height: auto;
        min-height: 265px;
        filter: drop-shadow(0px 0px 56.900001525878906px rgba(0, 0, 0, 0.10));
        background-color: #fff;
        border-radius: 15px;
    }

    &__upper__block {
        display: flex;
        justify-content: end;
    }

    &__status__block {
        width: 119px;
        height: 26px;
        background-color: #589BFB;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-right: 10px;
    }

    &__status__block p {
        color: #fff;
        font-size: 15px;
    }

    &__down__block {
        display: grid;
        grid-template-columns: 25% 75%;

    }

    &__image__block {
        // border: 2px red solid;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__img__style {
        border: 3px #589BFB solid;
        border-radius: 10px;
        width: 170px;
        height: 170px;
    }

    &__block__text h3 {
        font-size: 20px;
        color: #589BFB;
        font-weight: 500;
        margin: 10px 0;

    }

    &__block__text p {
        font-size: 15px;
        font-weight: 400;
        margin: 5px 0;
        padding-right: 50px;
    }

    &__block__text span {
        font-size: 15px;
        font-weight: 400;
        color: #959595;
    }
}
</style>