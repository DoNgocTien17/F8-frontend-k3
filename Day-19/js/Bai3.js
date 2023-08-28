var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

//C1:
// var separatedArrays = [];

// for (var i = 0; i < arr[0].length; i++) {
//   var dataTypeArray = [];

//   for (var j = 0; j < arr.length; j++) {
//     dataTypeArray.push(arr[j][i]);
//   }

//   separatedArrays.push(dataTypeArray);
// }

// console.log(separatedArrays);

//C2:
var newArray = [];

var string = [];
var number = [];
var boolean = [];
arr.forEach(function (value) {
  value.forEach(function (item) {
    if (typeof item === "string") {
      string.push(item);
      console.log(string);
    } else if (typeof item === "number") {
      number.push(item);
      console.log(number);
    } else if (typeof item === "boolean") {
      boolean.push(item);
      console.log(boolean);
    }
  });
});
newArray = [string, number, boolean];

console.log(newArray);

// var newArray = arr.filter(function (item) {
//   return (
//     typeof item === "string" ||
//     typeof item === "number" ||
//     typeof item === "boolean"
//   );
// });

// console.log(newArray);
