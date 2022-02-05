import { createReducer } from "@reduxjs/toolkit";
import { showTodos } from "./operation";
import { createSlice } from "@reduxjs/toolkit";

// export const todosReducer = createReducer([], {
//   //   [userSignUp.fulfilled]: (_, action) => action.payload.token,
//   //   [addContact]: (state, { payload }) => {
//   //     return [...state, payload];
//   //   },
//   //   [delContact]: (state, { payload }) => {
//   //     return state.filter((item) => item.id !== payload);
//   //   },
//   //   [addContacts]: (_, { payload }) => {
//   //     return payload;
//   //   },
// });
const initialState = {
  user: { name: "", email: "", password: "" },
  token: "",
  sid: "",
  isLoggedIn: false,
  isCheckingUser: false,
  socialAuth: false,
  userBalance: null,
  isLoading: false,
  isRegisterFullField: false,
  isRefreshFullFilled: false,
  isGetUserFulfilledAfterRefresh: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,

  extraReducers: {
    [showTodos.pending](state) {
      state.isLoading = true;
    },
    [showTodos.fulfilled](state, action) {
      state.user = action.payload.data;
      state.isLoading = false;
      // state.isLoggedIn = true;
      state.isRegisterFullField = true;
      state.socialAuth = action.payload.socialAuth;
    },
  },
});

export default todoSlice.reducer;
