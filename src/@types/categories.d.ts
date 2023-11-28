export interface CategoriesTypes {
  id: number;
  name: string;
  description: string;
}

export interface CategoryInitialState {
  categorySearch: string;
  newNameCategory: string;
  newDescriptionCategory: string;
  categories: CategoriesTypes[];
}
