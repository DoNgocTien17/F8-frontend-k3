var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progessSpan = progress.querySelector("span");

//Giá trị khởi tạo
var initialClientX;
var percent;
var currentPercent = 0;

var isPlaying = false;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
  //Lấy offsetX của progress-bar
  var offsetX = e.offsetX;
  //Tính giá trị phần trăm giữa offsetX và chiều rộng của progress-bar
  percent = (offsetX * 100) / progressBar.clientWidth;
  //Làm tròn 2 chữ số phần thập phân
  percent = percent.toFixed(2);
  progress.style.width = `${percent}%`;
  //Kích hoạt hành động bấm chuột và kéo
  initialClientX = e.clientX;
  currentPercent = percent;
  document.addEventListener("mousemove", handleDrag);
});

progessSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  //Cập nhật clientX khi bấm chuột vào button màu tím
  initialClientX = e.clientX;
});

//Hủy sự kiện mousemove nếu mouseup vào document
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  //Lấy phần trăm cuối cùng và cập nhật vào biến currentPercent
  currentPercent = percent;
});

//Kéo thả thay đổi vị trí
var handleDrag = function (e) {
  //Lấy giá trị clientX mới nhất tại vị trí chuột
  //Khoảng cách kéo = clientX mới nhất - clientX ban đầu
  var moveWidth = e.clientX - initialClientX;
  //Tính phần trăm giữa khoảng cách kéo và chiều rộng của progress-bar
  percent = (moveWidth * 100) / progressBar.clientWidth;
  percent = +percent.toFixed(2) + +currentPercent;
  //Cập nhật width cho progress
  if (percent < 0) {
    percent = 0;
  }
  if (percent > 100) {
    percent = 100;
  }
  progress.style.width = `${percent}%`;
};

// xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".player .play-btn");
var playInner = document.querySelector(".player .play-inner");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;

// viết hàm chuyển đổi từ s sang phút
var getTime = function (seconds) {
  // tính ra số phút
  // lấy số s / 60  --> làm tròn xuống
  var mins = Math.floor(seconds / 60);
  //   tính số s còn lại
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// lấy thời lượng của audio
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

// phát nhạc và dừng nhạc khi bấm nút play
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play(); //phát nhạc
  } else {
    audio.pause();
  }
});

// lắng nghe event play
audio.addEventListener("play", function () {
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});

// lắng nghe event pause
audio.addEventListener("pause", function () {
  playBtn.children[0].classList.remove("fa-pause");
  playBtn.children[0].classList.add("fa-play");
});

// lắng nghe sự kiện timeUpdate
audio.addEventListener("timeupdate", function () {
  //   lấy time hiện tại của bài hát
  var currentTime = audio.currentTime;
  //   console.log(currentTime);
  //   show lên UI
  currentTimeEl.innerText = getTime(currentTime);
  //   chuyển currentTIme thành phần trăm
  var percent = (currentTime * 100) / audio.duration;
  progress.style.width = `${percent}%`;
});

// case 1:
audio.addEventListener("timeupdate", function () {
  if (!isDragging) {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
  }
});

progressBar.addEventListener("mousedown", function (e) {
  isDragging = false;
  // bài hát vẫn chạy khi kéo thanh tua
  audio.play();
  initialClientX = e.clientX;
});

progressBar.addEventListener("mouseup", function (e) {
  // Tính thời gian mới dựa trên vị trí chuột
  var clickPosition =
    (e.clientX - progressBar.getBoundingClientRect().left) /
    progressBar.clientWidth;
  var newTime = clickPosition * audio.duration;
  audio.currentTime = newTime;
  // Chạy bài hát lại nếu trước đó đang chạy
  if (isPlaying) {
    audio.play();
  }
  isDragging = false;
});

// case 3
var presentTime = document.querySelector(".present-time");
var tooltipsTime = function (e) {
  // vị trí của chuột
  var position = e.clientX - progressBar.offsetLeft;
  var hoverPosition =
    (e.clientX - progressBar.getBoundingClientRect().left) /
    progressBar.clientWidth;
  var previewTime = hoverPosition * audio.duration;

  // Hiển thị thời gian xem trước
  presentTime.textContent = getTime(previewTime);
  presentTime.style.display = "block";
  presentTime.style.left = `${position}px`;
  presentTime.style.color = "#fff";
};

progressBar.addEventListener("mousemove", tooltipsTime);
progressBar.addEventListener("mouseout", function () {
  presentTime.style.display = "none";
});

// case 4
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
});
