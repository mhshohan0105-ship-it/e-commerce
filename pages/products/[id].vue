<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4 max-w-6xl">

      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-text-secondary text-xs uppercase tracking-widest mb-10">
        <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3 h-3" />
        <NuxtLink :to="`/inventory/${categorySlug}`" class="hover:text-white transition-colors">{{ product.category }}</NuxtLink>
        <Icon name="lucide:chevron-right" class="w-3 h-3" />
        <span class="text-white">{{ product.name }}</span>
      </nav>

      <div class="flex flex-col lg:flex-row gap-12">

        <!-- Vehicle Image Gallery -->
        <div class="lg:w-1/2">
          <div class="aspect-[16/10] bg-topbar border border-white/5 rounded-lg overflow-hidden relative flex items-center justify-center mb-4">
            <Icon name="lucide:car" class="w-32 h-32 text-white/5" />
            <div class="absolute inset-0 bg-gradient-to-t from-topbar/80 via-transparent to-transparent"></div>
            <!-- Year / New Badge -->
            <div class="absolute top-5 left-5 flex gap-2">
              <span class="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded tracking-wider">{{ product.year }}</span>
              <span v-if="product.mileage === 0" class="bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase px-3 py-1 rounded tracking-wider">New</span>
              <span v-else class="bg-white/5 text-text-secondary text-xs font-bold uppercase px-3 py-1 rounded tracking-wider">{{ product.mileage.toLocaleString() }} mi</span>
            </div>
          </div>
          <!-- Thumbnail strip -->
          <div class="grid grid-cols-4 gap-3">
            <div v-for="i in 4" :key="i" :class="['aspect-video bg-topbar border rounded overflow-hidden flex items-center justify-center cursor-pointer transition-colors', i === 1 ? 'border-primary' : 'border-white/5 hover:border-white/20']">
              <Icon name="lucide:image" class="w-5 h-5 text-white/20" />
            </div>
          </div>
        </div>

        <!-- Vehicle Details Panel -->
        <div class="lg:w-1/2">
          <p class="text-[10px] font-bold text-text-secondary uppercase tracking-[0.25em] mb-2">{{ product.category }}</p>
          <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight mb-4">{{ product.name }}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-3 mb-6">
            <div class="flex text-primary">
              <Icon name="lucide:star" class="w-4 h-4 fill-current" v-for="i in 5" :key="i" />
            </div>
            <span class="text-xs text-text-secondary">(42 reviews)</span>
            <span class="text-xs text-green-400 font-bold flex items-center gap-1">
              <Icon name="lucide:check-circle" class="w-3 h-3" />
              Available Now
            </span>
          </div>

          <!-- Price -->
          <div class="bg-topbar border border-white/5 rounded-lg px-6 py-5 mb-6">
            <p class="text-xs text-text-secondary uppercase tracking-widest mb-1">MSRP Starting At</p>
            <p class="text-4xl font-extrabold text-primary mb-1">${{ product.price.toLocaleString() }}</p>
            <p class="text-xs text-text-secondary">Est. ${{ Math.round(product.price / 72).toLocaleString() }}/mo with financing</p>
          </div>

          <!-- Description -->
          <p class="text-text-secondary leading-relaxed mb-8 text-sm">{{ product.description }}</p>

          <!-- Key Specs -->
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div v-for="(val, key) in product.specs" :key="key" class="bg-topbar border border-white/5 rounded-lg p-4">
              <p class="text-[10px] text-text-secondary uppercase tracking-widest mb-1">{{ key }}</p>
              <p class="text-white font-bold text-sm">{{ val }}</p>
            </div>
          </div>

          <!-- Color Selection -->
          <div class="mb-8">
            <p class="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">Exterior Color</p>
            <div class="flex gap-3">
              <button v-for="color in colors" :key="color.name"
                :class="['w-8 h-8 rounded-full border-2 transition-all', selectedColor === color.name ? 'border-primary scale-125' : 'border-transparent hover:scale-110']"
                :style="{background: color.hex}"
                @click="selectedColor = color.name"
                :title="color.name"
              ></button>
            </div>
            <p class="text-xs text-text-secondary mt-2">{{ selectedColor }}</p>
          </div>

          <!-- Actions -->
          <div class="flex gap-3 mb-6">
            <button
              class="flex-grow bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              @click="addToCart"
            >
              <Icon name="lucide:shopping-cart" class="w-5 h-5" />
              {{ added ? 'Added!' : 'Add to Cart' }}
            </button>
            <button
              class="w-14 h-14 border border-white/10 rounded flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-colors"
              @click="toggleFavorite"
            >
              <Icon :name="isFavorite ? 'lucide:heart' : 'lucide:heart'" :class="isFavorite ? 'fill-primary text-primary' : ''" class="w-6 h-6" />
            </button>
          </div>

          <NuxtLink to="/get-approved" class="block w-full border border-trade text-trade hover:bg-trade hover:text-white text-center py-3 rounded font-bold uppercase tracking-wider transition-colors text-sm">
            Apply for Financing
          </NuxtLink>

          <!-- Info Bullets -->
          <div class="mt-8 pt-6 border-t border-white/10 space-y-3">
            <p class="flex items-center gap-3 text-xs text-text-secondary">
              <Icon name="lucide:truck" class="w-4 h-4 text-primary flex-shrink-0" />
              Free nationwide transport delivery
            </p>
            <p class="flex items-center gap-3 text-xs text-text-secondary">
              <Icon name="lucide:shield-check" class="w-4 h-4 text-primary flex-shrink-0" />
              3-year / 36,000-mile bumper-to-bumper warranty
            </p>
            <p class="flex items-center gap-3 text-xs text-text-secondary">
              <Icon name="lucide:rotate-ccw" class="w-4 h-4 text-primary flex-shrink-0" />
              7-day / 500-mile return guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const found = productsStore.getProductById(route.params.id)
const product = found || {
  id: route.params.id,
  name: '2026 Phantom GT Sedan',
  category: 'Performance Sedans',
  year: 2026,
  mileage: 0,
  price: 95000,
  description: 'A breathtaking grand tourer with a supercharged V8 and hand-stitched leather interior.',
  specs: { Engine: '5.0L Supercharged V8', Horsepower: '620 hp', Torque: '580 lb-ft', Transmission: '8-Speed Auto' }
}

const colors = [
  { name: 'Midnight Black', hex: '#111' },
  { name: 'Pearl White', hex: '#f5f5f5' },
  { name: 'Racing Red', hex: '#e8291c' },
  { name: 'Gunmetal Grey', hex: '#4a5568' },
  { name: 'Sapphire Blue', hex: '#1e40af' },
]
const selectedColor = ref(colors[0].name)
const isFavorite = ref(false)
const added = ref(false)

const categorySlug = computed(() => product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'))

const toggleFavorite = () => { isFavorite.value = !isFavorite.value }
const addToCart = () => {
  cartStore.addToCart(product)
  added.value = true
  setTimeout(() => { added.value = false }, 2000)
}

useHead({ title: `${product.name} – AutoDrive` })
</script>
