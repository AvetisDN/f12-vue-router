<script setup>
import { store } from "../store";
</script>

<template>
  <div class="p-4">
    <h1>Home Page</h1>
    <button class="bg-red-500 text-white p-2" @click="store.decr">
      <i class="fas fa-minus"></i>
    </button>
    <button class="bg-teal-500 text-white p-2" @click="store.incr">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>
