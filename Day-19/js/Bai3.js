var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var separatedArrays = [];

for (var i = 0; i < arr[0].length; i++) {
  var dataTypeArray = [];

  for (var j = 0; j < arr.length; j++) {
    dataTypeArray.push(arr[j][i]);
  }

  separatedArrays.push(dataTypeArray);
}

console.log(separatedArrays);
