<template>
    <div class="button-container">
        <span class="text text-xs">
            {{ text }}asd
        </span>
        <div class="close text-sm">x</div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    text: string
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
    background-color: var(--primary);
    position: relative;
}

.close {
    position: absolute;
    right: 4px;
    top: -2px;
    cursor: pointer;
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