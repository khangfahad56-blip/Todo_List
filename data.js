const store_task = (tasks) => {
  let json_tasks = JSON.stringify(tasks);
  localStorage.setItem("user", json_tasks);
};
const delete_tasks = () => {
  localStorage.clear();
  list.innerHTML = "";
};

let data = localStorage.getItem("user")

export { store_task, delete_tasks, data };