<template>
  <div class="about-page">
    <!-- Theme Section with Infinite Scroll -->
    <section class="theme-section">
      <div class="container">
        <h1 class="section-title">Civic Innovation Theme</h1>
        <p class="theme-description">
          What if technology felt like it truly belonged in a small town?
          That's the question at the heart of this hackathon. This event is a 48-hour collaboration to answer the needs of our community.
          It's about solving problems for our friends, our families, and the local businesses that make Trinidad unique.
          We're bringing together diverse minds to build solutions for everything from Main Street commerce to backcountry trails.
          This isn't just for expert coders; it's for anyone with a good idea and the passion to help build our town's future, together.
        </p>

        <div class="scroll-container">
          <div class="questions-column">
            <div class="scroll-wrapper" ref="questionsRef">
              <div v-for="(question, index) in displayQuestions" :key="`q-${index}`" class="scroll-item">
                {{ question }}
              </div>
            </div>
          </div>

          <div class="answers-column">
            <div class="scroll-wrapper reverse" ref="answersRef">
              <div v-for="(answer, index) in displayAnswers" :key="`a-${index}`" class="scroll-item">
                {{ answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsorship Section -->
    <section class="sponsorship-section">
      <div class="container">
        <h2 class="section-title">Sponsorship Tiers</h2>
        <p class="section-subtitle">Partner with us to support innovation in Trinidad</p>

        <div class="tiers-grid">
          <div class="tier-card catalyst">
            <div class="tier-header">
              <h3>Launch Partners</h3>
              <p class="tier-amount">$100+</p>
            </div>
            <ul class="tier-benefits">
              <li>Name on website and materials</li>
              <li>Social media thank you</li>
              <li>Community recognition</li>
            </ul>
          </div>

          <div class="tier-card pioneer">
            <div class="tier-header">
              <h3>Innovation Partners</h3>
              <p class="tier-amount">$500+</p>
            </div>
            <ul class="tier-benefits">
              <li>Logo on website and materials</li>
              <li>Booth space</li>
              <li>Social media mentions</li>
              <li>Access to participant résumés</li>
            </ul>
          </div>

          <div class="tier-card keystone">
            <div class="tier-header">
              <h3>Keystone Partners</h3>
              <p class="tier-amount">$1000+</p>
            </div>
            <ul class="tier-benefits">
              <li>Prime logo placement on all materials</li>
              <li>Speaking opportunity at opening ceremony</li>
              <li>Booth space for recruiting/networking</li>
              <li>Social media feature series</li>
              <li>Access to participant résumés</li>
            </ul>
          </div>
        </div>

        <div class="sponsor-cta">
          <p>Interested in sponsoring? <a href="mailto:kisora@apotomelabs.com">Contact us</a></p>
        </div>
      </div>
    </section>

    <!-- Rules Section -->
    <section class="rules-section">
      <div class="container">
        <h2 class="section-title">Hackathon Rules</h2>

        <div class="rules-grid">
          <div class="rule-card">
            <div class="rule-number">1</div>
            <h3>No Pre-Development</h3>
            <p>All code and design work must begin after the official start time. Pre-existing libraries and frameworks are allowed.</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">2</div>
            <h3>Team Size</h3>
            <p>Teams can have 1-5 members. You can form teams before or during the event. Solo hackers are welcome!</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">3</div>
            <h3>Original Work</h3>
            <p>Your project must be original work created during the hackathon. You may use open-source libraries and APIs.</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">4</div>
            <h3>Theme Alignment</h3>
            <p>Projects should address the civic innovation theme and benefit the Trinidad community in some way.</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">5</div>
            <h3>Code of Conduct</h3>
            <p>Be respectful, inclusive, and professional. Harassment of any kind will not be tolerated.</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">6</div>
            <h3>Intellectual Property</h3>
            <p>You retain all rights to your work. By participating, you grant us permission to showcase your project.</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">7</div>
            <h3>Submission Requirements</h3>
            <p>Submit a working demo, source code repository, and 3-minute presentation video by the deadline.</p>
          </div>

          <div class="rule-card">
            <div class="rule-number">8</div>
            <h3>Judging Criteria</h3>
            <p>Projects judged on: innovation, technical execution, design, civic impact, and presentation quality.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="prizes-section">
      <div class="container">
        <h2 class="section-title">Prizes & Recognition</h2>
        <p class="prizes-disclaimer">
          Prize details are being finalized. Stay tuned for updates!
        </p>

        <div class="prizes-grid">
          <!-- 1st Place -->
          <div class="prize-card first-place">
            <div class="prize-rank">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.5 17.5L9.5 13.5L6 10.5L10 10L12 6L14 10L18 10.5L14.5 13.5L15.5 17.5L12 15Z" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linejoin="round"/>
              </svg>
              <span>1st Place</span>
            </div>
            <div class="prize-amount">$500</div>
            <p class="prize-description">
              Grand prize winner receives cash award, premium swag, and special recognition
            </p>
          </div>

          <!-- 2nd Place -->
          <div class="prize-card second-place">
            <div class="prize-rank">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.5 17.5L9.5 13.5L6 10.5L10 10L12 6L14 10L18 10.5L14.5 13.5L15.5 17.5L12 15Z" fill="#C0C0C0" stroke="#C0C0C0" stroke-width="2" stroke-linejoin="round"/>
              </svg>
              <span>2nd Place</span>
            </div>
            <div class="prize-amount">$250</div>
            <p class="prize-description">
              Runner-up receives cash award and premium swag package
            </p>
          </div>

          <!-- 3rd Place -->
          <div class="prize-card third-place">
            <div class="prize-rank">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L8.5 17.5L9.5 13.5L6 10.5L10 10L12 6L14 10L18 10.5L14.5 13.5L15.5 17.5L12 15Z" fill="#CD7F32" stroke="#CD7F32" stroke-width="2" stroke-linejoin="round"/>
              </svg>
              <span>3rd Place</span>
            </div>
            <div class="prize-amount">$150</div>
            <p class="prize-description">
              Third place receives cash award and swag
            </p>
          </div>
        </div>

        <!-- Category Prizes -->
        <div class="category-prizes">
          <h3 class="category-prizes-title">Category Awards</h3>
          <div class="category-prizes-grid">
            <div class="category-prize-card">
              <div class="category-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#4ade80" stroke-width="2" stroke-linejoin="round"/>
                </svg>
              </div>
              <h4>Best Design</h4>
              <p>Most visually appealing and user-friendly interface</p>
            </div>

            <div class="category-prize-card">
              <div class="category-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#4ade80" stroke-width="2" stroke-linejoin="round"/>
                </svg>
              </div>
              <h4>Best Civic Impact</h4>
              <p>Project with greatest potential community benefit</p>
            </div>

            <div class="category-prize-card">
              <div class="category-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#4ade80" stroke-width="2" stroke-linejoin="round"/>
                </svg>
              </div>
              <h4>Most Creative</h4>
              <p>Most innovative and original solution</p>
            </div>
          </div>
        </div>

        <div class="all-participants-note">
          <p>All participants receive exclusive Hack Trinidad Forward swag and certificates of participation!</p>
        </div>
      </div>
    </section>

    <!-- Organizers & Judges Section -->
    <section class="people-section">
      <div class="container">
        <h2 class="section-title">Meet the Team</h2>

        <div class="people-category">
          <h3 class="category-title">Event Organizer</h3>
          <div class="people-grid">
            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">Photo Coming Soon</span>
              </div>
              <h4>Kisora Thomas</h4>
              <p class="person-role">Event Manager, Owner at Apotome Labs</p>
            </div>
          </div>
        </div>

        <div class="people-category">
          <h3 class="category-title">Judges</h3>
          <div class="people-grid">
            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">Photo Coming Soon</span>
              </div>
              <h4>Christine Louden</h4>
              <p class="person-role">Director of Emergent Campus</p>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">Photo Coming Soon</span>
              </div>
              <h4>Michael Archuleta</h4>
              <p class="person-role">Biomedica, Creo En Ti, CIO Mt. San Rafael Hospital</p>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">Photo Coming Soon</span>
              </div>
              <h4>Jenn Green</h4>
              <p class="person-role">Director of Trinidad Trails Alliance</p>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">Photo Coming Soon</span>
              </div>
              <h4>Veronica Maes</h4>
              <p class="person-role">Communications and Community Relations Coordinator, City of Trinidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
useHead({
  title: 'About Hack Trinidad Forward | Nov 14-16',
  meta: [
    {
      name: 'description',
      content: 'Learn all about Hack Trinidad Forward (Nov 14-16). Find out about the mission, organizers, and event details for our 48-hour hackathon in Trinidad, Colorado.'
    },
    // --- Social Media Tags ---
    {
      property: 'og:title',
      content: 'About Hack Trinidad Forward | Nov 14-16'
    },
    {
      property: 'og:description',
      content: 'Find out all about the Hack Trinidad Forward event, its mission, and organizers.'
    }
  ]
})
const questions = [
  "How can we help local businesses sell more products online?",
  "What if you could see all available parking spots downtown in real-time?",
  "How can we make Trinidad's rich history more interactive for visitors?",
  "What's a better way to report city issues like potholes or broken lights?",
  "How can technology connect local volunteers with opportunities?",
  "What if you could find every local hiking trail on a single, interactive map?",
  "How can we make city council meetings more accessible to everyone?",
  "Can technology help us conserve water in public parks?",
  "What would a digital 'Welcome Kit' for new residents look like?",
  "How can we connect local farmers directly with local restaurants?",
  "What if you could book a city park pavilion from your phone?",
  "How can we make it easier for entrepreneurs to navigate local permits?",
  "What tool could help tourists discover hidden gems in our town?",
  "How can we showcase the work of local artists and musicians online?",
  "What if there was a single calendar for every event happening in town?",
  "How can technology help seniors access community services more easily?",
  "What's a fun way to teach kids about local history and nature?",
  "How can we create more remote work opportunities in Trinidad?",
  "What if you could see the real-time air quality on Fisher's Peak?",
  "How can we make public transportation easier to use and track?"
]

const answers = [
  "A single website showing the live inventory of every shop on Main Street.",
  "An augmented reality app that overlays historic photos on modern buildings.",
  "A network of cheap sensors to monitor soil moisture for park irrigation.",
  "An AI chatbot that can answer any question about city services.",
  "A platform for restaurants to buy produce directly from local farms.",
  "A 'skill-share' app connecting residents who want to teach and learn.",
  "A 3D interactive map of Fisher’s Peak trails with user-submitted photos.",
  "An app to report a pothole by simply taking a picture of it.",
  "A digital voting tool for residents to weigh in on community projects.",
  "A public dashboard that visualizes the city's annual budget.",
  "A simple online portal to guide new businesses through the permit process.",
  "A 'Trinidad Loyalty Card' app that rewards shopping at local businesses.",
  "A QR code-based historical walking tour of the city.",
  "A gamified app that gives kids 'badges' for visiting local landmarks.",
  "A real-time bus tracking app for the local transit system.",
  "A subscription box service featuring products from local artisans.",
  "A website that matches remote workers with local co-working spaces.",
  "An AI-powered tool that summarizes city council meeting transcripts.",
  "A text message alert system for local events and emergencies.",
  "A 'digital twin' of Main Street to help with city planning."
]

const displayQuestions = ref([...questions, ...questions, ...questions])
const displayAnswers = ref([...answers, ...answers, ...answers])

const questionsRef = ref<HTMLElement>()
const answersRef = ref<HTMLElement>()

let questionAnimationId: number
let answerAnimationId: number

const scrollQuestions = () => {
  if (!questionsRef.value) return

  const scrollSpeed = 0.5
  questionsRef.value.scrollTop += scrollSpeed

  const scrollHeight = questionsRef.value.scrollHeight
  const clientHeight = questionsRef.value.clientHeight
  const scrollTop = questionsRef.value.scrollTop

  if (scrollTop >= (scrollHeight - clientHeight) / 2) {
    questionsRef.value.scrollTop = scrollTop - (scrollHeight - clientHeight) / 3
  }

  questionAnimationId = requestAnimationFrame(scrollQuestions)
}

const scrollAnswers = () => {
  if (!answersRef.value) return

  const scrollSpeed = 0.5
  answersRef.value.scrollTop -= scrollSpeed

  if (answersRef.value.scrollTop <= 0) {
    const scrollHeight = answersRef.value.scrollHeight
    const clientHeight = answersRef.value.clientHeight
    answersRef.value.scrollTop = (scrollHeight - clientHeight) / 3
  }

  answerAnimationId = requestAnimationFrame(scrollAnswers)
}

onMounted(() => {
  if (questionsRef.value) {
    const scrollHeight = questionsRef.value.scrollHeight
    const clientHeight = questionsRef.value.clientHeight
    questionsRef.value.scrollTop = (scrollHeight - clientHeight) / 3
  }

  if (answersRef.value) {
    const scrollHeight = answersRef.value.scrollHeight
    const clientHeight = answersRef.value.clientHeight
    answersRef.value.scrollTop = (scrollHeight - clientHeight) / 3
  }

  setTimeout(() => {
    scrollQuestions()
    scrollAnswers()
  }, 100)
})

onUnmounted(() => {
  if (questionAnimationId) cancelAnimationFrame(questionAnimationId)
  if (answerAnimationId) cancelAnimationFrame(answerAnimationId)
})
</script>

<style scoped>
.about-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0f0a 0%, #1a1f1a 50%, #0d140d 100%);
  color: #f5f7f5;
  padding-top: 5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 200;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #d1d5db;
  margin-bottom: 2.5rem;
  font-weight: 300;
}

/* Theme Section */
.theme-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 3rem 0;
}

.theme-description {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d1d5db;
  max-width: 900px;
  margin: 0 auto 3rem;
  font-weight: 300;
  letter-spacing: -0.01em;
}

.scroll-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  height: 400px;
}

.questions-column,
.answers-column {
  position: relative;
  overflow: hidden;
}

.questions-column::before,
.answers-column::before,
.questions-column::after,
.answers-column::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 10;
  pointer-events: none;
}

.questions-column::before,
.answers-column::before {
  top: 0;
  background: linear-gradient(180deg, #0a0f0a 0%, transparent 100%);
}

.questions-column::after,
.answers-column::after {
  bottom: 0;
  background: linear-gradient(0deg, #0a0f0a 0%, transparent 100%);
}

.scroll-wrapper {
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 120px 0;
}

.scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.scroll-item {
  padding: 1.5rem;
  margin: 0.75rem 0;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  font-weight: 300;
  transition: opacity 0.3s ease;
  color: #d1d5db;
}

/* Sponsorship Section */
.sponsorship-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(26, 31, 26, 0.3) 0%, rgba(10, 15, 10, 0.5) 100%);
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.tier-card {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 4px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tier-card:hover {
  transform: translateY(-4px);
  border-color: rgba(74, 222, 128, 0.4);
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
}

.tier-header {
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(74, 222, 128, 0.2);
}

.tier-header h3 {
  font-size: 1.6rem;
  font-weight: 400;
  color: #4ade80;
  margin-bottom: 0.5rem;
}

.tier-amount {
  font-size: 1.3rem;
  font-weight: 300;
  color: #86efac;
}

.tier-benefits {
  list-style: none;
  padding: 0;
}

.tier-benefits li {
  padding: 0.65rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #d1d5db;
  font-weight: 300;
  font-size: 0.95rem;
}

.tier-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #22c55e;
  font-weight: 600;
}

.sponsor-cta {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.03) 0%, rgba(34, 197, 94, 0.02) 100%);
  border-radius: 2px;
  border: 1px solid rgba(74, 222, 128, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.sponsor-cta p {
  font-size: 1.1rem;
}

.sponsor-cta a {
  color: #4ade80;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
}

.sponsor-cta a:hover {
  color: #22c55e;
  text-decoration: underline;
}

/* Rules Section */
.rules-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 3rem 0;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.rule-card {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border: 1px solid rgba(74, 222, 128, 0.15);
  border-radius: 4px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.rule-card:hover {
  transform: translateY(-2px);
  border-color: rgba(74, 222, 128, 0.3);
}

.rule-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: #0a0f0a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.rule-card h3 {
  font-size: 1.1rem;
  font-weight: 400;
  color: #f5f7f5;
  margin-bottom: 0.75rem;
}

.rule-card p {
  color: #d1d5db;
  line-height: 1.5;
  font-weight: 300;
  font-size: 0.9rem;
}

/* People Section */
.people-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(26, 31, 26, 0.3) 0%, rgba(10, 15, 10, 0.5) 100%);
}

.people-category {
  margin-bottom: 3rem;
}

.people-category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 300;
  color: #86efac;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.person-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.person-card:hover {
  transform: translateY(-4px);
}

.person-photo {
  width: 140px;
  height: 140px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
  border: 2px solid rgba(74, 222, 128, 0.3);
  transition: all 0.3s ease;
}

.person-photo.square {
  border-radius: 4px;
}

.person-card:hover .person-photo {
  border-color: rgba(74, 222, 128, 0.5);
}

.tba {
  font-size: 1.1rem;
  color: #86efac;
  font-weight: 400;
}

.person-card h4 {
  font-size: 1rem;
  font-weight: 400;
  color: #d1d5db;
  margin-bottom: 0.25rem;
}

.person-role {
  font-size: 0.85rem;
  color: #a3a3a3;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 1024px) {
  .tiers-grid {
    grid-template-columns: 1fr;
  }

  .rules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-page {
    padding-top: 4rem;
  }

  .theme-section,
  .sponsorship-section,
  .rules-section,
  .people-section {
    min-height: auto;
    padding: 2rem 0;
  }

  .scroll-container {
    grid-template-columns: 1fr;
    height: auto;
    gap: 2rem;
  }

  .questions-column,
  .answers-column {
    height: 350px;
  }

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .people-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .person-photo {
    width: 120px;
    height: 120px;
  }
}

.prizes-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(10, 15, 10, 0.5) 0%, rgba(26, 31, 26, 0.3) 100%);
}

.prizes-disclaimer {
  text-align: center;
  font-size: 0.95rem;
  color: #86efac;
  font-style: italic;
  margin-bottom: 3rem;
  padding: 0.75rem 1.5rem;
  background: rgba(74, 222, 128, 0.05);
  border-radius: 4px;
  border: 1px solid rgba(74, 222, 128, 0.15);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}

.prizes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 4rem;
}

.prize-card {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border: 2px solid rgba(74, 222, 128, 0.2);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.prize-card:hover {
  transform: translateY(-4px);
  border-color: rgba(74, 222, 128, 0.4);
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.08) 0%, rgba(34, 197, 94, 0.05) 100%);
}

.prize-card.first-place {
  border-color: rgba(255, 215, 0, 0.4);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 215, 0, 0.03) 100%);
}

.prize-card.first-place:hover {
  border-color: rgba(255, 215, 0, 0.6);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.12) 0%, rgba(255, 215, 0, 0.05) 100%);
}

.prize-card.second-place {
  border-color: rgba(192, 192, 192, 0.4);
  background: linear-gradient(135deg, rgba(192, 192, 192, 0.08) 0%, rgba(192, 192, 192, 0.03) 100%);
}

.prize-card.second-place:hover {
  border-color: rgba(192, 192, 192, 0.6);
  background: linear-gradient(135deg, rgba(192, 192, 192, 0.12) 0%, rgba(192, 192, 192, 0.05) 100%);
}

.prize-card.third-place {
  border-color: rgba(205, 127, 50, 0.4);
  background: linear-gradient(135deg, rgba(205, 127, 50, 0.08) 0%, rgba(205, 127, 50, 0.03) 100%);
}

.prize-card.third-place:hover {
  border-color: rgba(205, 127, 50, 0.6);
  background: linear-gradient(135deg, rgba(205, 127, 50, 0.12) 0%, rgba(205, 127, 50, 0.05) 100%);
}

.prize-rank {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.prize-rank span {
  font-size: 1.3rem;
  font-weight: 400;
  color: #f5f7f5;
  letter-spacing: -0.01em;
}

.prize-amount {
  font-size: 2.5rem;
  font-weight: 300;
  color: #4ade80;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.first-place .prize-amount {
  color: #FFD700;
  font-size: 3rem;
}

.second-place .prize-amount {
  color: #C0C0C0;
  font-size: 2.75rem;
}

.third-place .prize-amount {
  color: #CD7F32;
}

.prize-description {
  color: #d1d5db;
  font-size: 0.95rem;
  line-height: 1.5;
  font-weight: 300;
}

.category-prizes {
  margin-top: 4rem;
}

.category-prizes-title {
  font-size: 1.8rem;
  font-weight: 300;
  color: #86efac;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.category-prizes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.category-prize-card {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.03) 0%, rgba(34, 197, 94, 0.02) 100%);
  border: 1px solid rgba(74, 222, 128, 0.15);
  border-radius: 4px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.category-prize-card:hover {
  transform: translateY(-2px);
  border-color: rgba(74, 222, 128, 0.3);
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
}

.category-icon {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.category-prize-card h4 {
  font-size: 1.2rem;
  font-weight: 400;
  color: #f5f7f5;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.category-prize-card p {
  color: #a3a3a3;
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 300;
}

.all-participants-note {
  text-align: center;
  margin-top: 3rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.08) 0%, rgba(34, 197, 94, 0.05) 100%);
  border-radius: 4px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}

.all-participants-note p {
  color: #d1d5db;
  font-size: 1.05rem;
  font-weight: 400;
  margin: 0;
}

@media (max-width: 1024px) {
  .prizes-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .prize-card.first-place .prize-amount {
    font-size: 2.5rem;
  }

  .prize-card.second-place .prize-amount {
    font-size: 2.25rem;
  }

  .category-prizes-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .prizes-section {
    min-height: auto;
    padding: 2rem 0;
  }

  .prizes-disclaimer {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .prize-card {
    padding: 2rem 1.5rem;
  }

  .prize-rank span {
    font-size: 1.1rem;
  }

  .prize-amount {
    font-size: 2rem;
  }

  .prize-card.first-place .prize-amount {
    font-size: 2.25rem;
  }

  .prize-card.second-place .prize-amount {
    font-size: 2.1rem;
  }

  .category-prize-card {
    padding: 1.5rem 1rem;
  }
}
</style>