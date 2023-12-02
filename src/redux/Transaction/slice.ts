import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionInitialStateTypes } from "./types";
import {
  fetchTransactions,
  addNewTransaction,
  changeData,
  deleteTransaction,
} from "./asyncActions";
import { isError } from "../../utils/reduxUtils";

const initialState: TransactionInitialStateTypes = {
  transactions: [],
  selectedCategory: "",
  error: null,
  loading: false,
};

const TransactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
      })
      .addCase(addNewTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      .addCase(changeData.fulfilled, (state, action) => {
        const indexOfObjToChange = state.transactions.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        state.transactions[indexOfObjToChange] = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setSelectedCategory } = TransactionSlice.actions;

export default TransactionSlice.reducer;
