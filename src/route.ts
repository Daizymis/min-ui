/* eslint-disable prettier/prettier */
import { createRouter, createWebHashHistory, RouterOptions } from "vue-router";

const routes = [
  {
    title: "文档",
    path: "/",
    redirect: "/doc",
  },
  {
    title: "文档",
    path: "/home",
    component: () => import(`./pages/home.vue`),
  },
  {
    title: "文档",
    path: "/doc",
    component: () => import(`./pages/doc.vue`),
    children: [
      {
        title: "选择器",
        name: "Search",
        path: "/components/Search",
        component: () => import(`../packages/search/docs/README.md`),
        meta:{demo: 'Search'}
      },
      {
        title: "气泡弹出框",
        name: "Popover",
        path: "/components/Popover",
        component: () => import("packages/BtnPopver/docs/README.md"),
        meta:{demo: 'Popover'}
      },
      {
        title: "卡片",
        name: "Card",
        path: "/components/Card",
        component: () => import("packages/card/docs/README.md"),
        meta:{demo: 'Card'}
      },
    ],
  },
  {
    title: "选择器",
    path: "/demo/Search",
    component: () => import(`../packages/search/docs/demo.vue`),
  },
  {
    title: "气泡弹出框",
    path: "/demo/Popover",
    component: () => import("packages/BtnPopver/docs/demo.vue"),
  },
  {
    title: "卡片",
    path: "/demo/Card",
    component: () => import("packages/card/docs/demo.vue"),
  },
];
const routerConfig: RouterOptions = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);
export default router;
