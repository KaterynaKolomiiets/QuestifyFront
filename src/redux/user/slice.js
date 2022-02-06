import { createSlice } from "@reduxjs/toolkit";


import { userRegistration, userLogin, userLogout } from "./operation";


const initialState = {
  //   user: { name: "", email: "", isActivated: false},
  name: null,
  email: null,
  isActivated: false,
  token: null,
  //   sid: "",
  //   isCheckingUser: false,
  //   isLoading: false,
  //   isRefreshFullFilled: false,
  //   isGetUserFulfilledAfterRefresh: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {

    //   - do I need to save user information on Registration?
    // [userRegistration.fulfilled]: (state, action) => action.payload.user,
    [userLogin.fulfilled]: (state, action) => action.payload.user,
    [userLogout.fulfilled]: (state, action) => initialState,
    [userRegistration.fulfilled]: (state, action) => action.payload.user,

    // [userRegistration.pending](state) {
    //   state.isLoading = true;
    // },
  },
});

export default userSlice.reducer;
