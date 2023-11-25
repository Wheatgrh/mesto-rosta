<template>
    <div class="day__main__block">
        <h3>В работе</h3>
        <span>{{ countDay }}</span>
        <p>дней</p>
    </div>
</template>

<script setup lang="ts">
export interface Props {
    countDay?: number
}

const props = withDefaults(defineProps<Props>(), {
    countDay: 11,
})
</script>


<style lang="scss">
.day {
    &__main__block {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
        background-color: #fff;
        width: 381px;
        height: 199px;
        border-radius: 30px;
    }

    &__main__block h3 {
        font-size: 25px;
        margin-top: 15px;
    }

    &__main__block span {
        font-size: 60px;
        color: #589BFB;
        margin: 0px;

    }

    &__main__block p {
        position: relative;
        bottom: 25px;
        font-size: 30px;
        color: #959595;
        margin: 0;

    }

}
</style>