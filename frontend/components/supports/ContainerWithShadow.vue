<template>
    <div class="container">
        <div class="container__shadow" :style="styles">
            <slot />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container__shadow {
    filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
    min-height: 60px;
    background-color: var(--white);
    border-radius: 15px;
    padding-top: 20px;
    padding-bottom: 10px;
    transition: all 500ms;
}
</style>


<script setup lang="ts">
defineProps<{
    styles?: Record<string, string>
}>()
</script>