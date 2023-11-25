<template>
    <div class="">
        <h3>
            Уровень квалификации по проекту
        </h3>
        <div v-for="item in mass" class="qual__component__per">
            <p>{{ item.title }}</p>
            <div class="qual__chart__block">
                <div class="qual__color__block" :style="{ width: item.percent + '%' }">
                </div>
            </div>
            <span>{{ item.percent }}%</span>
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
    }

    &__component__per span {
        font-size: 18px;
        color: #589BFB;
        font-weight: 500;
        padding: 0 5px;
    }
}
</style>