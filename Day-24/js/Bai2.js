function soThanhChu(so) {
  var chuSo = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  var capDo = ["", "nghìn", "triệu", "tỷ"];

  function chuyenBaChuSo(so3ChuSo) {
    let chu = "";
    for (let i = 0; i < 3; i++) {
      var soChuSo = parseInt(so3ChuSo[i]);
      if (soChuSo > 0) {
        if (i === 1 && soChuSo === 1) {
          chu += "mười ";
        } else {
          chu += chuSo[soChuSo] + " ";
        }
        if (i === 0) chu += "trăm ";
        else if (i === 1) chu += "chục ";
      } else if (
        i === 2 &&
        so3ChuSo[i - 1] !== "0" &&
        so3ChuSo[i - 2] !== "0"
      ) {
        chu += "linh ";
      }
    }
    return chu.trim();
  }

  var chuoiSo = so.toString();
  var nhomChuSo = chuoiSo.match(/\d{1,3}/g).reverse();
  let chuoiChu = "";
  for (let i = 0; i < nhomChuSo.length; i++) {
    var so3ChuSo = nhomChuSo[i];
    if (so3ChuSo !== "000") {
      chuoiChu = chuyenBaChuSo(so3ChuSo) + " " + capDo[i] + " " + chuoiChu;
    }
  }
  return chuoiChu.trim() || "không";
}

var soCanChuyen = 4298;
var ketQua = soThanhChu(soCanChuyen);
console.log(ketQua);
