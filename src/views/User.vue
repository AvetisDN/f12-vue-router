<script setup>
import { ref } from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { getUserById } from "../data";

const route = useRoute();
const router = useRouter();

const user = ref(getUserById(route.params.id));

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    user.value = getUserById(to.params.id);
  }
});

if (!user) {
  router.replace("/404?target=user");
}
</script>

<template>
  <div class="flex flex-col pag-2 p-4" v-if="user">
    <h1>{{ user.username }} Data</h1>
    <hr />
    <p class="p-4">{{ user.bio }}</p>
  </div>
</template>
