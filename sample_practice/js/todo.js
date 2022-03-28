const todoForm  = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList  = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
    // console.log(e)
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((data) => data.id !== parseInt(li.id));
    saveTodos()
}

function paintTodo(newTodo){
     const li       = document.createElement("li");
     li.id = newTodo.id
     const span     = document.createElement("span");
     span.innerText = newTodo.text;

     const button     = document.createElement("button");
     button.innerText = "❌";
     button.addEventListener("click", deleteTodo);
     li.append(span);
     li.appendChild(button);
     todoList.appendChild(li);
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo   = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    // toDos에 입력 데이터를 저장하는 부분
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);


const getSaveToDos = localStorage.getItem(TODOS_KEY);

if (getSaveToDos){
    const parsedTodos = JSON.parse(getSaveToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo)
    // parsedTodos.forEach(data => console.log("this is ",data));
    // paintTodo를 localStorage의 각각의 데이터마다 실행
    //  => localStorage에 있는 데이터 하나하나마다 li, span, button을 생성해서 보여준다.
}
