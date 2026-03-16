<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="mb-12">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Your Selection</span>
        <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight">Shopping Cart</h1>
      </div>

      <div v-if="cartStore.items.length > 0" class="flex flex-col lg:flex-row gap-10">
        <!-- Cart Items -->
        <div class="lg:w-2/3 space-y-4">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="bg-topbar border border-white/5 rounded-lg p-6 flex gap-5 items-center hover:border-white/10 transition-colors group"
          >
            <!-- Vehicle Image Placeholder -->
            <div class="w-28 h-20 bg-background rounded-lg flex-shrink-0 flex items-center justify-center border border-white/5">
              <Icon name="lucide:car" class="w-10 h-10 text-white/10" />
            </div>

            <div class="flex-grow">
              <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">{{ item.category }}</p>
              <h3 class="font-bold text-lg text-white mb-1 group-hover:text-primary transition-colors">{{ item.name }}</h3>
              <p class="text-primary font-bold text-xl">${{ item.price.toLocaleString() }}</p>
            </div>

            <!-- Quantity Controls -->
            <div class="flex items-center gap-3 flex-shrink-0">
              <div class="flex items-center border border-white/10 rounded bg-background overflow-hidden">
                <button
                  class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 transition-colors font-bold"
                  @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                  :disabled="item.quantity <= 1"
                >−</button>
                <span class="px-4 py-2 text-white font-bold min-w-[3rem] text-center border-x border-white/10">{{ item.quantity }}</span>
                <button
                  class="px-3 py-2 text-text-secondary hover:text-white hover:bg-white/5 transition-colors font-bold"
                  @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                >+</button>
              </div>

              <button
                class="p-2 text-text-secondary hover:text-primary transition-colors"
                @click="cartStore.removeFromCart(item.id)"
                title="Remove item"
              >
                <Icon name="lucide:trash-2" class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Continue Shopping -->
          <div class="pt-4">
            <NuxtLink to="/inventory/new" class="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">
              <Icon name="lucide:arrow-left" class="w-4 h-4" />
              Continue Shopping
            </NuxtLink>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:w-1/3">
          <div class="bg-topbar border border-white/5 rounded-lg p-8 sticky top-28">
            <h2 class="text-xl font-extrabold text-white uppercase tracking-wider mb-8">Order Summary</h2>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-text-secondary">Subtotal ({{ cartStore.itemCount }} {{ cartStore.itemCount === 1 ? 'item' : 'items' }})</span>
                <span class="text-white font-semibold">${{ cartStore.cartTotal.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-text-secondary">Documentation Fee</span>
                <span class="text-white font-semibold">$495</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-text-secondary">Transport & Delivery</span>
                <span class="text-white font-semibold">TBD at checkout</span>
              </div>
            </div>

            <div class="border-t border-white/10 pt-6 mb-8">
              <div class="flex justify-between items-center">
                <span class="text-white font-bold text-lg">Estimated Total</span>
                <span class="text-primary font-extrabold text-2xl">${{ (cartStore.cartTotal + 495).toLocaleString() }}</span>
              </div>
            </div>

            <NuxtLink
              to="/checkout"
              class="block w-full bg-primary hover:bg-primary-hover text-white text-center py-4 rounded font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 mb-4"
            >
              Proceed to Checkout
            </NuxtLink>

            <NuxtLink
              to="/get-approved"
              class="block w-full bg-transparent border border-white/20 hover:border-white/40 text-white text-center py-3 rounded font-bold uppercase tracking-wide transition-colors text-sm"
            >
              Apply for Financing
            </NuxtLink>

            <div class="mt-6 pt-6 border-t border-white/5 space-y-3">
              <p class="flex items-center gap-2 text-xs text-text-secondary">
                <Icon name="lucide:shield-check" class="w-4 h-4 text-primary flex-shrink-0" />
                Secure, encrypted checkout
              </p>
              <p class="flex items-center gap-2 text-xs text-text-secondary">
                <Icon name="lucide:percent" class="w-4 h-4 text-primary flex-shrink-0" />
                Competitive financing available
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart State -->
      <div v-else class="text-center py-24 bg-topbar border border-white/5 rounded-xl">
        <Icon name="lucide:shopping-cart" class="w-20 h-20 mx-auto text-white/10 mb-6" />
        <h2 class="text-3xl font-extrabold text-white uppercase italic mb-3">Your cart is empty</h2>
        <p class="text-text-secondary mb-10 text-lg">Find your perfect vehicle and add it to your cart.</p>
        <NuxtLink
          to="/inventory/new"
          class="inline-block bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded font-bold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20"
        >
          Browse Inventory
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()

useHead({ title: 'Shopping Cart – AutoDrive' })
</script>
