<template>
  <div class="sponsors-page">
    <!-- Geometric Background Blocks -->
    <div class="geometric-blocks">
      <div class="block green block-1"></div>
      <div class="block black block-2"></div>
      <div class="block gray block-3"></div>
      <div class="block gray block-4"></div>
      <div class="block green block-5"></div>
      <div class="block gray block-6"></div>
      <div class="block gray block-7"></div>
      <div class="block green block-8"></div>
      <div class="block gray block-9"></div>
      <div class="block green block-10"></div>
      <div class="block green block-11"></div>
      <div class="block green block-12"></div>
    </div>

    <!-- Welcome Text Section -->
    <div class="welcome-section">
      <p class="welcome-message">
        <span class="highlight">THANK YOU TO OUR AMAZING SPONSORS WHO MAKE THIS EVENT POSSIBLE!</span>
      </p>
    </div>

    <!-- Main Title -->
    <div class="title-section">
      <h1 class="main-title">OUR<br/>SPONSORS</h1>
    </div>

    <!-- Sponsor Logos Cascading Layout -->
    <div class="sponsors-container">
      <div class="sponsor-row row-1">
        <div class="sponsor-logo" v-for="logo in sponsors.slice(0, 6)" :key="logo.name">
          <img :src="logo.path" :alt="logo.name" />
        </div>
      </div>
      <div class="sponsor-row row-2">
        <div class="sponsor-logo" v-for="logo in sponsors.slice(6, 11)" :key="logo.name">
          <img :src="logo.path" :alt="logo.name" />
        </div>
      </div>
      <div class="sponsor-row row-3">
        <div class="sponsor-logo" v-for="logo in sponsors.slice(11, 15)" :key="logo.name">
          <img :src="logo.path" :alt="logo.name" />
        </div>
      </div>
      <div class="sponsor-row row-4">
        <div class="sponsor-logo" v-for="logo in sponsors.slice(15, 16)" :key="logo.name">
          <img :src="logo.path" :alt="logo.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Sponsor {
  name: string
  path: string
}

const sponsors = ref<Sponsor[]>([
  { name: 'Apotome Labs', path: '/logos/Apotome Labs LOGO (2).svg' },
  { name: 'Biometrica', path: '/logos/Biometrica+Logo.webp' },
  { name: 'CrowdStrike', path: '/logos/black-primary-crowdstrike-logo-1-addedPadding-3.svg' },
  { name: 'CDWG', path: '/logos/cdwg-logo-no-tag.svg' },
  { name: 'Creo en Ti', path: '/logos/creo-en-ti-logo.jpeg' },
  { name: 'CSI', path: '/logos/csi-logo.png' },
  { name: 'Cyderes', path: '/logos/cyderes-logos.jpg' },
  { name: 'DI Logo', path: '/logos/di_logo_light.png' },
  { name: 'ELLKAY', path: '/logos/ELLKAY_logo.webp' },
  { name: 'Emergent Campus', path: '/logos/Emergent-Campus-Logo-Green.png' },
  { name: 'Gobins', path: '/logos/gobins.png' },
  { name: 'InBank', path: '/logos/InBank_landscape-1.svg' },
  { name: 'Multicard', path: '/logos/multicard.png' },
  { name: 'San Rafael Hospital', path: '/logos/sanrafaelhospital-logo.png' },
  { name: 'Trinidad State College', path: '/logos/trinidad-state-college.png' },
  { name: 'Way Out West', path: '/logos/way-out-west.webp' },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&display=swap');

.sponsors-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Geometric Background Blocks */
.geometric-blocks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-template-rows: repeat(auto-fill, 240px);
  gap: 0;
}

.block {
  position: relative;
  opacity: 1;
}

.block.green {
  background-color: #00ff88;
}

.block.gray {
  background-color: #d4d4d4;
}

.block.black {
  background-color: #000;
}

/* Block Grid Positioning - Clean cascading layout */
.block-1 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.block-2 {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.block-3 {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.block-4 {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
}

.block-5 {
  grid-column: 4 / 6;
  grid-row: 1 / 2;
}

.block-6 {
  grid-column: 6 / 7;
  grid-row: 1 / 3;
}

.block-7 {
  grid-column: 7 / 8;
  grid-row: 1 / 2;
}

.block-8 {
  grid-column: 7 / 9;
  grid-row: 2 / 3;
}

.block-9 {
  grid-column: 8 / 9;
  grid-row: 3 / 4;
}

.block-10 {
  grid-column: 4 / 5;
  grid-row: 2 / 3;
}

.block-11 {
  grid-column: 7 / 8;
  grid-row: 3 / 4;
}

.block-12 {
  grid-column: 8 / 9;
  grid-row: 4 / 5;
}

/* Welcome Section */
.welcome-section {
  position: absolute;
  z-index: 3;
  top: 8%;
  left: 5%;
  max-width: 550px;
}

.welcome-message {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
}

.welcome-message .highlight {
  background-color: #000;
  padding: 0.35rem 0.6rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* Title Section */
.title-section {
  position: absolute;
  z-index: 3;
  bottom: 15%;
  left: 5%;
}

.main-title {
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
}

/* Sponsors Cascading Layout */
.sponsors-container {
  position: absolute;
  z-index: 4;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.sponsor-row {
  display: flex;
  flex-direction: row;
  gap: 0;
}

.row-1 {
  width: 92%;
}

.row-2 {
  width: calc(92% - 240px);
}

.row-3 {
  width: calc(92% - 480px);
}

.row-4 {
  width: calc(92% - 720px);
}

/* Sponsor Logo Squares */
.sponsor-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  background-color: #d4d4d4;
  border-radius: 0;
  padding: 2.5rem;
  flex-shrink: 0;
}

.sponsor-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .geometric-blocks {
    grid-template-columns: repeat(auto-fill, 180px);
    grid-template-rows: repeat(auto-fill, 180px);
  }

  .sponsor-logo {
    width: 180px;
    height: 180px;
    padding: 1.75rem;
  }

  .row-1 {
    width: 92%;
  }

  .row-2 {
    width: calc(92% - 180px);
  }

  .row-3 {
    width: calc(92% - 360px);
  }

  .row-4 {
    width: calc(92% - 540px);
  }

  .main-title {
    font-size: clamp(2.5rem, 7vw, 4.5rem);
  }

  .welcome-message {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .geometric-blocks {
    grid-template-columns: repeat(auto-fill, 140px);
    grid-template-rows: repeat(auto-fill, 140px);
  }

  .sponsor-logo {
    width: 140px;
    height: 140px;
    padding: 1.25rem;
  }

  .row-1 {
    width: 100%;
  }

  .row-2 {
    width: calc(100% - 140px);
  }

  .row-3 {
    width: calc(100% - 280px);
  }

  .row-4 {
    width: calc(100% - 420px);
  }

  .welcome-section {
    top: 5%;
    left: 10%;
    right: 10%;
    max-width: none;
  }

  .welcome-message {
    font-size: 0.9rem;
  }

  .title-section {
    bottom: 10%;
    left: 10%;
  }

  .main-title {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }

  /* Adjust block sizes for mobile */
  .block-1, .block-3, .block-5, .block-8 {
    opacity: 0.7;
  }
}

@media (max-width: 480px) {
  .geometric-blocks {
    grid-template-columns: repeat(auto-fill, 110px);
    grid-template-rows: repeat(auto-fill, 110px);
  }

  .sponsor-logo {
    width: 110px;
    height: 110px;
    padding: 0.85rem;
  }

  .row-1 {
    width: 100%;
  }

  .row-2 {
    width: calc(100% - 110px);
  }

  .row-3 {
    width: calc(100% - 220px);
  }

  .row-4 {
    width: calc(100% - 330px);
  }

  .welcome-message {
    font-size: 0.75rem;
  }
}
</style>
