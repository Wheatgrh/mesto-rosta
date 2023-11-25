
<template>
  <div class="container mx-auto question-block">
    <div class="flex items-center justify-between">
      <span class="question-block__title">{{ currentQuestion.question }}</span>
      <span class="question-block__counter">{{ currentIdx + 1 }} / {{ questions.length }}</span>
    </div>

    <textarea placeholder="Ваш ответ" rows="5" class="question-block__textarea"
      v-model="currentQuestion.answer"></textarea>

    <div class="flex" v-if="!isLoading">
      <VButton class="mt-5 w-fit mx-auto" @click="onDecrement" :disabled="currentIdx === 0">Назад</VButton>
      <VButton v-if="!(currentIdx === questions.length - 1)" class="mt-5 w-fit mx-auto" @click="onIncrement"
        :disabled="currentIdx === questions.length - 1 || currentQuestion.answer.length === 0">Далее
      </VButton>
      <VButton @click="onSubmit" v-if="currentIdx === questions.length - 1" class="mt-5 w-fit mx-auto"
        :disabled="currentQuestion.answer.length === 0">Завершить</VButton>
    </div>
    <div v-else>
      <LoadingComponent class="mx-auto mt-5" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ICheckListItem } from '../../assets/types';
import { useAuthStore } from '../../stores/auth';
import VButton from './VButton.vue';
const emit = defineEmits(['refresh'])
const { $api } = useNuxtApp()
const authStore = useAuthStore()
const isLoading = ref(false)

function onIncrement() {
  if (currentIdx.value < questions.value.length - 1) {
    currentIdx.value++
  }
}
function onDecrement() {
  if (currentIdx.value > 0) {
    currentIdx.value--
  }
}

async function onSubmit() {
  try {
    isLoading.value = true
    let msg = ''
    questions.value.forEach((i) => {
      msg += `${i.question}\n`
      msg += `${i.answer}\n`
      msg += 'На основе эти вопросов и ответов пользователя, составь чек-лист, чтобы успешно реализовать данный проект, предоставь ответ в виде json следующего типа {1: задача №1, 2: задача №2}'
    })
    const res = await $api.modules.gpt.ask({ message: msg })
    const arrList: Array<string> = Object.values(JSON.parse(res))
    const checkList: Array<ICheckListItem> = []
    arrList.forEach((i) => {
      checkList.push({
        quest: i,
        stat: false
      })
    })

    const user = await $api.modules.users.update({ ...authStore.getUser(), checkList })
    authStore.updateUser(user)

    emit('refresh')
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false
  }
}
const questions = ref([
  {
    question: 'Какая цель вашего проекта',
    answer: 'установка автоматов с пирожками в университете '
  },
  {
    question: 'Какие основные задачи необходимо выполнить для достижения этой цели',
    answer: 'закупить автоматы, найти поставщиков, начать продажу'
  },
  {
    question: 'Кто ваша целевая аудитория или клиенты ',
    answer: 'студенты, преподаватели'
  },
  {
    question: 'Какие конкуренты существуют в вашей области',
    answer: 'маленькая булочная в институте'
  },
  {
    question: 'Какие у вас ресурсы(люди, финансы, технологии) для реализации проекта',
    answer: 'у нас есть 2 программиста, 500000 рублей и знания'
  },
  {
    question: 'Какие сроки вы планируете для выполнения ключевых этапов проекта ',
    answer: '1 месяц'
  },
  {
    question: 'Какие риски вы видите в вашем проекте и как планируете их управлять',
    answer: 'появление конкурентов'
  },
  {
    question: 'Какие ключевые метрики успеха вы будете отслеживать',
    answer: 'количество продаж '
  },
  {
    question: 'Какие шаги вы уже предприняли для запуска проекта или достижения его цели',
    answer: 'нашли подходящие автоматы'
  },
])

const currentIdx = ref(0)
const currentQuestion = computed(() => {
  return questions.value[currentIdx.value]
})
</script>

<style lang="scss">
.question-block {
  padding: 50px;
  border-radius: 10px 30px 10px 30px;
  filter: drop-shadow(0px 0px 42.400001525878906px rgba(0, 0, 0, 0.05));
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--light);


  &__textarea {
    border-radius: 20px;
    padding: 20px;
    resize: none;
    background: var(--white);
    border: 2px solid var(--light);
  }

  &__title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  &__counter {
    font-size: 20;
    font-weight: 300;
    color: #959595;
  }
}
</style>