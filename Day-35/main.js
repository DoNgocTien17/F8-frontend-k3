const startButton = document.querySelector(".btn");
const result = document.getElementById("result");
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "vi-VN";

const data = [
  {
    keywords: ["google", "gu gồ"],
    action: () => {
      window.location.href = "https://www.google.com";
    },
  },
  {
    keywords: ["facebook", "phây búc"],
    action: () => {
      window.location.href = "https://www.facebook.com/";
    },
  },
  {
    keywords: ["youtube", "diu túp"],
    action: () => {
      window.location.href = "https://www.youtube.com/";
    },
  },
  {
    keywords: ["google drive", "gu gồ đờ rai vờ"],
    action: () => {
      window.location.href = "https://drive.google.com/drive/my-drive";
    },
  },
  {
    keywords: [
      "google maps",
      "bản đồ",
      "chỉ đường",
      "đường tới",
      "tới",
      "đường",
      "gu gồ máp",
    ],
    action: (query) => {
      const location = query
        .replace("google maps", "")
        .replace("bản đồ", "")
        .replace("chỉ đường", "")
        .replace("đường tới", "")
        .replace("tới", "")
        .replace("đường", "")
        .trim();
      if (location) {
        window.location.href = `https://www.google.com/maps/search/${location}`;
      } else {
        window.location.href = "https://www.google.com/maps";
      }
    },
  },
  {
    keywords: ["bài hát", "zing mp3", "mp3"],
    action: (query) => {
      const songName = query.replace("bài hát", "").trim();
      window.location.href = `https://zingmp3.vn/tim-kiem/bai-hat.html?q=${songName}`;
    },
  },
  {
    keywords: ["video", "xem video"],
    action: (query) => {
      const videoName = query
        .replace("video", "")
        .replace("xem video", "")
        .trim();
      window.location.href = `https://www.youtube.com/results?search_query=${videoName}`;
    },
  },
];

function handleVoice(listened) {
  const lowerCaseListened = listened.toLowerCase();

  for (const item of data) {
    for (const keyword of item.keywords) {
      if (lowerCaseListened.includes(keyword)) {
        item.action(lowerCaseListened);
        return;
      }
    }
  }

  result.innerHTML = "Không thực hiện được yêu cầu";
}

startButton.addEventListener("click", () => {
  recognition.start();
  result.innerHTML = "Hãy nói nội dung bạn muốn...";
});

recognition.onresult = (event) => {
  const speechResult = event.results[0][0].transcript.toLowerCase();
  result.innerHTML = `
        <span class="alert">Đã nói xong. Hy vọng kết quả như ý bạn</span>
        <span class="run">Đang thực hiện: ${speechResult}</span>`;
  handleVoice(speechResult);
};
