let List = require("./list.js");

var fruits = new List();
//添加三个元素
fruits.append("Apple");
fruits.append("Grape");
fruits.append("Banana");

//打印列表
console.log(fruits.toString()); // ["Apple", "Grape", "Banana"]
//查看列表长度
console.log(fruits.length()); // 3
//查找 Banana 的位置
console.log(fruits.find("Banana")); // 2
//删除 Grape
fruits.remove("Grape");
console.log(fruits.toString()); // ["Apple", "Banana"]

fruits.insert("Grape", "Apple");
console.log(fruits.toString()); // ["Apple", "Grape", "Banana"]

fruits.clear();
console.log(fruits.toString()); // []

//再添加几个
fruits.append("Pear");
fruits.append("Orange");
fruits.append("Strawberry");
console.log(fruits.toString()); // ["Apple", "Grape", "Banana", "Pear", "Orange", "Strawberry"]

//我们先看当前的位置和元素
console.log(fruits.currPos()); // 0
console.log(fruits.getElement()); // Apple

//我们尝试改变一下
fruits.moveTo(2);
fruits.next();
console.log("currPos", fruits.currPos()); // 3
console.log("getElement", fruits.getElement()); // Pear
fruits.end();
fruits.prev();
console.log(fruits.currPos()); // 4
console.log(fruits.getElement()); // Orange

console.log(fruits.contains("Banana")); // true
console.log(fruits.contains("Watermelon")); // false
