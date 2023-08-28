function locTrung(arr) {
  const result = [];
  const visited = {};

  for (let i = 0; i < arr.length; i++) {
    if (!visited[arr[i]]) {
      result.push(arr[i]);
      visited[arr[i]] = true;
    }
  }

  return result;
}

const array = [1, 2, 3, 4, 3, 2, 5, 6, 1, 7];
const mangSauKhiLocTrung = locTrung(array);

console.log("Mảng sau khi loại trùng:", mangSauKhiLocTrung);
