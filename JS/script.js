const todo = document.getElementById('todo');
const add = document.getElementById('add');
const list = document.getElementById('list');

add.addEventListener('click', () =>  {
    todo.value.length == 0 ? alert('Please write any content to add') : null;
})