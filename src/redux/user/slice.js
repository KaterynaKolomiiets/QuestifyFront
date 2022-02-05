import { createSlice } from "@reduxjs/toolkit";

import { userRegistration } from "./operation";

const initialState = {
  //   user: { name: "", email: "", isActivated: false},
  name: null,
  email: null,
  isActivated: false,
  token: null,
  //   sid: "",
  //   isLoggedIn: false,
  //   isCheckingUser: false,
  //   isLoading: false,
  //   isRegisterFullField: false,
  //   isRefreshFullFilled: false,
  //   isGetUserFulfilledAfterRefresh: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
    extraReducers: {
    [userRegistration.fulfilled] : (state, action) => action.payload.user
    // [userRegistration.pending](state) {
    //   state.isLoading = true;
    // },
  },
});

export default userSlice.reducer;
