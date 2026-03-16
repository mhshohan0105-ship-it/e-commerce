import { _ as __nuxt_component_0 } from "./nuxt-link-Bw3tXnRs.js";
import __nuxt_component_1 from "./Icon-D1q9zGdH.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/ufo/dist/index.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/defu/dist/defu.mjs";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./index-Cvw9M4qq.js";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/klona/dist/index.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/hookable/dist/index.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/unctx/dist/index.mjs";
import "C:/Users/m.shohan/Downloads/e-commerce/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "@supabase/ssr";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-gray-50 text-gray-900" }, _attrs))}><header class="bg-white sticky top-0 z-50 shadow-sm"><div class="container mx-auto px-4 h-16 flex items-center justify-between">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-2xl font-bold tracking-tighter text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ShopX`);
      } else {
        return [
          createTextVNode("ShopX")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="hidden md:flex gap-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/categories/men",
    class: "text-sm font-medium hover:text-blue-600 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Men`);
      } else {
        return [
          createTextVNode("Men")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/categories/women",
    class: "text-sm font-medium hover:text-blue-600 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Women`);
      } else {
        return [
          createTextVNode("Women")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/categories/electronics",
    class: "text-sm font-medium hover:text-blue-600 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Electronics`);
      } else {
        return [
          createTextVNode("Electronics")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><div class="flex items-center gap-4"><button class="p-2 hover:bg-gray-100 rounded-full transition-colors">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:search",
    class: "w-5 h-5"
  }, null, _parent));
  _push(`</button>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/cart",
    class: "p-2 hover:bg-gray-100 rounded-full transition-colors relative"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:shopping-bag",
          class: "w-5 h-5"
        }, null, _parent2, _scopeId));
        _push2(`<span class="absolute top-1 right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"${_scopeId}>0</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "lucide:shopping-bag",
            class: "w-5 h-5"
          }),
          createVNode("span", { class: "absolute top-1 right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold" }, "0")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/account",
    class: "p-2 hover:bg-gray-100 rounded-full transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:user",
          class: "w-5 h-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "lucide:user",
            class: "w-5 h-5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></header><main class="flex-grow">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="bg-white border-t py-12"><div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 class="text-lg font-bold mb-4 text-blue-600">ShopX</h3><p class="text-sm text-gray-500">The best premium products for your lifestyle. Shop with confidence.</p></div><div><h4 class="font-semibold mb-4">Shop</h4><ul class="space-y-2 text-sm text-gray-500"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`All Products`);
      } else {
        return [
          createTextVNode("All Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`New Arrivals`);
      } else {
        return [
          createTextVNode("New Arrivals")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sale`);
      } else {
        return [
          createTextVNode("Sale")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h4 class="font-semibold mb-4">Support</h4><ul class="space-y-2 text-sm text-gray-500"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shipping &amp; Returns`);
      } else {
        return [
          createTextVNode("Shipping & Returns")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "hover:text-blue-600"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div><h4 class="font-semibold mb-4">Newsletter</h4><p class="text-sm text-gray-500 mb-2">Subscribe for early access to sales and new drops.</p><div class="flex gap-2"><input type="email" placeholder="Your email" class="px-3 py-2 border rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Subscribe</button></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-BtsAAoOa.js.map
