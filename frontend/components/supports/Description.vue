<template>
    <div>
        <h3 class="title text-base">{{ title }}</h3>
        <span>{{ text }}</span>
    </div>
</template>


<script lang="ts" setup>
defineProps<{
    title?: string,
    text?: string,
}>()
</script>

<style lang="scss" scoped>
.title {
    color: var(--primary);

}
</style>