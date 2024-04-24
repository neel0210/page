<template>
  <div>
    <div v-if="loading" class="loading-gif">
      <div class="sharingan">
        <div class="inner-ring">
          <div class="tomoe"></div>
          <div class="tomoe"></div>
          <div class="tomoe"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <navbar />
      <main class="container hide">
        <div class="page-content">
          <div class="inner-content">
            <h1 class="heading">Neel0210</h1>
            <p></p>
            <div class="buttons">
              <a
                href="#"
                v-on:click="redirectToNewPage('https://www.instagram.com/neel_0210/')"
                >Instagram</a
              >
              <a
                href="#"
                v-on:click="$router.push('/projects')"
                >Projects</a
              >
              <a
                href="#"
                v-on:click="redirectToNewPage('https://twitter.com/Neel_0210')"
                >X</a
              >
            </div>
          </div>
        </div>
      </main>
    </div>
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

<style scoped>
</style>