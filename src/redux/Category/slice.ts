import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesTypes, CategoryInitialState } from "../../@types/categories";
import { categories } from "../../data/categories";

const initialState: CategoryInitialState = {
  categorySearch: "",
  categories: categories,
};

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    setCategorySearch(state, action: PayloadAction<string>) {
      state.categorySearch = action.payload;
    },
    addNewCategory(state, action: PayloadAction<CategoriesTypes>) {
      if (state.categories.length > 0) {
        const lastCategory = state.categories[state.categories.length - 1];
        action.payload.id = lastCategory.id + 1;
      } else {
        action.payload.id = 1;
      }
      state.categories.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<number>) {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    changeData(
      state,
      action: PayloadAction<{ id: number; changedCategory: CategoriesTypes }>
    ) {
      const indexOfObjToChange = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      state.categories[indexOfObjToChange] = action.payload.changedCategory;
    },
  },
});

export const { setCategorySearch, addNewCategory, deleteCategory, changeData } =
  CategorySlice.actions;

export default CategorySlice.reducer;
