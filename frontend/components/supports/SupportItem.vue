<template>
    <component :is="ContainerWithShadow">
        <div class="support-container">
            <div class="support-container__block">
                <div class="text-container text-sm tablet:text-lg">{{ title }}</div>
                <div class="support-container__bottom">
                    <div class="support-date-style">{{ date }}</div>
                    <div class="tag-container">
                        <component :is="TagButton" v-for="tag, i in tags"
                            :color="i === 0 ? 'var(--primary)' : 'var(--green)'" :text="tag.name" />
                    </div>
                </div>
            </div>
            <div class="image-container" @click="handleClick" :style="rotationStyle">
                <img class="image" :src="iconSrc">
            </div>
        </div>
        <div class="container drop-down-container" :class="{ 'drop-down-container_open': state }"
            ref="dropDownContainerRef">
            <component :is="Description" v-for="item in description" :title="item.title" :text="item.text" />
        </div>
    </component>
</template>



<script lang="ts" setup>
import { ref, computed } from 'vue'
import ContainerWithShadow from './ContainerWithShadow.vue';
import TagButton from './TagButton.vue';
import Description from './Description.vue';
interface TagType { color: string, name: string }
interface DescriptionType { title: string, text: string }

const rotationStyle = computed(() => ({
    'transform': state.value ? 'rotate(180deg)' : 'rotate(0deg)'
}))
defineProps<{
    title: string,
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
    margin-bottom: 10px;
    max-height: 0;
}

.image-container {
    display: flex;
    align-items: start;
    justify-content: end;
    height: 100%;
    transition: all 500ms;
}

.support-date-style {
    color: #959595;
}

.support-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    height: 100%;

    &__block {
        // max-width: 70vw;
    }

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
    .image-container {
        width: 20vw;
    }

    .image {
        height: 45px;
    }
}

.drop-down-container_open {
    max-height: 700px;
    grid-template-rows: 1fr;
}
</style>