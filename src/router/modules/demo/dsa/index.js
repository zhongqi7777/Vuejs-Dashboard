/** When your routing table is too long, you can split it into small modules**/

const dsaRouter = [
  {
    path: "/dsa",
    component: () =>
      import("@/views/demo/dsa.js-data-structures-algorithms-javascript/index")
  }
];

export default dsaRouter;
