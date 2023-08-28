var data = [];

function handleRegister(name, password, email) {
  // Kiểm tra thông tin có đủ không
  if (!name || !password || !email) {
    console.log("Lỗi: Thông tin đăng ký không đủ");
    return;
  }

  // Kiểm tra xem đã đăng ký trước đó chưa
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Lỗi: Đã đăng ký trước đó");
    return;
  }

  const user = {
    name,
    password,
    email,
    role: "user",
  };

  data.push(user);
  console.log("Đăng ký thành công:", user);
  return user;
}

function handleLogin(email, password) {
  const user = data.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    console.log("Đăng nhập thành công:", user);
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ");
  }
}

var dataRegister1 = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log("data =", data);
console.log("dataLogin =", dataLogin);
