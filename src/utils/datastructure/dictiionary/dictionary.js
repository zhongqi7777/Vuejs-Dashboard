//字典类

function Dictionary() {
  this.dataStore = [];
  this.add = add; // 添加元素
  this.find = find; // 查找元素
  this.remove = remove; // 删除元素
  this.count = count; // 字典中元素个数
  this.showAll = showAll; // 显示字典元素
  this.clear = clear; // 清空字典
}

//向字典添加元素

function add(key, value) {
  this.dataStore[key] = value;
}

//查找字典中的元素

function find(key) {
  return this.dataStore[key];
}

//删除一个元素

function remove(key) {
  if (this.dataStore[key]) delete this.dataStore[key];
  else return "Not Found";
}

// //显示字典元素

// function showAll() {
//   for (var key in this.dataStore) {
//     console.log(key + "->" + this.dataStore[key]);
//   }
// }

//查看字典中元素的个数

function count() {
  var n = 0;
  for (var key in this.dataStore) {
    ++n;
  }
  return n;
}

//清空字典

function clear() {
  for (var key in this.dataStore) {
    delete this.dataStore[key];
  }
}

//改造后的showAll

function showAll() {
  var sortKeys = Object.keys(this.dataStore).sort();
  for (var key in sortKeys) {
    console.log(sortKeys[key] + "->" + this.dataStore[sortKeys[key]]);
  }
}

module.exports = Dictionary;
