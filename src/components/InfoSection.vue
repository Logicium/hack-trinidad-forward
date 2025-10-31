<template>
  <section class="info-section">
    <div class="container">
      <!-- About Section -->
      <div class="info-block">
        <h2>About</h2>
        <p>
          Hack Trinidad Forward is Trinidad's first hackathon bringing together the brightest minds
          in technology, innovation, and entrepreneurship. Over 48 hours, teams will collaborate
          to build groundbreaking solutions that address real-world challenges facing Trinidad, Colorado
          and the surrounding communities.
        </p>
        <p>
          Whether you're a seasoned developer, a creative designer, an ambitious entrepreneur,
          or simply passionate about your community, this event offers the perfect platform to learn,
          network, and create something amazing in the heart of southern Colorado.
        </p>
      </div>

      <!-- Schedule Section -->
      <div class="info-block">
        <h2>Schedule</h2>
        <div class="schedule-grid">
          <div class="schedule-day">
            <h3>Friday, Nov 14th </h3>
            <div class="schedule-items">
              <div class="schedule-item">
                <span class="time">6:00 PM</span>
                <span class="event">Registration & Welcome Reception</span>
              </div>
              <div class="schedule-item">
                <span class="time">7:30 PM</span>
                <span class="event">Opening Ceremony & Theme Reveal</span>
              </div>
              <div class="schedule-item">
                <span class="time">8:30 PM</span>
                <span class="event">Team Formation & Networking</span>
              </div>
              <div class="schedule-item">
                <span class="time">10:00 PM</span>
                <span class="event">Hacking Begins!</span>
              </div>
            </div>
          </div>

          <div class="schedule-day">
            <h3>Saturday, Nov 15th </h3>
            <div class="schedule-items">
              <div class="schedule-item">
                <span class="time">8:00 AM</span>
                <span class="event">Breakfast & Coffee</span>
              </div>
              <div class="schedule-item">
                <span class="time">10:00 AM</span>
                <span class="event">Workshop: API Development</span>
              </div>
              <div class="schedule-item">
                <span class="time">12:00 PM</span>
                <span class="event">Lunch & Mentor Sessions</span>
              </div>
              <div class="schedule-item">
                <span class="time">3:00 PM</span>
                <span class="event">Workshop: UI/UX Design</span>
              </div>
              <div class="schedule-item">
                <span class="time">7:00 PM</span>
                <span class="event">Dinner & Progress Check-ins</span>
              </div>
            </div>
          </div>

          <div class="schedule-day">
            <h3>Sunday, Nov 16th </h3>
            <div class="schedule-items">
              <div class="schedule-item">
                <span class="time">8:00 AM</span>
                <span class="event">Final Day Breakfast</span>
              </div>
              <div class="schedule-item">
                <span class="time">12:00 PM</span>
                <span class="event">Project Submissions Due</span>
              </div>
              <div class="schedule-item">
                <span class="time">1:00 PM</span>
                <span class="event">Lunch & Demo Prep</span>
              </div>
              <div class="schedule-item">
                <span class="time">2:30 PM</span>
                <span class="event">Final Presentations</span>
              </div>
              <div class="schedule-item">
                <span class="time">5:00 PM</span>
                <span class="event">Awards Ceremony & Closing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Location Section -->
      <div class="info-block">
        <h2>Location</h2>
        <p>
          Join us at Emergent Campus Trinidad, a collaborative workspace and community hub
          located next to Trinidad State College Campus.
        </p>
        <div class="location-details">
          <div class="address">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
              <strong>Emergent Campus Trinidad</strong>
              <p>612 Park Street, Trinidad, CO 81082</p>
            </div>
          </div>
        </div>
        <GoogleMap />
      </div>

      <!-- Sponsors Section -->
      <div class="info-block">
        <h2>Sponsors</h2>
        <p>
          We're grateful for the support of our amazing sponsors who make this event possible.
          Their commitment to innovation and technology development in southern Colorado helps create
          opportunities for the next generation of tech leaders.
        </p>

        <div class="sponsors-grid">
          <div class="sponsor-tier">
            <h3>Keystone Partners</h3>
            <div class="sponsor-logos">
              <div class="sponsor-placeholder large">
                <span>Your Company Here</span>
              </div>
            </div>
          </div>

          <div class="sponsor-tier">
            <h3>Innovation Partners</h3>
            <div class="sponsor-logos">
              <div class="sponsor-logo-container medium">
                <img src="/logos/Biometrica+Logo.webp" alt="Biomedica" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container medium">
                <img src="/logos/csi-logo.png" alt="CSI" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container medium">
                <img src="/logos/creo-en-ti-logo.jpeg" alt="Creo En Ti" class="sponsor-logo sponsor-logo-zoom-sm" />
              </div>
            </div>
          </div>

          <div class="sponsor-tier">
            <h3>Launch Partners</h3>
            <div class="sponsor-logos">
              <div class="sponsor-logo-container small">
                <img src="/logos/InBank_landscape-1.svg" alt="InBank" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container small">
                <img src="/logos/di_logo_light.png" alt="Disruptive Innovations" class="sponsor-logo sponsor-logo-invert" />
              </div>
              <div class="sponsor-logo-container small">
                <img src="/logos/gobins.png" alt="Gobins" class="sponsor-logo" />
              </div>
            </div>
          </div>

          <div class="sponsor-tier">
            <h3>Community Partners</h3>
            <p class="tier-description">Supporting through in-kind donations, venue, food, and logistics</p>
            <div class="sponsor-logos">
              <div class="sponsor-logo-container xsmall">
                <img src="/logos/Emergent-Campus-Logo-Green.png" alt="Emergent Campus" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container xsmall">
                <img src="/logos/Apotome Labs LOGO (2).svg" alt="Apotome Labs" class="sponsor-logo sponsor-logo-zoom" />
              </div>
              <div class="sponsor-logo-container xsmall">
                <img src="/logos/black-primary-crowdstrike-logo-1-addedPadding-3.svg" alt="CrowdStrike" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container xsmall">
                <img src="/logos/trinidad-state-college.png" alt="Trinidad State College" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container xsmall">
                <img src="/logos/cdwg-logo-no-tag.svg" alt="CDWG" class="sponsor-logo" />
              </div>
              <div class="sponsor-logo-container xsmall cyderes-container">
                <img src="/logos/cyderes-logos.jpg" alt="Cyderes" class="sponsor-logo sponsor-logo-shrink" />
              </div>
            </div>
          </div>
        </div>

        <div class="sponsor-cta">
          <p>Interested in sponsoring? <a href="mailto:kisora@apotomelabs.com">Contact us</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GoogleMap from './GoogleMap.vue'
</script>

<style scoped>
.info-section {
  background: linear-gradient(135deg, #0a0f0a 0%, #1a1f1a 50%, #0d140d 100%);
  color: #f5f7f5;
  padding: 6rem 0;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.info-block {
  margin-bottom: 6rem;
}

.info-block h2 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 200;
  color: #f5f7f5;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.info-block p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: 300;
  color: #d1d5db;
  letter-spacing: -0.01em;
}

/* Schedule Styles */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.schedule-day {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border-radius: 4px;
  padding: 2.5rem;
  border: 1px solid rgba(74, 222, 128, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.schedule-day:hover {
  transform: translateY(-2px);
  border-color: rgba(74, 222, 128, 0.2);
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.08) 0%, rgba(34, 197, 94, 0.05) 100%);
}

.schedule-day h3 {
  font-size: 1.5rem;
  font-weight: 400;
  color: #4ade80;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -0.02em;
}

.schedule-items {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(74, 222, 128, 0.02);
  border-radius: 2px;
  border-left: 2px solid #22c55e;
  transition: all 0.3s ease;
}

.schedule-item:hover {
  background: rgba(74, 222, 128, 0.05);
}

.schedule-item .time {
  font-weight: 500;
  color: #86efac;
  font-size: 0.9rem;
  min-width: 80px;
  letter-spacing: 0.02em;
}

.schedule-item .event {
  color: #d1d5db;
  font-size: 1rem;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  font-weight: 300;
}

/* Location Styles */
.location-details {
  margin: 2rem auto;
  max-width: 600px;
}

.address {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border-radius: 4px;
  border: 1px solid rgba(74, 222, 128, 0.2);
}

.address svg {
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.address strong {
  display: block;
  color: #4ade80;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
}

.address p {
  color: #d1d5db;
  font-size: 1rem;
  margin: 0;
  text-align: left;
}

/* Sponsors Styles */
.sponsors-grid {
  margin-top: 4rem;
}

.sponsor-tier {
  margin-bottom: 3rem;
}

.sponsor-tier h3 {
  font-size: 1.5rem;
  font-weight: 400;
  color: #86efac;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.02em;
}

.tier-description {
  text-align: center;
  font-size: 0.9rem;
  color: #a3a3a3;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.sponsor-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}

.sponsor-logo-container {
  background: #ffffff;
  border: 2px solid #4ade80;
  border-radius: 2px;
  padding: 2rem;
  min-width: 240px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.sponsor-logo-container.large {
  min-width: 280px;
  height: 140px;
  padding: 2.5rem;
}

.sponsor-logo-container.medium {
  min-width: 200px;
  height: 110px;
  padding: 1.75rem;
}

.sponsor-logo-container.small {
  min-width: 160px;
  height: 90px;
  padding: 1.5rem;
}

.sponsor-logo-container.xsmall {
  min-width: 130px;
  height: 70px;
  padding: 1rem;
}

.sponsor-logo-container:hover {
  border-color: #22c55e;
  background: #f0fdf4;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3);
}

.sponsor-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.sponsor-logo-zoom {
  transform: scale(2.5);
}
.sponsor-logo-zoom-sm {
  transform: scale(1.2);
}

.sponsor-logo-shrink {
  transform: scale(.9);
}

.cyderes-container {
  min-width: 80px !important;
  width: 120px;
}

.sponsor-logo-invert {
  filter: invert(1);
}

.sponsor-placeholder {
  background: #ffffff;
  border: 2px solid #4ade80;
  border-radius: 2px;
  padding: 2rem;
  min-width: 240px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #6b7280;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  letter-spacing: -0.01em;
  text-align: center;
}

.sponsor-placeholder.large {
  min-width: 280px;
  height: 140px;
  padding: 2.5rem;
  font-size: 1.1rem;
}

.sponsor-placeholder.medium {
  min-width: 200px;
  height: 110px;
  padding: 1.75rem;
  font-size: 1rem;
}

.sponsor-placeholder.small {
  min-width: 160px;
  height: 90px;
  padding: 1.5rem;
  font-size: 0.95rem;
}

.sponsor-placeholder.xsmall {
  min-width: 130px;
  height: 70px;
  padding: 1rem;
  font-size: 0.85rem;
}

.sponsor-placeholder:hover {
  border-color: #22c55e;
  background: #f0fdf4;
  color: #4b5563;
  transform: translateY(-1px);
}

.sponsor-cta {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.03) 0%, rgba(34, 197, 94, 0.02) 100%);
  border-radius: 2px;
  border: 1px solid rgba(74, 222, 128, 0.1);
}

.sponsor-cta a {
  color: #4ade80;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
}

.sponsor-cta a:hover {
  color: #22c55e;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .info-section {
    padding: 4rem 0;
  }

  .info-block {
    margin-bottom: 4rem;
  }

  .info-block h2 {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  .schedule-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .schedule-day {
    padding: 2rem;
  }

  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .schedule-item .event {
    text-align: left;
    margin-left: 0;
  }

  .address {
    flex-direction: column;
    text-align: center;
  }

  .address p {
    text-align: center;
  }

  .map-container iframe {
    height: 350px;
  }

  .sponsor-logos {
    gap: 1rem;
  }

  .sponsor-logo-container {
    min-width: 180px;
    height: 100px;
    padding: 1.25rem;
  }

  .sponsor-logo-container.large {
    min-width: 220px;
    height: 110px;
    padding: 1.5rem;
  }

  .sponsor-logo-container.medium {
    min-width: 160px;
    height: 90px;
    padding: 1.25rem;
  }

  .sponsor-logo-container.small {
    min-width: 130px;
    height: 75px;
    padding: 1rem;
  }

  .sponsor-logo-container.xsmall {
    min-width: 110px;
    height: 60px;
    padding: 0.75rem;
  }

  .sponsor-placeholder {
    min-width: 180px;
    height: 100px;
    padding: 1.25rem;
    font-size: 0.9rem;
  }

  .sponsor-placeholder.large {
    min-width: 220px;
    height: 110px;
    padding: 1.5rem;
    font-size: 1rem;
  }

  .sponsor-placeholder.medium {
    min-width: 160px;
    height: 90px;
    padding: 1.25rem;
    font-size: 0.9rem;
  }

  .sponsor-placeholder.small {
    min-width: 130px;
    height: 75px;
    padding: 1rem;
    font-size: 0.85rem;
  }

  .sponsor-placeholder.xsmall {
    min-width: 110px;
    height: 60px;
    padding: 0.75rem;
    font-size: 0.75rem;
  }
}
</style>