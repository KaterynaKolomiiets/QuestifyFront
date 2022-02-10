import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './interceptor';
import { get_cookie } from './helper';

const BASE_URL = 'http://questify-project.herokuapp.com/api/users';

// const BASE_URL = 'http://localhost:8083/api/users';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegistration = createAsyncThunk(
  'auth/registration',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/registration`, user);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const userLogin = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, user);
      localStorage.setItem('token', data.accessToken);

      document.cookie = `refreshToken=${data.refreshToken}`;

      token.set(data.accessToken);
      console.log(data);
      return data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error);
    }
  },
);

export const userLogout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const token = get_cookie('refreshToken');
    const { data } = await api.get(`${BASE_URL}/logout`, {
      withCredentials: true,
      headers: {
        update: `${token}`,
      },
    });
    document.cookie = 'refreshToken=-1;expires=Thu, 01 Jan 1970 00:00:01 GMT';
    token.unset();
    console.log('data', data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
// check address
// export const userActivate = createAsyncThunk("auth/activate", async (id) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/activate/${id}`, id);
//       console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// });

export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('User is logged out');
    }
    token.set(persistedToken);
    try {
      const token = get_cookie('refreshToken');
      const { data } = await axios.get(`${BASE_URL}/refresh`, {
        withCredentials: true,
        headers: {
          update: `${token}`,
        },
      });
      localStorage.setItem('token', data.accessToken);
      console.log(data);
      document.cookie = `refreshToken=${data.refreshToken}`;
      console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const userRefresh = createAsyncThunk("auth/refresh", async (user) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/refresh`, user);
//       console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// export const userResetPassword = createAsyncThunk(
//   "auth/reset-password",
//   async (user) => {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/reset-password`, user);
//       console.log(data);
//       return data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// );

// export const userChangePassword = createAsyncThunk("auth/change-password", async (user) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/change-password`, user);
//       console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// });
export const userResetPassword = createAsyncThunk(
  'auth/reset-password',
  async (user, thunkAPI) => {
    try {
      console.log('user', user);
      const { data } = await axios.post(`${BASE_URL}/reset-password`, user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const userChangePassword = createAsyncThunk(
  'auth/change-password',
  async ({ password, link }, thunkAPI) => {
    console.log('linklink', link);
    console.log('password', password);
    try {
      const { data } = await axios.post(`${BASE_URL}/change-password/${link}`, {
        password,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
