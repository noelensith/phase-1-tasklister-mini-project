document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildList(e.target["new-task-description"].value);
      form.reset();
  })
});

function buildList(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', removeTodo)
  btn.textContent = ' x ';
  p.textContent = `${todo} `;
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function removeTodo(e) {
  e.target.parentNode.remove();
}

