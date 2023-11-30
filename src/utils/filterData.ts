import { CategoriesTypes } from "../@types/categories";
import { TransactionsTypes } from "../@types/transactions";

export const filterData = <T extends CategoriesTypes | TransactionsTypes>(
  categories: T[],
  filterBy: keyof T,
  textComparison: string
) => {
  return textComparison
    ? categories.filter((category) => {
        const value = category[filterBy];
        if (typeof value !== "string") return false;
        return value
          .toLowerCase()
          .includes(textComparison.toLowerCase().trim());
      })
    : categories;
};
export const filterDataById = <T extends CategoriesTypes | TransactionsTypes>(
  items: T[],
  id: number
) => {
  return items.find((item) => item.id === id);
};
export const filterTransactions = <T extends TransactionsTypes>(
  items: T[],
  gotValue: string | string[]
) => {
  if (Array.isArray(gotValue)) {
    return items.filter(
      (item) =>
        item.TypeOfOperation === gotValue[0] && item.category === gotValue[1]
    );
  }
  return items.filter((item) => item.TypeOfOperation === gotValue);
};
export const filterDatesInRange = (
  items: TransactionsTypes[],
  dateFrom: string,
  dateTo: string
) => {
  return items.filter((item) => {
    const date = new Date(item.date);
    return date >= new Date(dateFrom) && date <= new Date(dateTo);
  });
};
export const total = (items: TransactionsTypes[]) => {
  return items.length > 1
    ? items.reduce((acc, cur) => acc + cur.total, 0)
    : items[0].total;
};
