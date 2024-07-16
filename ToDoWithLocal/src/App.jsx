import { useState, useEffect } from 'react';
import './App.css';
import { ToDoProvider } from './context/ToDoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = useState([]);

    const addToDo = (todo) => {
        setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
    };

    const deleteToDo = (id) => {
        setTodos((prevTodo) => prevTodo.filter((eachTodo) => eachTodo.id !== id));
    };

    const updateToDo = (id, todo) => {
        setTodos((prevTodos) =>
            prevTodos.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
        );
    };

    const toggleComplete = (id) => {
        setTodos((prevTodo) =>
            prevTodo.map((eachTodo) =>
                eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
            )
        );
    };

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
        <ToDoProvider value={{ todos, addToDo, deleteToDo, updateToDo, toggleComplete }}>
            <div className="bg-[#171d32] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto bg-[#0811314d] shadow-orange-50 shadow-inner rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl text-slate-500 tracking-widest font-extrabold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((singleTodo) => (
                            <div key={singleTodo.id} className="w-full">
                                <TodoItem todo={singleTodo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ToDoProvider>
    );
}

export default App;
