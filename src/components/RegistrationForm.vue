<template>
  <div class="registration-modal" @click="handleBackdropClick">
    <div class="modal-content" @click.stop>
      <!-- Close button -->
      <button 
        class="close-button" 
        @click="closeModal" 
        aria-label="Close"
        :disabled="isSubmitting"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Form header -->
      <div class="form-header">
        <h2>Register for Hack Trinidad Forward</h2>
        <p>Join us for an exciting hackathon experience!</p>
      </div>

      <!-- Registration form -->
      <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="registration-form">
        <!-- First Name field -->
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
            :disabled="isSubmitting"
          />
          <span v-if="formData.firstName && !isFirstNameValid" class="error-message">
            First name is required
          </span>
        </div>

        <!-- Last Name field -->
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
            :disabled="isSubmitting"
          />
          <span v-if="formData.lastName && !isLastNameValid" class="error-message">
            Last name is required
          </span>
        </div>

        <!-- Email field -->
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
            :disabled="isSubmitting"
          />
          <span v-if="formData.email && !isEmailValid" class="error-message">
            Please enter a valid email address
          </span>
        </div>

        <!-- Profession field -->
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
            :disabled="isSubmitting"
          />
          <span v-if="formData.profession && !isProfessionValid" class="error-message">
            Profession is required
          </span>
        </div>

        <!-- Experience level field -->
        <div class="form-group">
          <label for="experienceLevel">Experience Level *</label>
          <select
            id="experienceLevel"
            v-model="formData.experienceLevel"
            :class="['form-select', { 
              'valid': formData.experienceLevel && isExperienceLevelValid 
            }]"
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

        <!-- Help find team checkbox -->
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

        <!-- Submit button -->
        <button
          type="submit"
          class="submit-button"
          :disabled="!isFormValid || isSubmitting"
          :class="{ 'disabled': !isFormValid || isSubmitting }"
        >
          <span v-if="isSubmitting">Registering...</span>
          <span v-else>Register Now</span>
        </button>
      </form>

      <!-- Success message -->
      <div v-if="isSubmitted" class="success-content">
        <div class="success-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <h3>Registration Successful!</h3>
        <p>Thank you for registering for Hack Trinidad Forward!</p>
        <p class="success-details">
          Please check your email for event reminders closer to the date. 
          We're excited to see you at Emergent Campus Trinidad on November 15th-17th!
        </p>
        
        <div class="success-actions">
          <button @click="addToGoogleCalendar" class="calendar-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add to Calendar
          </button>
          
          <button @click="closeModal" class="close-success-button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import Airtable from 'airtable'

// Define emits
const emit = defineEmits<{
  close: []
}>()

// Define the structure of the form data
interface RegistrationForm {
  firstName: string
  lastName: string
  email: string
  profession: string
  experienceLevel: string
  helpFindTeam: boolean
}

// Form data
const formData = reactive<RegistrationForm>({
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  experienceLevel: '',
  helpFindTeam: false
})

// Loading and success states
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Configure Airtable using environment variables
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = 'Hackathon'

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

// Validation flags
const firstNameBlurred = ref(false)
const lastNameBlurred = ref(false)
const emailBlurred = ref(false)
const professionBlurred = ref(false)

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Validation computed properties
const isFirstNameValid = computed(() => {
  return formData.firstName.trim().length > 0
})

const isLastNameValid = computed(() => {
  return formData.lastName.trim().length > 0
})

const isEmailValid = computed(() => {
  return emailRegex.test(formData.email)
})

const isProfessionValid = computed(() => {
  return formData.profession.trim().length > 0
})

const isExperienceLevelValid = computed(() => {
  return ['Beginner', 'Intermediate', 'Advanced'].includes(formData.experienceLevel)
})

const isFormValid = computed(() => {
  return isFirstNameValid.value && 
         isLastNameValid.value && 
         isEmailValid.value && 
         isProfessionValid.value &&
         isExperienceLevelValid.value
})

// Validation methods
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

// Handle backdrop click to close modal
const handleBackdropClick = () => {
  if (!isSubmitting.value) {
    emit('close')
  }
}

// Function to generate Google Calendar event URL
const addToGoogleCalendar = () => {
  const eventTitle = 'Hack Trinidad Forward'
  const eventDescription = 'Hack Trinidad Forward - 48-hour coding adventure in Trinidad, Colorado'
  const eventLocation = 'Emergent Campus Trinidad, 612 Park Street, Trinidad, CO 81082'

  // November 15-17, 2024 (adjust year as needed)
  const startDate = '20241115T090000'
  const endDate = '20241117T180000'

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`

  window.open(calendarUrl, '_blank')
}

// Handle form submission
const handleSubmit = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true

  try {
    // Send data to Airtable
    await base(AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Profession': formData.profession,
          'Experience Level': formData.experienceLevel,
          'Help Find Team': formData.helpFindTeam,
          'Registration Date': new Date().toISOString()
        }
      }
    ])

    console.log('Registration submitted:', formData)
    isSubmitted.value = true
    
  } catch (error) {
    console.error('Error submitting to Airtable:', error)
    alert('There was an error submitting your registration. Please try again or contact us directly.')
  } finally {
    isSubmitting.value = false
  }
}

// Reset form and close modal
const closeModal = () => {
  // Reset form
  formData.firstName = ''
  formData.lastName = ''
  formData.email = ''
  formData.profession = ''
  formData.experienceLevel = ''
  formData.helpFindTeam = false
  
  // Reset states
  isSubmitted.value = false
  firstNameBlurred.value = false
  lastNameBlurred.value = false
  emailBlurred.value = false
  professionBlurred.value = false
  
  emit('close')
}
</script>

<style scoped>
.registration-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 15, 10, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
}

.modal-content {
  background: linear-gradient(135deg, rgba(26, 31, 26, 0.95) 0%, rgba(10, 15, 10, 0.98) 100%);
  border-radius: 4px;
  padding: 3rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(74, 222, 128, 0.1);
  backdrop-filter: blur(20px);
}

.close-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #a3a3a3;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.close-button:hover {
  color: #f5f7f5;
  background-color: rgba(74, 222, 128, 0.1);
}

.form-header {
  margin-bottom: 3rem;
  text-align: center;
}

.form-header h2 {
  color: #f5f7f5;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.form-header p {
  color: #a3a3a3;
  font-size: 1rem;
  font-weight: 300;
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
  font-size: 0.9rem;
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
  margin-top: 0.5rem;
  font-weight: 300;
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
  margin-top: 2rem;
  width: 100%;
  letter-spacing: 0.02em;
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
  position: relative;
}

.checkbox:checked {
  background-color: #4ade80;
  border-color: #4ade80;
}

.checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #0a0f0a;
  font-size: 0.8rem;
  font-weight: bold;
}

.checkbox-text {
  font-size: 0.95rem;
  user-select: none;
}

.success-content {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  margin: 0 auto 1.5rem;
  width: 64px;
  height: 64px;
}

.success-content h3 {
  color: #f5f7f5;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.success-content p {
  color: #a3a3a3;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.success-details {
  font-size: 0.9rem !important;
  margin-bottom: 2rem !important;
  padding: 1rem;
  background-color: rgba(74, 222, 128, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(74, 222, 128, 0.2);
}

.success-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.calendar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: #0a0f0a;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.calendar-button:hover {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  transform: translateY(-1px);
}

.close-success-button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #a3a3a3;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
}

.close-success-button:hover {
  background-color: rgba(74, 222, 128, 0.1);
  color: #f5f7f5;
  border-color: rgba(74, 222, 128, 0.4);
}

/* Responsive design */
@media (max-width: 640px) {
  .modal-content {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .form-header h2 {
    font-size: 1.25rem;
  }
}
</style>