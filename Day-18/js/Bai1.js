var numbers = [1, 3, 4, 2];
var max = 0;
// tìm max
for (var i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    var addressMax = i;
  }
}

//tìm min
var min = max;
for (var i = 0; i < numbers.length; i++) {
  if (min > numbers[i]) {
    min = numbers[i];
    var addressMin = i;
  }
}
console.log(
  `Max = ${max} và vị trí thứ ${addressMax}, Min = ${min} và vị trí thứ ${addressMin}`
);
