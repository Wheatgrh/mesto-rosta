<template>
    <div class="rounded-tr-lg rounded-bl-lg date-container">
        <span class="text-sm">{{ date }}</span>
    </div>
</template>


<script>
export default {
    props: {
        date: String
    }
}
</script>

<style scoped lang="scss">
.date-container {
    span {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--primary);
        color: #FFFFFF;
        padding: 10px;
        text-align: center;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 10px;
    }
}
</style>