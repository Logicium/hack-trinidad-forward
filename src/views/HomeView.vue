<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import InfoSection from '../components/InfoSection.vue'
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <InfoSection />
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  min-height: 100vh;
}
</style>