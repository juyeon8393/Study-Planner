const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// 모바일 메뉴
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// PC 전환 시 메뉴 초기화
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
  }
});

// 로컬스토리지 불러오기
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 화면 출력
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${todo}
      <button class="delete-btn" onclick="deleteTodo(${index})">
        삭제
      </button>
    `;

    todoList.appendChild(li);
  });
}

// 할 일 추가
addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("할 일을 입력하세요!");
    return;
  }

  todos.push(todoText);

  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos();

  todoInput.value = "";
});

// 삭제
function deleteTodo(index) {
  todos.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos();
}

// 첫 화면 출력
renderTodos();

const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  document.querySelector("#todo").scrollIntoView({
    behavior: "smooth"
  });
});