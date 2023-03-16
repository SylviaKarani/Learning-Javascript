let todo1 = 'Finish ALX';
let todo2 = 'Buy Groceries';
let todo3 = 'Learn Javascript';
    
    function addToDo(todoTitle) {
        let element = document.createElement('div');
        element.innerText = todoTitle;
        document.body.appendChild(element);
     }
        
    addToDo(todo1);
    addToDo(todo2);
    addToDo(todo3);