const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const overlay = $(".custom-overlay");
const loginBtn = $(".custom-login-btn");
const formBlock = $(".custom-form-block");

function showLoginForm() {
  formBlock.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
  handleClearForm($(".custom-login-form"));
  handleClearForm($(".custom-register-form"));
  handleActiveLoginTab();
}

loginBtn.addEventListener("click", showLoginForm);

overlay.addEventListener("click", () => {
  formBlock.setAttribute("hidden", "hidden");
  overlay.setAttribute("hidden", "hidden");
});

const lgEmail = $(".custom-login-form .custom-email");
const lgPass = $(".custom-login-form .custom-password");
const lgSubmit = $(".custom-login-form .custom-submit-btn");
const lgSuccess = $(".custom-login-form .custom-success");
const lgPassToggle = $("#custom-login-pass-toggle");

function emailValidator(field) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,}))$/;
  const emailMess = field.parentElement.parentElement.querySelector(
    ".custom-form-message"
  );
  let isValid;
  if (field.value.trim() === "") {
    emailMess.innerText = "Không được để trống";
    isValid = false;
  } else if (regex.test(field.value.trim())) {
    emailMess.innerText = "";
    isValid = true;
  } else {
    emailMess.innerText = "Email không hợp lệ";
    isValid = false;
  }
  handleInputValidation(field, isValid);
  return isValid;
}

function requiredField(field) {
  const mess = field.parentElement.parentElement.querySelector(
    ".custom-form-message"
  );
  let isValid;
  if (field.value.trim() === "") {
    mess.innerText = "Không được để trống";
    isValid = false;
  } else {
    mess.innerText = "";
    isValid = true;
  }
  handleInputValidation(field, isValid);
  return isValid;
}

function handleInputValidation(field, isValid) {
  if (isValid) {
    field.parentElement.classList.remove("error");
  } else {
    field.parentElement.classList.add("error");
  }
}

const lgValidateAll = () => {
  const isEmailValid = emailValidator(lgEmail);
  const isPassValid = requiredField(lgPass);
  return isEmailValid && isPassValid;
};

lgEmail.addEventListener("input", () => {
  emailValidator(lgEmail);
  lgSuccess.innerText = "";
});

lgPass.addEventListener("input", () => {
  requiredField(lgPass);
  lgSuccess.innerText = "";
});

lgSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (lgValidateAll()) {
    lgSuccess.innerText = "Đăng nhập thành công";
  }
});

function handleShowPassword() {
  const inputWrap = this.parentElement;
  const passToggle = inputWrap.querySelector("i");
  const passwordInput = inputWrap.querySelector(".custom-password");
  if (inputWrap.querySelector('[type="checkbox"]').checked) {
    passToggle.className = "fa-regular fa-eye-slash";
    passwordInput.type = "text";
  } else {
    passToggle.className = "fa-regular fa-eye";
    passwordInput.type = "password";
  }
}

lgPassToggle.addEventListener("change", handleShowPassword);

const loginActive = $(".custom-login-tab.active-tab");
const loginTab = $(".custom-login-tab");
const registerTab = $(".custom-register-tab");

function handleActiveLoginTab() {
  loginTab.classList.add("active-tab");
  registerTab.classList.remove("active-tab");
  $(".custom-login-form").style.display = "block";
  $(".custom-register-form").style.display = "none";
  handleClearForm($(".custom-register-form"));
}

loginTab.addEventListener("click", handleActiveLoginTab);

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active-tab");
  loginTab.classList.remove("active-tab");
  $(".custom-login-form").style.display = "none";
  $(".custom-register-form").style.display = "block";
  handleClearForm($(".custom-login-form"));
});

if (loginActive) {
  $(".custom-login-form").style.display = "block";
  $(".custom-register-form").style.display = "none";
} else {
  $(".custom-login-form").style.display = "none";
  $(".custom-register-form").style.display = "block";
}

function handleClearForm(form) {
  const inputWraps = form.querySelectorAll(".custom-input-wrap");
  const inputs = form.querySelectorAll("input");
  const formMess = form.querySelectorAll(".custom-form-message");
  for (let i = 0; i < inputWraps.length; i++) {
    inputWraps[i].classList.remove("error");
    inputs[i].value = "";
    formMess[i].innerText = "";
  }
  form.querySelector(".custom-success").innerText = "";
}

const rgName = $(".custom-register-form .custom-full-name");
const rgEmail = $(".custom-register-form .custom-email");
const rgPass = $(".custom-register-form .custom-password");
const rgSubmit = $(".custom-register-form .custom-submit-btn");
const rgSuccess = $(".custom-register-form .custom-success");
const rgPassToggle = $("#custom-register-pass-toggle");

rgName.addEventListener("input", () => {
  requiredField(rgName);
  rgSuccess.innerText = "";
});

rgEmail.addEventListener("input", () => {
  emailValidator(rgEmail);
  rgSuccess.innerText = "";
});

rgPass.addEventListener("input", () => {
  requiredField(rgPass);
  rgSuccess.innerText = "";
});

rgSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (rgValidateAll()) {
    rgSuccess.innerText = "Đăng ký thành công";
  }
});

rgPassToggle.addEventListener("change", handleShowPassword);
