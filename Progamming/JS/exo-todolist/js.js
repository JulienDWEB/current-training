const inputTodo = document.querySelector('input')
const btnTodo = document.querySelector('button')
const container = document.querySelector('.container-todo')



btnTodo.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
    const tacheTodo = document.createElement('span');
    tacheTodo.textContent = inputTodo.value;
    
    tacheTodo.addEventListener('click', () => {
        tacheTodo.remove();
    })
    container.appendChild(tacheTodo);
    inputTodo.value = '';

    console.log('Ajouté :', tacheTodo); // Vérifie si l’élément est bien ajouté
});