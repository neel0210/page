<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="logo">The Sharingan</a>
      <ul>
        <li><a v-on:click="$router.push({ name: 'home' })">Home</a></li>
        <li>
          <a href="#" v-on:click="redirectToNewPage('https://github.com/neel0210')">Github</a>
        </li>
        <li>
          <a href="#" v-on:click="redirectToNewPage('https://neel0210.github.io/')">Downloads</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    redirectToNewPage(page) {
        window.location.href = page;
    //   this.isLoading = true;
    //   setTimeout(() => {
    //     window.location.href = page;
    //   }, 3500); // 3.5 seconds
    },
  },
};
</script>

<style>
</style>