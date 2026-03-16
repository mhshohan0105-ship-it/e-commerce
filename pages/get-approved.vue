<template>
  <div class="min-h-screen bg-background">
    <!-- Hero -->
    <section class="bg-topbar border-b border-white/5 py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div class="container mx-auto px-4 text-center">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Start Your Journey</span>
        <h1 class="text-5xl font-extrabold text-white uppercase italic tracking-tight mb-4">Get Pre-Approved</h1>
        <p class="text-text-secondary text-lg max-w-xl mx-auto">Complete our secure application and get a financing decision within 24 hours. Soft pull only — no impact to your credit score.</p>
        <div class="flex justify-center gap-8 mt-10">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-3xl font-extrabold text-primary">{{ stat.value }}</p>
            <p class="text-text-secondary text-xs uppercase tracking-wider mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 container mx-auto px-4 max-w-3xl">
      <div class="bg-topbar border border-white/5 rounded-xl p-10">
        <!-- Step 1 -->
        <div class="mb-10">
          <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
            <span class="w-8 h-8 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">1</span>
            Personal Information
          </h2>
          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="text" placeholder="Last Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="email" placeholder="Email" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="tel" placeholder="Phone" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="text" placeholder="Date of Birth" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" onFocus="this.type='date'" />
            <input type="text" placeholder="Social Security # (last 4)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
        </div>

        <!-- Step 2 -->
        <div class="mb-10">
          <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
            <span class="w-8 h-8 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">2</span>
            Financial Information
          </h2>
          <div class="grid grid-cols-2 gap-4">
            <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm appearance-none">
              <option value="">Employment Status</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-Employed</option>
              <option>Retired</option>
            </select>
            <input type="text" placeholder="Employer Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="number" placeholder="Annual Gross Income ($)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="number" placeholder="Monthly Expenses ($)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
          </div>
        </div>

        <!-- Step 3 -->
        <div class="mb-10">
          <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
            <span class="w-8 h-8 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">3</span>
            Vehicle Preferences
          </h2>
          <div class="grid grid-cols-2 gap-4">
            <input type="number" placeholder="Budget Maximum ($)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <input type="number" placeholder="Down Payment ($)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
            <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm appearance-none">
              <option value="">Preferred Loan Term</option>
              <option>24 months</option>
              <option>36 months</option>
              <option>48 months</option>
              <option>60 months</option>
              <option>72 months</option>
            </select>
            <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm appearance-none">
              <option value="">New or Pre-Owned?</option>
              <option>New</option>
              <option>Pre-Owned</option>
              <option>Either</option>
            </select>
          </div>
        </div>

        <label class="flex items-start gap-3 mb-6 cursor-pointer">
          <input type="checkbox" class="mt-0.5 w-4 h-4 accent-primary" />
          <span class="text-xs text-text-secondary leading-relaxed">I authorize AutoDrive to perform a soft credit inquiry for pre-qualification. I agree to the <a href="#" class="text-primary hover:underline">Terms & Conditions</a> and <a href="#" class="text-primary hover:underline">Privacy Policy</a>.</span>
        </label>

        <button class="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded font-extrabold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 text-lg">
          Submit Application
        </button>
        <p class="text-center text-xs text-text-secondary mt-4">Decision within 24 hours · Soft credit pull · No SSN required</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { value: '40+', label: 'Lending Partners' },
  { value: '3.99%', label: 'Starting APR' },
  { value: '24hr', label: 'Decision Time' },
]
useHead({ title: 'Get Pre-Approved – AutoDrive' })
</script>
