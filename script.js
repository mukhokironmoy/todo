const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addbutton = document.getElementById("addbutton");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";

}

inputBox.addEventListener("keypress",function(e){
    // console.log(`Key "${e.key}" released [event: keyup]`);
    if(e.key==="Enter"){
        e.preventDefault();
        addTask();
    }
})



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

