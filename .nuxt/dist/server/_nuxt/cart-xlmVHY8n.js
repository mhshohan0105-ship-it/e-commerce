import __nuxt_component_1 from "./Icon-D1q9zGdH.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bw3tXnRs.js";
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartItems = ref([
      { id: 1, name: "Premium Cotton T-Shirt", category: "Men's Clothing", price: 35, quantity: 2 },
      { id: 2, name: "Minimalist Watch", category: "Accessories", price: 120, quantity: 1 }
    ]);
    const subtotal = computed(() => {
      return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 max-w-4xl" }, _attrs))}><h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>`);
      if (cartItems.value.length > 0) {
        _push(`<div class="flex flex-col md:flex-row gap-8"><div class="md:w-2/3"><!--[-->`);
        ssrRenderList(cartItems.value, (item) => {
          _push(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4"><div class="flex items-center gap-4"><div class="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0"></div><div class="flex-grow"><h3 class="font-semibold text-lg">${ssrInterpolate(item.name)}</h3><p class="text-gray-500 text-sm mb-2">${ssrInterpolate(item.category)}</p><div class="flex items-center justify-between"><span class="font-bold">$${ssrInterpolate(item.price.toFixed(2))}</span><div class="flex items-center border rounded-md"><button class="px-3 py-1 hover:bg-gray-50">-</button><span class="px-3 py-1 border-x text-sm">${ssrInterpolate(item.quantity)}</span><button class="px-3 py-1 hover:bg-gray-50">+</button></div></div></div><button class="text-gray-400 hover:text-red-500 p-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:trash-2",
            class: "w-5 h-5"
          }, null, _parent));
          _push(`</button></div></div>`);
        });
        _push(`<!--]--></div><div class="md:w-1/3"><div class="bg-gray-50 rounded-xl p-6 sticky top-24"><h2 class="text-xl font-bold mb-4">Order Summary</h2><div class="space-y-3 text-sm mb-4"><div class="flex justify-between"><span class="text-gray-600">Subtotal</span><span class="font-semibold">$${ssrInterpolate(subtotal.value.toFixed(2))}</span></div><div class="flex justify-between"><span class="text-gray-600">Shipping</span><span class="font-semibold">Calculated at checkout</span></div></div><div class="border-t pt-4 mb-6"><div class="flex justify-between items-center text-lg"><span class="font-bold">Total</span><span class="font-bold">$${ssrInterpolate(subtotal.value.toFixed(2))}</span></div></div><button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"> Proceed to Checkout </button></div></div></div>`);
      } else {
        _push(`<div class="text-center py-20 bg-gray-50 rounded-2xl">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:shopping-cart",
          class: "w-16 h-16 mx-auto text-gray-300 mb-4"
        }, null, _parent));
        _push(`<h2 class="text-2xl font-bold mb-2">Your cart is empty</h2><p class="text-gray-500 mb-6">Looks like you haven&#39;t added any items yet.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Start Shopping `);
            } else {
              return [
                createTextVNode(" Start Shopping ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=cart-xlmVHY8n.js.map
