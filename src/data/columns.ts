import { CategoriesTypes } from "../@types/categories";
import { TableColumn } from "../@types/table";
import { TransactionsTypes } from "../@types/transactions";

export const categoriesPageColumns: TableColumn<CategoriesTypes>[] = [
  { label: "ID", field: "id" },
  { label: "Назва", field: "name" },
  { label: "Опис", field: "description" },
];

export const transactionsPageColumns: TableColumn<TransactionsTypes>[] = [
  { label: "ID", field: "id" },
  { label: "Category", field: "category" },
  { label: "TypeOfOperation", field: "typeOfOperation" },
  { label: "Total", field: "total" },
  { label: "Date", field: "date" },
  { label: "Опис", field: "description" },
];
export const graphicPageColumns: TableColumn<TransactionsTypes>[] = [
  { label: "Категорія", field: "category" },
  { label: "Total", field: "total" },
];
