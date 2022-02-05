import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {userRegistration, userLogin} from './operation'


const nameReducer = createReducer(null, {
  [userRegistration.fulfilled]: (_, action) => action.payload.name,
});

const emailReducer = createReducer(null, {
  [userRegistration.fulfilled]: (_, action) => action.payload.email,
});

const tokenReducer = createReducer(null, {
  [userRegistration.fulfilled]: (_, action) => action.payload.token,
});

const isLoggedInReducer = createReducer(false, {
  [userLogin.fulfilled]: (_, action) => action.payload.token,
})

export const userReducer = combineReducers({
  name: nameReducer,
  token: tokenReducer,
  email: emailReducer,
  isLoggedIn: isLoggedInReducer,
});