import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesTypes, CategoryInitialState } from "../../@types/categories";
import { categories } from "../../data/categories";

const initialState: CategoryInitialState = {
  categorySearch: "",
  newNameCategory: "",
  newDescriptionCategory: "",
  categories: categories,
};

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    setCategorySearch(state, action: PayloadAction<string>) {
      state.categorySearch = action.payload;
    },
    setNewNameCategory(state, action: PayloadAction<string>) {
      state.newNameCategory = action.payload;
    },
    setNewDescriptionCategory(state, action: PayloadAction<string>) {
      state.newDescriptionCategory = action.payload;
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
  },
});

export const {
  setCategorySearch,
  setNewNameCategory,
  setNewDescriptionCategory,
  addNewCategory,
  deleteCategory,
} = CategorySlice.actions;

export default CategorySlice.reducer;
