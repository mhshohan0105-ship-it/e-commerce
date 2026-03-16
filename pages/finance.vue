<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Banner -->
    <section class="bg-topbar border-b border-white/5 py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Drive Today, Pay Tomorrow</span>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white uppercase italic tracking-tight mb-4">Finance Center</h1>
        <p class="text-text-secondary text-lg max-w-2xl mx-auto">Competitive rates, flexible terms, and quick approvals. Your dream car is closer than you think.</p>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div v-for="benefit in benefits" :key="benefit.title" class="bg-topbar border border-white/5 rounded-lg p-8 text-center group hover:border-primary/30 transition-colors">
            <div class="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <Icon :name="benefit.icon" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="font-extrabold text-white uppercase tracking-wide text-lg mb-3">{{ benefit.title }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed">{{ benefit.desc }}</p>
          </div>
        </div>

        <!-- Finance Form -->
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-10">
            <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Quick &amp; Easy</span>
            <h2 class="text-3xl font-extrabold text-white uppercase italic tracking-tight">Get Pre-Qualified</h2>
          </div>

          <div class="bg-topbar border border-white/5 rounded-xl p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="First Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="text" placeholder="Last Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="email" placeholder="Email Address" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="tel" placeholder="Phone Number" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="text" placeholder="Annual Income" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm transition-colors appearance-none">
                <option value="">Employment Status</option>
                <option>Full-time Employed</option>
                <option>Self-Employed</option>
                <option>Part-time</option>
                <option>Retired</option>
              </select>
              <select class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm transition-colors appearance-none md:col-span-2">
                <option value="">Desired Loan Term</option>
                <option>24 months</option>
                <option>36 months</option>
                <option>48 months</option>
                <option>60 months</option>
                <option>72 months</option>
              </select>
              <input type="number" placeholder="Down Payment ($)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="number" placeholder="Vehicle Budget ($)" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors" />
              <textarea rows="3" placeholder="Additional information or questions..." class="md:col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-sm transition-colors resize-none"></textarea>
            </div>
            <label class="flex items-start gap-3 mt-5 mb-6 cursor-pointer">
              <input type="checkbox" class="mt-0.5 w-4 h-4 accent-primary" />
              <span class="text-xs text-text-secondary leading-relaxed">I agree to the <a href="#" class="text-primary hover:underline">Terms & Conditions</a> and consent to a soft credit inquiry for pre-qualification purposes. This will not affect your credit score.</span>
            </label>
            <button class="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded font-extrabold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20">
              Submit Pre-Qualification Application
            </button>
            <p class="text-center text-xs text-text-secondary mt-4">Response within 24 hours. Soft pull only — no impact to your credit score.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const benefits = [
  { icon: 'lucide:percent', title: 'Low APR Rates', desc: 'Rates starting from 3.99% APR. We work with 40+ lending partners to secure the best deal for you.' },
  { icon: 'lucide:shield-check', title: 'Secure Process', desc: 'Your data is protected with bank-level encryption. We never sell your personal information.' },
  { icon: 'lucide:clock', title: 'Fast Approval', desc: 'Get a financing decision in as little as 24 hours. Drive home in your new vehicle this week.' },
]
useHead({ title: 'Finance Center – AutoDrive' })
</script>
