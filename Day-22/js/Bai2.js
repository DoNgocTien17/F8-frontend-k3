if (!Array.prototype.reduce2) {
  Array.prototype.reduce2 = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    const array = this;
    const length = array.length;
    var accumulator = initialValue === undefined ? array[0] : initialValue;
    var startIndex = initialValue === undefined ? 1 : 0;

    for (var i = startIndex; i < length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
  };
}

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce2(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
