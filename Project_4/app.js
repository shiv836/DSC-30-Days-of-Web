const todoInput=document.querySelector('.todo-input');/*to select the the target*/
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');
const reset=document.querySelector('.to-reset');

reset.addEventListener('click',resetting);
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

function addTodo(event)
{
    event.preventDefault();
    const todoDiv= document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check-square"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    saveLocalTodos(todoInput.value);
    const thrashButton=document.createElement('button');
    thrashButton.innerHTML='<i class="fas fa-trash-alt"></i>'
    thrashButton.classList.add("thrash-btn");
    todoDiv.appendChild(thrashButton);

    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function deleteCheck(e)
{
const item =e.target;
if(item.classList[0]==='thrash-btn')
{
  const todo=item.parentElement;
  todo.classList.add("fall");
  removeLocalTodos(todo);
  todo.addEventListener("transitionend",function(){
  todo.remove();
  });
}
if(item.classList[0]==='complete-btn')
{
  const todo=item.parentElement;
  todo.classList.toggle('completed');
}
}
function filterTodo(e)
{
const todos=todoList.childNodes;
todos.forEach(function(todo,index)
{
switch(e.target.value)
{
    case "all":
        {
         if(index!= 0)
         {
             todo.style.display="flex";
         }
        }
    break;
    case "completed":
        {
            if(index!=0 && todo.classList.contains('completed'))
            {
                todo.style.display='flex';
            }
            else if(index!=0){
                todo.style.display='none';
            }
        }
    
    break;
    case "uncompleted":
        {
            if(index!=0 && !todo.classList.contains('completed'))
            {
                todo.style.display='flex';
            }
            else if(index!=0){
                todo.style.display='none';
            }
        }
    
    break;
    
}
});
}

function saveLocalTodos(todo)
{
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function getTodos()
{
    let todos;
    
    
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo)
    {
        const todoDiv= document.createElement('div');
        todoDiv.classList.add("todo");
        const newTodo=document.createElement('li');
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
    
        const completedButton=document.createElement('button');
        completedButton.innerHTML='<i class="fas fa-check-square"></i>'
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
       
        const thrashButton=document.createElement('button');
        thrashButton.innerHTML='<i class="fas fa-trash-alt"></i>'
        thrashButton.classList.add("thrash-btn");
        todoDiv.appendChild(thrashButton);
    
        todoList.appendChild(todoDiv);  
    });

}
function removeLocalTodos(todo)
{
    let todos;
    
    
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
      const todoIndex=todo.children[0].innerText;
      
      todos.splice(todos.indexOf(todoIndex),1); 
      localStorage.setItem("todos",JSON.stringify(todos));

}
function resetting()
{

todoList.innerHTML="";
   
localStorage.clear();
}