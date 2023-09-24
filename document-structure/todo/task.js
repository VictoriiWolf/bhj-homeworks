const taskList = document.querySelector('.tasks__list');
const addTask = document.querySelector('#tasks__add');
const input = document.querySelector('#task__input');

addTask.addEventListener('click', (e) => {
    e.preventDefault();
    let text = input.value.trim();

    if(text !== '') {
        const newTask = document.createElement('div');
        newTask.classList.add('task');

        const newTaskName = document.createElement('div');
        newTaskName.classList.add('task__title');
        newTaskName.textContent = text;

        const deleteBtn = document.createElement('a');
        deleteBtn.classList.add('task__remove');
        deleteBtn.innerHTML = '&times;';

        deleteBtn.addEventListener('click', (event) => {
            const newTask = event.target.closest('.task');
            if(newTask) {
                newTask.remove();
            }
        })

        newTask.appendChild(newTaskName);
        newTask.appendChild(deleteBtn);
        
        taskList.appendChild(newTask);
        
        input.value = '';
    }
})