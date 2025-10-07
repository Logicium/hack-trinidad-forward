<template>
  <section class="hero-section">
    <!-- 3D Mountain Section (Top Half) -->
    <div class="mountain-section">
      <ThreeCanvas />
    </div>
    
    <!-- Text Content Section (Bottom Half?) -->
    <div class="content-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Hack Trinidad Forward</h1>
          <p class="hero-subtitle">November 15th - 17th</p>
          <p class="hero-description">
            Join innovators, developers, and creators for an epic 48-hour coding adventure 
            in the beautiful city of Trinidad, Colorado.
          </p>
          <button 
            @click="openRegistration" 
            class="register-button"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>

    <!-- Registration Modal -->
    <RegistrationForm 
      v-if="isFormVisible" 
      @close="closeRegistration"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThreeCanvas from './ThreeCanvas.vue'
import RegistrationForm from './RegistrationForm.vue'

// State management for registration modal
const isFormVisible = ref(false)

// Methods to control modal visibility
const openRegistration = () => {
  isFormVisible.value = true
}

const closeRegistration = () => {
  isFormVisible.value = false
}
</script>

<style scoped>
.hero-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.mountain-section {
  width: 100%;
  height: 50vh;
  background: linear-gradient(180deg, #0a0f0a 0%, #151a15 50%, #1a1f1a 100%);
  overflow: hidden;
}

.content-section {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #1a1f1a 0%, #0a0f0a 100%);
  padding: 1.5rem;
  box-sizing: border-box;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  width: 100%;
}

.hero-text {
  color: #f5f7f5;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 200;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 0.9;
  letter-spacing: -0.05em;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: #86efac;
  letter-spacing: -0.02em;
  opacity: 0.9;
}

.hero-description {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #d1d5db;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  letter-spacing: -0.01em;
  opacity: 0.8;
}

.register-button {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: #0a0f0a;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
  position: relative;
  overflow: hidden;
}

.register-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.register-button:hover::before {
  left: 100%;
}

.register-button:hover {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  transform: translateY(-1px);
  box-shadow: 0 20px 40px rgba(34, 197, 94, 0.2);
}

.register-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .mountain-section {
    height: 45vh;
  }
  
  .content-section {
    height: 55vh;
    padding: 1rem;
    box-sizing: border-box;
  }
  
  .hero-content {
    margin: 0 0.5rem;
    box-sizing: border-box;
    max-width: calc(100% - 1rem);
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: 0.5rem;
  }
  
  .hero-subtitle {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
  
  .hero-description {
    margin-bottom: 1.5rem;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  }
  
  .register-button {
    padding: 0.9rem 2rem;
    font-size: 0.9rem;
  }
}
</style>