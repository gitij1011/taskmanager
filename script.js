const input=document.getElementById("textvalue")
const addbtn=document.querySelector(".btn")
const listcnt=document.getElementById("list-container")
// function to add task
function addtask(){
  if(input.value===''){
    alert("you must enter a task")
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    listcnt.appendChild(li)
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
  }
  input.value=""
  saveData();
}
addbtn.addEventListener("click",addtask)
// function to remove task
function removetask(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}
listcnt.addEventListener("click",removetask)
 
// function to save data in local storage- it is a type of object
function saveData(){
    // saves item in local storage
    localStorage.setItem("data",listcnt.innerHTML)
}

function getTask(){
    // gets the task from local storage
    listcnt.innerHTML=localStorage.getItem("data")
}

getTask()