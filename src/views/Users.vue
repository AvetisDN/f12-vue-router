<script setup>
import { users } from "../data";
</script>

<template>
  <div class="flex flex-col pag-2 p-4">
    <div v-for="user in users" :key="user.id">
      <router-link :to="{ name: 'UserBio', params: { id: user.id } }">
        {{ user.username }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
