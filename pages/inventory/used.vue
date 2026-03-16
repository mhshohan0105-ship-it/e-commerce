<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between mb-12">
        <div>
          <span class="text-trade font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Great Value</span>
          <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight">Pre-Owned Vehicles</h1>
          <p class="text-text-secondary mt-2">{{ vehicles.length }} certified vehicles available</p>
        </div>
        <div class="flex gap-3">
          <select v-model="sortBy" class="bg-topbar border border-white/10 rounded px-4 py-2 text-white text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer">
            <option value="featured">Featured</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="mileage_asc">Lowest Mileage</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10">
        <!-- Sidebar -->
        <aside class="w-full md:w-64 flex-shrink-0">
          <div class="bg-topbar border border-white/5 rounded-lg p-6 sticky top-28">
            <h3 class="font-extrabold text-white uppercase tracking-wider text-sm mb-6">Filter By</h3>
            <div class="mb-6">
              <h4 class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Mileage</h4>
              <div class="space-y-2">
                <label v-for="range in mileageRanges" :key="range.label" class="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" v-model="selectedMileage" :value="range.label" name="mileage" class="w-4 h-4 accent-trade" />
                  <span class="text-sm text-text-nav group-hover:text-white transition-colors">{{ range.label }}</span>
                </label>
              </div>
            </div>
            <div>
              <h4 class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-3">Price Range</h4>
              <div class="space-y-2">
                <label v-for="range in priceRanges" :key="range.label" class="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" v-model="selectedPrice" :value="range.label" name="price_used" class="w-4 h-4 accent-trade" />
                  <span class="text-sm text-text-nav group-hover:text-white transition-colors">{{ range.label }}</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        <!-- Grid -->
        <main class="flex-grow">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <NuxtLink
              v-for="vehicle in vehicles"
              :key="vehicle.id"
              :to="`/products/${vehicle.id}`"
              class="bg-topbar border border-white/5 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 group"
            >
              <div class="aspect-[16/10] bg-background relative flex items-center justify-center overflow-hidden">
                <Icon name="lucide:car" class="w-20 h-20 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-topbar/70 via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-trade/10 text-trade text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider border border-trade/20">{{ vehicle.year }}</span>
                  <span class="bg-white/5 text-text-secondary text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider">{{ vehicle.mileage.toLocaleString() }} mi</span>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-1 bg-trade scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              <div class="p-5">
                <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">{{ vehicle.category }}</p>
                <h3 class="font-extrabold text-lg text-white group-hover:text-trade transition-colors mb-3 uppercase italic tracking-tight">{{ vehicle.name }}</h3>
                <div class="flex justify-between items-center pt-3 border-t border-white/10">
                  <div class="flex items-center gap-1.5 text-xs text-text-secondary">
                    <Icon name="lucide:gauge" class="w-3 h-3" />
                    {{ vehicle.mileage.toLocaleString() }} miles
                  </div>
                  <p class="text-trade font-extrabold text-xl">${{ vehicle.price.toLocaleString() }}</p>
                </div>
              </div>
            </NuxtLink>
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
const sortBy = ref('featured')
const selectedMileage = ref('')
const selectedPrice = ref('')

const mileageRanges = [
  { label: 'Under 10,000 mi', max: 10000 },
  { label: '10,000 – 20,000 mi', min: 10000, max: 20000 },
  { label: 'Over 20,000 mi', min: 20000 },
]
const priceRanges = [
  { label: 'Under $40,000' },
  { label: '$40,000 – $70,000' },
  { label: 'Over $70,000' },
]

const vehicles = computed(() => {
  let list = [...productsStore.usedVehicles]
  if (sortBy.value === 'price_asc') list.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price_desc') list.sort((a, b) => b.price - a.price)
  if (sortBy.value === 'mileage_asc') list.sort((a, b) => a.mileage - b.mileage)
  return list
})

useHead({ title: 'Pre-Owned Inventory – AutoDrive' })
</script>
