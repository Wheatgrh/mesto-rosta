<template>
    <div style="padding: 0 10px;">
        <h3 class="title text-base">{{ title }}</h3>
        <span v-html="text"></span>
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