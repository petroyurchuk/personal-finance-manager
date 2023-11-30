import React from "react";
import { useAppSelector } from "../../redux/hooks";
type FormGeneratorProps = {};
const FormGenerator: React.FC<FormGeneratorProps> = () => {
  const [selectType, setSelectType] = React.useState("");
  const [selectCategory, setSelectCategory] = React.useState("");
  const { categories } = useAppSelector((state) => state.category);
  return (
    <form className="custom-form ">
      <div className="custom-block-cover">
        <label htmlFor="data-from">Дата YYYY-MM-DD</label>
        <input className="custom-input" id="data-from" type="date" />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="data-to">Дата YYYY-MM-DD</label>
        <input className="custom-input" id="data-to" type="date" />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="type-operation">Тип операції</label>
        <select
          id="type-operation"
          className="custom-selector"
          value={selectType}
          onChange={(e) => setSelectType(e.target.value)}
        >
          <option value={"Витрата"}>Витрата</option>
          <option value={"Дохід"}>Дохід</option>
        </select>
      </div>
      <div className="custom-block-cover">
        <label htmlFor="select-category">Категорія</label>
        <select
          className="custom-selector"
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
          id="select-category"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="custom-block-cover-btns">
        <button className="custom-btn-save">Згенерувати</button>
        <button className="custom-btn-reset">Очистити</button>
        <button className="custom-btn-reset custom-btn-graphic">Графік</button>
        <button className="custom-btn-reset custom-btn-date">По датам</button>
      </div>
    </form>
  );
};
export default FormGenerator;
