<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import InfoSection from '../components/InfoSection.vue'
import { useHead } from '@vueuse/head'
useHead({
  title: 'Hack Trinidad Forward | Nov 14-16 | Home',
  meta: [
    {
      name: 'description',
      content: 'Join innovators, developers, and creators in Trinidad, Colorado for an epic 48-hour problem-solving event.'
    },
    // You can also add Open Graph (social media) tags here
    {
      property: 'og:title',
      content: 'Hack Trinidad Forward | Nov 14-16'
    },
    {
      property: 'og:description',
      content: 'Join innovators, developers, and creators for an epic 48-hour event.'
    }
  ]
})
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