document.addEventListener("DOMContentLoaded", () => {
});


let from=document.getElementById('create-task-form');

from.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input = document.querySelector('input#new-task-description');
    const list = document.querySelector('ul#tasks');
    const li = document.createElement('li');
    let inputValue = input.value;
    li.textContent = inputValue;
    list.appendChild(li);
    from.reset();

})
