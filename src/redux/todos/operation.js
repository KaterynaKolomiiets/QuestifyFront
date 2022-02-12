import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import api from '../user/interceptor';

const BASE_URL = 'https://questify-project.herokuapp.com/api/todos';

export const addCardToState = createAsyncThunk(
  'todos/addCard',
  async (type, thunkAPI) => {
    return {
      title: '',
      category: 'FAMILY',
      type: type,
      time: Date.now(),
      level: 'Normal',
    };
  },
);
export const deleteNewTodo = createAsyncThunk(
  'todos/deleteNewToto',
  async (_, thunkAPI) => {
    return null;
  },
);
export const addNewCard = createAsyncThunk(
  'todos/addNewCard',
  async (todo, thunkAPI) => {
    try {
      const { data } = await api.post(`${BASE_URL}/add`, todo);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const showTodos = createAsyncThunk('todos/get', async (_, thunkAPI) => {
  try {
    const { data } = await api.get(`${BASE_URL}/all`);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
export const showTodosDone = createAsyncThunk(
  'todos/done',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/completed`);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const showTodosActive = createAsyncThunk(
  'todos/active',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/active`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
export const addTodo = createAsyncThunk('todo/add', async (todo, thunkAPI) => {
  try {
    const { data } = await api.post(`${BASE_URL}/add`, todo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const changeTodoStatus = createAsyncThunk(
  'todo/changeStatus',
  async ({ id, isActive }, thunkAPI) => {
    try {
      const { data } = await api.patch(`${BASE_URL}/status/${id}`, {
        isActive: isActive,
      });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const changeTodo = createAsyncThunk(
  'todo/change',
  async ({ id, ...item }, thunkAPI) => {
    try {
      const { data } = await api.put(`${BASE_URL}/update/${id}`, item);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/delete',
  async (id, thunkAPI) => {
    try {
      await api.delete(`${BASE_URL}/remove/${id}`, id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
