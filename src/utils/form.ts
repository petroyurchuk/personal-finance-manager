import { CategoriesTypes, changeDataTypes } from "../@types/categories";

export const submitForm = (
  category: CategoriesTypes,
  name: string,
  setName: (value: string) => void,
  description: string,
  setDescription: (value: string) => void,
  disChange: (value: changeDataTypes) => void,
  disAdd: (category: CategoriesTypes) => void,
  navigate: (url: string) => void
) => {
  if (category) {
    if (name && description) {
      disChange({
        id: category.id,
        changedCategory: {
          id: category.id,
          name: name,
          description: description,
        },
      });

      navigate("/");
      return;
    }
  }
  if (name && description) {
    disAdd({
      id: 3,
      name: name,
      description: description,
    });

    setName("");
    setDescription("");
    navigate("/");
  }
};
