// import { createSlice } from "@reduxjs/toolkit";

// import {userSignUp, userLogIn} from './operation'


// const initialState = {
//   user: { name: "", email: "", password: ""},
//   token: "",
// //   sid: "",
//   isLoggedIn: false,
// //   isCheckingUser: false,
//   isLoading: false,
//   isRegisterFullField: false,
//   isRefreshFullFilled: false,
//   isGetUserFulfilledAfterRefresh: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   extraReducers: {
//     [userSignUp.pending](state) {
//       state.isLoading = true;
//     },
//     // [register.pending](state) {
//     //     state.isLoading = true;
//     // },
//     // [register.fulfilled](state, action) {
//     //   state.user = action.payload.data;
//     //   state.isLoading = false;
//     //   // state.isLoggedIn = true;
//     //   state.isRegisterFullField = true;
//     //   state.socialAuth = action.payload.socialAuth;
//     // },
//   },
// });

// export default userSlice.reducer;