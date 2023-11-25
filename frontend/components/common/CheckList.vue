<template>
    <div class="check__main__block">
        <div>
            <div class="check__title__block">
                <h3>Чек-лист успеха</h3>
            </div>

            <div>
                <ul class="check__main__table">
                    <li v-for="item in mass" class="check__li__style">
                        <label class="check__list__text__style">
                            <input class="check__box__style" type="checkbox" v-model="item.stat">
                            <span>{{ item.quest }}</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>


        <div class="check__under__block">
            <span>Новый чек-лист</span>
            <span>Добавить задачу </span>
        </div>
    </div>
</template>


<script setup lang="ts">
const mass = [{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфы dasывыфв фывфыв',
    stat: false
},
{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфыв фывыфв фывфыв',
    stat: true
},
{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфыв фывыфв фывфыв',
    stat: true
},
{
    quest: 'aaaa',
    stat: true
},
{
    quest: 'aaaa',
    stat: true
},
{
    quest: 'aaaa',
    stat: true
},
{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфыв фывыфв фывфыв',
    stat: true
},
{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфыв фывыфв фывфыв',
    stat: true
},
{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфыв фывыфв фывфыв',
    stat: true
},
{
    quest: '4 чек ффывфывыфвфывфывфыв фывыфвфыв фывыфв фывфыв',
    stat: true
},
{
    quest: 'aaaa',
    stat: true
}]

</script>



<style lang="scss">
.check {

    &__under__block {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: end;
        gap: 30px;
        padding-right: 20px;
        padding-bottom: 15px;
    }

    &__under__block span {
        font-size: 12px;
        color: #959595;
    }

    &__li__style {
        margin: 15px 0;
    }

    &__main__table {
        margin: 30px 0;
    }

    &__box__style {}

    &__list__text__style span {
        margin-left: 10px;
        font-size: 15px;
        font-weight: 400;
        width: 80%;
        // border: 2px red solid;
    }

    &__list__text__style input:checked {
        // border: 2px red solid;
    }


    &__main__block {
        width: 999px;
        min-height: 300px;
        height: auto;
        background-color: #fff;
        border-radius: 20px;
        filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
        // border: 2px red solid;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 50px;
    }

    &__title__block {
        width: 100%;
        display: flex;
        justify-content: center;

    }

    &__title__block h3 {
        font-size: 20px;
        font-weight: 500;
        margin-top: 10px;
    }
}
</style>