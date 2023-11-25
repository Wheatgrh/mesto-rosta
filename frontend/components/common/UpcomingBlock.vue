<template>
    <div class="upcoming-block">
        <div class="upcoming-block__date">{{ event.date }}</div>
        <img :src="event.image" alt="Person Image" class="object-cover rounded-t-xl">
        <p class="text-center">{{ event.name }}</p>
    </div>
</template>


<script>
import UpcomingDate from './UpcomingDate.vue';

export default {
    components: {
        UpcomingDate
    },
    props: {
        event: Object
    }
}
</script>

<style lang="scss">
.upcoming-block {
    background: var(--white);
    position: relative;
    box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.05);
    border-radius: 15px;


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
</style>
