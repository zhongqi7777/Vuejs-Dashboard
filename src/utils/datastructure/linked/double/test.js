let LList = require("./double");

var fruits = new LList();

fruits.insert("Apple", "head");
fruits.insert("Banana", "Apple");
fruits.insert("Pear", "Banana");
fruits.insert("Grape", "Pear");

console.log(fruits.display()); // Apple
// Banana
// Pear
// Grape

console.log(fruits.dispReverse()); // Grape
// Pear
// Banana
// Apple
