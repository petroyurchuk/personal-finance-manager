export interface CategoriesTypes {
  id: number;
  name: string;
  description: string;
}

export interface changeDataTypes {
  id: number;
  changedCategory: CategoriesTypes;
}
