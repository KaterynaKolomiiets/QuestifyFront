import { createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  showTodos,
  showTodosActive,
  showTodosDone,
} from "./operation";
import { createSlice } from "@reduxjs/toolkit";

// export const todosReducer = createReducer([], {
//   //   [userSignUp.fulfilled]: (_, action) => action.payload.token,
//   //   [addContact]: (state, { payload }) => {
//   //     return [...state, payload];
//   //   },
//   //   [delContact]: (state, { payload }) => {
//   //     return state.filter((item) => item.id !== payload);
//   //   },
//   //   [addContacts]: (_, { payload }) => {
//   //     return payload;
//   //   },
// });
const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: {
    // [showTodos.pending](state,action) {
    //   // state.isLoading = true;
    // },
    // [showTodos.fulfilled](state, action) {
    //   state.todos = action.payload.data;
    //   // state.isLoading = false;
    // },
    [showTodos.fulfilled]: (_, action) => action.payload,
    [showTodosDone.fulfilled]: (_, action) => action.payload,
    [showTodosActive.fulfilled]: (_, action) => action.payload,
    [showTodosDone.fulfilled]: (_, action) => action.payload,
    [addTodo.fulfilled]: (state, action) => [
      ...state.todos,
      action.payload.result,
    ],

    // [showTodos.fulfilled](state, action) {
    //   state.todos = action.payload;
    // },
    // [addTodo.fulfilled](state, action) {
    //   state.todos = action.payload.data;

    //   state.isLoading = false;
    // },
  },
});

export default todoSlice.reducer;
