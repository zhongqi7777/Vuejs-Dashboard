/** When your routing table is too long, you can split it into small modules**/

const demoRouter = [
  {
    path: "/SinglyLinkedList",
    component: () => import("@/views/demo/leetcode/SinglyLinkedList")
  },
  {
    path: "/web-designer",
    component: () => import("@/views/demo/web-designer/index")
  }
];

export default demoRouter;
