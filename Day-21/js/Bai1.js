var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
};

function getError(field) {
  const errorGroup = errors[field];

  if (errorGroup) {
    for (const errorKey in errorGroup) {
      if (errorGroup.hasOwnProperty(errorKey)) {
        return errorGroup[errorKey];
      }
    }
  }

  return null;
}

const nameError = getError("name");
const emailError = getError("email");

console.log(nameError);
console.log(emailError);
