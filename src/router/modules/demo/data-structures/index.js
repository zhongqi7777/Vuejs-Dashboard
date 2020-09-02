/** When your routing table is too long, you can split it into small modules**/

const datastructuresRouter = [
  {
    path: "/LinkedList",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/linked-list/index"
      )
  },
  {
    path: "/doubly-linked-list",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/doubly-linked-list/index"
      )
  },
  {
    path: "/statck",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/stack/index"
      )
  },
  {
    path: "/queue",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/queue/index"
      )
  },
  {
    path: "/hashtable",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/hashtable/index"
      )
  },
  {
    path: "/heap",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/heap/index"
      )
  },
  {
    path: "/PriorityQueue",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/PriorityQueue/index"
      )
  },
  {
    path: "/trie",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/Trie/index"
      )
  },
  {
    path: "/binary-search-tree",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/tree/binary-search-tree/index"
      )
  },
  {
    path: "/graph",
    component: () =>
      import(
        "@/views/demo/js-algorithms-data-structures/data-structures/graph/index"
      )
  }
];

export default datastructuresRouter;
