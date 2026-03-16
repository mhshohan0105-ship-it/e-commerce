<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="bg-topbar border-b border-white/5 py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-trade/5 via-transparent to-transparent pointer-events-none"></div>
      <div class="container mx-auto px-4 text-center">
        <span class="text-trade font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Instant Online Estimate</span>
        <h1 class="text-5xl font-extrabold text-white uppercase italic tracking-tight mb-4">Value Your Trade</h1>
        <p class="text-text-secondary text-lg max-w-xl mx-auto">Get a competitive trade-in offer in minutes. No obligation, no pressure.</p>
      </div>
    </section>

    <section class="py-20 container mx-auto px-4 max-w-3xl">
      <!-- Steps -->
      <div class="grid grid-cols-3 gap-4 mb-16">
        <div v-for="(step, i) in steps" :key="i" class="text-center">
          <div class="w-10 h-10 rounded-full bg-trade/10 border border-trade/30 text-trade font-extrabold text-sm flex items-center justify-center mx-auto mb-3">{{ i + 1 }}</div>
          <p class="text-white font-bold text-sm uppercase tracking-wide">{{ step.title }}</p>
          <p class="text-text-secondary text-xs mt-1">{{ step.desc }}</p>
        </div>
      </div>

      <!-- Form -->
      <div class="bg-topbar border border-white/5 rounded-xl p-10">
        <h2 class="text-xl font-extrabold text-white uppercase italic tracking-tight mb-8">Your Vehicle Info</h2>

        <div class="grid grid-cols-2 gap-5 mb-8">
          <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-trade text-sm appearance-none">
            <option value="">Model Year</option>
            <option v-for="y in years" :key="y">{{ y }}</option>
          </select>
          <input type="text" placeholder="Make (e.g., Ford)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <input type="text" placeholder="Model (e.g., F-150)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <input type="text" placeholder="Trim Level (e.g., Lariat)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <input type="number" placeholder="Current Mileage" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-trade text-sm appearance-none">
            <option value="">Condition</option>
            <option>Excellent – Like new</option>
            <option>Good – Minor wear</option>
            <option>Fair – Noticeable wear</option>
            <option>Poor – Needs repairs</option>
          </select>
          <input type="text" placeholder="VIN Number (optional)" class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <textarea rows="3" placeholder="Known issues, accident history, modifications..." class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors resize-none"></textarea>
        </div>

        <h2 class="text-xl font-extrabold text-white uppercase italic tracking-tight mb-5">Your Contact Info</h2>
        <div class="grid grid-cols-2 gap-5">
          <input type="text" placeholder="First Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <input type="text" placeholder="Last Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <input type="email" placeholder="Email Address" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
          <input type="tel" placeholder="Phone Number" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
        </div>

        <button class="mt-8 w-full bg-trade hover:opacity-90 text-white py-4 rounded font-extrabold uppercase tracking-wider transition-opacity shadow-lg">
          Get My Trade-In Value
        </button>
        <p class="text-center text-xs text-text-secondary mt-4">No obligation. We'll contact you within 1 business day with a competitive offer.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const steps = [
  { title: 'Enter Details', desc: 'Tell us about your current vehicle' },
  { title: 'Get Offer', desc: 'Receive a competitive market value' },
  { title: 'Trade Up', desc: 'Apply toward your next purchase' },
]
const years = Array.from({ length: 20 }, (_, i) => 2025 - i)
useHead({ title: 'Value Your Trade – AutoDrive' })
</script>
