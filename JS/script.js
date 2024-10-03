const todo = document.getElementById('todo');
const add = document.getElementById('add');
const list = document.getElementById('list');

add.addEventListener('click', () =>  {
    if(todo.value.length == 0){
        alert('Nothing to add to the list');
    } else {
        addToList(todo.value);
    }
})

function addToList(str){
    const div = document.createElement('div');
    div.innerHTML = '<i class="fa-solid fa-clipboard-list"></i>';
    const span = document.createElement('span');
    span.className = 'task';
    span.style.paddingLeft = '5px'
    div.appendChild(span);
    const deleteb = document.createElement('button');
    deleteb.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteb.className = 'delete';
    div.appendChild(deleteb);
    const editb = document.createElement('button');
    editb.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editb.className = 'edit';
    div.appendChild(editb);
    span.innerHTML = str;
    div.className = 'list-item';
    const firstItem = document.getElementsByClassName('list-item')[0];
    list.insertBefore(div, firstItem);
}