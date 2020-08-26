/** When your routing table is too long, you can split it into small modules**/

const demoRouter = {
  path: "/demo/leetcode",
  component: () => import("@/views/demo/leetcode/index"),
  name: "editor",
  meta: {
    title: "demo/leetcode",
    icon: "editor",
    noCache: true,
    affix: true,
  },
};

export default demoRouter;
