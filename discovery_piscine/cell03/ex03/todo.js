function newTodo(todoText) {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerText = todoText;

    todo.onclick = function() {
        const confirmation = confirm('Would you like to delete this todo?');

        if (confirmation === true) {
            todo.remove();
        }
    }

    todos.insertBefore(todo, todos.firstChild);
}

function loadTodos() {
    const save = JSON.parse(document.cookie);

    for (let index = 0; index < save.length; index++) {
        const todoText = save[index];

        newTodo(todoText);
    }
}

function saveTodos() {
    let save = [];
    const children = todos.children;
    for (let index = 0; index < children.length; index++) {
        const todo = children[index];
        
        save.push(todo.innerText);
    }

    document.cookie = JSON.stringify(save);
}

window.onload = function() {
    window.list = document.getElementById('ft_list');
    window.todos = list.querySelector('.todos');
    const newButton = document.querySelector('.new');

    newButton.onclick = function() {
        const todoText = prompt('Todo Text:');

        if (todoText) {
            newTodo(todoText);
        }
    }

    loadTodos();
}

window.onbeforeunload = saveTodos;