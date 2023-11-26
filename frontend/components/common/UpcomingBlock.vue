<template>
    <div class="upcoming-block">
        <div class="upcoming-block__date">{{ event.date }}</div>
        <img :src="event.image" alt="Person Image" class="upcoming-block__img object-cover rounded-t-xl">
        <p class="upcoming-block__name">{{ event.name }}</p>
    </div>
</template>


<script setup lang="ts">
defineProps<{
    event: {
        name: string,
        date: string,
        image: string,
        url: string
    }
}>()

</script>

<style lang="scss">
.upcoming-block {
    background: var(--white);
    position: relative;
    box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    height: 230px;

    .upcoming-block__name {
        font-size: 14px;
        line-height: 20px;
        padding: 10px;
        text-align: center;
    }

    &__date {
        background: var(--primary);
        border-radius: 0 10px 0 10px;
        border: 2px solid var(--white);
        position: absolute;
        top: 0;
        right: 0;
        color: var(--white);
        padding: 5px 10px;
    }
}

.upcoming-block__img {
    height: 150px;
    object-fit: cover;
    width: 100%;
}
</style>
