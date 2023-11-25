<template>
    <div :class="['container grid gap-0', classes]">
        <div class="image">
            <img :src="image">
        </div>
        <div class="title text-2xl">
            {{ title }}
        </div>
        <div class="text text-1xl">
            {{ text }}
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    image: string,
    title: string,
    text: string,
    classes: Object
}>()
</script>

<style scoped lang="scss">
.image {
    width: 50px;
}

.container {
    place-items: center;
    text-align: center;
}

.title {
    margin: 10px 0;
}

.text {
    height: 60px;
    max-width: 350px;
}
</style>