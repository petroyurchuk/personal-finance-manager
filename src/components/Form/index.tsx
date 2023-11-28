import React from "react";
import { CategoriesTypes } from "../../@types/categories";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setNewDescriptionCategory,
  setNewNameCategory,
  addNewCategory,
} from "../../redux/Category/slice";
import { changeData } from "../../utils/filterData";
type FormProps = {
  category?: CategoriesTypes;
};
const Form: React.FC<FormProps> = ({ category }) => {
  const [nameCategory, setNameCategory] = React.useState(
    category ? category.name : ""
  );
  const [descriptionCategory, setDescriptionCategory] = React.useState(
    category ? category.description : ""
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { newNameCategory, newDescriptionCategory } = useAppSelector(
    (state) => state.category
  );
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (category) {
      changeData(category.id, {
        id: category.id,
        name: nameCategory,
        description: descriptionCategory,
      });
      navigate("/");
      return;
    }
    if (newNameCategory && newDescriptionCategory) {
      dispatch(
        addNewCategory({
          id: 3,
          name: newNameCategory,
          description: newDescriptionCategory,
        })
      );
      dispatch(setNewNameCategory(""));
      dispatch(setNewDescriptionCategory(""));
      navigate("/");
    }
  };
  const reset = () => {
    setNameCategory("");
    dispatch(setNewNameCategory(""));
    setDescriptionCategory("");
    dispatch(setNewDescriptionCategory(""));
  };
  return (
    <form
      className="w-[600px] m-auto flex flex-col gap-2"
      onSubmit={submit}
      onReset={reset}
    >
      <div className="flex gap-5 items-center">
        <label htmlFor="nameCategory">Name of category:</label>
        <input
          className="w-[220px] p-2 rounded-lg focus:outline-none focus:border-2 border-blue-500"
          id="nameCategory"
          type="text"
          placeholder="Enter category..."
          value={category ? nameCategory : newNameCategory}
          onChange={
            category
              ? (e) => {
                  setNameCategory(e.target.value);
                }
              : (e) => dispatch(setNewNameCategory(e.target.value))
          }
        />
      </div>
      <div className="flex gap-5 items-center">
        <label htmlFor="shortDescription">Short Description:</label>
        <input
          className="ml-[4px] w-[420px] p-2 rounded-lg focus:outline-none focus:border-2 border-blue-500"
          id="shortDescription"
          type="text"
          placeholder="Enter description..."
          value={category ? descriptionCategory : newDescriptionCategory}
          onChange={
            category
              ? (e) => {
                  setDescriptionCategory(e.target.value);
                }
              : (e) => dispatch(setNewDescriptionCategory(e.target.value))
          }
        />
      </div>
      <div className="flex gap-3 justify-center">
        <button
          className="w-[150px] p-1 text-white bg-purple-600 hover:bg-purple-500 transition-bg duration-150 rounded-md"
          type="submit"
        >
          Save
        </button>
        <button
          className="w-[150px] p-1 text-white bg-red-400 hover:bg-red-300 transition-bg duration-150 rounded-md"
          type="reset"
        >
          Reset
        </button>
      </div>
    </form>
  );
};
export default Form;
