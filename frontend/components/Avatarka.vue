<template>
  <NuxtLink to="/profile" class="avatar">
    <img :src="userAvatar" alt="img" v-if="userAvatar">
    <i class="icon-user" v-else />
  </NuxtLink>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()
const userAvatar = computed(() => authStore.user?.avatar.url)
</script>

<style lang="scss">
.avatar {
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary);
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
}
</style>