import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TransactionInitialStateTypes,
  TransactionsTypes,
} from "../../@types/transactions";
import { transactions } from "../../data/transactions";

const initialState: TransactionInitialStateTypes = {
  transactions: transactions,
  selectedCategory: "",
};

const TransactionSlice = createSlice({
  name: "Transaction",
  initialState,
  reducers: {
    deleteTransaction(state, action: PayloadAction<number>) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
    addNewTransaction(state, action: PayloadAction<TransactionsTypes>) {
      if (state.transactions.length > 0) {
        const lastCategory = state.transactions[state.transactions.length - 1];
        action.payload.id = lastCategory.id + 1;
      } else {
        action.payload.id = 1;
      }
      state.transactions.push(action.payload);
    },
    changeData(state, action: PayloadAction<TransactionsTypes>) {
      const indexOfObjToChange = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      state.transactions[indexOfObjToChange] = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  deleteTransaction,
  addNewTransaction,
  changeData,
  setSelectedCategory,
} = TransactionSlice.actions;

export default TransactionSlice.reducer;
