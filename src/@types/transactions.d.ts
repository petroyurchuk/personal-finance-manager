export interface TransactionsTypes {
  id: number;
  category: string;
  TypeOfOperation: string;
  total: number;
  date: string;
  description: string;
}

export interface TransactionInitialStateTypes {
  transactions: TransactionsTypes[];
  selectedCategory: string;
}
