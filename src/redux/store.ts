import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Category/slice";
import TransactionSlice from "./Transaction/slice";
import GenerateSlice from "./Generate/slice";
export const store = configureStore({
  reducer: {
    category: CategorySlice,
    transaction: TransactionSlice,
    generate: GenerateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
