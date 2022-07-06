// 导入路由器插件createRouter,createWebHistory 方法
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 定义路由规则
const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login"),
  },
  {
    path: "/layout",
    name: "layout",
    meta: {
      title: "首页",
    },
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/car-manager",
        name: "carManager",
        meta: {
          title: "汽车管理",
        },
        component: () => import("../views/car/CarManager"),
      },
      {
        path: "/lib-manager",
        name: "libManager",
        meta: {
          title: "入库管理",
        },
        component: () => import("../views/lib/LibManager"),
      },
      {
        path: "/order-manager",
        name: "orderManager",
        meta: {
          title: "订单管理",
        },
        component: () => import("../views/order/OrderManager"),
      },
      {
        path: "/tmap",
        name: "tmap",
        meta: {
          title: "腾讯地图",
        },
        component: () => import("../views/tmap/TMap"),
      },
      {
        path: "/gmap",
        name: "gmap",
        meta: {
          title: "高德地图",
        },
        component: () => import("../views/gmap/GMap"),
      },
    ],
  },
];

// 创建一个路由器
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 前置路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// 后置路由守卫
router.afterEach((to, from) => {
  document.title = to.meta.title;
  NProgress.done();
});

// 导出路由器
export default router;
