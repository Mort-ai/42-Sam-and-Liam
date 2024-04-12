function newTodo(todoText) {
    const todo = $('<div></div>')
        .addClass('todo')
        .html(todoText)
        .click(function() {
            const confirmation = confirm('Would you like to delete this todo?');

            if (confirmation === true) {
                this.remove()
            }
        });

    $('.todos').prepend(todo);
}

function loadTodos() {
    const saveString = document.cookie;

    console.log('Ss', saveString);

    if (saveString) {
        const save = JSON.parse(saveString);

        for (let index = 0; index < save.length; index++) {
            const todoText = save[index];

            newTodo(todoText);
        }
    }
}

function saveTodos() {
    let save = [];

    $('.todos > div').each(function() {
        save.push(this.innerText);
    });

    document.cookie = JSON.stringify(save);
}

$(document).ready(function() {
    console.log('Ready');
    $('.new').click(function() {
        const todoText = prompt('Todo Text:');

        if (todoText) {
            newTodo(todoText);
        }
    })

    loadTodos();
})

$(window).unload(saveTodos);