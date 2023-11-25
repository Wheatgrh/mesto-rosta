<template>
    <div class="container">
        <div class="container__shadow" :style="styles">
            <slot />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container__shadow {
    filter: drop-shadow(0px 0px 56.900001525878906px rgba(0, 0, 0, 0.10));
    min-height: 120px;
    background-color: var(--white);
    border-radius: 15px;
    padding: 24px 0;
    transition: all 500ms;
}
</style>


<script setup lang="ts">
defineProps<{
    styles?: Record<string, string>
}>()
</script>