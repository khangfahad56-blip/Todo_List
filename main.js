import {add_task} from "./utils.js"
import {show_task} from "./components.js"
import { store_task, delete_tasks,data } from "./data.js";

let task = document.querySelector("#task");
let add_btn = document.querySelector("#add_btn");
let delete_btn = document.querySelector("#delete_btn");
let list = document.querySelector("#list");
let tasks = [];


task.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add_task(tasks,task);
    show_task(task,list);
    store_task(tasks);
    task.value = "";
  }
});
add_btn.addEventListener("click", () => {
  add_task(tasks,task);
  show_task(task,list);
  store_task(tasks);
  task.value = "";
});
delete_btn.addEventListener("click", ()=>{
  delete_tasks()
})

if(data !== null){
  tasks = JSON.parse(localStorage.getItem("user"))
  tasks.forEach(task => {
    const new_li = document.createElement("li");
    new_li.innerText = task
    list.append(new_li)
  });
};
