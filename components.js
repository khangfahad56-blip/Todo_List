const show_task = (task,list) => {
  const li = document.createElement("li");
  li.innerText = task.value;
  list.append(li);
};

export {show_task};