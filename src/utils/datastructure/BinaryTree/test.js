const binary = require("./binarytree");

var nums = new binary.BST();
//插入数据
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

//中序遍历
console.log("Inorder traversal: ");
binary.inOrder(nums.root);

// Inorder traversal:
// 3 16 22 23 37 45 99

// 先序遍历

console.log("Preorder traversal: ");
binary.preOrder(nums.root);

// Preorder traversal:
// 23 16 3 22 45 37 99

// 后序遍历

console.log("Postorder traversal: ");
binary.postOrder(nums.root);

// Postorder traversal:
// 3 22 16 37 99 45 23

// 最小值
console.log("min:" + nums.getMin()); // min : 3

//最大值
console.log("max:" + nums.getMax()); // max : 99

//查找不存在的值
console.log("find:" + nums.find(66)); // find : null

//查找存在的值
console.log("find:" + nums.find(99)); // find : [object Object]

//删除根节点
nums.remove(23);

binary.inOrder(nums.root);

// 3 16 22 37 45 99
