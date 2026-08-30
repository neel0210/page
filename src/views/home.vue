<template>
  <div class="page-wrapper">
    <transition name="fade">
      <SharinganLoader v-if="loading" />
    </transition>

    <navbar />

    <main class="main-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Neel0210</h1>
          <p class="hero-subtitle">
            Android Kernel &amp; ROM Developer &bull; Open Source Enthusiast &bull; Tech Explorer
          </p>
          <div class="hero-actions">
            <router-link to="/connect" class="btn btn-primary">
              Connect
            </router-link>
            <router-link to="/projects" class="btn btn-secondary">
              Projects
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import SharinganLoader from "@/components/SharinganLoader.vue";

export default {
  name: "HomeView",
  components: { Navbar, SharinganLoader },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1400);
  },
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