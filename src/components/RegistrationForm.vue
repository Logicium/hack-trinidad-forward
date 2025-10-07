<template>
  <div class="registration-modal" @click="handleBackdropClick">
    <div class="modal-content" @click.stop>
      <!-- Close button -->
      <button class="close-button" @click="$emit('close')" aria-label="Close">
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
      <form @submit.prevent="handleSubmit" class="registration-form">
        <!-- Name field -->
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            :class="['form-input', { 
              'valid': formData.name && isNameValid, 
              'invalid': formData.name && !isNameValid 
            }]"
            placeholder="Enter your full name"
            @blur="validateName"
          />
          <span v-if="formData.name && !isNameValid" class="error-message">
            Name is required
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
          />
          <span v-if="formData.email && !isEmailValid" class="error-message">
            Please enter a valid email address
          </span>
        </div>

        <!-- Skill level field -->
        <div class="form-group">
          <label for="skillLevel">Skill Level *</label>
          <select
            id="skillLevel"
            v-model="formData.skillLevel"
            :class="['form-select', { 
              'valid': formData.skillLevel && isSkillLevelValid 
            }]"
          >
            <option value="">Select your skill level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <span v-if="formData.skillLevel && !isSkillLevelValid" class="error-message">
            Please select a skill level
          </span>
        </div>

        <!-- Submit button -->
        <button
          type="submit"
          class="submit-button"
          :disabled="!isFormValid"
          :class="{ 'disabled': !isFormValid }"
        >
          Register Now
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

// Define emits
const emit = defineEmits<{
  close: []
}>()

// Form data
const formData = reactive({
  name: '',
  email: '',
  skillLevel: ''
})

// Validation flags
const nameBlurred = ref(false)
const emailBlurred = ref(false)

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Validation computed properties
const isNameValid = computed(() => {
  return formData.name.trim().length > 0
})

const isEmailValid = computed(() => {
  return emailRegex.test(formData.email)
})

const isSkillLevelValid = computed(() => {
  return ['Beginner', 'Intermediate', 'Advanced'].includes(formData.skillLevel)
})

const isFormValid = computed(() => {
  return isNameValid.value && isEmailValid.value && isSkillLevelValid.value
})

// Validation methods
const validateName = () => {
  nameBlurred.value = true
}

const validateEmail = () => {
  emailBlurred.value = true
}

// Handle backdrop click to close modal
const handleBackdropClick = () => {
  emit('close')
}

// Handle form submission
const handleSubmit = () => {
  if (isFormValid.value) {
    // Here you would typically send the data to a server
    console.log('Registration submitted:', formData)
    
    // Show success message (you could add a toast notification here)
    alert('Registration submitted successfully!')
    
    // Close the modal
    emit('close')
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.skillLevel = ''
    nameBlurred.value = false
    emailBlurred.value = false
  }
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