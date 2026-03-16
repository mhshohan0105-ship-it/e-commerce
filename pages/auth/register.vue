<template>
  <div class="min-h-screen bg-background flex items-center justify-center py-20 px-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-10">
        <NuxtLink to="/" class="text-3xl font-extrabold tracking-tight text-white uppercase italic">
          Auto<span class="text-primary">Drive</span>
        </NuxtLink>
        <p class="text-text-secondary mt-3 text-sm">Create your AutoDrive account</p>
      </div>

      <div class="bg-topbar border border-white/5 rounded-xl p-8">
        <div class="space-y-4 mb-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">First Name</label>
              <input type="text" v-model="firstName" placeholder="John" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            </div>
            <div>
              <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">Last Name</label>
              <input type="text" v-model="lastName" placeholder="Driver" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            </div>
          </div>
          <div>
            <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">Email Address</label>
            <input type="email" v-model="email" placeholder="you@example.com" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">Phone Number</label>
            <input type="tel" v-model="phone" placeholder="(555) 000-1234" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">Password</label>
            <input type="password" v-model="password" placeholder="Minimum 8 characters" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">Confirm Password</label>
            <input type="password" v-model="confirmPassword" placeholder="Re-enter password" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
        </div>

        <label class="flex items-start gap-3 mb-6 cursor-pointer">
          <input type="checkbox" v-model="agree" class="mt-0.5 w-4 h-4 accent-primary" />
          <span class="text-xs text-text-secondary leading-relaxed">I agree to the <a href="#" class="text-primary hover:underline">Terms of Service</a> and <a href="#" class="text-primary hover:underline">Privacy Policy</a>. I consent to receive marketing communications from AutoDrive.</span>
        </label>

        <div v-if="error" class="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-sm text-red-400">{{ error }}</div>

        <button class="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20" @click="handleRegister">
          Create Account
        </button>
      </div>

      <p class="text-center text-text-secondary text-sm mt-6">
        Already have an account?
        <NuxtLink to="/auth/login" class="text-primary font-bold hover:text-white transition-colors ml-1">Sign In</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const agree = ref(false)
const error = ref('')
const router = useRouter()

const handleRegister = () => {
  if (!firstName.value || !email.value || !password.value) {
    error.value = 'Please fill in all required fields.'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }
  if (!agree.value) {
    error.value = 'You must agree to the Terms of Service.'
    return
  }
  // In production: call Supabase signUp here
  router.push('/account')
}
useHead({ title: 'Create Account – AutoDrive' })
</script>
