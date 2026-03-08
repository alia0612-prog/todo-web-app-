function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

let li = document.createElement("li");
li.textContent = task;

let delBtn = document.createElement("button");
delBtn.textContent = "Delete";

delBtn.onclick = function(){
li.remove();
}

li.appendChild(delBtn);

document.getElementById("taskList").appendChild(li);

input.value="";
}