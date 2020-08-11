let Queue = require("./queue");
var queue = new Queue();

console.log(queue.empty()); //true

//添加几个元素
queue.enqueue("Apple");
queue.enqueue("Banana");
queue.enqueue("Pear");

console.log(queue.empty()); // false

//查看队首元素
console.log(queue.front()); // Apple
//查看队尾元素
console.log(queue.back()); // Pear

//出队
queue.dequeue();

//查看队首元素
console.log(queue.front()); // Banana
//查看队尾元素
console.log(queue.back()); // Pear

console.log(queue.toString()); //  Apple
//  Banana
//  Pear

//清空队列

queue.clear();

console.log(queue.empty()); // true
