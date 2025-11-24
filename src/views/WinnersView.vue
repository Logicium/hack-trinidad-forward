<template>
  <div class="winners-page">
    <!-- Geometric Background Blocks - Extended Pattern -->
    <div class="geometric-blocks">
      <!-- First viewport section -->
      <div class="block green block-1"></div>
      <div class="block gray block-2"></div>
      <div class="block black block-3"></div>
      <div class="block green block-4"></div>
      <div class="block gray block-5"></div>
      <div class="block green block-6"></div>
      <div class="block black block-7"></div>
      <div class="block gray block-8"></div>
      <div class="block green block-9"></div>
      <div class="block gray block-10"></div>
      <div class="block black block-11"></div>
      <div class="block green block-12"></div>
      <div class="block gray block-13"></div>
      <div class="block green block-14"></div>
      <div class="block gray block-15"></div>
      
      <!-- Extended blocks for lower sections -->
      <div class="block gray block-16"></div>
      <div class="block green block-17"></div>
      <div class="block black block-18"></div>
      <div class="block gray block-19"></div>
      <div class="block green block-20"></div>
      <div class="block black block-21"></div>
      <div class="block green block-22"></div>
      <div class="block gray block-23"></div>
      <div class="block green block-24"></div>
      <div class="block gray block-25"></div>
      <div class="block black block-26"></div>
      <div class="block green block-27"></div>
      <div class="block gray block-28"></div>
      <div class="block green block-29"></div>
      <div class="block black block-30"></div>
    </div>

    <!-- Main Title -->
    <div class="title-section">
      <h1 class="main-title">HACKATHON<br/>WINNERS</h1>
    </div>

    <!-- Welcome Text Section -->
    <div class="welcome-section">
      <p class="welcome-message">
        <span class="highlight">CONGRATULATIONS TO OUR AMAZING WINNERS WHO MADE A DIFFERENCE!</span>
      </p>
    </div>

    <!-- Winners Cascading Layout -->
    <div class="winners-container">
      <div class="winner-row row-1">
        <div class="winner-card" v-for="winner in winners" :key="winner.project">
          <div class="winner-content">
            <div class="header-row">
              <div class="place-badge" :class="'place-' + winner.place">{{ winner.placeLabel }}</div>
              <div class="prize-amount">{{ winner.prize }}</div>
            </div>
            <h2 class="project-title">{{ winner.project }}</h2>
            <p class="members">{{ winner.members }}</p>
            <p class="description">{{ winner.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Winner {
  place: number
  placeLabel: string
  prize: string
  project: string
  members: string
  description: string
}

const winners = ref<Winner[]>([
  {
    place: 1,
    placeLabel: '1ST PLACE',
    prize: '$700',
    project: 'Stories of Trinidad',
    members: 'Joze Petrich, John Edgmon, Earl Nesbitt, Raevyn Odum, Joe Ross',
    description: 'QR codes are placed throughout the city near historical buildings and architecture. When scanned, it takes the user to a page where audio plays detailing the history of the location, shows original historic photos, and has other landmarks nearby that also have their own audio histories.'
  },
  {
    place: 2,
    placeLabel: '2ND PLACE',
    prize: '$300',
    project: 'Local Resources App',
    members: 'Travis Nelson, Phoenix Bailey-kay, Sue Nesbitt',
    description: 'Resources for locals are not always obviously available; google searches may only reveal a part of what we have to offer. The Resources App centralizes all of our towns resources on accessing healthcare, subsidized energy, food & foodbanks, and other important services to make sure we are thriving as a community and the knowledge is easy to find. A QR code was created so that the app can be easy to find as we place it throughout town and work with local non-profits and city offices to share the info.'
  },
  {
    place: 3,
    placeLabel: '3RD PLACE',
    prize: '$200',
    project: 'Adopt a Pocket',
    members: 'Arna Miller, Betty Lou Pringer, Jackie Padgett, Kyle Fitzgerald, Jennifer Marriot',
    description: 'Unused and derelict parts of the city are reimagined and redesigned into public assets, like a new community garden, a botanical park, outdoor gyms, and other beautiful outdoor features. There is a website where people can learn about the initiative, volunteer land, and see ongoing proposals.'
  },
  {
    place: 3,
    placeLabel: '3RD PLACE',
    prize: '$200',
    project: 'The Tool Library',
    members: 'Javonne Archibeque, Ryan Gilmartin, Rae Schneider, Tracy Wahl',
    description: 'A library of hand tools where people can offer to borrow or borrow the tools at low or no cost, and a physical tool library location where excess tools can be donated for use. There is an app where people can register their tools, and get connected to a tool they need, as well as offer skills on how to use them.'
  },
  {
    place: 4,
    placeLabel: 'RUNNER UP',
    prize: '$100',
    project: 'Streaming App',
    members: 'Johnathan Beck, Taylor, Christopher Spain',
    description: 'A media server where a digital "channel" streams video and informational content (even room for local ads) and can be updated from a central location, inspired by how cable companies like Comcast now stream content.'
  },
  {
    place: 4,
    placeLabel: 'RUNNER UP',
    prize: '$100',
    project: 'The Trading Post',
    members: 'Matthew Fuerst, Jackie, Stacie Bonham',
    description: 'A time bank app that allows users to request help or make posts about their services and skills, exchanging hours instead of money. This in turn creates a social credit system where people can be rated and their acts of service can be quantified.'
  }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&display=swap');

.winners-page {
  position: relative;
  width: 100%;
  max-width: 100vw;
  min-height: 200vh;
  background-color: #000;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8rem;
  box-sizing: border-box;
}

/* Geometric Background Blocks */
.geometric-blocks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: visible;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(8, 12.5vw);
  grid-template-rows: repeat(8, 12.5vh);
  gap: 0;
  box-sizing: border-box;
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

/* Block Grid Positioning - Different layout from sponsors */
.block-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.block-2 {
  grid-column: 3 / 5;
  grid-row: 1 / 3;
}

.block-3 {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}

.block-4 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.block-5 {
  grid-column: 5 / 7;
  grid-row: 1 / 2;
}

.block-6 {
  grid-column: 7 / 9;
  grid-row: 1 / 3;
}

.block-7 {
  grid-column: 2 / 3;
  grid-row: 3 / 5;
}

.block-8 {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}

.block-9 {
  grid-column: 5 / 6;
  grid-row: 2 / 4;
}

.block-10 {
  grid-column: 6 / 8;
  grid-row: 2 / 3;
}

.block-11 {
  grid-column: 4 / 5;
  grid-row: 3 / 5;
}

.block-12 {
  grid-column: 3 / 4;
  grid-row: 4 / 6;
}

.block-13 {
  grid-column: 5 / 7;
  grid-row: 4 / 5;
}

.block-14 {
  grid-column: 7 / 9;
  grid-row: 3 / 5;
}

.block-15 {
  grid-column: 1 / 2;
  grid-row: 4 / 6;
}

/* Extended blocks continuing down */
.block-16 {
  grid-column: 1 / 3;
  grid-row: 5 / 6;
}

.block-17 {
  grid-column: 5 / 7;
  grid-row: 5 / 7;
}

.block-18 {
  grid-column: 3 / 4;
  grid-row: 6 / 8;
}

.block-19 {
  grid-column: 7 / 9;
  grid-row: 5 / 6;
}

.block-20 {
  grid-column: 4 / 5;
  grid-row: 5 / 7;
}

.block-21 {
  grid-column: 1 / 2;
  grid-row: 6 / 8;
}

.block-22 {
  grid-column: 2 / 3;
  grid-row: 6 / 7;
}

.block-23 {
  grid-column: 5 / 6;
  grid-row: 7 / 9;
}

.block-24 {
  grid-column: 6 / 8;
  grid-row: 6 / 7;
}

.block-25 {
  grid-column: 8 / 9;
  grid-row: 6 / 8;
}

.block-26 {
  grid-column: 2 / 4;
  grid-row: 7 / 8;
}

.block-27 {
  grid-column: 7 / 9;
  grid-row: 7 / 9;
}

.block-28 {
  grid-column: 1 / 2;
  grid-row: 8 / 10;
}

.block-29 {
  grid-column: 4 / 6;
  grid-row: 7 / 8;
}

.block-30 {
  grid-column: 3 / 5;
  grid-row: 8 / 10;
}

/* Title Section */
.title-section {
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 8vh 5% 4vh;
  box-sizing: border-box;
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

/* Welcome Section */
.welcome-section {
  position: relative;
  z-index: 3;
  width: 100%;
  padding: 0 5% 6vh;
  max-width: none;
  box-sizing: border-box;
}

.welcome-message {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.6;
  text-align: left;
  margin: 0;
  text-transform: uppercase;
  max-width: 550px;
}

.welcome-message .highlight {
  background-color: #000;
  padding: 0.35rem 0.6rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* Winners Layout - Vertical scrolling */
.winners-container {
  position: relative;
  z-index: 4;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5% 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
}

.winner-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.row-1 {
  width: 100%;
}

/* Winner Cards - Taller and wider, no internal scrolling */
.winner-card {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-height: 450px;
  height: auto;
  background-color: #d4d4d4;
  border-radius: 0;
  padding: 3rem;
  position: relative;
  box-sizing: border-box;
}

.winner-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.place-badge {
  display: inline-block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
}

.prize-amount {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: #000;
  letter-spacing: -0.02em;
}

.place-badge.place-1 {
  background-color: #00ff88;
  color: #000;
}

.place-badge.place-2 {
  background-color: #000;
  color: #00ff88;
}

.place-badge.place-3 {
  background-color: #666;
  color: #fff;
}

.place-badge.place-4 {
  background-color: #00ff88;
  color: #000;
  opacity: 0.8;
}

.project-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  margin: 0;
  text-transform: uppercase;
}

.members {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.5;
  color: #333;
  margin: 0;
  font-style: italic;
}

.description {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: #222;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .geometric-blocks {
    grid-template-columns: repeat(6, 16.666vw);
    grid-template-rows: repeat(auto-fill, 16.666vw);
  }

  .winner-row {
    grid-template-columns: 1fr;
  }

  .winners-container {
    padding: 0 5% 3rem;
  }

  .winner-card {
    min-height: 400px;
    padding: 2.5rem;
  }

  .main-title {
    font-size: clamp(2.5rem, 7vw, 4.5rem);
  }

  .welcome-message {
    font-size: 1.1rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .geometric-blocks {
    grid-template-columns: repeat(4, 25vw);
    grid-template-rows: repeat(auto-fill, 25vw);
  }

  .winner-card {
    min-height: 350px;
    padding: 2rem;
  }

  .winner-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .welcome-section {
    padding: 0 5% 4vh;
  }

  .welcome-message {
    font-size: 0.9rem;
  }

  .title-section {
    padding: 6vh 5% 3vh;
  }

  .main-title {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }

  .winners-container {
    padding: 0 5% 3rem;
  }

  /* Adjust block visibility for mobile */
  .block-1, .block-3, .block-5, .block-8 {
    opacity: 0.7;
  }
}

@media (max-width: 480px) {
  .geometric-blocks {
    grid-template-columns: repeat(4, 25vw);
    grid-template-rows: repeat(auto-fill, 25vw);
  }

  .winner-card {
    min-height: 300px;
    padding: 1.5rem;
  }

  .winner-content {
    gap: 1rem;
  }

  .welcome-message {
    font-size: 0.75rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .members {
    font-size: 0.75rem;
  }

  .description {
    font-size: 0.85rem;
  }

  .winners-container {
    padding: 0 5% 2rem;
    gap: 1.5rem;
  }

  .title-section {
    padding: 5vh 5% 2vh;
  }

  .welcome-section {
    padding: 0 5% 3vh;
  }
}
</style>
