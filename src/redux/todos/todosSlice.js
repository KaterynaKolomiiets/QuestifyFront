import { createReducer } from "@reduxjs/toolkit";
import {
  addCardToState,
  addNewCard,
  addTodo,
  changeTodo,
  changeTodoStatus,
  deleteNewTodo,
  deleteTodo,
  showTodos,
  showTodosActive,
  showTodosDone,
} from "./operation";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeTodos: [], completedTodos: [], newTodoCard: "" };
const todoSliceAll = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [addNewCard.fulfilled](state, action) {
      state.activeTodos = [action.payload.result, ...state.activeTodos];
      state.newTodoCard = null;
    },
    [deleteNewTodo.fulfilled](state, action) {
      state.newTodoCard = action.payload;
    },
    [addCardToState.fulfilled](state, action) {
      state.newTodoCard = action.payload;
    },
    [showTodosDone.fulfilled](state, action) {
      state.completedTodos = action.payload;
    },
    [showTodosActive.fulfilled](state, action) {
      state.activeTodos = action.payload;
    },

    [addTodo.fulfilled]: (state, action) => {
      state.activeTodos = [action.payload.result, ...state.activeTodos];
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
