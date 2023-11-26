<template>
  <label class="v-upload-file__label" v-if="label">{{ label }}</label>
  <div class="v-upload-file">
    <div class="v-upload-file__frame" @click="inputEl.click()">
      <span class="flex items-center">
        <!-- <img v-if="cFileIconPath" :src="cFileIconPath"> -->
        <!-- <div class="v-upload-file__name" v-if="cFileName">{{ cFileName }}</div> -->
      </span>
      <LoadingComponent size="30" v-if="pending" />
      <i v-else class="icon-plus" />
      <input ref="inputEl" type="file" class="v-upload-file__field" :accept="cAccept" @change="onChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UploadedFile } from '../../plugins/api-modules/uploads';

const { $api } = useNuxtApp()
const props = defineProps<{
  accept: Array<string>,
  file?: UploadedFile,
  label?: string
}>()
const emit = defineEmits(['update:file'])
const pending = ref(false)
const inputEl = ref()
const cAccept = computed(() => {
  return props.accept.join(',')
})

const cFileName = computed(() => {
  if (uploadedFile.value) {

    return uploadedFile.value.name.length > 20 ?
      uploadedFile.value.name.slice(0, 15) + '...' :
      uploadedFile.value.name
  }
  return null
})

const uploadedFile: Ref<UploadedFile | undefined> = ref(props.file)
const cFileIconPath = computed(() => {
  if (uploadedFile.value) {
    return `/file-icons/${uploadedFile.value?.name.match(/\.([^.]+)$/)?.[1]}.svg`
  }
  return null
})
const onChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files ? target.files[0] : null
  if (file) {
    const formData = new FormData()
    formData.append('file', file)
    pending.value = true
    try {
      uploadedFile.value = await $api.modules.uploads.createFile(formData)
      emit('update:file', uploadedFile.value)
    } catch (error) {
      console.log(error);
    } finally {
      pending.value = false
    }
  }
}
</script>

<style lang="scss">
.v-upload-file {
  border: 1px solid var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;

  i {
    color: var(--primary);
    font-size: 50px;

    &:hover {
      color: var(--secondary);
    }
  }

  .v-upload-file__label {
    font-size: 14px;
    font-weight: 600;
  }

  .v-upload-file__frame {
    border: 1px solid var(--primary);
    border-radius: 4px;
    font-size: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border: none;
    padding: 0 20px;

    &:hover {
      cursor: pointer;
      color: var(--primary);
    }

    img {
      height: 30px;
    }
  }

  .v-upload-file__field {
    display: none;
  }

  .v-upload-file__name {
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>