import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category/slice";

export const store = configureStore({
  reducer: {
    category: CategorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
