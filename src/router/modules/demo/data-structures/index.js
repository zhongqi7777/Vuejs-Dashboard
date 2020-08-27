/** When your routing table is too long, you can split it into small modules**/

const datastructuresRouter = [
  {
    path: "/LinkedList",
    component: () => import("@/views/demo/leetcode/SinglyLinkedList")
  }
];

export default datastructuresRouter;
