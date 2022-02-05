import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlaWtpdi5hbm5AZ21haWwuY29tIiwiaWQiOiI2MWZlNmFlYjExZWE4NmY3NGJiN2IyYWUiLCJpc0FjdGl2YXRlZCI6dHJ1ZSwiaWF0IjoxNjQ0MDYzNTM1LCJleHAiOjE2NDQwNjUzMzV9.sJ05yntv8QQ5GgctYXX2ZbhppF_dd4XLmE5ZxcigGZs`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
export const showTodos = createAsyncThunk("todos/get", async (_, thunkApi) => {
  try {
    const result = await axios.get(
      `http://questify-project.herokuapp.com/api/todos/all`
    );
    token.set(result.token);
    console.log(result);
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
