Number.prototype.getCurrency = function (currencySymbol) {
  // Chuyển đổi giá trị số thành chuỗi và định dạng nó
  const formattedValue = this.toLocaleString("vi-VN");

  // Kết hợp với biểu tượng tiền tệ
  return formattedValue + " " + currencySymbol;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price2 = "12000000";
console.log(price2.getCurrency("đ"));
