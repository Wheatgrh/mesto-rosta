<template>
    <div class="qual__main__block">
        <h3>
            Уровень квалификации по проекту
        </h3>
        <div class="qual__stat__block">
            <div>
                <div v-for="item in mass" class="qual__component__per">
                    <p>{{ item.title }}</p>
                    <div class="qual__chart__block">
                        <div class="qual__color__block" :style="{ width: item.percent + '%' }">
                        </div>
                    </div>
                    <span>{{ item.percent }}%</span>
                </div>
            </div>
            <div class="qual__graph__style">
                <p>Общий компетенции<br />
                    для проекта </p>
                <circle-progress size="200" class="stat__circle__block" fill-color="#63D2B4" :percent="allPercent" />
                <span>{{ allPercent }}%</span>
            </div>
        </div>

    </div>
</template>



<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
    components: { CircleProgress },
    data: () => {
        return {
            mass: [{
                title: 'Python',
                percent: 55
            },
            {
                title: 'C#',
                percent: 34
            },
            {
                title: 'Docker',
                percent: 76
            },
            {
                title: 'Postgre',
                percent: 65
            }]
        }
    },
    props: {
        title: {
            type: String,
            default: "Python"
        },
        percent: {
            type: Number,
            default: 80
        },
        allPercent: {
            type: Number,
            default: 10
        }
    }
}
</script>

<style lang="scss">
.qual {
    &__chart__block {
        width: 508px;
        height: 22px;
        background-color: #EAEAEA;
        border-radius: 10px;
    }

    &__color__block {
        background-color: #63D2B4;
        height: 22px;
        border-radius: 10px;
    }

    &__component__per {
        display: flex;
        flex-direction: row;
        gap: 40px;
        margin: 30px 0;
    }

    &__component__per span {
        font-size: 18px;
        color: #589BFB;
        font-weight: 500;
        padding: 0 5px;
        width: 50px;
    }

    &__component__per p {
        font-size: 18px;
        font-weight: 500;
        padding: 0 5px;
        width: 100px;


    }

    &__main__block {
        background-color: #fff;
        filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
        border-radius: 20px;
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    &__main__block h3 {
        font-size: 20px;
        text-align: center;
        margin-bottom: 30px;
    }

    &__stat__block {
        display: flex;
        flex-direction: row;
    }

    &__graph__style {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        // border: 2px red solid;
    }

    &__graph__style span {
        position: relative;
        font-size: 20px;
        color: #959595;
        bottom: 110px;
    }

    &__graph__style p {
        font-size: 15px;
        margin-bottom: 10px;
        text-align: center;
    }
}
</style>