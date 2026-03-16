<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4">
      <!-- Search Header -->
      <div class="max-w-3xl mx-auto mb-12">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Find Your Perfect Vehicle</span>
        <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight mb-8">Search Inventory</h1>
        <div class="relative">
          <input
            type="text"
            v-model="query"
            placeholder="Search by make, model, year..."
            class="w-full bg-topbar border border-white/10 rounded-lg pl-5 pr-14 py-5 text-white placeholder-text-secondary focus:outline-none focus:border-primary text-lg transition-colors"
            @input="doSearch"
            autofocus
          />
          <Icon name="lucide:search" class="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-text-secondary" />
        </div>
      </div>

      <!-- Results -->
      <div class="max-w-5xl mx-auto">
        <div v-if="query.length === 0" class="text-center py-20 text-text-secondary">
          <Icon name="lucide:car" class="w-20 h-20 mx-auto text-white/10 mb-5" />
          <p class="text-lg font-bold text-white uppercase italic">Start typing to search our inventory</p>
          <p class="text-text-secondary text-sm mt-2">Search by make, model, category, or year</p>
        </div>

        <div v-else-if="results.length === 0" class="text-center py-20">
          <Icon name="lucide:search-x" class="w-20 h-20 mx-auto text-white/10 mb-5" />
          <p class="text-2xl font-extrabold text-white uppercase italic">No results for "{{ query }}"</p>
          <p class="text-text-secondary mt-3 mb-8">Try a different search term or browse our full inventory.</p>
          <div class="flex gap-4 justify-center">
            <NuxtLink to="/inventory/new" class="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-bold uppercase tracking-wider transition-colors">New Inventory</NuxtLink>
            <NuxtLink to="/inventory/used" class="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded font-bold uppercase tracking-wider transition-colors">Pre-Owned</NuxtLink>
          </div>
        </div>

        <div v-else>
          <p class="text-text-secondary text-sm mb-6 uppercase tracking-wider">{{ results.length }} result{{ results.length !== 1 ? 's' : '' }} for "<span class="text-white font-semibold">{{ query }}</span>"</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="vehicle in results"
              :key="vehicle.id"
              :to="`/products/${vehicle.id}`"
              class="bg-topbar border border-white/5 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              <div class="aspect-[16/10] bg-background flex items-center justify-center relative">
                <Icon name="lucide:car" class="w-16 h-16 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span class="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">{{ vehicle.year }}</span>
                <span v-if="vehicle.mileage === 0" class="absolute top-3 right-3 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-green-500/20">New</span>
                <span v-else class="absolute top-3 right-3 bg-white/5 text-text-secondary text-[10px] font-bold uppercase px-2 py-0.5 rounded">{{ vehicle.mileage.toLocaleString() }} mi</span>
              </div>
              <div class="p-5">
                <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">{{ vehicle.category }}</p>
                <h3 class="font-extrabold text-white group-hover:text-primary transition-colors uppercase italic tracking-tight">{{ vehicle.name }}</h3>
                <p class="text-primary font-extrabold text-xl mt-3">${{ vehicle.price.toLocaleString() }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductsStore } from '~/stores/products'

const productsStore = useProductsStore()
const query = ref('')

const results = computed(() => {
  if (!query.value.trim()) return []
  const q = query.value.toLowerCase()
  return productsStore.products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    String(p.year).includes(q) ||
    (p.specs?.engine && p.specs.engine.toLowerCase().includes(q))
  )
})

const doSearch = () => {
  // reactive via computed, nothing extra needed
}

useHead({ title: 'Search – AutoDrive' })
</script>
