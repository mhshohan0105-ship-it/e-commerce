import __nuxt_component_1 from './Icon-D1q9zGdH.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-Cvw9M4qq.mjs';
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
import 'vue-router';
import '@supabase/ssr';

const _sfc_main = {
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const orders = [
      {
        id: "ORD-89241",
        date: "March 14, 2026",
        total: 124.5,
        status: "In Transit",
        items: [{ name: "Premium Cotton T-Shirt" }, { name: "Canvas Sneakers" }]
      },
      {
        id: "ORD-75932",
        date: "February 28, 2026",
        total: 89.99,
        status: "Delivered",
        items: [{ name: "Denim Jacket" }]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12 max-w-4xl" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><aside class="col-span-1"><h2 class="text-2xl font-bold mb-6">My Account</h2><nav class="flex flex-col gap-2"><button class="text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium">Orders</button><button class="text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Profile</button><button class="text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">Addresses</button><button class="text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 mt-4 transition-colors">Logout</button></nav></aside><main class="col-span-3"><div class="bg-white border rounded-2xl p-6 md:p-8"><div class="flex items-center justify-between mb-8"><h3 class="text-xl font-bold">Recent Orders</h3><button class="text-blue-600 text-sm font-medium hover:underline">View All</button></div>`);
      if (orders.length === 0) {
        _push(`<div class="text-center py-12">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:package-open",
          class: "w-12 h-12 text-gray-300 mx-auto mb-4"
        }, null, _parent));
        _push(`<p class="text-gray-500 font-medium">You haven&#39;t placed any orders yet.</p></div>`);
      } else {
        _push(`<div class="space-y-6"><!--[-->`);
        ssrRenderList(orders, (order) => {
          _push(`<div class="border rounded-xl p-6"><div class="flex flex-wrap gap-4 items-center justify-between border-b pb-4 mb-4"><div><p class="text-sm text-gray-500 mb-1">Order Number</p><p class="font-bold">#${ssrInterpolate(order.id)}</p></div><div><p class="text-sm text-gray-500 mb-1">Date placed</p><p class="font-medium">${ssrInterpolate(order.date)}</p></div><div><p class="text-sm text-gray-500 mb-1">Total amount</p><p class="font-medium">$${ssrInterpolate(order.total.toFixed(2))}</p></div><div><span class="${ssrRenderClass([order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700", "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"])}"><span class="${ssrRenderClass([order.status === "Delivered" ? "bg-green-500" : "bg-blue-500", "w-2 h-2 rounded-full"])}"></span> ${ssrInterpolate(order.status)}</span></div></div><div class="flex gap-4 items-center"><div class="w-16 h-16 bg-gray-100 rounded-lg"></div><div><p class="font-medium">${ssrInterpolate(order.items[0].name)}</p>`);
          if (order.items.length > 1) {
            _push(`<p class="text-sm text-gray-500">+ ${ssrInterpolate(order.items.length - 1)} more items</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><button class="ml-auto text-blue-600 font-medium hover:underline text-sm">View Details</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=account-2JykANcj.mjs.map
