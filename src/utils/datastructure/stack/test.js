let Stack = require("./stack");

//初始化一个栈
var stack = new Stack();
console.log(stack.peek()); // Empty

//入栈
stack.push("Apple");
stack.push("Banana");
stack.push("Pear");

//查看当前栈顶元素
console.log(stack.peek()); // Pear
console.log(stack.pop()); // Pear

console.log(stack.length()); // 3

//出栈
stack.pop();

console.log(stack.length()); // 2

stack.clear();

console.log(stack.length()); // 0
console.log(stack.peek()); // Empty
