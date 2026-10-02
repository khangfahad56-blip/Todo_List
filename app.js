let task = document.querySelector("#task");
let add_btn = document.querySelector("#add_btn");
let delete_btn = document.querySelector("#delete_btn");
let list = document.querySelector("#list");
let tasks = [];

const add_task = () => {
  tasks.push(task.value);
};
const show_task = () => {
  const li = document.createElement("li");
  li.innerText = task.value;
  list.append(li);
};
const store_task = () => {
  let json_tasks = JSON.stringify(tasks);
  localStorage.setItem("user", json_tasks);
};
const delete_tasks = () => {
  localStorage.clear()
  list.innerHTML = ""
};
task.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add_task();
    show_task();
    store_task();
    task.value = "";
  }
});
add_btn.addEventListener("click", () => {
  add_task();
  show_task();
  store_task();
  task.value = "";
});
delete_btn.addEventListener("click", ()=>{
  delete_tasks()
})
data = localStorage.getItem("user")
if(data !== null){
  tasks = JSON.parse(localStorage.getItem("user"))
  tasks.forEach(task => {
    const new_li = document.createElement("li");
    new_li.innerText = task
    list.append(new_li)
  });
};
