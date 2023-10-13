var startTime = new Date().getTime();
var countdownTime = 10;
var animationFrameId;

function updateCountdown() {
  var currentTime = new Date().getTime();
  var elapsedTime = Math.floor((currentTime - startTime) / 1000);
  var remainingTime = countdownTime - elapsedTime;

  if (remainingTime > 0) {
    document.getElementById("countdown").textContent = remainingTime;

    animationFrameId = requestAnimationFrame(updateCountdown);
  } else {
    document.getElementById("countdown").textContent = "";
    document.getElementById("get-link").disabled = false;
    document.getElementById("get-link").style.background = "#fff";
  }
}

function stopCountdown() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
}

function resumeCountdown() {
  startTime =
    new Date().getTime() -
    (countdownTime -
      parseInt(document.getElementById("countdown").textContent)) *
      1000;
  updateCountdown();
}

// Xử lý sự kiện khi chuyển tab đi xa
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    stopCountdown();
  } else {
    resumeCountdown();
  }
});

// Gọi hàm updateCountdown để bắt đầu bộ đếm
updateCountdown();

// Xử lý sự kiện khi click vào nút Get Link
document.getElementById("get-link").addEventListener("click", function () {
  // Thực hiện chuyển hướng đến URL mong muốn
  window.location.href =
    "https://www.google.com/search?q=%E1%BA%A3nh+n%E1%BB%AF+sinh+%C4%91%E1%BA%B9p&sca_esv=573120737&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjk2pWCyvKBAxWIsFYBHcMiANIQ_AUoAXoECAEQAw&biw=1536&bih=707&dpr=1.25";
});
