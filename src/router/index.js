// import Vue from "vue";
// import Router from "vue-router";
// const Router = require('vue-router')
Vue.use(VueRouter);

/* Layout */
// import Layout from "@/layout";

/* Router Modules */
import Login1 from "@/views/Login/Login1/index.vue";
import Container from "@/container/index";

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    name: "Login1",
    component: Login1
  },
  {
    path: "",
    component: Container,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          noCache: true,
          affix: true
        }
      },
      {
        path: "user",
        component: () => import("@/views/user/index"),
        name: "user",
        meta: {
          title: "user",
          icon: "user",
          noCache: true,
          affix: true
        }
      },
      {
        path: "project",
        component: () => import("@/views/project/index"),
        name: "project",
        meta: {
          title: "project",
          icon: "edit",
          noCache: true,
          affix: true
        }
      },
      {
        path: "model",
        component: () => import("@/views/model/index"),
        name: "model",
        meta: {
          title: "model",
          icon: "model",
          noCache: true,
          affix: true
        }
      },
      {
        path: "config",
        component: () => import("@/views/config/index"),
        name: "config",
        meta: {
          title: "config",
          icon: "config",
          noCache: true,
          affix: true
        }
      }
    ]
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: "/login",
    name: "Login1",
    component: Login1
  },
  {
    path: "",
    component: Container,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "dashboard",
          noCache: true,
          affix: true
        }
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
