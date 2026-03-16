import __nuxt_component_1 from "./Icon-D1q9zGdH.js";
import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useCartStore } from "./cart-DdsaQRJs.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-Cvw9M4qq.js";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/klona/dist/index.mjs";
import "../server.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/hookable/dist/index.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/unctx/dist/index.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/ufo/dist/index.mjs";
import "@supabase/ssr";
const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const cartItems = computed(() => {
      return cartStore.items.length > 0 ? cartStore.items : [
        { id: 1, name: "Premium Cotton T-Shirt", category: "Men's Clothing", price: 35, quantity: 2 },
        { id: 4, name: "Canvas Sneakers", category: "Shoes", price: 45, quantity: 1 }
      ];
    });
    const cartTotal = computed(() => {
      return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 max-w-6xl" }, _attrs))}><h1 class="text-3xl font-bold mb-8">Checkout</h1><div class="flex flex-col lg:flex-row gap-12"><div class="lg:w-2/3"><section class="mb-10"><h2 class="text-xl font-bold mb-4">Contact Information</h2><div class="grid gap-4"><input type="email" placeholder="Email Address" class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><label class="flex items-center gap-2 text-sm text-gray-600"><input type="checkbox" class="rounded text-blue-600"> Email me with news and offers </label></div></section><section class="mb-10"><h2 class="text-xl font-bold mb-4">Shipping Address</h2><div class="grid grid-cols-2 gap-4"><input type="text" placeholder="First Name" class="col-span-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><input type="text" placeholder="Last Name" class="col-span-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><input type="text" placeholder="Company (optional)" class="col-span-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><input type="text" placeholder="Address" class="col-span-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><input type="text" placeholder="Apartment, suite, etc. (optional)" class="col-span-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><input type="text" placeholder="City" class="col-span-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"><div class="col-span-1 flex gap-4"><select class="w-1/2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"><option>State</option><option>CA</option><option>NY</option><option>TX</option></select><input type="text" placeholder="ZIP" class="w-1/2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"></div><input type="tel" placeholder="Phone" class="col-span-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"></div></section><section class="mb-10"><h2 class="text-xl font-bold mb-4">Payment</h2><p class="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p><div class="border rounded-lg p-6 bg-gray-50 flex items-center justify-center h-48 border-dashed border-gray-300"><div class="text-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:credit-card",
        class: "w-12 h-12 text-gray-400 mx-auto mb-2"
      }, null, _parent));
      _push(`<p class="text-gray-500 font-medium">Stripe Payment Element will mount here</p></div></div></section><button class="w-full bg-blue-600 text-white rounded-lg py-4 font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"> Pay Now </button></div><div class="lg:w-1/3"><div class="bg-gray-50 rounded-2xl p-6 sticky top-24 border border-gray-100"><h2 class="text-xl font-bold mb-6">Order Summary</h2><div class="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2"><!--[-->`);
      ssrRenderList(cartItems.value, (item) => {
        _push(`<div class="flex gap-4"><div class="relative"><div class="w-16 h-16 bg-white border rounded-lg flex-shrink-0"></div><span class="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">${ssrInterpolate(item.quantity)}</span></div><div class="flex-grow flex justify-between items-center"><div><h4 class="font-medium text-sm">${ssrInterpolate(item.name)}</h4><p class="text-xs text-gray-500">${ssrInterpolate(item.category)}</p></div><span class="font-medium text-sm">$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="border-y py-4 space-y-3 mb-4"><div class="flex justify-between text-sm"><span class="text-gray-600">Subtotal</span><span class="font-medium">$${ssrInterpolate(cartTotal.value.toFixed(2))}</span></div><div class="flex justify-between text-sm"><span class="text-gray-600">Shipping</span><span class="text-green-600 font-medium">Free</span></div><div class="flex justify-between text-sm"><span class="text-gray-600">Estimated Taxes</span><span class="font-medium">$${ssrInterpolate((cartTotal.value * 0.08).toFixed(2))}</span></div></div><div class="flex justify-between items-end mb-6"><span class="text-lg font-bold">Total</span><span class="text-2xl font-bold text-gray-900"><span class="text-sm font-normal text-gray-500 mr-1">USD</span>$${ssrInterpolate((cartTotal.value * 1.08).toFixed(2))}</span></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=checkout-CnnoLsqS.js.map
