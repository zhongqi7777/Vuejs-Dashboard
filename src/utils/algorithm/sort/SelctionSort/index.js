//选择排序
function selectionSort(data) {
  for (var i = 0; i < data.length; i++) {
    var min = data[i];
    var temp;
    var index = i;
    for (var j = i + 1; j < data.length; j++) {
      if (data[j] < min) {
        min = data[j];
        index = j;
      }
    }

    temp = data[i];
    data[i] = min;
    data[index] = temp;
  }
  return data;
}

module.exports = {
  selectionSort
};
