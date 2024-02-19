import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user";
import tabReducer from "./features/currentTab";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tab: tabReducer
  },
})