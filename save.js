function save(todoValue){

  
  if(localStorage.getItem('toDo')== null){
    localStorage.setItem('toDo', '[]')
  }

  var old_Data = JSON.parse(localStorage.getItem('toDo'));
   old_Data.push(todoValue)

  localStorage.setItem('toDo', JSON.stringify(old_Data))
 }