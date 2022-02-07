import { createSlice } from "@reduxjs/toolkit";

import {
  userRegistration,
  userLogin,
  userLogout,
  userRefresh,
} from "./operation";

const initialState = {
  userinfo: { name: null, email: null, isActivated: false },
  // name: null,
  // email: null,
  isActivated: false,
  token: null,
  //   isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    // [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userLogin.fulfilled]: (state, action) => {
      state.userinfo = action.payload.user;
      state.token = action.payload.accessToken;
    },
    [userLogout.fulfilled]: (state, action) => initialState,
    [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userRefresh.fulfilled]: (state, action) => {
      state.userinfo = action.payload.user;
      state.token = action.payload.accessToken;
    },
  },
});

export default userSlice.reducer;
