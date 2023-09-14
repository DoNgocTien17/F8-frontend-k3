function daoNguocSo(so) {
  var chuoiSo = so.toString();

  var chuoiDaoNguoc = chuoiSo.split("").reverse().join("");

  return parseInt(chuoiDaoNguoc, 10);
}
 
var soCanDaoNguoc = 12345;
var ketQua = daoNguocSo(soCanDaoNguoc);
console.log(ketQua);
