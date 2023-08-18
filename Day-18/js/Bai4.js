function chenSoVaKhongThayDoiThuTu(arr, numberToInsert) {
  // Sắp xếp mảng tăng dần
  arr.sort((a, b) => a - b);

  // Tìm vị trí để chèn số vào mảng
  let indexToInsert = 0;
  while (indexToInsert < arr.length && arr[indexToInsert] < numberToInsert) {
    indexToInsert++;
  }

  // Chèn số vào mảng tại vị trí đã tìm
  arr.splice(indexToInsert, 0, numberToInsert);

  return arr;
}

const arrayNumbers = [10, 5, 8, 7, 20];
const numberToInsert = 12;

const mangDaSapXepVaChen = chenSoVaKhongThayDoiThuTu(
  arrayNumbers.slice(),
  numberToInsert
);

console.log("Mảng sau khi sắp xếp và chèn số:", mangDaSapXepVaChen);
