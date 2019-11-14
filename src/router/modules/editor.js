/** When your routing table is too long, you can split it into small modules**/

const editRouter = {
  path: "/editor",
  component: () => import("@/views/editor/index"),
  name: "editor",
  meta: {
    title: "editor",
    icon: "editor",
    noCache: true,
    affix: true
  },
  children: [
    {
      path: "jspluimbchart",
      component: () => import("@/views/editor/modules/jspluimbchart/index"),
      name: "jspluimbchart",
      meta: { title: "jspluimbchart", noCache: true }
    }
  ]
};

export default editRouter;
