<template>
    <div class="support-container">
        <div class="support-container__block">
            <div class="text-1xl	 tablet:text-3xl">ИТ-ипотека — теперь доступнее</div>
            <div class="support-container__bottom">
                <div>{{ date }}</div>
                <div class="tag-container">
                    <component :is="TagButton" v-for="tag, i in tags" :color="i === 0 ? 'var(--primary)' : 'var(--green)'"
                        :text="tag.name" />
                </div>
            </div>
        </div>
        <div class="image-container" @click="handleClick" :style="rotationStyle">
            <img class="image" :src="iconSrc">
        </div>
    </div>
    <div class="container drop-down-container" :class="{ 'drop-down-container_open': state }" ref="dropDownContainerRef">
        <component :is="Description" v-for="item in description" :title="item.title" :text="item.text" />
    </div>
</template>



<script lang="ts" setup>
import TagButton from './TagButton.vue';
import Description from './Description.vue';
interface TagType { color: string, name: string }
interface DescriptionType { title: string, text: string }

const rotationStyle = computed(() => ({
    'transform': state.value ? 'rotate(180deg)' : 'rotate(0deg)'
}))
defineProps<{
    date: string,
    tags: TagType[],
    iconSrc: string,
    description: DescriptionType[]
}>()

const handleClick = () => state.value = !state.value
const dropDownContainerRef = ref<HTMLElement | null>(null);

// watchEffect(() => {
//     if (dropDownContainerRef.value) {
//         if (state.value) {
//             dropDownContainerRef.value.classList.add('open');
//         } else {
//             dropDownContainerRef.value.classList.remove('open');
//         }
//     }
// });

const state = ref(false)
</script>

<style lang="scss">
.drop-down-container {
    transition: all 500ms;
    overflow: hidden;
    display: grid;
    margin-bottom: 30px;
    max-height: 0;
}

.image-container {
    display: flex;
    align-items: start;
    justify-content: start;
    height: 100%;
    transition: all 500ms;
}

.support-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    height: 100%;

    &__bottom {
        display: flex;
        gap: 25px;
        margin: 20px 0;
    }
}

.tag-container {
    display: flex;
    gap: 25px;
}


@media (max-width: theme('screens.desktop')) {
    .image {
        height: 35px;
    }
}

@media (max-width: theme('screens.laptop')) {
    .image {
        height: 45px;
    }
}

.drop-down-container_open {
    max-height: 100px;
    grid-template-rows: 1fr;
}
</style>