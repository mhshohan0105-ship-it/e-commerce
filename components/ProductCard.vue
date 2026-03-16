<template>
  <NuxtLink :to="`/products/${product.id}`" class="group block bg-topbar border border-white/5 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl">
    <div class="aspect-[16/9] relative overflow-hidden bg-[#0f1117] flex items-center justify-center p-8">
      <!-- Dark theme image placeholder -->
      <Icon name="lucide:car" class="w-20 h-20 text-white/5 group-hover:scale-110 transition-transform duration-700" />
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-topbar via-transparent to-transparent opacity-80 z-10"></div>
      
      <!-- Quick Actions -->
      <button class="absolute top-4 right-4 p-2 bg-background border border-white/10 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary z-20" @click.prevent="toggleFavorite">
        <Icon :name="isFavorite ? 'lucide:heart' : 'lucide:heart'" class="w-4 h-4" :class="isFavorite ? 'fill-primary text-primary' : 'text-text-secondary hover:text-white'" />
      </button>
      
      <!-- Status Badge -->
      <div class="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded z-20">
        In Stock
      </div>
    </div>
    
    <div class="p-5">
      <div class="flex justify-between items-start mb-2">
        <div>
          <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">{{ product.category }}</p>
          <h3 class="font-bold text-lg text-white group-hover:text-primary transition-colors leading-tight">{{ product.name }}</h3>
        </div>
      </div>
      
      <div class="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
        <p class="text-white font-bold text-xl">${{ typeof product.price === 'number' ? product.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : product.price }}</p>
        <button class="text-xs font-bold uppercase tracking-wider text-text-secondary group-hover:text-white flex items-center gap-1 transition-colors" @click.prevent="addToCart">
          Details <Icon name="lucide:chevron-right" class="w-3 h-3" />
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const isFavorite = ref(false)

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const addToCart = () => {
  cartStore.addToCart(props.product)
  // could emit a global event or toast notification here
}
</script>
