<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const target = ref("");
if (route.query.target) {
  target.value = route.query.target;
}
</script>

<template>
  <div>
    <h1>
      Error 404:
      <span v-if="target" class="capitalize">{{ target }}</span>
      <span v-else="target" class="capitalize">page</span>
      Not found
    </h1>
  </div>
</template>
