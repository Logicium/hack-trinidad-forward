<template>
  <nav class="floating-nav" :class="{ expanded: isExpanded }">
    <div class="nav-content">
      <button v-if="!isExpanded" class="nav-toggle" @click="expand">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <transition name="fade">
        <div v-if="isExpanded" class="nav-links">
          <router-link to="/" class="nav-link" @click="collapse">Home</router-link>
          <router-link to="/about" class="nav-link" @click="collapse">About</router-link>
          <router-link to="/register" class="nav-link" @click="collapse">Register</router-link>
          <router-link to="/winners" class="nav-link" @click="collapse">Winners</router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref(false)

const expand = () => {
  isExpanded.value = true
}

const collapse = () => {
  isExpanded.value = false
}
</script>

<style scoped>
.floating-nav {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: linear-gradient(135deg, rgba(26, 31, 26, 0.95) 0%, rgba(10, 15, 10, 0.98) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.floating-nav.expanded {
  padding: 0.75rem 2rem;
  border-radius: 50px;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-toggle {
  background: none;
  border: none;
  color: #4ade80;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-toggle:hover {
  color: #22c55e;
  transform: scale(1.1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #d1d5db;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4ade80 0%, #22c55e 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #4ade80;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #4ade80;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .floating-nav {
    top: 1rem;
    padding: 0.5rem 1rem;
  }

  .floating-nav.expanded {
    padding: 0.5rem 1.5rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>