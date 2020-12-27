//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault(); //prevnt form from submissing
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //create li
    const newTodo=document.createElement('li');
     newTodo.innerText=todoInput.value;
     //clear input value
     todoInput.value=" ";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML= '<i class="fa fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML= '<i class="fa fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
}

function deleteCheck(e){
    //console.log(e.target); outputs what i am clicking on
    const item=e.target;
    //delete
    if (item.classList[0] === "trash-btn"){
       // item.parentElement.remove();
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener("transitioned",function(){
            //after tranisition happens it is exeuted
            item.parentElement.remove();
        });
    }

    //check 
    if (item.classList[0] === "complete-btn"){
        item.parentElement.classList.toggle("completed");//change class name upon clicking
    }

}