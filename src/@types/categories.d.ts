export interface CategoriesTypes {
  id: number;
  name: string;
  description: string;
}

export interface CategoryInitialState {
  categorySearch: string;
  categories: CategoriesTypes[];
}
export interface changeDataTypes {
  id: number;
  changedCategory: CategoriesTypes;
}
