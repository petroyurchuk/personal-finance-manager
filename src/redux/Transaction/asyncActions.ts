import { createAsyncThunk } from "@reduxjs/toolkit";
import { TransactionsTypes } from "../../@types/transactions";
import axios from "axios";

export const fetchTransactions = createAsyncThunk<
  TransactionsTypes[],
  void,
  { rejectValue: string }
>("transaction/fetchTransaction", async (_, { rejectWithValue }) => {
  const { data } = await axios.get("http://localhost:8800/transactions");
  if (!data) return rejectWithValue("error with fetching transactions");
  return data;
});

export const deleteTransaction = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("transaction/deleteTransaction", async (id, { rejectWithValue }) => {
  const { data } = await axios.delete(
    `http://localhost:8800/transactions/${id}`
  );
  if (!data) return rejectWithValue("Can't delete transaction");
  return id;
});

export const addNewTransaction = createAsyncThunk<
  TransactionsTypes,
  TransactionsTypes,
  { rejectValue: string }
>(
  "transaction/addNewTransaction",
  async (newTransaction, { rejectWithValue }) => {
    const { data } = await axios.post("http://localhost:8800/transactions", {
      category: newTransaction.category,
      typeOfOperation: newTransaction.typeOfOperation,
      total: newTransaction.total,
      date: newTransaction.date,
      description: newTransaction.description,
    });
    if (!data) return rejectWithValue("Can't add new transaction");
    return newTransaction;
  }
);

export const changeData = createAsyncThunk<
  TransactionsTypes,
  TransactionsTypes,
  { rejectValue: string }
>("transaction/changeData", async (updatedTransaction, { rejectWithValue }) => {
  const { data } = await axios.put(
    `http://localhost:8800/transactions/${updatedTransaction.id}`,
    updatedTransaction
  );
  if (!data) return rejectWithValue("Can't update data");
  return data;
});
