import { createReducer } from '@reduxjs/toolkit';
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
} from './operation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTodos: [],
  completedTodos: [],
  newTodoCard: '',
  error: null,
};
const todoSliceAll = createSlice({
  name: 'todos',
  initialState,
  extraReducers: {
    [addNewCard.fulfilled](state, action) {
      state.activeTodos = [action.payload.result, ...state.activeTodos];
      state.newTodoCard = null;
    },
    [addNewCard.rejected]: (state, action) => {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },
    [deleteNewTodo.fulfilled](state, action) {
      state.newTodoCard = action.payload;
      state.error = null;
    },
    [deleteNewTodo.rejected](state, action) {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },
    [addCardToState.fulfilled](state, action) {
      state.newTodoCard = action.payload;
    },
    [addCardToState.rejected](state, action) {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },

    [showTodosDone.fulfilled](state, action) {
      state.completedTodos = action.payload;
    },

    [showTodosDone.rejected](state, action) {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },

    [showTodosActive.fulfilled](state, action) {
      state.activeTodos = action.payload;
    },
    [showTodosActive.rejected](state, action) {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },

    [addTodo.fulfilled]: (state, action) => {
      state.activeTodos = [action.payload.result, ...state.activeTodos];
    },

    [addTodo.rejected]: (state, action) => {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.activeTodos = state.activeTodos.filter(item => {
        return item._id !== action.payload;
      });
      state.completedTodos = state.completedTodos.filter(
        item => item._id !== action.payload,
      );
    },

    [deleteTodo.rejected]: (state, action) => {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },

    [changeTodoStatus.fulfilled]: (state, action) => {
      state.activeTodos = state.activeTodos.filter(item => {
        return item._id !== action.payload.result._id;
      });
      state.completedTodos = [...state.completedTodos, action.payload.result];
    },

    [changeTodoStatus.rejected]: (state, action) => {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.response.data.message,
      };
    },

    [changeTodo.fulfilled]: (state, action) => {
      state.activeTodos = state.activeTodos.filter(item => {
        return item._id !== action.payload.result._id;
      });
      state.activeTodos = [...state.activeTodos, action.payload.result];
    },

    [changeTodo.rejected]: (state, action) => {
      state.error = {
        status: action.payload.response.status,
        message: action.payload.message,
      };
    },
  },
});

export default todoSliceAll.reducer;
