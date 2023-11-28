import { CategoriesTypes } from "../@types/categories";
import { categories } from "../data/categories";

export const filterData = (
  categories: CategoriesTypes[],
  filterBy: keyof CategoriesTypes,
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
export const filterDataById = (categories: CategoriesTypes[], id: number) => {
  return categories.find((category) => category.id === id);
};
export const changeData = (id: number, changedCategory: CategoriesTypes) => {
  const indexOfObjToChange = categories.findIndex(
    (category) => category.id === id
  );
  categories[indexOfObjToChange] = changedCategory;
};
