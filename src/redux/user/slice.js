import { createSlice } from '@reduxjs/toolkit';

import {
  userRegistration,
  userLogin,
  userLogout,
  userRefresh,
} from './operation';

const initialState = {
  userinfo: { name: null, email: null, isActivated: false },
  // name: null,
  // email: null,
  isActivated: false,
  token: null,
  error: null,
  //   isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    // [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userLogin.fulfilled]: (state, action) => {
      state.userinfo = action.payload.user;
      state.token = action.payload.accessToken;
    },
    [userLogin.rejected]: (state, action) => {
      state.error = {
        message: 'bad request', // fix this rout everyvere
      };
    },
    [userLogout.fulfilled]: (state, action) => initialState,
    [userLogout.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.message, // fix this rout everyvere
      };
    },
    [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userRegistration.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.message, // fix this rout everyvere
      };
    },
    [userRefresh.fulfilled]: (state, action) => {
      state.userinfo = action.payload.user;
      state.token = action.payload.accessToken;
    },
    [userRefresh.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.message, // fix this rout everyvere
      };
    },
  },
});

export default userSlice.reducer;
