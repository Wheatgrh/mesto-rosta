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
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.30);
    width: 256px;
    height: 256px;
    margin: 0 auto;
    background-color: var(--white);
    background-size: contain;
    background-position: center;
    object-fit: contain;
}
</style>