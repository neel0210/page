<template>
  <div class="page-wrapper">
    <transition name="fade">
      <SharinganLoader v-if="loading" />
    </transition>

    <navbar />

    <main class="main-container">
      <section class="connect-container">
        <h1 class="section-title">Connect</h1>
        <p class="section-subtitle">Find me across the web and social platforms</p>

        <div class="social-grid">
          <a 
            v-for="(link, index) in links" 
            :key="index" 
            :href="link.url" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-card"
          >
            <span class="social-name">{{ link.name }}</span>
            <span class="social-handle">{{ link.handle }}</span>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import SharinganLoader from "@/components/SharinganLoader.vue";

export default {
  name: "ConnectView",
  components: { Navbar, SharinganLoader },
  data() {
    return {
      loading: true,
      links: [
        {
          name: "GitHub",
          handle: "neel0210",
          url: "https://github.com/neel0210"
        },
        {
          name: "X (Twitter)",
          handle: "@Neel_0210",
          url: "https://twitter.com/Neel_0210"
        },
        {
          name: "Telegram",
          handle: "@neel0210",
          url: "https://t.me/neel0210"
        },
        {
          name: "Instagram",
          handle: "@Neel_0210",
          url: "https://instagram.com/Neel_0210"
        },
        {
          name: "XDA Developers",
          handle: "neel0210",
          url: "https://xdaforums.com/m/neel0210.9821139/"
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1400);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>