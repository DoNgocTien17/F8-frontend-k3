function tinh(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i * i + 1;
  }
  return sum;
}

const n = 2;
console.log(`S = ${tinh(n)}`);
