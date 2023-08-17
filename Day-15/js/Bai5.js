//Sắp xếp tăng dần

// // C1:
// function test(a, b, c) {
//   if (a > b && a > c && b < c) {
//     return `b = ${b}, c = ${c}, a = ${a}`;
//   } else if (a > b && a > c && b > c) {
//     return `c = ${c}, b = ${b}, a = ${a}`;
//   } else if (b > a && b > c && a < c) {
//     return `a = ${a}, c = ${c}, b = ${b}`;
//   } else if (b > a && b > c && a > c) {
//     return `c = ${c}, a = ${a}, b = ${b}`;
//   } else if (c > a && c > b && a > b) {
//     return `b = ${b}, a = ${a}, c = ${c}`;
//   } else if (c > a && c > b && a < b) {
//     return `a = ${a}, b = ${b}, c = ${c}`;
//   }
// }
// console.log(test(2, 1, 3));

//C2: Biến trung gian
var a = 4;
var b = 2;
var c = 6;

if (a > b) {
  var tmp = a;
  a = b;
  b = tmp;
}
if (a > c) {
  tmp = a;
  a = c;
  c = tmp;
}
if (b > c) {
  tmp = b;
  b = c;
  c = tmp;
}
console.log(a, b, c);
