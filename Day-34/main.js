const box = document.querySelector(".box");
const zoomBox = document.querySelector(".zoom-box");
const zoom = document.querySelector(".zoom");
const zoomImage = document.querySelector(".zoom-image");

const zoomCenterY = zoom.offsetHeight / 2;
const zoomCenterX = zoom.offsetWidth / 2;
box.addEventListener("mouseenter", () => {
  zoomBox.style.display = "block";
});

box.addEventListener("mousemove", (e) => {
  var cx = image1.clientWidth / box.clientWidth;
  var cy = image1.clientHeight / box.clientHeight;

  var x = e.clientX - e.target.offsetLeft;
  var y = e.clientY - e.target.offsetTop;

  box.style.display = "block";
  //   box.style.left = x + 76 + "px";
  //   box.style.top = y + 299  + "px";

  box.style.left = x + "px";
  box.style.top = y + 250 + "px";

  image2.style.backgroundSize = `${image2.clientWidth * cx}px ${
    image2.clientHeight * cy
  }px`;

  /* Display what the box "sees": */
  image2.style.backgroundPosition =
    "-" +
    (x - 500 / 2 / 6) * cx +
    "px " +
    "-" +
    (y - 500 / 2 / 6 + 250) * cy +
    "px";
});

box.addEventListener("mouseleave", () => {
  zoomBox.style.display = "none";
});
