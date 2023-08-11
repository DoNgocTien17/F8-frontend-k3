function tinhTien(kWh) {
  var tienDien = 0;
  if (kWh >= 0 && kWh <= 50) {
    return tienDien =  1.678;
  } else if (kWh >= 51 && kWh <= 100) {
    return tienDien =  1.734;
  } else if (kWh >= 101 && kWh <= 200) {
    return tienDien =  2.014;
  } else if (kWh >= 201 && kWh <= 300) {
    return tienDien =  2.536;
  } else if (kWh >= 301 && kWh <= 400) {
    return tienDien =  2.834;
  } else if (kWh >= 401) {
    return tienDien =  2.927;
  }
}
const kWh = 450;
const total = kWh * tinhTien(kWh);
console.log(`Tiền điện: ${total}`);

