<template>
  <div>
    <div v-if="loading" class="loading-gif">
      <div class="mangekyou">
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="circle"></div>
      </div>
    </div>
	<navbar />
    <main class="container" v-if="!loading">
      <div class="page-content">
        <div class="inner-content">
          <h1 class="heading">Neel0210</h1>
          <p></p>
          <div class="buttons">
            <a href="https://twitter.com/Neel_0210" target="_blank">X</a>
            <a href="https://t.me/neel0210" target="_blank">Telegram</a>
            <a href="https://instagram.com/Neel_0210" target="_blank">Instagram</a>
            <a href="https://xdaforums.com/m/neel0210.9821139/" target="_blank">XDA</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    redirectToNewPage(page) {
        window.location.href = page;
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 4000); // 4 seconds
  },
};
</script>

<style>
</style>