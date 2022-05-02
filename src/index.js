document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newTaskDescription = document.getElementById('new-task-description')
    newToDo(newTaskDescription.value)
    form.reset()
  })
});

document.createElement(form)


function newToDo(todo) {
  console.log(todo)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo}  `
  btn.textContent = 'x'
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}