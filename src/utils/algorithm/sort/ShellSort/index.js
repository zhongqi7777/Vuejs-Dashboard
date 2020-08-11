//希尔排序 高级排序

function shallSort(array) {
  var increment = array.length;
  var i;
  var temp; //暂存
  do {
    //设置增量
    increment = Math.floor(increment / 3) + 1;
    for (i = increment; i < array.length; i++) {
      if (array[i] < array[i - increment]) {
        temp = array[i];
        for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
          array[j + increment] = array[j];
        }
        array[j + increment] = temp;
      }
    }
  } while (increment > 1);

  return array;
}

module.exports = {
  shallSort
};
