import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todos from "../redux/todos/reducer";
import userSlice from "./user/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "user"],
};

const rootReducer = combineReducers({
  todos: todos,
  user: persistReducer(userPersistConfig, userSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
