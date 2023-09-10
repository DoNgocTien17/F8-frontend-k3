function layMauNgauNhien() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mauNgauNhien = layMauNgauNhien();
console.log(mauNgauNhien);
