<template>
    <div class="take__main__block container mx-auto">
        <CheckList></CheckList>
        <div class="take__stat__block">
            <DayInWork :countDay="17"></DayInWork>
            <StatBlock :perFir="23" :perSec="53"></StatBlock>
        </div>
    </div>
    <Qualification>
    </Qualification>
</template>



<script setup lang="ts">
import CheckList from '~/components/common/CheckList.vue';
import DayInWork from '~/components/common/DayInWork.vue';
import StatBlock from '~/components/common/StatBlock.vue';
import Qualification from '~/components/common/Qualification.vue';
</script>



<style lang="scss">
.take {
    &__stat__block {
        display: flex;
        flex-direction: column;
    }

    &__main__block {
        display: flex;
        justify-content: space-between;
    }
}
</style>
