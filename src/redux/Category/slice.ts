import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryInitialState } from "./types";
import {
  fetchCategories,
  deleteCategory,
  addNewCategory,
  changeData,
} from "./asyncActions";
import { isError } from "../../utils/reduxUtils";

const initialState: CategoryInitialState = {
  categorySearch: "",
  categories: [],
  error: null,
  loading: false,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategorySearch(state, action: PayloadAction<string>) {
      state.categorySearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload
        );
      })
      .addCase(addNewCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(changeData.fulfilled, (state, action) => {
        const indexOfObjToChange = state.categories.findIndex(
          (category) => category.id === action.payload.id
        );
        state.categories[indexOfObjToChange] = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setCategorySearch } = CategorySlice.actions;

export default CategorySlice.reducer;
