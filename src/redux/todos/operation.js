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
    const { data } = await axios.get(
      `http://questify-project.herokuapp.com/api/todos/all`
    );
    console.log(data);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
export const showTodosDone = createAsyncThunk(
  "todos/done",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        `http://questify-project.herokuapp.com/api/todos/completed`
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const showTodosActive = createAsyncThunk(
  "todos/active",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        `http://questify-project.herokuapp.com/api/todos/active`
      );
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const addTodo = createAsyncThunk("todo/add", async (todo, thunkApi) => {
  try {
    const { data } = await axios.post(
      `http://questify-project.herokuapp.com/api/todos/add`,
      todo
    );

    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export const changeTodoStatus = createAsyncThunk(
  "todo/changeStatus",
  async ({ id, isActive }, thunkApi) => {
    try {
      const { data } = await axios.patch(
        `http://questify-project.herokuapp.com/api/todos/status/${id}`,
        { isActive: isActive }
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const changeTodo = createAsyncThunk(
  "todo/change",
  async ({ id, ...item }, thunkApi) => {
    try {
      const { data } = await axios.put(
        `http://questify-project.herokuapp.com/api/todos/update/${id}`,
        item
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (id, thunkApi) => {
    try {
      console.log(id, "action");
      const { data } = await axios.delete(
        `http://questify-project.herokuapp.com/api/todos/remove/${id}`,
        id
      );
      return id;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);