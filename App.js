const task = document.querySelector("#taskname");
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(task.value);
  task.value = "";
});
let id = 1;
let taskList = document.querySelector("#taskList");

const addTask = function (taskName) {
  if (taskName === "") return;
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

const markComplete = function () {
  let allTasks = document.querySelectorAll("li");
  for (let task of allTasks) {
    task.classList.add("cross");
  }
};
const markCompleteBtn = document.querySelector("#mark-complete-btn");
markCompleteBtn.addEventListener("click", function () {
  markComplete();
});

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", function () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
});
