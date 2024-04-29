<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="background">
</div>
  <RouterView />
</template>

<style>
.background {
    background-image: url('assets/BIN/BGV.gif');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
    z-index: -1;
    transition: 1s;
  }
</style>
