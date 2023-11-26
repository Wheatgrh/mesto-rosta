<template>
    <div class="profile">
        <div v-if="error">{{ error }}</div>
        <div v-else>
            <Avatar :imagePath="user?.avatar.url" />
            <form class="profile__form mb-5" v-if="user">
                <VInput v-model:value="user.surname" placeholder="Фамилия" disabled />
                <VInput v-model:value="user.name" placeholder="Имя" disabled />
                <VInput v-model:value="user.patronymic" placeholder="Отчество" disabled />
                <VTagsInput label="" placeholder="Добавить интерес" v-model:current="user.interests"
                    @update:current="onRefresh" />
                <div class="profile-form__tags" v-if="user.interests?.length">
                    <div class="profile-form__tag" v-for="item in user.interests">
                        {{ item }}
                        <i class="icon-close profile-form__tag-del" @click="onRemoveTag(item)" />
                    </div>
                </div>
            </form>
            <div class="profile__certs-input">
                <VUploadField :accept="allowedUploads" :file="file" label="Сертификаты" @update:file="onAddCert" />
            </div>
            <div class="grid grid-cols-3 mt-5">
                <div class="mx-auto" v-for="cert in user?.certificates">
                    <div class="flex gap-5 items-center">
                        <div class="w-[50px] flex flex-col items-center">
                            <img src="/file-icons/pdf.svg" alt="pdf">
                            <div>{{ cert.file.name }} </div>
                        </div>
                        <i
                            :class="`icon-${cert.validated ? 'ok' : 'close'} ${cert.validated ? 'icon_ok' : 'icon_error'}`" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import VInput from '../components/common/VInput.vue';
import VTagsInput from '../components/common/VTagsInput.vue';
import VUploadField from '../components/common/VUploadField.vue';
import Avatar from '../components/profile/Avatar.vue'
import { UploadedFile } from '../plugins/api-modules/uploads';
import { useAuthStore } from '../stores/auth';
const allowedUploads = ['.pdf', '.doc', '.docx']
const file = ref()

const authStore = useAuthStore()
const { $api } = useNuxtApp()
const onRefresh = async () => {
    try {
        if (user.value && user.value.interests && user.value.uuid)
            await $api.modules.users.updateInterests({ userUuid: user.value.uuid, interests: user.value.interests })
    } catch (error) {
        console.log(error);
    }
}

const onAddCert = async (file: UploadedFile) => {
    if (user.value && user.value.uuid && user.value.certificates) {
        const res = await $api.modules.certificates.create({ userUuid: user.value?.uuid, file })
        user.value.certificates.push(res)
    }
}
const onRemoveTag = async (tag: string) => {
    const idx = user.value?.interests?.findIndex(i => i === tag)
    if (idx || idx === 0) {
        user.value?.interests?.splice(idx, 1)
    }
    await onRefresh()
}
const { data: user, error } = await useAsyncData(
    async () => await $api.modules.users.getOne(authStore.user?.phone || '')
)

</script>

<style lang="scss">
.icon_ok {
    color: green;
}

.icon_error {
    color: red;
}

.profile {
    max-width: 600px;
    margin: 0 auto;

    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

.profile-form__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    grid-column: 1/3;

    .profile-form__tag {
        background: var(--primary);
        color: white;
        padding: 5px 30px 5px 10px;
        border-radius: 5px;
        position: relative;


        .profile-form__tag-del {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            font-size: 12px;

            &:hover {
                color: var(--secondary);
                cursor: pointer;
            }
        }
    }
}
</style>