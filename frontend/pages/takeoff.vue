<template>
    <div class="container mx-auto">
        <template v-if="checkList">
            <div class="take__main__block">
                <CheckList :check-list="checkList" />
                <div class="take__stat__block">
                    <DayInWork :countDay="1"></DayInWork>
                    <StatBlock :perFir="checkListPercets" :perSec="53"></StatBlock>
                </div>
            </div>
            <Qualification />
            <h2 class="recomended_h2">Рекомендуемые курсы</h2>
            <Advertising />
        </template>
        <QuestionBlock v-else />
    </div>
</template>



<script setup lang="ts">
import CheckList from '~/components/common/CheckList.vue';
import DayInWork from '~/components/common/DayInWork.vue';
import StatBlock from '~/components/common/StatBlock.vue';
import Qualification from '~/components/common/Qualification.vue';
import Advertising from '~/components/common/Advertising.vue';
import QuestionBlock from '../components/common/QuestionBlock.vue';
import { ICheckListItem } from '../assets/types';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()
const checkList = computed(() => {
    return authStore.user?.checkList
})

const checkListPercets = computed(() => {
    const all = checkList.value?.length
    const done = checkList.value?.filter(item => item.stat).length
    if (all && done) {
        return Math.round((done / all) * 100)
    }
    return 0
})


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

.recomended_h2 {
    font-size: 34px;
    font-weight: 600;
}
</style>
