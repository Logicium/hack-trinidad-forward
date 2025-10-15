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
          <div class="tier-card gold">
            <div class="tier-header">
              <h3>Gold</h3>
              <p class="tier-amount">$2,500+</p>
            </div>
            <ul class="tier-benefits">
              <li>Prime logo placement on all materials</li>
              <li>Speaking opportunity at opening ceremony</li>
              <li>Booth space for recruiting/networking</li>
              <li>Social media feature series</li>
              <li>5 complimentary tickets</li>
              <li>Access to participant résumés</li>
            </ul>
          </div>

          <div class="tier-card silver">
            <div class="tier-header">
              <h3>Silver</h3>
              <p class="tier-amount">$1,000+</p>
            </div>
            <ul class="tier-benefits">
              <li>Logo on website and materials</li>
              <li>Booth space</li>
              <li>Social media mentions</li>
              <li>3 complimentary tickets</li>
              <li>Access to participant résumés</li>
            </ul>
          </div>

          <div class="tier-card bronze">
            <div class="tier-header">
              <h3>Bronze</h3>
              <p class="tier-amount">$500+</p>
            </div>
            <ul class="tier-benefits">
              <li>Name on website</li>
              <li>Social media thank you</li>
              <li>2 complimentary tickets</li>
              <li>Community recognition</li>
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

    <!-- Organizers & Judges Section -->
    <section class="people-section">
      <div class="container">
        <h2 class="section-title">Meet the Team</h2>

        <div class="people-category">
          <h3 class="category-title">Organizers</h3>
          <div class="people-grid">
            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Event Director</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Technical Lead</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Operations Manager</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Community Liaison</h4>
            </div>
          </div>
        </div>

        <div class="people-category">
          <h3 class="category-title">Judges</h3>
          <div class="people-grid">
            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Industry Expert</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Community Leader</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Tech Innovator</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Local Business Owner</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Education Specialist</h4>
            </div>

            <div class="person-card">
              <div class="person-photo square">
                <span class="tba">TBA</span>
              </div>
              <h4>Design Professional</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
</style>