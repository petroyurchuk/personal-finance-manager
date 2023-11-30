import React, { useState } from "react";
import { CategoriesTypes } from "../../@types/categories";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addNewCategory, changeData } from "../../redux/Category/slice";

type FormProps = {
  category?: CategoriesTypes;
};

const Form: React.FC<FormProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const [nameCategory, setNameCategory] = useState(
    category ? category.name : ""
  );
  const [descriptionCategory, setDescriptionCategory] = useState(
    category ? category.description : ""
  );
  const navigate = useNavigate();

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (category) {
      if (nameCategory && descriptionCategory) {
        dispatch(
          changeData({
            id: category.id,
            changedCategory: {
              id: category.id,
              name: nameCategory,
              description: descriptionCategory,
            },
          })
        );
        navigate("/");
        return;
      }
    }
    if (nameCategory && descriptionCategory) {
      dispatch(
        addNewCategory({
          id: 3,
          name: nameCategory,
          description: descriptionCategory,
        })
      );
      setNameCategory("");
      setDescriptionCategory("");
      navigate("/");
    }
  };

  const reset = () => {
    setNameCategory("");
    setDescriptionCategory("");
  };

  return (
    <form className="custom-form " onSubmit={submit} onReset={reset}>
      <div className="custom-block-cover">
        <label htmlFor="nameCategory">Name of category:</label>
        <input
          className="custom-input"
          id="nameCategory"
          type="text"
          placeholder="Enter category..."
          value={nameCategory}
          onChange={(e) => setNameCategory(e.target.value)}
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="shortDescription">Short Description:</label>
        <input
          className="ml-[4px] w-[420px] p-2 rounded-lg focus:outline-none focus:border-2 border-blue-500"
          id="shortDescription"
          type="text"
          placeholder="Enter description..."
          value={descriptionCategory}
          onChange={(e) => setDescriptionCategory(e.target.value)}
        />
      </div>
      <div className="custom-block-cover-btns">
        <button className="custom-btn-save" type="submit">
          Save
        </button>
        <button className="custom-btn-reset" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
