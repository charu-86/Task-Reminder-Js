const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collections');
const clearbtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')


loadEventListeners();
function loadEventListeners()
{
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTask);
    clearbtn.addEventListener('click',clearTasks);
}


function addTask(e){
    if(taskInput.value===''){
        alert('add a task');
    }
    const li = document.createElement('li');
    li.className = 'collection-Item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    console.log(li);
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-items')){
    console.log(e.target);
    }
    if(confirm('are you sure you wanna delete it ?')){
    e.target.parentElement.parentElement.remove();
    }
}
function clearTasks() {

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
