import { asyncRoutes, constantRoutes } from "@/router";

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [
    { path: "/login", hidden: true },
    {
      path: "",
      redirect: "dashboard",
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          meta: {
            title: "数据统计",
            icon: "dashboard",
            noCache: true,
            affix: true
          }
        }
      ]
    },
    {
      path: "user",
      name: "user",
      meta: {
        title: "用户管理",
        icon: "user",
        noCache: true,
        affix: true
      }
    },
    {
      path: "project",
      name: "project",
      meta: {
        title: "项目管理",
        icon: "excel",
        noCache: true,
        affix: true
      }
    },
    {
      path: "model",
      name: "model",
      meta: {
        title: "预置模型",
        icon: "table",
        noCache: true,
        affix: true
      }
    },
    {
      path: "config",
      name: "config",
      meta: {
        title: "配置",
        icon: "edit",
        noCache: true,
        affix: true
      }
    }
  ],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes;
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
