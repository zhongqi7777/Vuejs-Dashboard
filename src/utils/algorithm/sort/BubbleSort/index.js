//冒泡排序
function bubbleSort(data) {
  var temp = 0;
  for (var i = data.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

module.exports = {
  bubbleSort
};
