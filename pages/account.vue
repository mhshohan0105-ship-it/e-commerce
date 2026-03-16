<template>
  <div class="min-h-screen bg-background py-12">
    <div class="container mx-auto px-4 max-w-5xl">

      <!-- Header -->
      <div class="mb-12">
        <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Customer Portal</span>
        <h1 class="text-4xl font-extrabold text-white uppercase italic tracking-tight">My Account</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">

        <!-- Sidebar Nav -->
        <aside class="col-span-1">
          <div class="bg-topbar border border-white/5 rounded-lg p-4 space-y-1 sticky top-28">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              :class="['w-full text-left px-4 py-3 rounded text-sm font-semibold transition-colors flex items-center gap-3 uppercase tracking-wide', activeTab === tab.id ? 'bg-primary text-white' : 'text-text-secondary hover:text-white hover:bg-white/5']"
              @click="activeTab = tab.id"
            >
              <Icon :name="tab.icon" class="w-4 h-4" />
              {{ tab.label }}
            </button>
            <div class="pt-2 border-t border-white/10">
              <button class="w-full text-left px-4 py-3 rounded text-sm font-semibold text-primary hover:bg-primary/10 transition-colors flex items-center gap-3 uppercase tracking-wide">
                <Icon name="lucide:log-out" class="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="col-span-3">

          <!-- Orders Tab -->
          <div v-if="activeTab === 'orders'" class="space-y-5">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-2xl font-extrabold text-white uppercase italic">Order History</h2>
              <span class="text-xs text-text-secondary">{{ orders.length }} orders</span>
            </div>

            <div v-for="order in orders" :key="order.id" class="bg-topbar border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors">
              <div class="flex flex-wrap gap-4 items-center justify-between border-b border-white/10 pb-5 mb-5">
                <div>
                  <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Order Number</p>
                  <p class="font-bold text-white">{{ order.id }}</p>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Date Placed</p>
                  <p class="font-medium text-white">{{ order.date }}</p>
                </div>
                <div>
                  <p class="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-1">Total</p>
                  <p class="font-bold text-primary text-lg">${{ order.total.toLocaleString() }}</p>
                </div>
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider"
                  :class="statusClass(order.status)"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :class="statusDot(order.status)"></span>
                  {{ order.status }}
                </span>
              </div>

              <div class="flex gap-4 items-center">
                <div class="w-16 h-14 bg-background border border-white/5 rounded flex items-center justify-center flex-shrink-0">
                  <Icon name="lucide:car" class="w-6 h-6 text-white/20" />
                </div>
                <div class="flex-grow">
                  <p class="font-semibold text-white">{{ order.items[0].name }}</p>
                  <p class="text-sm text-text-secondary" v-if="order.items.length > 1">+ {{ order.items.length - 1 }} more items</p>
                </div>
                <button class="text-primary font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1">
                  View Details <Icon name="lucide:chevron-right" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Profile Tab -->
          <div v-if="activeTab === 'profile'" class="bg-topbar border border-white/5 rounded-lg p-8">
            <h2 class="text-2xl font-extrabold text-white uppercase italic mb-8">Profile Details</h2>
            <div class="grid grid-cols-2 gap-4">
              <input type="text" value="John" placeholder="First Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="text" value="Driver" placeholder="Last Name" class="bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="email" value="john@example.com" placeholder="Email" class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm transition-colors" />
              <input type="tel" value="(555) 000-1234" placeholder="Phone" class="col-span-2 bg-background border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary text-sm transition-colors" />
              <button class="col-span-2 bg-primary hover:bg-primary-hover text-white py-3 rounded font-bold uppercase tracking-wider transition-colors">Save Changes</button>
            </div>
          </div>

          <!-- Addresses Tab -->
          <div v-if="activeTab === 'addresses'" class="bg-topbar border border-white/5 rounded-lg p-8">
            <h2 class="text-2xl font-extrabold text-white uppercase italic mb-8">Saved Addresses</h2>
            <div class="border border-white/10 rounded-lg p-6 mb-4">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-bold text-white mb-1">John Driver</p>
                  <p class="text-text-secondary text-sm">123 Main Street, New York, NY 10001</p>
                  <span class="text-[10px] text-primary font-bold uppercase tracking-widest mt-2 block">Default Address</span>
                </div>
                <button class="text-text-secondary hover:text-white transition-colors"><Icon name="lucide:pencil" class="w-4 h-4" /></button>
              </div>
            </div>
            <button class="flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors uppercase tracking-wider border border-dashed border-white/20 hover:border-white/40 rounded-lg px-5 py-3 w-full justify-center">
              <Icon name="lucide:plus" class="w-4 h-4" />
              Add New Address
            </button>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('orders')

const tabs = [
  { id: 'orders', label: 'Orders', icon: 'lucide:package' },
  { id: 'profile', label: 'Profile', icon: 'lucide:user' },
  { id: 'addresses', label: 'Addresses', icon: 'lucide:map-pin' },
]

const orders = [
  {
    id: 'ORD-89241',
    date: 'March 14, 2026',
    total: 96323,
    status: 'In Transit',
    items: [{ name: '2026 Phantom GT Sedan' }]
  },
  {
    id: 'ORD-75932',
    date: 'January 10, 2026',
    total: 77490,
    status: 'Delivered',
    items: [{ name: '2025 Grand Summit SUV' }]
  },
  {
    id: 'ORD-61204',
    date: 'October 22, 2025',
    total: 43500,
    status: 'Delivered',
    items: [{ name: '2024 EcoHatch Hybrid' }, { name: 'Floor Mats' }]
  }
]

const statusClass = (status) => {
  if (status === 'Delivered') return 'bg-green-500/10 text-green-400'
  if (status === 'In Transit') return 'bg-blue-500/10 text-blue-400'
  return 'bg-white/5 text-text-secondary'
}
const statusDot = (status) => {
  if (status === 'Delivered') return 'bg-green-400'
  if (status === 'In Transit') return 'bg-blue-400'
  return 'bg-text-secondary'
}

useHead({ title: 'My Account – AutoDrive' })
</script>
