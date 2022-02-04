import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {userSignUp} from './operation'

const tokenReducer = createReducer(null, {
//   [userSignUp.fulfilled]: (_, action) => action.payload.token,
});

export const authReducer = combineReducers({
  // user: userReducer,
  token: tokenReducer,
  //   isLoggedIn: isLoggedInReducer,
  //   isFetchingCurrent: isFetchingCurrentReducer,
});