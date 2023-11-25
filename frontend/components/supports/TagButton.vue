<template>
    <div class="button-container" :style="{ backgroundColor: color }">
        <span class="text text-xs">
            {{ text }}
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    color: string,
    text: string,
}>()
</script>

<style>
.button-container {
    border-radius: 5px;
    min-width: 130px;
    height: 25px;
    border: 0px;
    text-align: center;
    padding: 4px 16px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.text {
    text-align: center;
    color: var(--white);
    width: 100%;
}

@media (max-width: theme('screens.tablet')) {
    .button-container {
        min-width: 100px;
    }
}
</style>