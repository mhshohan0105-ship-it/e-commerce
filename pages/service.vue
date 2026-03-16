<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="bg-topbar border-b border-white/5 py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-trade/5 via-transparent to-transparent pointer-events-none"></div>
      <div class="container mx-auto px-4 text-center">
        <span class="text-trade font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Genuine Parts &amp; Expert Technicians</span>
        <h1 class="text-5xl font-extrabold text-white uppercase italic tracking-tight mb-4">Service Center</h1>
        <p class="text-text-secondary text-lg max-w-2xl mx-auto">Factory-trained technicians, OEM parts, and state-of-the-art equipment for your peace of mind.</p>
      </div>
    </section>

    <section class="py-20 container mx-auto px-4">
      <!-- Services Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        <div v-for="svc in services" :key="svc.name" class="bg-topbar border border-white/5 rounded-lg p-6 text-center group hover:border-trade/30 transition-colors cursor-pointer">
          <div class="w-12 h-12 rounded-lg bg-trade/10 flex items-center justify-center mx-auto mb-4">
            <Icon :name="svc.icon" class="w-6 h-6 text-trade" />
          </div>
          <h3 class="font-bold text-white text-sm uppercase tracking-wide">{{ svc.name }}</h3>
          <p class="text-text-secondary text-xs mt-2">{{ svc.price }}</p>
        </div>
      </div>

      <!-- Appointment Form -->
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-10">
          <span class="text-trade font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Reserve Your Spot</span>
          <h2 class="text-3xl font-extrabold text-white uppercase italic">Schedule Service</h2>
        </div>
        <div class="bg-topbar border border-white/5 rounded-xl p-10 space-y-5">
          <div class="grid grid-cols-2 gap-5">
            <input type="text" placeholder="First Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
            <input type="text" placeholder="Last Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
            <input type="email" placeholder="Email Address" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
            <input type="tel" placeholder="Phone Number" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
            <input type="text" placeholder="Vehicle Year, Make &amp; Model" class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors" />
            <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-trade text-sm appearance-none">
              <option value="">Service Type</option>
              <option>Oil Change</option>
              <option>Tire Rotation</option>
              <option>Brake Service</option>
              <option>Engine Diagnostics</option>
              <option>AC Service</option>
              <option>Multi-Point Inspection</option>
            </select>
            <input type="date" class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-trade text-sm transition-colors" />
            <textarea rows="3" placeholder="Describe any issues or additional requests..." class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-trade text-sm transition-colors resize-none"></textarea>
          </div>
          <button class="w-full bg-trade hover:opacity-90 text-white py-4 rounded font-extrabold uppercase tracking-wider transition-opacity shadow-lg">
            Book My Appointment
          </button>
          <p class="text-center text-xs text-text-secondary">You'll receive a confirmation email within 2 hours.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { name: 'Oil Change', icon: 'lucide:droplets', price: 'From $49' },
  { name: 'Tire Service', icon: 'lucide:circle-dot', price: 'From $79' },
  { name: 'Brake Repair', icon: 'lucide:disc', price: 'From $149' },
  { name: 'Diagnostics', icon: 'lucide:cpu', price: 'From $99' },
  { name: 'AC Service', icon: 'lucide:wind', price: 'From $89' },
  { name: 'Inspection', icon: 'lucide:clipboard-check', price: 'From $59' },
  { name: 'Battery', icon: 'lucide:battery-charging', price: 'From $129' },
  { name: 'Detailing', icon: 'lucide:sparkles', price: 'From $199' },
]
useHead({ title: 'Service Center – AutoDrive' })
</script>
