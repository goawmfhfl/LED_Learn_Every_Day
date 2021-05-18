const toDoForm = document.querySelector(".js-toDoForm"),
toDoinput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

TODOS_LS = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function deleteToDos(btn){
    const Btn = btn.target;
    const li = Btn.parentNode;
    toDoList.removeChild(li)

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== JSON.parse(li.id);
    })

    toDos = cleanToDos;

    saveToDos();

}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const NewId = toDos.length + 1

    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDos)
    span.innerText = text;


    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    
    li.id = NewId;

    const toDoOBJ = {
        id : NewId,
        text : text,
    }
    
    toDos.push(toDoOBJ)
    saveToDos();
    
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}
function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS)
    if(loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(todo){
            paintToDo(todo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",submitHandler)
}

init()