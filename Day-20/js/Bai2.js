var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(arr) {
  var result = [];

  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

var flattenedArray = flattenArray(arr);
console.log(flattenedArray);
