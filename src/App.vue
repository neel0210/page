<script setup>
import { RouterView } from 'vue-router'
import bgGif from '@/assets/BIN/BGV.gif'
</script>

<template>
  <div class="app-background" :style="{ backgroundImage: `url(${bgGif})` }"></div>
  <div class="app-overlay"></div>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* Page transition styles are defined in main.css */
</style>
