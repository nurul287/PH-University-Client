import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import { NODE_ENV } from "../config/config";
import authReducer from "./feature/auth/authSlice";
import counterReducer from "./feature/counter/counterSlice";
import baseApi from "./services/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterReducer,
    auth: authReducer,
  },
  devTools: NODE_ENV === "development",
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat([logger, baseApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
