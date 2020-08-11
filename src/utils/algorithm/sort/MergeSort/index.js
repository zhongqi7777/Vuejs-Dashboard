//归并排序

function mergeSort(array) {
  var len = array.length;
  if (len < 2) {
    return array;
  }
  var middle = Math.floor(len / 2),
    left = array.slice(0, middle),
    right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

module.exports = {
  mergeSort
};
