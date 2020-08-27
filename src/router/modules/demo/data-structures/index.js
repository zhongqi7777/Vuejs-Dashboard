/** When your routing table is too long, you can split it into small modules**/

const datastructuresRouter = [
  {
    path: "/LinkedList",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/linked-list/index"
      )
  }
];

export default datastructuresRouter;
