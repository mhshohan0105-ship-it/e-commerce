<template>
  <div class="container mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row gap-12">
      <!-- Sidebar Filters -->
      <aside class="w-full md:w-64 flex-shrink-0">
        <h2 class="font-extrabold text-xl mb-6 uppercase tracking-wider text-white border-b border-white/10 pb-4">Filters</h2>
        
        <div class="mb-8">
          <h3 class="font-bold text-sm text-text-secondary uppercase tracking-widest mb-4">Price Range</h3>
          <div class="space-y-3">
            <label class="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" class="w-4 h-4 rounded bg-background border-white/20 text-primary focus:ring-primary focus:ring-offset-background">
              <span class="text-sm text-text-nav group-hover:text-white transition-colors">Under $50,000</span>
            </label>
            <label class="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" class="w-4 h-4 rounded bg-background border-white/20 text-primary focus:ring-primary focus:ring-offset-background">
              <span class="text-sm text-text-nav group-hover:text-white transition-colors">$50,000 - $100,000</span>
            </label>
            <label class="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" class="w-4 h-4 rounded bg-background border-white/20 text-primary focus:ring-primary focus:ring-offset-background">
              <span class="text-sm text-text-nav group-hover:text-white transition-colors">Over $100,000</span>
            </label>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="font-bold text-sm text-text-secondary uppercase tracking-widest mb-4">Sort By</h3>
          <select class="w-full p-3 border border-white/10 rounded bg-topbar text-white text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
            <option>Featured Inventory</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </aside>

      <!-- Product Grid -->
      <main class="flex-grow">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <h1 class="text-3xl font-extrabold text-white uppercase italic tracking-tight">{{ slug }}</h1>
          <span class="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded">{{ products.length }} Vehicles</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug || 'Category'

// Dummy product data
const products = [
  { id: 1, name: '2026 Elite Sedan', category: 'Performance', price: 65000 },
  { id: 2, name: '2025 Grand SUV', category: 'SUVs', price: 89990 },
  { id: 3, name: 'EcoHatch Hybrid', category: 'Compact', price: 34500 },
  { id: 4, name: 'V8 Muscle Coupe', category: 'Performance', price: 72000 },
  { id: 5, name: 'Luxury Touring', category: 'Sedan', price: 95000 },
  { id: 6, name: 'All-Terrain 4x4', category: 'Trucks', price: 62000 }
]
</script>
