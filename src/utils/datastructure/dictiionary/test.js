let Dictionary = require("./dictionary");

//实例化字典类

var directory = new Dictionary();

//添加元素

directory.add("Jack", "138****5505");
directory.add("Alice", "156****6606");
directory.add("Tom", "180****8808");

//显示字典

directory.showAll(); // Jack->138****5505
// Alice->156****6606
// Tom->180****8808

directory.remove("Tom");
directory.showAll(); // Jack->138****5505
// Alice->156****6606

console.log(directory.count()); // 2
directory.clear();
console.log(directory.count()); // 0
