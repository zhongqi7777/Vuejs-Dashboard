/** When your routing table is too long, you can split it into small modules**/

const demoRouter = [
  {
    path: "/SinglyLinkedList",
    component: () => import("@/views/demo/leetcode/SinglyLinkedList")
  }
];

export default demoRouter;
