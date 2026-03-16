import { _ as __nuxt_component_0 } from './nuxt-link-Bw3tXnRs.mjs';
import __nuxt_component_1 from './Icon-D1q9zGdH.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Cvw9M4qq.mjs';
import 'pinia';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      { name: "Men's Clothing", image: "/images/men.jpg" },
      { name: "Women's Clothing", image: "/images/women.jpg" },
      { name: "Accessories", image: "/images/accessories.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20" }, _attrs))} data-v-411156be><section class="relative h-[80vh] bg-gray-900 overflow-hidden" data-v-411156be><div class="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-900 to-indigo-800" data-v-411156be></div><div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start" data-v-411156be><span class="text-blue-400 font-semibold tracking-wider uppercase mb-4 text-sm animate-fade-in-up" data-v-411156be>New Collection 2026</span><h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-2xl animate-fade-in-up animation-delay-100" data-v-411156be> Elevate your <br data-v-411156be>everyday style. </h1><p class="text-lg text-gray-300 mb-8 max-w-xl animate-fade-in-up animation-delay-200" data-v-411156be> Discover our latest arrivals featuring premium materials and modern silhouettes designed for the contemporary lifestyle. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 animate-fade-in-up animation-delay-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Shop Now `);
          } else {
            return [
              createTextVNode(" Shop Now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="container mx-auto px-4 py-20" data-v-411156be><div class="flex justify-between items-end mb-8" data-v-411156be><h2 class="text-3xl font-bold" data-v-411156be>Featured Categories</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/categories",
        class: "text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View all `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "w-4 h-4 group-hover:translate-x-1 transition-transform"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" View all "),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "w-4 h-4 group-hover:translate-x-1 transition-transform"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-411156be><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<div class="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100" data-v-411156be><div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" data-v-411156be></div><div class="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" data-v-411156be><h3 class="text-2xl font-bold text-white mb-2" data-v-411156be>${ssrInterpolate(category.name)}</h3><span class="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2" data-v-411156be> Explore `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-right",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</span></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-411156be"]]);

export { index as default };
//# sourceMappingURL=index-DihHZLX3.mjs.map
