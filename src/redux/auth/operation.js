import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000";

export const userSignUp = createAsyncThunk("auth/signup", async (user) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, user);
    //   token.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
