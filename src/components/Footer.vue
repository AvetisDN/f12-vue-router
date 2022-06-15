<script setup>
import { store } from "../store";
</script>

<template>
  <footer class="bg-slate-500 text-white p-6">Footer: {{ store.count }}</footer>
</template>
