import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showTodos = createAsyncThunk("todos/get", async (_, thunkApi) => {
  try {
    const result = await axios.get("/todos");
    return result;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
export const addTodo = createAsyncThunk("todo/add", async (todo, thunkApi) => {
  try {
    const result = await axios.post("/todos", todo);
    return result;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
export const changeTodo = createAsyncThunk(
  "todo/change",
  async (id, thunkApi) => {
    try {
      const result = await axios.patch("/todos/:id", id);
      return result;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (id, thunkApi) => {
    try {
      const result = await axios.delete("/todos/:id", id);
      return result;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
