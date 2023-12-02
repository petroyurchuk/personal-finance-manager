import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoriesTypes } from "../../@types/categories";

export const fetchCategories = createAsyncThunk<
  CategoriesTypes[],
  void,
  { rejectValue: string }
>("category/fetchCategories", async (_, { rejectWithValue }) => {
  const { data } = await axios.get<CategoriesTypes[]>(
    "http://localhost:8800/categories"
  );
  if (!data) return rejectWithValue("Error with fetching data");
  return data;
});

export const deleteCategory = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("category/deleteCategory", async (id, { rejectWithValue }) => {
  const { data } = await axios.delete(`http://localhost:8800/categories/${id}`);
  if (!data) return rejectWithValue("Can't delete category");
  return id;
});

export const addNewCategory = createAsyncThunk<
  CategoriesTypes,
  CategoriesTypes,
  { rejectValue: string }
>("category/addNewCategory", async (category, { rejectWithValue }) => {
  const { data } = await axios.post("http://localhost:8800/categories", {
    name: category.name,
    description: category.description,
  });
  if (!data) return rejectWithValue("smth went wrong with adding category");
  return category;
});

export const changeData = createAsyncThunk<
  CategoriesTypes,
  CategoriesTypes,
  { rejectValue: string }
>("categories/changeData", async (category, { rejectWithValue }) => {
  const { data } = await axios.put(
    `http://localhost:8800/categories/${category.id}`,
    category
  );
  if (!data) return rejectWithValue("Can't update category");
  return data;
});
