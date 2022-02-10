import { createSlice } from '@reduxjs/toolkit';

import {
  userRegistration,
  userLogin,
  userLogout,
  userRefresh,
} from './operation';

const initialState = {
  userinfo: {
    name: null,
    email: null,
    isActivated: false,
    name: null,
    isLoggedIn: false,
  },
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userLogin.fulfilled]: (state, action) => {
      state.userinfo = action.payload.user;
      state.token = action.payload.accessToken;
      state.userinfo.isLoggedIn = true;
    },
    [userLogin.rejected]: (state, action) => {
      state.error = {
        message: action.payload.response.data.message,
      };
    },
    [userLogout.fulfilled]: (state, action) => initialState,
    [userLogout.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },
    [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userRegistration.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },
    [userRefresh.fulfilled]: (state, action) => {
      console.log('state1', { ...state.userinfo });
      state.userinfo = action.payload.user;
      state.userinfo.isLoggedIn = action.payload.user ? true : false;
      console.log('state2', state.userinfo);
      state.token = action.payload.accessToken;
    },
    [userRefresh.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },
  },
});

export default userSlice.reducer;
