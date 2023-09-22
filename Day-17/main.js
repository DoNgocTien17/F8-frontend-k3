var content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, excepturi omnis odit a fuga animi iusto reiciendis ad suscipit minima ipsa voluptatum cumque accusamus impedit temporibus provident? Nobis, consequuntur commodi.
`;

// Bao bọc chuỗi content trong thẻ <span>
content = `<span>${content}</span>`;
// Thay thế khoảng trắng bằng "</span> <span>" trong chuỗi content
content = content.replaceAll(" ", "</span> <span>");
console.log(content);
// Khai báo biến index và gán giá trị ban đầu là 0
var index = 0;
// Thiết lập một hàm lặp vô hạn sử dụng setInterval
setInterval(function () {
  // Lấy ký tự tại vị trí index trong chuỗi content
  var char = content.charAt(index);
  // Lấy ký tự tiếp theo sau ký tự hiện tại
  var charNext = content.charAt(index + 1);
  // Kiểm tra nếu ký tự hiện tại là ">" và ký tự tiếp theo không phải khoảng trắng
  if (char === ">" && charNext !== " ") {
    // Thêm class "highlight" vào ký tự hiện tại bằng cách sử dụng slice
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    // Cập nhật nội dung của trang web
    document.body.innerHTML = html;
  }

  // Tăng giá trị index lên 1
  index++;

  // Nếu index vượt quá độ dài của chuỗi, đặt lại index về 0
  if (index === content.length) {
    index = 0;
  }
}, 50);

// In ra nội dung content đã được thay đổi
document.write(content);
