let Set = require("./set");

// var fruits = new Set();

// // 添加成员
// fruits.add("Apple");
// fruits.add("Banana");
// fruits.add("Pear");
// fruits.show(); // ["Apple", "Banana", "Pear"]

// // 添加重复成员
// fruits.add("Apple"); // Can not add Apple, must already be in set

// // 删除成员
// fruits.remove("Banana");
// fruits.show(); // ["Apple", "Pear"]

// // 删除不存在的成员
// fruits.remove("Banana"); // Banana is not in set

var fruits1 = new Set();
fruits1.add("Apple");
fruits1.add("Banana");
fruits1.add("Pear");

var fruits2 = new Set();
fruits2.add("Grape");
fruits2.add("Banana");
fruits2.add("Pear");
fruits2.add("Orange");

var union = fruits1.union(fruits2);
union.show(); // ["Apple", "Banana", "Pear", "Grape", "Orange"]

var intersect = fruits1.intersect(fruits2);
intersect.show(); // ["Banana", "Pear"]
