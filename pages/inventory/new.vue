<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between mb-12">
        <div>
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Brand New</span>
          <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight">New Inventory</h1>
          <p class="text-text-secondary mt-2">{{ filteredVehicles.length }} vehicles available</p>
        </div>

        <div class="flex gap-3">
          <select v-model="sortBy" class="bg-topbar border border-white/10 rounded px-4 py-2 text-white text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer">
            <option value="featured">Featured</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="year_desc">Newest First</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10">
        <!-- Filters Sidebar -->
        <aside class="w-full md:w-64 flex-shrink-0">
          <div class="bg-topbar border border-white/5 rounded-lg p-6 sticky top-28">
            <h3 class="font-extrabold text-white uppercase tracking-wider text-sm mb-6">Filter By</h3>

            <div class="mb-6">
              <h4 class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Category</h4>
              <div class="space-y-2">
                <label v-for="cat in categories" :key="cat" class="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" v-model="selectedCategories" :value="cat" class="w-4 h-4 rounded bg-background border-white/20 accent-primary" />
                  <span class="text-sm text-text-nav group-hover:text-white transition-colors">{{ cat }}</span>
                </label>
              </div>
            </div>

            <div class="mb-6">
              <h4 class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Price Range</h4>
              <div class="space-y-2">
                <label v-for="range in priceRanges" :key="range.label" class="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" v-model="selectedPrice" :value="range.label" name="price" class="w-4 h-4 bg-background border-white/20 accent-primary" />
                  <span class="text-sm text-text-nav group-hover:text-white transition-colors">{{ range.label }}</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        <!-- Vehicle Grid -->
        <main class="flex-grow">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <NuxtLink
              v-for="vehicle in filteredVehicles"
              :key="vehicle.id"
              :to="`/products/${vehicle.id}`"
              class="bg-topbar border border-white/5 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 group"
            >
              <!-- Image -->
              <div class="aspect-[16/10] bg-background relative flex items-center justify-center overflow-hidden">
                <Icon name="lucide:car" class="w-20 h-20 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-topbar/70 via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider">{{ vehicle.year }}</span>
                  <span class="bg-green-500/10 text-green-400 text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider border border-green-500/20">New</span>
                </div>
                <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button @click.prevent="toggleFav(vehicle.id)" class="p-2 bg-background/80 border border-white/10 rounded">
                    <Icon name="lucide:heart" class="w-4 h-4 text-text-secondary" />
                  </button>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <!-- Info -->
              <div class="p-5">
                <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">{{ vehicle.category }}</p>
                <h3 class="font-extrabold text-lg text-white group-hover:text-primary transition-colors mb-3 uppercase italic tracking-tight">{{ vehicle.name }}</h3>
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-[10px] text-text-secondary uppercase">Engine</p>
                    <p class="text-xs text-white font-semibold">{{ vehicle.specs?.engine || '–' }}</p>
                  </div>
                  <p class="text-primary font-extrabold text-xl">${{ vehicle.price.toLocaleString() }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>

          <div v-if="filteredVehicles.length === 0" class="text-center py-20 bg-topbar border border-white/5 rounded-xl">
            <Icon name="lucide:search-x" class="w-16 h-16 mx-auto text-white/10 mb-4" />
            <p class="text-white font-bold text-xl uppercase italic">No vehicles match your filters</p>
            <button @click="resetFilters" class="mt-6 text-primary font-bold uppercase tracking-wider text-sm hover:text-white transition-colors">Clear Filters</button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductsStore } from '~/stores/products'

const productsStore = useProductsStore()
const allVehicles = computed(() => productsStore.newVehicles)

const selectedCategories = ref([])
const selectedPrice = ref('')
const sortBy = ref('featured')
const categories = ['SUVs & Crossovers', 'Performance Sedans', 'Trucks']
const priceRanges = [
  { label: 'Under $50,000', min: 0, max: 50000 },
  { label: '$50,000 – $80,000', min: 50000, max: 80000 },
  { label: '$80,000 – $110,000', min: 80000, max: 110000 },
  { label: 'Over $110,000', min: 110000, max: Infinity },
]

const filteredVehicles = computed(() => {
  let list = [...allVehicles.value]
  if (selectedCategories.value.length > 0)
    list = list.filter(v => selectedCategories.value.includes(v.category))
  if (selectedPrice.value) {
    const range = priceRanges.find(r => r.label === selectedPrice.value)
    if (range) list = list.filter(v => v.price >= range.min && v.price <= range.max)
  }
  if (sortBy.value === 'price_asc') list.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price_desc') list.sort((a, b) => b.price - a.price)
  if (sortBy.value === 'year_desc') list.sort((a, b) => b.year - a.year)
  return list
})

const resetFilters = () => { selectedCategories.value = []; selectedPrice.value = '' }
const toggleFav = (id) => { /* wishlist logic */ }

useHead({ title: 'New Inventory – AutoDrive' })
</script>
