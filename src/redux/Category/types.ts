import { CategoriesTypes } from "../../@types/categories";

export interface CategoryInitialState {
  categorySearch: string;
  categories: CategoriesTypes[];
  error: string | null;
  loading: boolean;
}
