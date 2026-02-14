const display = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  let input = display.value.trim();

  if (input === "") {
    alert("please type you items");
    return;
  }

  let divtag = document.createElement("div");
  divtag.className = "details";
  let ptage = document.createElement("P");
  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.addEventListener("click", () => {
    divtag.remove();
  });
  ptage.textContent = input;
  todoList.appendChild(divtag);
  divtag.appendChild(ptage);
  divtag.appendChild(deletebtn);
});
