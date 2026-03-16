<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="mb-12">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Finalize Your Purchase</span>
        <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight">Checkout</h1>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Checkout Form -->
        <div class="lg:w-3/5 space-y-10">

          <!-- Contact Info -->
          <section class="bg-topbar border border-white/5 rounded-lg p-8">
            <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">1</span>
              Contact Information
            </h2>
            <div class="grid gap-4">
              <input type="email" placeholder="Email Address" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
              <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
                <input type="text" placeholder="Last Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
              <input type="tel" placeholder="Phone Number" class="w-full bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
            </div>
          </section>

          <!-- Shipping Address -->
          <section class="bg-topbar border border-white/5 rounded-lg p-8">
            <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">2</span>
              Delivery Address
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Street Address" class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
              <input type="text" placeholder="Apt / Suite (optional)" class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
              <input type="text" placeholder="City" class="bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
              <div class="flex gap-3">
                <select class="w-1/2 bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none">
                  <option value="">State</option>
                  <option>CA</option><option>NY</option><option>TX</option><option>FL</option><option>IL</option>
                </select>
                <input type="text" placeholder="ZIP" class="w-1/2 bg-background border border-white/10 rounded px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
            </div>
          </section>

          <!-- Payment -->
          <section class="bg-topbar border border-white/5 rounded-lg p-8">
            <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-2 flex items-center gap-3">
              <span class="w-8 h-8 rounded bg-primary text-white text-xs font-bold flex items-center justify-center">3</span>
              Payment Method
            </h2>
            <p class="text-xs text-text-secondary mb-6 ml-11">All transactions are secured with 256-bit SSL encryption.</p>

            <div class="flex gap-3 mb-6">
              <button
                v-for="method in paymentMethods"
                :key="method.id"
                :class="['flex items-center gap-2 px-4 py-2 rounded border text-sm font-semibold transition-colors', selectedPayment === method.id ? 'border-primary bg-primary/10 text-white' : 'border-white/10 text-text-secondary hover:border-white/30 hover:text-white']"
                @click="selectedPayment = method.id"
              >
                <Icon :name="method.icon" class="w-4 h-4" />
                {{ method.label }}
              </button>
            </div>

            <div class="border border-white/10 rounded bg-background p-6 flex items-center justify-center h-36 border-dashed">
              <div class="text-center">
                <Icon name="lucide:credit-card" class="w-10 h-10 text-white/20 mx-auto mb-2" />
                <p class="text-text-secondary text-sm font-medium">Stripe Payment will mount here</p>
                <p class="text-text-secondary text-xs mt-1">Accepts Visa, Mastercard, Amex</p>
              </div>
            </div>
          </section>

          <button
            class="w-full bg-primary hover:bg-primary-hover text-white rounded py-5 font-extrabold uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 text-lg"
            @click="placeOrder"
          >
            Confirm & Place Order
          </button>
        </div>

        <!-- Order Summary Sidebar -->
        <div class="lg:w-2/5">
          <div class="bg-topbar border border-white/5 rounded-lg p-8 sticky top-28">
            <h2 class="text-lg font-extrabold text-white uppercase tracking-wider mb-6">Order Review</h2>

            <div class="space-y-4 mb-6 max-h-[35vh] overflow-y-auto pr-2">
              <div v-for="item in cartItems" :key="item.id" class="flex gap-4 items-center">
                <div class="relative flex-shrink-0">
                  <div class="w-16 h-14 bg-background border border-white/5 rounded-lg flex items-center justify-center">
                    <Icon name="lucide:car" class="w-6 h-6 text-white/20" />
                  </div>
                  <span class="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">{{ item.quantity }}</span>
                </div>
                <div class="flex-grow">
                  <p class="text-[10px] text-text-secondary uppercase tracking-widest">{{ item.category }}</p>
                  <h4 class="font-semibold text-white text-sm">{{ item.name }}</h4>
                </div>
                <span class="font-bold text-white text-sm">${{ (item.price * item.quantity).toLocaleString() }}</span>
              </div>
            </div>

            <div class="border-t border-white/10 py-5 space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-text-secondary">Subtotal</span>
                <span class="text-white font-semibold">${{ cartTotal.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-text-secondary">Documentation Fee</span>
                <span class="text-white font-semibold">$495</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-text-secondary">Estimated Tax (8%)</span>
                <span class="text-white font-semibold">${{ Math.round(cartTotal * 0.08).toLocaleString() }}</span>
              </div>
            </div>

            <div class="border-t border-white/10 pt-5">
              <div class="flex justify-between items-center">
                <span class="text-white font-bold text-lg">Total Due</span>
                <span class="text-primary font-extrabold text-2xl">
                  ${{ Math.round((cartTotal + 495) * 1.08).toLocaleString() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const selectedPayment = ref('card')
const paymentMethods = [
  { id: 'card', label: 'Credit Card', icon: 'lucide:credit-card' },
  { id: 'finance', label: 'Finance', icon: 'lucide:building-2' },
  { id: 'cash', label: 'Cash', icon: 'lucide:banknote' },
]

const cartItems = computed(() => cartStore.items.length > 0 ? cartStore.items : [
  { id: 1, name: '2026 Phantom GT Sedan', category: 'Performance Sedans', price: 95000, quantity: 1 },
])

const cartTotal = computed(() => cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0))

const placeOrder = () => {
  cartStore.clearCart()
  router.push('/order-confirmation')
}

useHead({ title: 'Checkout – AutoDrive' })
</script>
