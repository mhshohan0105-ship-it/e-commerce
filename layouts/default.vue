<template>
  <div class="min-h-screen flex flex-col bg-background text-text font-sans">
    
    <!-- Top Contact Bar -->
    <div class="bg-topbar py-2 text-sm">
      <div class="container mx-auto px-4 flex justify-between items-center text-text-secondary">
        <div class="flex gap-4">
          <span class="flex items-center gap-1"><Icon name="lucide:map-pin" class="w-4 h-4" /> 123 Auto Drive, NY 10001</span>
          <span class="flex items-center gap-1"><Icon name="lucide:phone" class="w-4 h-4" /> (555) 123-4567</span>
        </div>
        <div class="flex items-center gap-4">
          <span>Sales: Mon-Sat 9am – 8pm</span>
          <NuxtLink to="/auth/login" class="text-xs font-bold text-text-secondary hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1">
            <Icon name="lucide:user" class="w-3 h-3" />Sign In
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <header class="bg-navbar sticky top-0 z-50 shadow-md shadow-black/20 border-b border-white/5">
      <div class="container mx-auto px-4 h-20 flex items-center justify-between">
        <NuxtLink to="/" class="text-3xl font-extrabold tracking-tight text-white uppercase italic">
          Auto<span class="text-primary">Drive</span>
        </NuxtLink>
        
        <nav class="hidden md:flex gap-8 items-center">
          <NuxtLink to="/inventory/new" class="text-sm font-semibold text-text-nav hover:text-white transition-colors uppercase tracking-wide">New Inventory</NuxtLink>
          <NuxtLink to="/inventory/used" class="text-sm font-semibold text-text-nav hover:text-white transition-colors uppercase tracking-wide">Pre-Owned</NuxtLink>
          <NuxtLink to="/finance" class="text-sm font-semibold text-text-nav hover:text-white transition-colors uppercase tracking-wide">Finance</NuxtLink>
          <NuxtLink to="/service" class="text-sm font-semibold text-text-nav hover:text-white transition-colors uppercase tracking-wide">Service</NuxtLink>
          
          <div class="h-6 w-px bg-white/20 mx-2"></div>
          
          <!-- Value Trade Button (Orange Accent) -->
          <NuxtLink to="/trade-in" class="text-sm font-bold text-trade border border-trade px-4 py-2 rounded hover:bg-trade hover:text-white transition-colors uppercase tracking-wide">
            Value Trade
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-5">
          <!-- Search -->
          <NuxtLink to="/search" class="text-text-nav hover:text-white transition-colors" title="Search">
            <Icon name="lucide:search" class="w-5 h-5" />
          </NuxtLink>

          <!-- Account -->
          <NuxtLink to="/account" class="text-text-nav hover:text-white transition-colors hidden md:flex" title="My Account">
            <Icon name="lucide:user-circle" class="w-5 h-5" />
          </NuxtLink>
          
          <!-- Cart with Badge -->
          <NuxtLink to="/cart" class="relative text-text-nav hover:text-white transition-colors" title="Shopping Cart">
            <Icon name="lucide:shopping-cart" class="w-5 h-5" />
            <span
              v-if="cartStore.itemCount > 0"
              class="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center leading-none"
            >{{ cartStore.itemCount }}</span>
          </NuxtLink>
          
          <!-- Primary CTA -->
          <NuxtLink to="/get-approved" class="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded font-bold uppercase tracking-wide transition-colors shadow-lg shadow-primary/20 text-sm hidden md:block">
            Get Approved
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-topbar border-t border-white/10 py-16 mt-20">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
           <NuxtLink to="/" class="text-2xl font-extrabold tracking-tight text-white uppercase italic mb-6 block">
            Auto<span class="text-primary">Drive</span>
          </NuxtLink>
          <p class="text-sm text-text-secondary leading-relaxed">Your premier destination for luxury and performance vehicles. Exceptional service, unmatched selection.</p>
        </div>
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-6">Inventory</h4>
          <ul class="space-y-3 text-sm text-text-secondary">
            <li><NuxtLink to="/inventory/new" class="hover:text-white transition-colors">New Vehicles</NuxtLink></li>
            <li><NuxtLink to="/inventory/used" class="hover:text-white transition-colors">Pre-Owned</NuxtLink></li>
            <li><NuxtLink to="/trade-in" class="hover:text-white transition-colors">Value Your Trade</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-6">Services</h4>
          <ul class="space-y-3 text-sm text-text-secondary">
            <li><NuxtLink to="/finance" class="hover:text-white transition-colors">Finance Center</NuxtLink></li>
            <li><NuxtLink to="/service" class="hover:text-white transition-colors">Schedule Service</NuxtLink></li>
            <li><NuxtLink to="/get-approved" class="hover:text-white transition-colors">Get Pre-Approved</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-6">Account</h4>
          <ul class="space-y-3 text-sm text-text-secondary mb-6">
            <li><NuxtLink to="/auth/login" class="hover:text-white transition-colors">Sign In</NuxtLink></li>
            <li><NuxtLink to="/auth/register" class="hover:text-white transition-colors">Create Account</NuxtLink></li>
            <li><NuxtLink to="/account" class="hover:text-white transition-colors">My Orders</NuxtLink></li>
          </ul>
          <div class="flex gap-3">
            <a href="#" class="w-9 h-9 rounded bg-navbar flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary transition-colors"><Icon name="lucide:facebook" class="w-4 h-4" /></a>
            <a href="#" class="w-9 h-9 rounded bg-navbar flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary transition-colors"><Icon name="lucide:instagram" class="w-4 h-4" /></a>
            <a href="#" class="w-9 h-9 rounded bg-navbar flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary transition-colors"><Icon name="lucide:twitter" class="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 pt-10 mt-10 border-t border-white/5 text-center text-xs text-text-secondary">
        © {{ new Date().getFullYear() }} AutoDrive. All rights reserved. · <a href="#" class="hover:text-white transition-colors">Privacy</a> · <a href="#" class="hover:text-white transition-colors">Terms</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()
</script>
