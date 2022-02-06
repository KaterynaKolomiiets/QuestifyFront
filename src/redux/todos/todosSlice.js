import { createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  changeTodo,
  changeTodoStatus,
  deleteTodo,
  showTodos,
  showTodosActive,
  showTodosDone,
} from "./operation";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeTodos: [], completedTodos: [] };
const todoSliceAll = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [showTodosDone.fulfilled](state, action) {
      state.completedTodos = action.payload;
    },
    [showTodosActive.fulfilled](state, action) {
      state.activeTodos = action.payload;
    },

    [addTodo.fulfilled]: (state, action) => {
      state.activeTodos = [...state.activeTodos, action.payload.result];
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.activeTodos = state.activeTodos.filter((item) => {
        return item._id !== action.payload;
      });
      state.completedTodos = state.completedTodos.filter(
        (item) => item._id !== action.payload
      );
    },
    [changeTodoStatus.fulfilled]: (state, action) => {
      state.activeTodos = state.activeTodos.filter((item) => {
        return item._id !== action.payload.result._id;
      });
      state.completedTodos = [...state.completedTodos, action.payload.result];
    },
    [changeTodo.fulfilled]: (state, action) => {
      state.activeTodos = state.activeTodos.filter((item) => {
        return item._id !== action.payload.result._id;
      });
      state.activeTodos = [...state.activeTodos, action.payload.result];
    },
  },
});

export default todoSliceAll.reducer;
