const todo = document.getElementById('todo');
const add = document.getElementById('add');
let list = document.getElementById('list');

const deleteBtn1 = document.getElementsByClassName('delete')[0];
const deleteBtn2 = document.getElementsByClassName('delete')[1];
const deleteBtn3 = document.getElementsByClassName('delete')[2];
const deleteBtn4 = document.getElementsByClassName('delete')[3];

const editBtn1 = document.getElementsByClassName('edit')[0];
const editBtn2 = document.getElementsByClassName('edit')[1];
const editBtn3 = document.getElementsByClassName('edit')[2];
const editBtn4 = document.getElementsByClassName('edit')[3];

let tasks = [...list.children];

todo.addEventListener('keyup', () => {
    if(todo.value.length>30) {
        alert('exceeded limit of 30 characters');
        todo.value = todo.value.slice(0,30);
    }
})

add.addEventListener('click', () =>  {
    if(todo.value.length == 0){
        alert('Nothing to add to the list');
    } else {
        addToList(todo.value);
        todo.value = '';
    }
})

function addToList(str){
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = '<i class="fa-solid fa-clipboard-list"></i>';

    const divv = document.createElement('div');
    div.appendChild(divv);

    const span = document.createElement('span');
    span.className = 'task';
    span.title = str;
    if(str.length > 20) str = str.slice(0,20)+'...'
    span.innerHTML = str;
    
    divv.appendChild(span);

    const time = document.createElement('span');
    let date = new Date();
    date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    time.innerHTML = date;
    time.className = 'time';

    divv.appendChild(time);

    const deleteb = document.createElement('button');
    deleteb.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteb.className = 'delete';

    div.appendChild(deleteb);

    const editb = document.createElement('button');
    editb.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editb.className = 'edit';

    div.appendChild(editb);

    const firstItem = tasks[0];
    list.insertBefore(div, firstItem);
    list = document.getElementById('list');
    tasks.unshift(div);

    deleteb.addEventListener('click', () => deleteTodo(deleteb));

    editb.addEventListener('click', () => editTodo(editb));
}

deleteBtn1.addEventListener('click', () => deleteTodo(deleteBtn1));
deleteBtn2.addEventListener('click', () => deleteTodo(deleteBtn2));
deleteBtn3.addEventListener('click', () => deleteTodo(deleteBtn3));
deleteBtn4.addEventListener('click', () => deleteTodo(deleteBtn4));


function deleteTodo(ele){
    ele.parentElement.remove();
    tasks.splice(tasks.indexOf(ele.parentElement),1);
    list = document.getElementById('list');
}



editBtn1.addEventListener('click', () => editTodo(editBtn1));
editBtn2.addEventListener('click', () => editTodo(editBtn2));
editBtn3.addEventListener('click', () => editTodo(editBtn3));
editBtn4.addEventListener('click', () => editTodo(editBtn4));


function editTodo(ele){
    let change = ele.parentElement.children.item(1).children.item(0);
    let str = prompt('Edit the task here', change.title) ?? change.title;
    change.title = str;
    if(str.length > 20) str = str.slice(0,20)+'...'
    change.innerHTML = str;
    let date = new Date();
    date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    change.parentElement.children.item(1).innerHTML = date;
}

