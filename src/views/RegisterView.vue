<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-header">
        <h1>Register for Hack Trinidad Forward</h1>
        <p>Join us for an exciting 48-hour innovation event!</p>
      </div>

      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
      <p class="progress-text">{{ progressPercentage }}% Complete</p>

      <!-- Registration Form -->
      <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="registration-form">
        <!-- First Name -->
        <div class="form-group">
          <label for="firstName">First Name *</label>
          <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              :class="['form-input', {
              'valid': formData.firstName && isFirstNameValid,
              'invalid': formData.firstName && !isFirstNameValid
            }]"
              placeholder="Enter your first name"
              @blur="validateFirstName"
              @input="calculateProgress"
              :disabled="isSubmitting"
          />
          <span v-if="formData.firstName && !isFirstNameValid" class="error-message">
            First name is required
          </span>
        </div>

        <!-- Last Name -->
        <div class="form-group">
          <label for="lastName">Last Name *</label>
          <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              :class="['form-input', {
              'valid': formData.lastName && isLastNameValid,
              'invalid': formData.lastName && !isLastNameValid
            }]"
              placeholder="Enter your last name"
              @blur="validateLastName"
              @input="calculateProgress"
              :disabled="isSubmitting"
          />
          <span v-if="formData.lastName && !isLastNameValid" class="error-message">
            Last name is required
          </span>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input
              id="email"
              v-model="formData.email"
              type="email"
              :class="['form-input', {
              'valid': formData.email && isEmailValid,
              'invalid': formData.email && !isEmailValid
            }]"
              placeholder="Enter your email address"
              @blur="validateEmail"
              @input="calculateProgress"
              :disabled="isSubmitting"
          />
          <span v-if="formData.email && !isEmailValid" class="error-message">
            Please enter a valid email address
          </span>
        </div>

        <!-- Profession -->
        <div class="form-group">
          <label for="profession">Profession *</label>
          <input
              id="profession"
              v-model="formData.profession"
              type="text"
              :class="['form-input', {
              'valid': formData.profession && isProfessionValid,
              'invalid': formData.profession && !isProfessionValid
            }]"
              placeholder="e.g., Software Developer, Student, Designer"
              @blur="validateProfession"
              @input="calculateProgress"
              :disabled="isSubmitting"
          />
          <span v-if="formData.profession && !isProfessionValid" class="error-message">
            Profession is required
          </span>
        </div>

        <!-- Experience Level -->
        <div class="form-group">
          <label for="experienceLevel">Experience Level *</label>
          <select
              id="experienceLevel"
              v-model="formData.experienceLevel"
              :class="['form-select', {
              'valid': formData.experienceLevel && isExperienceLevelValid
            }]"
              @change="calculateProgress"
              :disabled="isSubmitting"
          >
            <option value="">Select your experience level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <span v-if="formData.experienceLevel && !isExperienceLevelValid" class="error-message">
            Please select an experience level
          </span>
        </div>

        <!-- Dietary Preferences -->
        <div class="form-group">
          <label>Dietary Preferences (optional)</label>
          <div class="checkbox-group">
            <label
                v-for="option in dietaryOptions"
                :key="option"
                class="checkbox-label"
            >
              <input
                  type="checkbox"
                  :value="option"
                  v-model="formData.dietaryPreferences"
                  class="checkbox"
                  :disabled="isSubmitting"
              />
              <span class="checkbox-text">{{ option }}</span>
            </label>
          </div>
        </div>

        <!-- Help Find Team -->
        <div class="form-group">
          <label class="checkbox-label">
            <input
                v-model="formData.helpFindTeam"
                type="checkbox"
                class="checkbox"
                :disabled="isSubmitting"
            />
            <span class="checkbox-text">I would like help finding a team</span>
          </label>
        </div>

        <!-- Submit Button -->
        <button
            type="submit"
            class="submit-button"
            :disabled="!isFormValid || isSubmitting"
            :class="{ 'disabled': !isFormValid || isSubmitting }"
        >
          <span v-if="isSubmitting">Registering...</span>
          <span v-else>Complete Registration</span>
        </button>
      </form>

      <!-- Success Message -->
      <div v-if="isSubmitted" class="success-content">
        <div class="success-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <h2>Registration Complete!</h2>
        <p>Thank you for registering for Hack Trinidad Forward!</p>
        <p class="success-details">
          We've sent a confirmation email to <strong>{{ formData.email }}</strong>.
          Please check your inbox for event details and reminders. We're excited to see you
          at Emergent Campus Trinidad on November 15th-17th!
        </p>

        <div class="success-actions">
          <button @click="addToGoogleCalendar" class="calendar-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add to Calendar
          </button>

          <router-link to="/" class="home-button">
            Return to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import Airtable from 'airtable'
import { useHead } from '@vueuse/head'
useHead({
  title: 'Register Now for Hack Trinidad Forward | Nov 14-16',
  meta: [
    {
      name: 'description',
      content: 'Register now to secure your spot at Hack Trinidad Forward! Join innovators and creators from Nov 14-16 in Trinidad, CO, for an epic 48-hour problem-solving event.'
    },
    // --- Social Media Tags ---
    {
      property: 'og:title',
      content: 'Register Now for Hack Trinidad Forward'
    },
    {
      property: 'og:description',
      content: 'Register now to secure your spot at Hack Trinidad Forward! Join us Nov 14-16 in Trinidad, CO.'
    }
  ]
})
interface RegistrationForm {
  firstName: string
  lastName: string
  email: string
  profession: string
  experienceLevel: string
  dietaryPreferences: string[]
  helpFindTeam: boolean
}

const formData = reactive<RegistrationForm>({
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  experienceLevel: '',
  dietaryPreferences: [],
  helpFindTeam: false
})

const dietaryOptions = [
  'No Preferences',
  'Vegetarian',
  'Vegan',
  'Gluten Free',
  'Dairy Free',
  'Nut Allergy',
  'Other'
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = 'Hackathon'

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

const firstNameBlurred = ref(false)
const lastNameBlurred = ref(false)
const emailBlurred = ref(false)
const professionBlurred = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isFirstNameValid = computed(() => formData.firstName.trim().length > 0)
const isLastNameValid = computed(() => formData.lastName.trim().length > 0)
const isEmailValid = computed(() => emailRegex.test(formData.email))
const isProfessionValid = computed(() => formData.profession.trim().length > 0)
const isExperienceLevelValid = computed(() =>
    ['Beginner', 'Intermediate', 'Advanced'].includes(formData.experienceLevel)
)

const isFormValid = computed(() => {
  return isFirstNameValid.value &&
      isLastNameValid.value &&
      isEmailValid.value &&
      isProfessionValid.value &&
      isExperienceLevelValid.value
})

const progressPercentage = ref(0)

const calculateProgress = () => {
  let filledFields = 0
  const totalFields = 5

  if (isFirstNameValid.value) filledFields++
  if (isLastNameValid.value) filledFields++
  if (isEmailValid.value) filledFields++
  if (isProfessionValid.value) filledFields++
  if (isExperienceLevelValid.value) filledFields++

  progressPercentage.value = Math.round((filledFields / totalFields) * 100)
}

const validateFirstName = () => {
  firstNameBlurred.value = true
}

const validateLastName = () => {
  lastNameBlurred.value = true
}

const validateEmail = () => {
  emailBlurred.value = true
}

const validateProfession = () => {
  professionBlurred.value = true
}

const addToGoogleCalendar = () => {
  const eventTitle = 'Hack Trinidad Forward'
  const eventDescription = 'Hack Trinidad Forward - 48-hour coding adventure in Trinidad, Colorado'
  const eventLocation = 'Emergent Campus Trinidad, 612 Park Street, Trinidad, CO 81082'
  const startDate = '20241115T180000'
  const endDate = '20241117T170000'

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`

  window.open(calendarUrl, '_blank')
}

const handleSubmit = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true

  try {
    // Convert dietary preferences array to Airtable multiple select format
    const dietaryPreferencesFormatted = formData.dietaryPreferences.map(pref => ({ name: pref }))

    await base(AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Profession': formData.profession,
          'Experience Level': formData.experienceLevel,
          'Dietary Preferences': formData.dietaryPreferences,
          'Help Find Team': formData.helpFindTeam,
          'Registration Date': new Date().toISOString()
        }
      }
    ])

    isSubmitted.value = true

  } catch (error) {
    console.error('Error submitting to Airtable:', error)
    alert('There was an error submitting your registration. Please try again or contact us directly.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0f0a 0%, #1a1f1a 50%, #0d140d 100%);
  padding: 8rem 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-container {
  max-width: 600px;
  width: 100%;
  background: linear-gradient(135deg, rgba(26, 31, 26, 0.95) 0%, rgba(10, 15, 10, 0.98) 100%);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 4px;
  padding: 3rem;
  backdrop-filter: blur(20px);
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-header h1 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #f5f7f5;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.register-header p {
  color: #a3a3a3;
  font-size: 1.1rem;
  font-weight: 300;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80 0%, #22c55e 100%);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
}

.progress-text {
  text-align: center;
  color: #86efac;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  font-weight: 400;
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #f3f4f6;
  font-weight: 500;
  font-size: 0.95rem;
}

.form-input,
.form-select {
  padding: 1rem;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 2px;
  background-color: rgba(26, 31, 26, 0.5);
  color: #f5f7f5;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-weight: 300;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #4ade80;
  background-color: rgba(26, 31, 26, 0.8);
}

.form-input.valid,
.form-select.valid {
  border-color: #22c55e;
}

.form-input.invalid {
  border-color: #ef4444;
}

.form-select option {
  background-color: #1a1f1a;
  color: #f5f7f5;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-weight: 300;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(26, 31, 26, 0.3);
  border-radius: 2px;
  border: 1px solid rgba(74, 222, 128, 0.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  color: #f3f4f6;
  font-weight: 400;
}

.checkbox {
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid rgba(74, 222, 128, 0.2);
  border-radius: 3px;
  background-color: rgba(26, 31, 26, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.checkbox:checked {
  background-color: #4ade80;
  border-color: #4ade80;
}

.checkbox-text {
  font-size: 0.95rem;
  user-select: none;
}

.submit-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: #0a0f0a;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1rem;
  width: 100%;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.submit-button:hover:not(.disabled) {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  transform: translateY(-1px);
}

.submit-button.disabled {
  background: rgba(74, 222, 128, 0.3);
  cursor: not-allowed;
  opacity: 0.5;
}

.success-content {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
}

.success-content h2 {
  color: #f5f7f5;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.success-content p {
  color: #d1d5db;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.success-details {
  font-size: 1rem !important;
  margin: 1.5rem 0 !important;
  padding: 1.5rem;
  background-color: rgba(74, 222, 128, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(74, 222, 128, 0.2);
}

.success-details strong {
  color: #4ade80;
  font-weight: 500;
}

.success-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.calendar-button,
.home-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
  text-decoration: none;
  border: none;
}

.calendar-button {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: #0a0f0a;
}

.calendar-button:hover {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  transform: translateY(-1px);
}

.home-button {
  background: transparent;
  color: #a3a3a3;
  border: 1px solid rgba(74, 222, 128, 0.2);
}

.home-button:hover {
  background-color: rgba(74, 222, 128, 0.1);
  color: #f5f7f5;
  border-color: rgba(74, 222, 128, 0.4);
}

@media (max-width: 640px) {
  .register-page {
    padding: 6rem 1rem 2rem;
  }

  .register-container {
    padding: 2rem 1.5rem;
  }

  .register-header h1 {
    font-size: 1.75rem;
  }
}
</style>