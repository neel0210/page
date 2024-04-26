<template>
  <div v-if="loading" class="loading-gif">
    <div class="mangekyou">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
      <div class="circle"></div>
    </div>
  </div>
  <div v-else>
    <navbar />
    <div class="content-container">
      <div class="container">
        <div class="card">
          <a
            href="https://github.com/neel0210/android_kernel_realme_sm7125.git"
            class="card-link"
          >
            <img class="round-image" src="/src/assets/BIN/PNG/RMX2061.png" alt="Logo 3" />
            <div class="card-content">
              <h2>RMX2061 Kernel</h2>
              <p>Android Custom Kernel for Realme 6Pro and 7Pro Devices.</p>
            </div>
          </a>
        </div>

        <div class="card">
          <a href="https://github.com/neel0210/dynamic.git" class="card-link">
            <img class="round-image" src="/src/assets/BIN/PNG/Dynamic.png" alt="Logo 3" />
            <div class="card-content">
              <h2>Dynamic kitchen (Linux)</h2>
              <p>Android Dynamic Kitchen for Samsung 9611 devices.</p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/neel0210/IMG_fetcher.git"
            class="card-link"
          >
            <img class="round-image" src="/src/assets/BIN/PNG/IF.png" alt="Logo 3" />
            <div class="card-content">
              <h2>IMG Fetcher</h2>
              <p>Python Script to fetch all the IMG's able on a website.</p>
            </div>
          </a>
        </div>

        <div class="card">
          <a
            href="https://github.com/neel0210/RealmeTool.git"
            class="card-link"
          >
            <img class="round-image" src="/src/assets/BIN/PNG/RT.png" alt="Logo 3" />
            <div class="card-content">
              <h2>Realme Tool</h2>
              <p>
                Realme Tool to manage almost all your custom needs. Adapted to
                RMX2061
              </p>
            </div>
          </a>
        </div>
      </div>
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

<style>
</style>