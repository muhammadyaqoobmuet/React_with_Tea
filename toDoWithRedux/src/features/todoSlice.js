import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [], // Start with an empty array
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToto: (state, action) => {
            state.todo.push({ id: nanoid(), text: action.payload });
        },
        clearTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
    },
});

export default todoSlice.reducer;
export const { addToto, clearTodo } = todoSlice.actions;
