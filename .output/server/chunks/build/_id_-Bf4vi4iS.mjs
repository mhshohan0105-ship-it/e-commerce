import { _ as __nuxt_component_0 } from './nuxt-link-Bw3tXnRs.mjs';
import __nuxt_component_1 from './Icon-D1q9zGdH.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import 'pinia';
import '@supabase/ssr';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Cvw9M4qq.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const quantity = ref(1);
    const product = {
      id: route.params.id,
      name: "Premium Cotton T-Shirt",
      category: "Men's Clothing",
      price: 35,
      description: "Elevate your everyday basics with this ultra-soft, premium cotton t-shirt. Designed for a tailored yet relaxed fit, it features a classic crew neck and durable stitching that holds up season after season. Perfect for layering or wearing solo."
    };
    const categorySlug = computed(() => {
      return product.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 max-w-6xl" }, _attrs))}><div class="mb-4 text-sm text-gray-500">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/categories/` + categorySlug.value,
        class: "hover:text-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(product.category)}`);
          } else {
            return [
              createTextVNode(toDisplayString(product.category), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` / <span class="text-gray-900">${ssrInterpolate(product.name)}</span></div><div class="flex flex-col md:flex-row gap-12"><div class="md:w-1/2 flex gap-4"><div class="flex flex-col gap-4 w-20 flex-shrink-0"><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<button class="w-full aspect-[3/4] bg-gray-100 rounded-md overflow-hidden hover:ring-2 ring-blue-600 transition-all"></button>`);
      });
      _push(`<!--]--></div><div class="flex-grow aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden relative"><div class="absolute inset-0 flex items-center justify-center text-gray-400">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:image",
        class: "w-16 h-16 opacity-50"
      }, null, _parent));
      _push(`</div></div></div><div class="md:w-1/2 flex flex-col justify-center"><h1 class="text-4xl font-bold text-gray-900 mb-2">${ssrInterpolate(product.name)}</h1><div class="flex items-center gap-4 mb-6"><div class="flex items-center text-yellow-400"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:star",
          class: "w-5 h-5 fill-current",
          key: i
        }, null, _parent));
      });
      _push(`<!--]--></div><span class="text-sm text-gray-500">(128 Reviews)</span></div><p class="text-3xl font-semibold mb-6">$${ssrInterpolate(product.price.toFixed(2))}</p><p class="text-gray-600 mb-8 leading-relaxed">${ssrInterpolate(product.description)}</p><div class="mb-8"><h3 class="font-medium mb-3">Size</h3><div class="flex gap-3"><!--[-->`);
      ssrRenderList(["S", "M", "L", "XL"], (size) => {
        _push(`<button class="w-12 h-12 border rounded-md flex items-center justify-center font-medium hover:border-black transition-colors focus:ring-2 focus:ring-black">${ssrInterpolate(size)}</button>`);
      });
      _push(`<!--]--></div></div><div class="mb-8"><h3 class="font-medium mb-3">Color</h3><div class="flex gap-3"><button class="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 transition-shadow"></button><button class="w-8 h-8 rounded-full bg-white border ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 transition-shadow"></button><button class="w-8 h-8 rounded-full bg-blue-900 ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 transition-shadow"></button></div></div><div class="flex gap-4 mb-8"><div class="flex items-center border rounded-lg h-14 w-32 justify-between px-4"><button class="text-xl font-medium hover:text-blue-600 transition-colors">-</button><span class="font-semibold">${ssrInterpolate(quantity.value)}</span><button class="text-xl font-medium hover:text-blue-600 transition-colors">+</button></div><button class="flex-grow bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-14 font-semibold text-lg transition-colors flex items-center justify-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shopping-bag",
        class: "w-5 h-5"
      }, null, _parent));
      _push(` Add to Cart </button><button class="w-14 h-14 border rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600 hover:text-red-500">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:heart",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></div><div class="border-t pt-6 text-sm text-gray-500 space-y-3"><p class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:truck",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Free shipping on orders over $100</p><p class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:rotate-ccw",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` 30-day return policy</p><p class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-check",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Secure checkout</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Bf4vi4iS.mjs.map
