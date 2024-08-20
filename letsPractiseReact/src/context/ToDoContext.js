import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo",
            completed:false,

        }
    ],
    addToDo : (todo)=>{},
    deleteToDo : (id)=>{},
    updateToDo : (id,todo)=>{},
    toggleComplete : (id)=>{},
})


export const ToDoProvider = ToDoContext.Provider;
export const  useTodo = () => {
        return useContext(ToDoContext);
}