<template>
    <div class="filter-container">
        <div class="title text-2xl">Что нового</div>
        <div class="filter-container__button">
            <div>
                <img src="/images/filter.svg">
            </div>
            <div>Показать фильтры</div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.filter-container__button {
    display: flex;
    margin: 30px;
    gap: 15px;
    color: var(--primary);
}

.filter-container {
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    justify-content: space-between;
}

.title {
    margin-left: 65px;
}
</style>