<script setup>
import { store } from "../store";
</script>

<template>
  <header class="bg-teal-500 text-white p-6">Header: {{ store.count }}</header>
</template>
