var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(arr) {
  return arr.reduce((flatArr, item) => {
    if (Array.isArray(item)) {
      flatArr.push(...flattenArray(item));
    } else {
      flatArr.push(item);
    }
    return flatArr;
  }, []);
}

var flattenedArray = flattenArray(arr);
console.log(flattenedArray);
