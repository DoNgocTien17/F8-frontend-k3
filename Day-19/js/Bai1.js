// Lấy kết quả giao giữa 2 mảng
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

//C1: sử dụng for
// var intersection = [];
// for (var i = 0; i < arrA.length; i++) {
//   if (arrB.indexOf(arrA[i]) !== -1) {
//     intersection.push(arrA[i]);
//   }
// }

// console.log(intersection);

// C2: suer dụng filter
var newArr = arrA.filter(function (item) {
  return arrB.includes(item);
});
console.log(newArr);
