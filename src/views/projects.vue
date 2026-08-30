<template>
  <div class="page-wrapper">
    <transition name="fade">
      <SharinganLoader v-if="loading" />
    </transition>

    <navbar />

    <main class="main-container">
      <div class="projects-header">
        <h1 class="section-title">Projects</h1>
        <p class="section-subtitle">Open-source tools, custom kernels, and utilities</p>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in projectList" :key="index" class="project-card">
          <a :href="project.url" target="_blank" rel="noopener noreferrer" class="card-link-wrapper">
            <img :src="project.image" :alt="project.title" class="project-icon" loading="lazy" />
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-desc">{{ project.description }}</p>
            <span class="project-tag">{{ project.tag }}</span>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import SharinganLoader from "@/components/SharinganLoader.vue";
import rmxImg from "@/assets/BIN/PNG/RMX2061.png";
import dynamicImg from "@/assets/BIN/PNG/Dynamic.png";
import ifImg from "@/assets/BIN/PNG/IF.png";
import rtImg from "@/assets/BIN/PNG/RT.png";

export default {
  name: "ProjectsView",
  components: { Navbar, SharinganLoader },
  data() {
    return {
      loading: true,
      projectList: [
        {
          title: "RMX2061 Kernel",
          description: "Android Custom Kernel optimized for Realme 6 Pro and 7 Pro devices.",
          url: "https://github.com/neel0210/android_kernel_realme_sm7125",
          image: rmxImg,
          tag: "Kernel / C"
        },
        {
          title: "Dynamic Kitchen",
          description: "Android Dynamic Partition Kitchen tool for Samsung Exynos 9611 devices.",
          url: "https://github.com/neel0210/dynamic",
          image: dynamicImg,
          tag: "Linux / Shell"
        },
        {
          title: "IMG Fetcher",
          description: "Lightweight Python utility to automate fetching all image assets from any webpage.",
          url: "https://github.com/neel0210/IMG_fetcher",
          image: ifImg,
          tag: "Python"
        },
        {
          title: "Realme Tool",
          description: "All-in-one management and flashing toolkit adapted for RMX2061 devices.",
          url: "https://github.com/neel0210/RealmeTool",
          image: rtImg,
          tag: "Android Tool"
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