const serverApi = `http://localhost:3000`;

let todos = [];

const getTodo = async () => {
  return await fetch(`${serverApi}/todos`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      todos = data;
      renderTodos(todos);
    });
};
getTodo();

const postTodo = async (data) => {
  return await fetch(`${serverApi}/todos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// Function to render todos
function renderTodos(todos) {
  const incompleteTodoList = document.querySelector(".incomplete-todo");
  incompleteTodoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoText = document.createElement("span");
    todoText.innerText = todo.title;
    todoItem.appendChild(todoText);

    const todoActions = document.createElement("div");
    todoActions.classList.add("actions");

    const editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i>`;
    editButton.classList.add("edit-todo");
    editButton.addEventListener("click", () => {
      editTodo(todo);
    });
    todoActions.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash" style="color: #ffffff;"></i>`;
    deleteButton.classList.add("delete-todo");
    deleteButton.addEventListener("click", () => {
      deleteTodo(todo);
    });
    todoActions.appendChild(deleteButton);

    todoItem.appendChild(todoActions);

    incompleteTodoList.appendChild(todoItem);
  });
}

// Add Todo Functionality
const addTodoForm = document.querySelector(".add-form");
const overlay = document.querySelector(".overlay");
const addTodoInput = addTodoForm.querySelector(".todo-title");

addTodoForm.onsubmit = (e) => {
  e.preventDefault();
  const newTodoTitle = addTodoInput.value;

  if (newTodoTitle.trim() != "") {
    postTodo({
      title: newTodoTitle,
      completed: false,
    }).then(() => {
      getTodo();
    });

    addTodoInput.value = "";
    addTodoForm.style.opacity = 0;
    addTodoForm.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
  }
};

// Show Add Form
document.querySelector(".add-todo-btn").addEventListener("click", () => {
  addTodoForm.style.opacity = 1;
  addTodoForm.style.visibility = "visible";
});

// Delete
const deleteTodo = async (todo) => {
  const response = await fetch(`${serverApi}/todos/${todo.id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    todos = todos.filter((item) => item.id !== todo.id);
    renderTodos(todos);
  }
};

// Edit
// Gắn sự kiện click vào nút sửa
const editButtons = document.querySelectorAll(".edit-todo");
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Lấy thông tin todo cần sửa từ phần tử HTML tương ứng
    const todoItem = button.closest(".todo-item");
    const todoId = todoItem.dataset.id;
    const todoTitle = todoItem.querySelector(".todo-title").textContent;

    // Hiển thị form sửa và điền nội dung todo cần sửa vào input
    const editForm = document.querySelector(".edit-form");
    const todoTitleInput = editForm.querySelector(".todo-title");
    todoTitleInput.value = todoTitle;

    // Gắn sự kiện submit vào form sửa
    editForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Lấy nội dung mới từ input
      const updatedTitle = todoTitleInput.value;

      // Gọi hàm editTodo để sửa title
      editTodo(todoId, updatedTitle);
    });

    // Hiển thị form sửa
    const editFormToggle = document.getElementById("edit-form-toggle");
    editFormToggle.checked = true;
  });
});

// Hàm editTodo để gửi yêu cầu sửa title
const editTodo = async (todoId, updatedTitle) => {
  try {
    const response = await fetch(`${serverApi}/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle }),
    });

    if (response.ok) {
      // Cập nhật title trong phần tử HTML tương ứng
      const todoItem = document.querySelector(
        `.todo-item[data-id="${todoId}"]`
      );
      const todoTitle = todoItem.querySelector(".todo-title");
      todoTitle.textContent = updatedTitle;

      // Ẩn form sửa
      const editFormToggle = document.getElementById("edit-form-toggle");
      editFormToggle.checked = false;
    } else {
      console.log("Sửa đổi thất bại");
    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
};
