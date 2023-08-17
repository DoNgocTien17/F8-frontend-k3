// // C1: sử dụng if else
// function test(a, b, c) {
//   if (a > b && a > c) {
//     return `a = ${a}`;
//   } else if (b > a && b > c) {
//     return `b = ${b}`;
//   } else {
//     return `c = ${c}`;
//   }
// }

// console.log(test(5, 3, 2));

//C2: tạo biến max
var a = 9;
var b = 4;
var c = 3;

var max = a;

if (max < b) {
  max = b;
}

if (max < c) {
  max = c;
}

console.log(`max: ${max}`);
