const task = document.querySelector("#taskname");
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(task.value);
  task.value = "";
});
let id = 1;
const taskList = document.querySelector("#taskList");
const addTask = function (taskName) {
  const lis = document.createElement("li");
  lis.setAttribute("id", `${id}`);
  id++;
  lis.textContent = taskName;
  taskList.appendChild(lis);
};

taskList.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI") {
    if (e.target.classList[0] === undefined) {
      e.target.classList.add("cross");
      // console.log(e.target.classList);
    } else {
      e.target.classList.remove("cross");
    }
  }
  //e.target.cl
});
