const display = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

function addTask() {
  let input = display.value.trim();

  if (input === "") {
    alert("Please type your item");
    return;
  }

  let li = document.createElement("li");
  li.className = "todo-item";

  let ptage = document.createElement("p");
  ptage.textContent = input;

  ptage.addEventListener("click", () => {
    ptage.classList.toggle("completed");
  });

  let deletebtn = document.createElement("button");
  deletebtn.className = "deletebtn";
  deletebtn.innerText = "Delete";

  deletebtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(ptage);
  li.appendChild(deletebtn);
  todoList.appendChild(li);

  display.value = "";
}

addBtn.addEventListener("click", addTask);

display.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});