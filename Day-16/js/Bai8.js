function Sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += 1 / i;
    }
    return sum;
  }
  
  const n = 10;
  const result = Sum(n);
  console.log(`S = ${result}`);
  