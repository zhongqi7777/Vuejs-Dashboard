/** When your routing table is too long, you can split it into small modules**/

const demoRouter = [
  {
    path: "/leetcode",
    component: () => import("@/views/demo/leetcode/index"),
  },
];

export default demoRouter;
