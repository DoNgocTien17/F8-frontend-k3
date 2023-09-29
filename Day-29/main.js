var products = [
  { product_id: 1, product_name: "Sản phẩm 1", product_price: 1000 },
  { product_id: 2, product_name: "Sản phẩm 2", product_price: 2000 },
  { product_id: 3, product_name: "Sản phẩm 3", product_price: 3000 },
  { product_id: 4, product_name: "Sản phẩm 4", product_price: 4000 },
];

var tableHTML =
  '<table cellpadding="0" cellspacing="0" width="100%" border="1" id="product_table">';
tableHTML +=
  '<thead><tr><th width="5%">STT</th><th>Tên sản phẩm</th><th width="10%">Giá</th><th width="10%" >Thêm vào giỏ</th></tr></thead>';
tableHTML += "<tbody>";

for (var i = 0; i < products.length; i++) {
  tableHTML += "<tr>";
  tableHTML += `<td>${products[i].product_id}</td>`;
  tableHTML += `<td>${products[i].product_name}</td>`;
  tableHTML += `<td>${products[i].product_price}</td>`;
  tableHTML += `<td> <input type="number" id="quantity_${products[i].product_id}" class="pd-5" value="1" style="width: 90%; display: block; margin: 0 auto"/><button onclick="addToCart(${products[i].product_id})" style="width: 100%" class="pd-5">Thêm vào giỏ</button></td>`;
  tableHTML += "</tr>";
}

tableHTML += "</tbody></table>";
tableHTML += `<div class="cart-product"><h3>Giỏ Hàng</h3><p>Giỏ hàng không có sản phẩm</p></div>`;
document.write(`
  
      <div class="container">${tableHTML}</div>
      <div id="cart"></div>`);

var cart = {};
var cartProduct = document.querySelector(".container .cart-product");

function addToCart(productId) {
  cartElement.style.display = "block";
  cartProduct.style.display = "none";
  var quantity = parseInt(
    document.getElementById(`quantity_${productId}`).value
  );
  if (cart[productId]) {
    cart[productId] += quantity;
  } else {
    cart[productId] = quantity;
  }
  updateCart();
}
function updateCart() {
  var cartInfo = "<h3>Giỏ hàng:</h3>";
  var totalPrice = 0;
  var subId = 0;
  cartInfo +=
    '<table cellpadding="0" cellspacing="0" width="100%" border="1" id="cart_table">';
  cartInfo += "<thead>";
  cartInfo += "<tr>";
  cartInfo += '<th width="5%">STT</th>';
  cartInfo += "<th>Tên sản phẩm</th>";
  cartInfo += '<th width="20%">Giá</th>';
  cartInfo += '<th width="20%">Số lượng</th>';
  cartInfo += '<th width="20%">Thành Tiền</th>';
  cartInfo += '<th width="5%">Xóa</th>';
  cartInfo += "</tr>";
  cartInfo += "</thead>";
  cartInfo += "<tbody>";

  for (var productId in cart) {
    var quantity = cart[productId];
    var productName = document.querySelector(
      `#product_table tbody tr:nth-child(${productId}) td:nth-child(2)`
    ).textContent;
    var productPrice = parseInt(
      document.querySelector(
        `#product_table tbody tr:nth-child(${productId}) td:nth-child(3)`
      ).textContent
    );
    var subtotal = quantity * productPrice;
    subId += quantity;
    totalPrice += subtotal;

    cartInfo += "<tr>";
    cartInfo += `<td>${productId}</td>`;
    cartInfo += `<td>${productName}</td>`;
    cartInfo += `<td>${productPrice}</td>`;
    cartInfo += `<td><input type="number" value="${quantity}" style="width: 90%; display: block; margin: 0 auto" onchange="updateQuantity(${productId}, this.value)"/></td>`;
    cartInfo += `<td>${subtotal}</td>`;
    cartInfo += `<td><button onclick="deleteCart(${productId})">Xóa</button></td>`;
    cartInfo += "</tr>";
  }
  cartInfo += "</tbody>";

  // Tổng
  cartInfo += "<tbody>";
  cartInfo += `<td colspan="3">Tổng</td>`;
  cartInfo += `<td colspan="1">${subId}</td>`;
  cartInfo += `<td colspan="2">${totalPrice}</td>`;
  cartInfo += "</tbody>";
  cartInfo += "</table>";
  cartInfo += `<button class="btnAll pd-5" onclick="updateAll(${productId})">Cập nhật giỏ hàng</button>`;
  cartInfo += `<button class="btnAll pd-5" onclick="deleteAll(${productId})">Xóa giỏ hàng </button>`;

  document.getElementById("cart").innerHTML = cartInfo;
}

// cập nhật lại số lượng vs tiền
function updateQuantity(productId, newQuantity) {
  cart[productId] = parseInt(newQuantity);
  updateCart();
}

// update tất cả
function updateAll(productId) {
  alert("Cập nhật giỏ hàng thành công");
  updateCart();
}

// xóa một sản phẩm
function deleteCart(productId) {
  if (confirm("Are u sure?")) {
    alert("Xóa sản phẩm khỏi giỏ hàng thành công");
    delete cart[productId];
  }
  updateCart();
}
var cartElement = document.getElementById("cart");

// xóa tất cả sane phẩm
function deleteAll() {
  if (confirm("Are you sure?")) {
    alert("Xóa toàn bộ giỏ hàng thành công");
    cart = {};

    cartElement.style.display = "none";
    cartProduct.style.display = "block";
  }
}
