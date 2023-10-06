const list = document.querySelector(".list");
let draggedItem = null;
let chapterCount = 0;
let lessonCount = 0;

list.addEventListener("dragstart", function (event) {
  draggedItem = event.target;
  event.target.classList.add("dragging");
});

list.addEventListener("dragover", function (event) {
  event.preventDefault();
});

list.addEventListener("dragenter", function (event) {
  event.target.classList.add("dragover");
});

list.addEventListener("dragleave", function (event) {
  event.target.classList.remove("dragover");
});

list.addEventListener("drop", function (event) {
  event.target.classList.remove("dragover");
  list.insertBefore(draggedItem, event.target);
  updateOrder();
});

list.addEventListener("dragend", function (event) {
  event.target.classList.remove("dragging");
});

const handleRoll = () => {
  const mainItems = Array.from(document.querySelectorAll(".list-main-item"));
  const subItems = Array.from(document.querySelectorAll(".list-sub-item"));

  let chapterIndex = 0;
  let lessonIndex = 0;

  mainItems.forEach((item, index) => {
    const span = item.querySelector("span");
    chapterIndex++;
    span.textContent = `${chapterIndex}${span.textContent.slice(
      span.textContent.indexOf(":")
    )}`;
  });

  subItems.forEach((item, index) => {
    const span = item.querySelector("span");
    lessonIndex++;
    span.textContent = `${lessonIndex}${span.textContent.slice(
      span.textContent.indexOf(":")
    )}`;
  });
};

document.addEventListener("DOMContentLoaded", function () {
  updateOrder();
});
const updateOrder = () => {
  const items = Array.from(document.querySelectorAll(".list-item"));

  let chapterIndex = 0;
  let lessonIndex = 0;

  items.forEach((item, index) => {
    const span = item.querySelector("span");
    if (item.classList.contains("list-main-item")) {
      chapterIndex++;
      span.textContent = `${chapterIndex}`;
    } else {
      lessonIndex++;
      span.textContent = `${lessonIndex}`;
    }
  });
};

handleRoll();

list.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  draggedItem.classList.add("dragging");
});

list.addEventListener("dragend", () => {
  draggedItem.classList.remove("dragging");
  updateOrder();
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(list, e.clientY);
  const draggable = document.querySelector(".dragging");
  if (afterElement == null) {
    list.appendChild(draggable);
  } else {
    list.insertBefore(draggable, afterElement);
  }
});

list.addEventListener("dragover", function (event) {
  event.preventDefault();
  const afterElement = getDragAfterElement(list, event.clientY);
  const draggable = document.querySelector(".dragging");
  if (afterElement == null) {
    list.appendChild(draggable);
  } else {
    list.insertBefore(draggable, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".list-item:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
