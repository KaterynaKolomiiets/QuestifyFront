import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://questify-project.herokuapp.com/api/users";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
}

export const userRegistration = createAsyncThunk("auth/registration", async (user) => {
  console.log(user)
  try {
    const { data } = await axios.post(`${BASE_URL}/registration`, user);
    console.log(data)
    token.set(data.accessToken);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const userLogin = createAsyncThunk("auth/login", async (user) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/login`, user);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const userLogoutOperation = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/logout`);
      token.unset();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
// check address
export const userActivate = createAsyncThunk("auth/activate", async (user) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/activate`, user);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const userRefresh = createAsyncThunk("auth/refresh", async (user) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/refresh`, user);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const userResetPassword = createAsyncThunk("auth/reset-password", async (user) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/reset-password`, user);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const userChangePassword = createAsyncThunk("auth/change-password", async (user) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/change-password`, user);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});