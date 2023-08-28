function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function tinhTrungBinhSoNguyenTo(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      sum += arr[i];
      count++;
    }
  }

  if (count === 0) {
    return "Không có số nguyên tố";
  }

  return sum / count;
}

var arrayNumbers = [10, 5, 8, 3, 15, 7, 20];
var trungBinh = tinhTrungBinhSoNguyenTo(arrayNumbers);

if (typeof trungBinh === "number") {
  console.log("Trung bình số nguyên tố:", trungBinh);
} else {
  console.log(trungBinh);
}
