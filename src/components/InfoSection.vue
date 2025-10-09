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
          or simply passionate about technology, this event offers the perfect platform to learn, 
          network, and create something amazing in the heart of southern Colorado.
        </p>
      </div>

      <!-- Schedule Section -->
      <div class="info-block">
        <h2>Schedule</h2>
        <div class="schedule-grid">
          <div class="schedule-day">
            <h3>Friday, Nov 15th</h3>
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
            <h3>Saturday, Nov 16th</h3>
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
            <h3>Sunday, Nov 17th</h3>
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
            <h3>Title Sponsors</h3>
            <div class="sponsor-logos">
              <div class="sponsor-placeholder">
                <span>Colorado Tech Hub</span>
              </div>
              <div class="sponsor-placeholder">
                <span>Rocky Mountain Innovations</span>
              </div>
            </div>
          </div>

          <div class="sponsor-tier">
            <h3>Gold Sponsors</h3>
            <div class="sponsor-logos">
              <div class="sponsor-placeholder">
                <span>Southern Colorado Dev Co.</span>
              </div>
              <div class="sponsor-placeholder">
                <span>Trinidad Tech Solutions</span>
              </div>
              <div class="sponsor-placeholder">
                <span>Front Range Digital</span>
              </div>
            </div>
          </div>

          <div class="sponsor-tier">
            <h3>Community Partners</h3>
            <div class="sponsor-logos">
              <div class="sponsor-placeholder small">
                <span>CodeCO</span>
              </div>
              <div class="sponsor-placeholder small">
                <span>StartupTrinidad</span>
              </div>
              <div class="sponsor-placeholder small">
                <span>Women in Tech CO</span>
              </div>
              <div class="sponsor-placeholder small">
                <span>Colorado Dev Society</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sponsor-cta">
          <p>Interested in sponsoring? <a href="mailto:sponsors@hacktrinidadforward.com">Contact us</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// This component is purely presentational, no script logic needed
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
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: -0.02em;
}

.sponsor-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}

.sponsor-placeholder {
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(34, 197, 94, 0.03) 100%);
  border: 1px solid rgba(74, 222, 128, 0.15);
  border-radius: 2px;
  padding: 2rem;
  min-width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #a3a3a3;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  letter-spacing: -0.01em;
}

.sponsor-placeholder.small {
  min-width: 150px;
  height: 80px;
  padding: 1.5rem;
  font-size: 0.9rem;
}

.sponsor-placeholder:hover {
  border-color: #4ade80;
  background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
  color: #f5f7f5;
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
  
  .sponsor-logos {
    gap: 1rem;
  }
  
  .sponsor-placeholder {
    min-width: 140px;
    height: 80px;
    padding: 1rem;
    font-size: 0.9rem;
  }
  
  .sponsor-placeholder.small {
    min-width: 120px;
    height: 60px;
    font-size: 0.8rem;
  }
}
</style>