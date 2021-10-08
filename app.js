const input = document.getElementById('input')
const submit = document.getElementById('submit')
const tableContainer = document.querySelector('.table-container')
const toDoContainer = document.querySelector('.todo-container')
const btns = document.querySelectorAll('button')


// kiíratás ha betöltött az oldal
window.addEventListener('DOMContentLoaded', write())

// eseméynyfigyelés a submit gomb megnyomására, és div,paragraph és done, delete gombok létrehozása
submit.addEventListener('click', (e)=>{
  e.preventDefault()

  var paragraph = document.createElement('p')
  paragraph.innerText= input.value
  paragraph.classList.add('todo')
  save(input.value)
  var lisItem = document.createElement('div')
  lisItem.classList.add('list-item')
  lisItem.appendChild(paragraph)
  var btnDone = document.createElement('button')
  btnDone.textContent = "Done"
  btnDone.classList.add('done')
  var btnDelete = document.createElement('button')
  btnDelete.textContent ="Delete"
  btnDelete.classList.add('delete')
  var btnContainer = document.createElement('div')
  btnContainer.classList.add('btn')
  btnContainer.appendChild(btnDone)
  btnContainer.appendChild(btnDelete)
  lisItem.appendChild(btnContainer)
  toDoContainer.appendChild(lisItem)
  input.value = ""

  
})

// eseményfigyelés a done és delete gombokba

window.addEventListener('click', (e)=>{
 var btn = (e).target.classList
  if(btn.value === 'done'){
    var todoListItem = (e).target.parentElement.parentElement
    todoListItem.classList.toggle('toDoItemDone')
  }if(btn.value === 'delete'){
    var todoListItem = (e).target.parentElement.parentElement
    todoListItem.remove()
    let deleteItem = todoListItem.children[0].textContent
    itemDelete(deleteItem)
    
  }
})


// helyi tárolóba mentés

function save(todoValue){

  let toDo

  if(localStorage.getItem('toDo')=== null){
    toDo = []
  }else{
    toDo = JSON.parse(localStorage.getItem('toDo'))
  }

  toDo.push(todoValue)
  localStorage.setItem('toDo', JSON.stringify(toDo))
 
 }
 

 // kiíratás a helyi tárolóból


 function write(){

  let toDo

  if(localStorage.getItem('toDo')=== null){
    toDo = []
  }else{
    toDo = JSON.parse(localStorage.getItem('toDo'))
  }

   toDo.forEach(item => {

    var paragraph = document.createElement('p')
    paragraph.innerText= item
    paragraph.classList.add('todo')
    var lisItem = document.createElement('div')
    lisItem.classList.add('list-item')
    lisItem.appendChild(paragraph)
    var btnDone = document.createElement('button')
    btnDone.textContent = "Done"
    btnDone.classList.add('done')
    var btnDelete = document.createElement('button')
    btnDelete.textContent ="Delete"
    btnDelete.classList.add('delete')
    var btnContainer = document.createElement('div')
    btnContainer.classList.add('btn')
    btnContainer.appendChild(btnDone)
    btnContainer.appendChild(btnDelete)
    lisItem.appendChild(btnContainer)
    toDoContainer.appendChild(lisItem)
    input.value = ""
        
   });

 }

 // törlés a helyi tárolóból 

 function itemDelete(deleteItem){
  let toDo

  if(localStorage.getItem('toDo')=== null){
    toDo = []
  }else{
    toDo = JSON.parse(localStorage.getItem('toDo'))
  }

 let deleteIndex =  toDo.indexOf(deleteItem)

 toDo.splice(deleteIndex, 1)

 localStorage.setItem('toDo', JSON.stringify(toDo))

 console.log(deleteIndex)
 

 }




