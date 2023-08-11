function calculateSeriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += 1 / i;
    }
    return sum;
  }
  
  const n = 10; // Thay đổi giá trị n tại đây để tính giá trị cho N khác nhau
  const result = calculateSeriesSum(n);
  console.log(`S = ${result}`);
  