<script setup>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderVue />
    <main class="flex-grow">
      <div class="flex gap-3 p-4">
        <router-link :to="{ name: 'HomePage' }">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about/contact">Contact</router-link>
        <router-link to="/users">Users</router-link>
      </div>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <FooterVue />
  </div>
</template>
