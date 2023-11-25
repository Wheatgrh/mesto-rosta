<template>
    <div class="stat__main__block">
        <h3>Статистика</h3>
        <div class="stat__first__block">
            <p>Выполненные
                задания</p>
            <circle-progress size="100" class="stat__circle__block" fill-color="#63D2B4" :percent="perFir" />
            <span>{{ perFir }}%</span>
        </div>
        <div class="stat__spliter__style"></div>
        <div class="stat__second__block">
            <p>Посещение мероприятия</p>
            <circle-progress size="100" class="stat__circle__block" fill-color="#63D2B4" :percent="perSec" />
            <span>{{ perSec }}%</span>
        </div>
    </div>
</template>



<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
    components: { CircleProgress },
    props: {
        perFir: {
            type: Number,
            default: 53
        },
        perSec: {
            type: Number,
            default: 53
        }
    }
}
</script>

<style lang="scss">
.stat {

    &__spliter__style {
        width: 80%;
        height: 2px;
        background-color: #EAEAEA;
        margin: 20px 0;
    }

    &__first__block {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__second__block {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__main__block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
        background-color: #fff;
        border-radius: 20px;
        padding: 20px 0;
        margin-top: 30px;

    }

    &__main__block p {
        font-size: 15px;
        color: #393939;
        width: 150px;
        // border: 2px red solid;
    }

    &__main__block span {
        position: relative;
        right: 70px;
        font-size: 18px;
        color: #959595;
    }

    &__main__block h3 {
        font-size: 20px;
        margin-bottom: 20px;

    }

    &__circle__block {}
}
</style>