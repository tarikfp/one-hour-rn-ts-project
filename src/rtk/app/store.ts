import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

export const combinedReducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
});

export type ReduxRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = any;
