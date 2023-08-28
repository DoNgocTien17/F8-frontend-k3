var kwh = 100;
var price1 = 1678;
var price2 = 1734;
var price3 = 2014;
var price4 = 2536;
var price5 = 2834;
var price6 = 2927;
var cost;

if (kwh < 0) {
  console.log("Please enter number kwh bigger 0");
} else if (kwh <= 50) {
  cost = kwh * price1;
} else if (kwh <= 100) {
  cost = 50 * price1 + (kwh - 50) * price2;
} else if (kwh <= 200) {
  cost = 50 * price1 + (100 - 50) * price2 + (kwh - 100) * price3;
} else if (kwh <= 300) {
  cost =
    50 * price1 +
    (100 - 50) * price2 +
    (200 - 100) * price3 +
    (kwh - 200) * price4;
} else if (kwh <= 400) {
  cost =
    50 * price1 +
    (100 - 50) * price2 +
    (200 - 100) * price3 +
    (300 - 200) * price4 +
    (kwh - 300) * price5;
} else {
  cost =
    50 * price1 +
    (100 - 50) * price2 +
    (200 - 100) * price3 +
    (300 - 200) * price4 +
    (400 - 300) * price5 +
    (kwh - 400) * price6;
}

console.log(`Số tiền phải trả cho ${kwh} số điện là ${cost}`);
