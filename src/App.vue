<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import InfoSection from './components/InfoSection.vue'
</script>

<template>
  <div class="app">
    <!-- Hero Section with 3D Model -->
    <HeroSection />
    
    <!-- Information Section -->
    <InfoSection />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

body {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', system-ui, sans-serif;
  background: linear-gradient(135deg, #0a0f0a 0%, #1a1f1a 50%, #0d140d 100%);
  color: #f5f7f5;
  font-weight: 300;
  letter-spacing: -0.02em;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Custom scrollbar with green theme */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #1a1f1a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4ade80 0%, #22c55e 100%);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
}

/* For Firefox */
html {
  scrollbar-width: thin;
  scrollbar-color: #4ade80 #1a1f1a;
}
</style>
