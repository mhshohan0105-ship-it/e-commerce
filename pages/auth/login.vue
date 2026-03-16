<template>
  <div class="min-h-screen bg-background flex items-center justify-center py-20 px-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-10">
        <NuxtLink to="/" class="text-3xl font-extrabold tracking-tight text-white uppercase italic">
          Auto<span class="text-primary">Drive</span>
        </NuxtLink>
        <p class="text-text-secondary mt-3 text-sm">Sign in to your account</p>
      </div>

      <div class="bg-topbar border border-white/5 rounded-xl p-8">
        <div class="space-y-4 mb-6">
          <div>
            <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">Email Address</label>
            <input type="email" v-model="email" placeholder="you@example.com" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
          <div>
            <div class="flex justify-between mb-1.5">
              <label class="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Password</label>
              <a href="#" class="text-[10px] text-primary font-bold uppercase tracking-widest hover:text-white transition-colors">Forgot?</a>
            </div>
            <input type="password" v-model="password" placeholder="••••••••" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
        </div>

        <div v-if="error" class="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-sm text-red-400">
          {{ error }}
        </div>

        <button class="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 mb-4" @click="handleLogin">
          Sign In
        </button>

        <div class="relative flex items-center gap-4 my-6">
          <div class="flex-grow h-px bg-white/10"></div>
          <span class="text-text-secondary text-xs uppercase tracking-wider">or</span>
          <div class="flex-grow h-px bg-white/10"></div>
        </div>

        <div class="space-y-3">
          <button class="w-full bg-background border border-white/10 hover:border-white/30 text-white py-3 rounded font-semibold text-sm transition-colors flex items-center justify-center gap-3">
            <Icon name="lucide:chrome" class="w-4 h-4" />
            Continue with Google
          </button>
        </div>
      </div>

      <p class="text-center text-text-secondary text-sm mt-6">
        Don't have an account?
        <NuxtLink to="/auth/register" class="text-primary font-bold hover:text-white transition-colors ml-1">Create one</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'default' })

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {
  if (!email.value || !password.value) {
    error.value = 'Please enter your email and password.'
    return
  }
  // Placeholder: In production, call Supabase auth here
  router.push('/account')
}
useHead({ title: 'Sign In – AutoDrive' })
</script>
