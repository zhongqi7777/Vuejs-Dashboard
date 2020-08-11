let LList = require("./single");
var fruits = new LList();

fruits.insert("Apple", "head");
fruits.insert("Banana", "Apple");
fruits.insert("Pear", "Banana");

console.log(fruits.display()); // Apple
// Banana
// Pear

// 接着上面的代码，我们再添加一个水果

fruits.insert("Grape", "Pear");
console.log(fruits.display()); // Apple
// Banana
// Pear
// Grape

// 我们把香蕉吃掉

fruits.remove("Banana");
console.log(fruits.display()); // Apple
// Pear
// Grape
