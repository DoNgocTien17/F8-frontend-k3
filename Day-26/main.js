var newTaskInput = document.getElementById("anonymous-new-task");
var addTaskButton = document.getElementById("anonymous-add-task");
var taskList = document.getElementById("anonymous-tasks");

// Hàm để thêm một task mới
function addTask() {
  // Rỗng thì không cho add
  var taskText = newTaskInput.value.trim();
  if (taskText === "") {
    return;
  }

  var taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span class="anonymous-taskText">${taskText}</span>
        <div class="actions">
          <button class="anonymous-edit"><i class="fas fa-edit"></i></button>
          <button class="anonymous-delete"><i class="fas fa-trash"></i></button>
          <button class="anonymous-save" hidden>Add Task</button>
        </div>
      `;

  // sửa task khi click vào "edit"
  var editButton = taskItem.querySelector(".anonymous-edit");
  editButton.addEventListener("click", function () {
    editTask(taskItem);

    taskItem.classList.add("edited-task-item");
  });

  // xóa task khi click vào nút "delete"
  var deleteButton = taskItem.querySelector(".anonymous-delete");
  deleteButton.addEventListener("click", function () {
    taskItem.style.opacity = "0";
    taskItem.style.transition = "opacity 1s ease";

    setTimeout(function () {
      taskList.removeChild(taskItem);
    }, 900);
  });

  // Thêm task vào danh sách
  taskList.appendChild(taskItem);

  // Xóa nội dung input sau khi thêm task
  newTaskInput.value = "";
}

// Hàm để sửa task
function editTask(taskItem) {
  var taskTextElement = taskItem.querySelector(".anonymous-taskText");
  var editButton = taskItem.querySelector(".anonymous-edit");
  var deleteButton = taskItem.querySelector(".anonymous-delete");
  var saveButton = taskItem.querySelector(".anonymous-save");

  // Lưu nội dung gốc của task để khi cần lưu lại
  var originalText = taskTextElement.innerText;

  // Ẩn nút "Edit" và "Delete", hiển thị nút "Save"
  editButton.style.display = "none";
  deleteButton.style.display = "none";
  saveButton.style.display = "inline-block";

  // Tạo một input để chỉnh sửa task
  var inputElement = document.createElement("input");
  // Class của input
  inputElement.classList.add("anonymous-text-edit");
  inputElement.type = "text";
  inputElement.value = originalText;

  // Thêm input vào taskItem
  taskItem.replaceChild(inputElement, taskTextElement);

  // Focus vào input để người dùng có thể chỉnh sửa
  inputElement.focus();

  // lưu lại task sau khi chỉnh sửa
  saveButton.addEventListener("click", function () {
    // Lấy nội dung mới sau khi chỉnh sửa
    taskItem.style.background = "#8758ff";
    taskItem.style.padding = "5px 16px";

    var updatedText = inputElement.value.trim();

    if (updatedText === "") {
      alert("Please enter a task!");
      return;
    }

    // Cập nhật nội dung task
    taskTextElement.innerText = updatedText;

    // Ẩn nút "Save" và hiển thị nút "Edit" và "Delete"
    editButton.style.display = "inline-block";
    deleteButton.style.display = "inline-block";
    saveButton.style.display = "none";

    // Loại bỏ input và sự kiện lưu
    taskItem.replaceChild(taskTextElement, inputElement);
  });
}

// thêm task khi click vào nút "Add"
addTaskButton.addEventListener("click", addTask);

// thêm task khi nhấn phím "Enter" trong input
newTaskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
