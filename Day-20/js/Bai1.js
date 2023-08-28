var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

//C1: use for and push
var arrC = [];
for (var i = 0; i < arrA.length; i++) {
  for (var j = 0; j < arrB.length; j++) {
    if (arrA[i] === arrB[j]) {
      arrC.push(arrA[i]);
    }
  }
}
console.log(arrC);

//C2:use indexOf
var result = arrA.filter(function (i) {
  return arrB.indexOf(i) !== -1;
});
console.log(result);

//C3: use includes
var result = arrA.filter(function (i) {
  return arrB.includes(i);
});
console.log(result);
