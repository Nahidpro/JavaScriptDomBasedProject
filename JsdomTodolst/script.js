const Todolist={
    State:[{
        title:'Write Some code',id:Math.random()
    },{
        title:'Read Book',id:Math.random()
    }],
    setState:function(todoObj) {
        this.State.push(todoObj)
    },
    getState:function () {
        return this.State;
    }
}



// Todolist.setState({title:'Write code', id:Math.random()})
// Todolist.setState({title:'Make Coffe', id:Math.random()})






let Todo = {
    state:{
        title:'',
        id:Math.random()

    },
    setState:function(Title) {
        this.state.title = Title
    },
    getState:function() {
        return this.state
        
    }
}

textfield.value= Todo.getState().title



const todolistContainer = document.getElementById('TodoListContainer')




function  onchangeHandler(elementId,callback) {
    const element =document.getElementById(elementId);
    element.onchange =  (event) => {
        event.preventDefault()
       return callback(event)}
}


onchangeHandler('textfield',(event)=>
   Todo.setState(event.target.value)
   ) 
    



function elementCreator(elementType,atributeType,atributeName) {
    const element = document.createElement(elementType)
     element.setAttribute(atributeType,atributeName) 

    return element;
}




function createNewTodo(todo) {
  
const TodoCard= todolistContainer.appendChild(elementCreator('h1', 'id', 'TodoCard'))


const todotext= TodoCard.appendChild( elementCreator('div','id','todotext'))


const TodoCardButton= TodoCard.appendChild( elementCreator('div','id','TodoCardButton'))

// const editbutton =TodoCardButton.appendChild(elementCreator('button','id', 'editButton'))
// editbutton.innerText='Edit'


// const DeleteButton =TodoCardButton.appendChild(elementCreator('button','id', 'DeleteButton'))
// DeleteButton.innerText='Delete'

const Todotitle = todotext.appendChild(elementCreator('h6','id','todotitle'))
     Todotitle.innerText= todo.title

//      setEventListener('DeleteButton','click',()=> {
//      const UpdateTodoList = Todolist.getState().filter((td) =>  console.log('Something'))
       
//    })


//    setEventListener('editButton','click',()=> {
      
       
// })

}







function setEventListener(elementId, eventType, callback) {

    try{const element = document.getElementById(elementId);
    
      element.addEventListener(eventType, callback);
      
     
    }catch(err){
     console.log(err.message)
     console.log("Error Occur on EventListener Function")
      }
    }





    

    setEventListener('SubmitButton','click',()=> {
        Todolist.setState(Todo.getState())

        createNewTodo(Todo.getState())
       
    })
    Todolist.getState().forEach((todo) => createNewTodo(todo))


    
 






// function setinnertext(elementId, innerText) {
//     try{ const htmlElement = document.getElementById(elementId);
//     htmlElement.innerText = innerText;
//     return htmlElement;
//   }catch (err){
//     console.log(err.message)
//     console.log('there was an error While setting InnerText on setinnertext function')
//     console.log(err)
//   }
    
//   }

