/** When your routing table is too long, you can split it into small modules**/

const algorithmsRouter = [
  {
    path: "/LinkedList",
    component: () => import("@/views/demo/leetcode/SinglyLinkedList")
  }
];

export default algorithmsRouter;
