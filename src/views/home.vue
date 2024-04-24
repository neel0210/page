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
        <navbar/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
export default {
  components: {Navbar},
  data(){
    return {
        loading: true,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 4000); // 4 seconds
  },
};
</script>

<style scoped>

</style>