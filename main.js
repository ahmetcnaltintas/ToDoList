document.getElementById('darkModeToggle').addEventListener('change', function(event){
    if(event.target.checked){
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.getElementById('labelİnfo').innerHTML="Dark Mode";
    } 
    else {
      document.documentElement.removeAttribute('data-bs-theme');
      document.getElementById('labelİnfo').innerHTML="Light Mode";
    }
  });


function removeTodo(taskElement) {
    taskElement.remove();
}


function addTodo(){
    const inputDom=document.getElementById('input-todo');
    const todos=document.getElementById('todos');


 
    if(inputDom.value.trim() !=''){
        let newTodo=document.createElement('li');
        newTodo.className='border border-primary list-group-item p-2 m-2 d-flex justify-content-between';
        newTodo.textContent=inputDom.value;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn btn-danger btn-sm justify-content-end';

        removeButton.addEventListener('click', function() {
            removeTodo(newTodo);
        });

    
        newTodo.appendChild(removeButton);
    
        todos.appendChild(newTodo);
        inputDom.value='';
    }
}


