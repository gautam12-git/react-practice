import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload || String(action.payload).trim() === "") return;
      state.push({
        id: nanoid(),
        text: action.payload,
      });
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
