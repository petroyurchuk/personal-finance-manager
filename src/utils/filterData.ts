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
