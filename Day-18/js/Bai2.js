function isPrime(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }
  for (var i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
let sum = 0;
let count = 0;
function tinhTrungBinhSoNguyenTo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log(arr[i]);

      sum += arr[i];
      count++;
    }
  }

  return sum / count;
}

var array = [10, 5, 8, 2, 3, 15, 7, 20];
var trungBinh = tinhTrungBinhSoNguyenTo(array);

if (typeof trungBinh === "number" || count > 0) {
  console.log("Trung bình số nguyên tố:", trungBinh);
} else {
  console.log("Khong co so nguyen to");
}
