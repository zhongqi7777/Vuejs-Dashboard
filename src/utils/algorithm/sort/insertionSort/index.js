//插入排序

function insertionSort(data) {
  var len = data.length;
  for (var i = 1; i < len; i++) {
    var key = data[i];
    var j = i - 1;
    while (j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = key;
  }
  return data;
}

module.exports = {
  insertionSort
};
