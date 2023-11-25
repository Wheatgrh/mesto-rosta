<template>
    <div class="grid grid-cols-12 mb-12">
        <div class="col-start-5 col-end-8 grid">
            <div class="avatar-container" :style="avatarStyle"></div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
    imagePath: String
});

const avatarStyle = computed(() => ({
    backgroundImage: `url(${props.imagePath})`,
}));
</script>

<style lang="scss" scoped>
.avatar-container {
    display: grid;
    border-radius: 256px;
    filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
    width: 128px;
    height: 128px;
    margin: 0 auto;
    background-color: var(--white);
    background-size: contain;
    background-position: center;
    object-fit: contain;
}
</style>