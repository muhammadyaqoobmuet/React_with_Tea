import { useContext, createContext } from 'react';

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "this is todo msg",
            completed: false,
        },
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => {
    return useContext(ToDoContext);
};
