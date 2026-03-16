<template>
  <div class="min-h-screen bg-background flex items-center justify-center py-20 px-4">
    <div class="w-full max-w-2xl text-center">
      <!-- Success animation -->
      <div class="w-24 h-24 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-8 animate-pulse">
        <Icon name="lucide:check" class="w-12 h-12 text-green-400" />
      </div>

      <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">We've Got You Covered</span>
      <h1 class="text-5xl font-extrabold text-white uppercase italic tracking-tight mb-4">Order Confirmed!</h1>
      <p class="text-text-secondary text-lg max-w-lg mx-auto mb-4">
        Thank you for your purchase. Your order has been successfully placed and is in process.
      </p>

      <div class="bg-topbar border border-white/5 rounded-xl p-8 mb-10 text-left max-w-md mx-auto">
        <div class="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
          <div>
            <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Order Number</p>
            <p class="text-white font-extrabold text-lg">#{{ confirmationNumber }}</p>
          </div>
          <span class="bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase px-3 py-1.5 rounded tracking-wider">Confirmed</span>
        </div>

        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-text-secondary">Date</span>
            <span class="text-white font-semibold">{{ today }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-text-secondary">Estimated Delivery</span>
            <span class="text-white font-semibold">7–14 Business Days</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-text-secondary">Payment</span>
            <span class="text-white font-semibold">Secured ✓</span>
          </div>
        </div>
      </div>

      <!-- Next Steps -->
      <div class="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
        <div v-for="step in nextSteps" :key="step.label" class="bg-topbar border border-white/5 rounded-lg p-5 text-center">
          <Icon :name="step.icon" class="w-6 h-6 text-primary mx-auto mb-3" />
          <p class="text-xs font-bold text-white uppercase tracking-wide">{{ step.label }}</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/account" class="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20">
          View Order Status
        </NuxtLink>
        <NuxtLink to="/inventory/new" class="bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors">
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const confirmationNumber = Math.random().toString(36).substring(2, 10).toUpperCase()
const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

const nextSteps = [
  { icon: 'lucide:mail', label: 'Check Email' },
  { icon: 'lucide:truck', label: 'Track Delivery' },
  { icon: 'lucide:phone', label: 'Contact Us' },
]

useHead({ title: 'Order Confirmed – AutoDrive' })
</script>
