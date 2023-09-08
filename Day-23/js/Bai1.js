function tinhTong(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    const value = Number(args[i]);

    if (isNaN(value)) {
      return "Dữ liệu không hợp lệ";
    }

    sum += value;
  }

  return sum;
}

console.log(tinhTong(1, 2, 3));
console.log(tinhTong(1, "abc", 3));
