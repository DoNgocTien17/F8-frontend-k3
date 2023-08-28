// Làm phẳng mảng array ( chuyển thành mảng 1 chiều)
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

//C1: sử dụng reduce
// function flattenArray(arr) {
//   return arr.reduce((flatArr, item) => {
//     if (Array.isArray(item)) {
//       flatArr.push(...flattenArray(item));
//     } else {
//       flatArr.push(item);
//     }
//     return flatArr;
//   }, []);
// }

// var flattenedArray = flattenArray(arr);
// console.log(flattenedArray);

//C2:suer dụng hàm đệ quy
function result(arr) {
  var newArr = [];

  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      newArr = newArr.concat(result(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(result(arr));
