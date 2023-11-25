<template>
    <div class="grid grid-cols-12 gap-y-12 mb-10">
        <Input v-for="item in list" :value="item.value" :placeholder="item.placeholder" />

        <div class="card flex justify-content-center col-start-3 col-end-11 input-border" style="padding: 0;">
            <Dropdown v-model="gender" :options="genders" optionLabel="name" placeholder="Пол"
                class="w-full md:w-14rem pt-1" />
        </div>

        <div class="card flex justify-content-center col-start-3 col-end-11 input-border" style="padding: 0;">
            <Dropdown v-model="role" :options="roles" optionLabel="name" placeholder="Роль"
                class="w-full md:w-14rem pt-1" />
        </div>

        <span class="p-float-label col-start-3 col-end-11 input-border">
            <Calendar v-model="date" inputId="birth_date" />
            <label for="birth_date">Дата рождения</label>
        </span>

        <span class="p-float-label input-border col-start-3 col-end-11 grid">
            <InputText id="tag" v-model="currentTag" @keyup.enter="addTag" />
            <label for="tag">Введите тег</label>
        </span>

        <div class="col-start-3 col-end-11 grid" v-if="tags.length > 0">
            <h2 class="text-center text">Выбранные интересы при регистрации </h2>
            <div class="tags-container">
                <VButton v-for="(tag, index) in tags" :key="index" :text="tag" @click="removeTag(index)"
                    class="tags__style" />
            </div>
        </div>
    </div>
    <div v-if="tags.length === 0" class="button w-fit mx-auto mb-10">
        <SaveButton />
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import Input from './Input.vue';
import VButton from './VButton.vue';
import SaveButton from './SaveButton.vue'

const name = ref(null);
const surname = ref(null);
const patronymic = ref(null);
const interests = ref(null);
const date = ref();
const currentTag = ref('');
const tags = ref<string[]>([]);
const gender = ref({ name: '', id: 1 });
const genders = ref([
    { name: 'Мужской', id: '1' },
    { name: 'Женский', id: '2' }
]);

const role = ref({ name: '', id: 1 });
const roles = ref([
    { name: 'Партнер', id: '1' },
    { name: 'Пользователь', id: '2' }
]);

const removeTag = (index: number) => {
    tags.value.splice(index, 1);
};

const list = [
    { id: 'name', value: name, placeholder: 'Фамилия' },
    { id: 'surname', value: surname, placeholder: 'Имя' },
    { id: 'patronymic', value: patronymic, placeholder: 'Отчество' },
    { id: 'interests', value: interests, placeholder: 'Направление разработки' },
]

const addTag = () => {
    if (currentTag.value.trim() !== '') {
        tags.value.push(currentTag.value);
        currentTag.value = '';
    }
};
</script>

<style lang="scss" scoped>
.tags__style {
    background-color: #589BFB;
}

.button {
    margin-top: 55px;
    display: flex;
    justify-content: center;
    background-color: none;
}

.tags-container {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-top: 25px;
    color: #fff;

}

.input-border {
    filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.02));
    border-radius: 10px;
    border: 2px #dedede solid;
    height: 54px;
}

.input-border span {
    border-radius: 10px;
    height: 54px;
    width: 100%;
    border: 0;
}

.text {
    color: var(--gray)
}
</style>
