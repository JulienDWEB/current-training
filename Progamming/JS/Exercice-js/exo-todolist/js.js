const inputTodo = document.querySelector('input')
const btnTodo = document.querySelector('button')
const container = document.querySelector('.container-todo')

// Chargement des tâches existantes
window.addEventListener('DOMContentLoaded', () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(todo => addTodoElement(todo));
});

// Fonction pour ajouter une tâche au DOM
function addTodoElement(task) {
    const tacheTodo = document.createElement('span');
    tacheTodo.textContent = task;

    // Gérer la suppression
    tacheTodo.addEventListener('click', () => {
        tacheTodo.remove();
        deleteTodo(task);
    });

    container.appendChild(tacheTodo);
}

// Sauvegarder dans localStorage
function saveTodo(task) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Supprimer du localStorage
function deleteTodo(task) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(t => t !== task);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Ajouter une tâche au clic
btnTodo.addEventListener('click', (event) => {
    event.preventDefault();
    const task = inputTodo.value.trim();
    if (!task) return;

    addTodoElement(task);
    saveTodo(task);
    inputTodo.value = '';
});


/* btnTodo.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
    const tacheTodo = document.createElement('span');
    tacheTodo.textContent = inputTodo.value;

    tacheTodo.addEventListener('click', () => {
        tacheTodo.remove();
    })
    container.appendChild(tacheTodo);
    inputTodo.value = '';
    
    localStorage.getItem(tacheTodo)
    console.log('Ajouté :', tacheTodo); // Vérifie si l’élément est bien ajouté
}); */

