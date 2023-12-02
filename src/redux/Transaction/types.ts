import { TransactionsTypes } from "../../@types/transactions";

export interface TransactionInitialStateTypes {
  transactions: TransactionsTypes[];
  selectedCategory: string;
  error: string | null;
  loading: boolean;
}
