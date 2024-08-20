import React, { useEffect, useState} from 'react'
import { ToDoProvider } from './context/ToDoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos,setTodos]= useState([]);
  const addToDo = (todo) =>{
      if(todo){
        setTodos((perv)=> [...perv,{id:Date.now(),...todo}])
      }
  }

  const deleteToDo = (id) =>{
   setTodos((pervTodos)=> pervTodos.filter((todo)=> todo.id !== id))
  }

  const updateToDo = (id,todo) =>{
    setTodos((pervTodos)=>pervTodos.map((pervTodo)=> pervTodo.id == id ? todo : pervTodo   ))
  }

  const toggleComplete = (id)=>{
    setTodos((pervTodos)=>pervTodos.map((pervTodo)=> pervTodo.id == id ? {...pervTodo,completed:!pervTodo.completed} : pervTodo   ))
  }
   useEffect(() => {
        const todo = JSON.parse(localStorage.getItem("todos"));
        if (todo && todo.length > 0) {
            setTodos(todo);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
  return (

    <ToDoProvider value={{todos,addToDo,deleteToDo,updateToDo,toggleComplete}}>  

      <div className='w-full h-screen'> 
      <div className='mt-10'><h1 className='text-5xl w-full text-teal-600 tracking-widest font-bold text-center'>MANAGE TODOS</h1></div>
      <div className='w-1/2 mx-auto mt-10'>
        <TodoForm />
      </div>
        <div className="flex flex-wrap gap-y-3 w-1/2 mx-auto mt-4 ">
                        {todos.map((singleTodo) => (
                            <div key={singleTodo.id} className="w-full py-3">
                                <TodoItem todo={singleTodo} />
                            </div>
                        ))}
                    </div>

      </div>

    </ToDoProvider>

  )
}

export default App
