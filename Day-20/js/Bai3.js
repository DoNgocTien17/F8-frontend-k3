var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var result = [];
var numbers = [];
var boolean = [];
var string = [];

arr.forEach(function (item) {
  item.forEach(function (value) {
    if (typeof value === "number") {
      numbers.push(value);
    } else if (typeof value === "boolean") {
      boolean.push(value);
    } else if (typeof value === "string") {
      string.push(value);
    }
  });
  return (result = [string, numbers, boolean]);
});

console.log(result);
