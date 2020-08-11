const MultiTree = require("./index");

var tree = new MultiTree();
tree
  .add("a")
  .add("b", "a", tree.traverseBF)
  .add("c", "a", tree.traverseBF)
  .add("d", "a", tree.traverseBF)
  .add("e", "b", tree.traverseBF)
  .add("f", "b", tree.traverseBF)
  .add("g", "c", tree.traverseBF)
  .add("h", "c", tree.traverseBF)
  .add("i", "d", tree.traverseBF);
console.group("traverseDF");
tree.traverseDF(function(node) {
  console.log(node.data);
});
console.groupEnd("traverseDF");
console.group("traverseBF");
tree.traverseBF(function(node) {
  console.log(node.data);
});
console.groupEnd("traverseBF");
// 深度优先查找
console.group("contains1");
tree.contains(function(node) {
  console.log(node.data);
  if (node.data === "f") {
    return true;
  }
}, tree.traverseDF);
console.groupEnd("contains1");
// 广度优先查找
console.group("contains2");
tree.contains(function(node) {
  console.log(node.data);
  if (node.data === "f") {
    return true;
  }
}, tree.traverseBF);
console.groupEnd("contains2");
tree.remove("g", "c", tree.traverseBF);
