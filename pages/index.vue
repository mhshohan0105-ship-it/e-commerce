<template>
  <div class="pb-20">
    <!-- Hero Section -->
    <section class="relative h-[85vh] bg-background overflow-hidden flex items-center">
      <!-- Background Image Placeholder (Automotive aesthetic) -->
      <div class="absolute inset-0 bg-topbar opacity-80 z-0"></div>
      
      <!-- Subtle grid/gradient overlay for premium feel -->
      <div class="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
      
      <div class="relative z-20 container mx-auto px-4 w-full flex flex-col justify-center items-start">
        <span class="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm animate-fade-in-up flex items-center gap-2">
          <span class="w-8 h-px bg-primary"></span> New Arrivals
        </span>
        <h1 class="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight uppercase italic max-w-3xl animate-fade-in-up animation-delay-100">
          Command <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">The Road.</span>
        </h1>
        <p class="text-lg md:text-xl text-text-secondary mb-10 max-w-xl animate-fade-in-up animation-delay-200 leading-relaxed font-light">
          Experience uncompromising performance and unmatched luxury. Discover our exclusive collection of premium vehicles tailored for the driven.
        </p>
        <div class="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
          <NuxtLink to="/inventory/new" class="bg-primary text-white border border-primary px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-primary-hover hover:border-primary-hover transition-all shadow-lg shadow-primary/20">
            View Inventory
          </NuxtLink>
          <NuxtLink to="/finance" class="bg-transparent text-white border border-white/30 px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
            Get Pre-Approved
          </NuxtLink>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce flex flex-col items-center gap-2 opacity-50">
        <span class="text-[10px] text-white uppercase tracking-widest font-bold">Scroll</span>
        <Icon name="lucide:arrow-down" class="w-4 h-4 text-white" />
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="container mx-auto px-4 py-24 bg-background border-t border-white/5">
      <div class="flex justify-between items-end mb-12">
        <div>
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Explore</span>
          <h2 class="text-4xl font-extrabold text-white uppercase italic tracking-tight">Categories</h2>
        </div>
        <NuxtLink to="/categories" class="text-text-secondary hover:text-white font-semibold uppercase tracking-wider text-sm flex items-center gap-2 group transition-colors">
          View all 
          <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="category in categories" :key="category.name" class="relative group cursor-pointer overflow-hidden rounded-lg aspect-[16/9] bg-topbar border border-white/5">
          <!-- Background image placeholder -->
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
          
          <div class="absolute inset-0 p-8 z-20 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="text-2xl font-bold text-white mb-2 uppercase tracking-wide">{{ category.name }}</h3>
            <span class="text-primary font-bold uppercase tracking-wider text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              Explore Inventory <Icon name="lucide:chevron-right" class="w-4 h-4" />
            </span>
          </div>
          
          <!-- Decorative accent line -->
          <div class="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Updated dummy data for automotive theme
const categories = [
  { name: 'SUVs & Crossovers' },
  { name: 'Performance Sedans' },
  { name: 'Luxury Trucks' }
]
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
