export interface TransactionsTypes {
  id: number;
  category: string;
  TypeOfOperation: string;
  total: string;
  date: string;
  description: string;
}

export interface TransactionInitialStateTypes {
  transactions: TransactionsTypes[];
  selectedCategory: string;
}
