var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var intersection = [];

for (var i = 0; i < arrA.length; i++) {
  if (arrB.indexOf(arrA[i]) !== -1) {
    intersection.push(arrA[i]);
  }
}

console.log(intersection);
