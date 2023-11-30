import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setCategory,
  setOperationType,
  setDateTo,
  setDateFrom,
  setGeneratedData,
} from "../../redux/Generate/slice";
import { useNavigate } from "react-router-dom";
type FormGeneratorProps = {};
const FormGenerator: React.FC<FormGeneratorProps> = () => {
  const { transactions } = useAppSelector((state) => state.transaction);
  const { dateFrom, dateTo, operationType, category } = useAppSelector(
    (state) => state.generate
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (dateFrom && dateTo && operationType && category) {
      navigate("/graphic-page");
      dispatch(
        setGeneratedData({
          id: 1,
          category,
          dateFrom,
          dateTo,
          operationType,
        })
      );
    }
  };

  return (
    <form className="custom-form " onSubmit={submit}>
      <div className="custom-block-cover">
        <label htmlFor="data-from">Дата YYYY-MM-DD</label>
        <input
          className="custom-input"
          id="data-from"
          value={dateFrom}
          onChange={(e) => dispatch(setDateFrom(e.target.value))}
          type="date"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="data-to">Дата YYYY-MM-DD</label>
        <input
          className="custom-input"
          id="data-to"
          value={dateTo}
          onChange={(e) => dispatch(setDateTo(e.target.value))}
          type="date"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="type-operation">Тип операції</label>
        <select
          id="type-operation"
          className="custom-selector"
          value={operationType}
          onChange={(e) => dispatch(setOperationType(e.target.value))}
        >
          <option>Виберіть тип операції</option>
          <option value={"Витрата"}>Витрата</option>
          <option value={"Дохід"}>Дохід</option>
        </select>
      </div>
      <div className="custom-block-cover">
        <label htmlFor="select-category">Категорія</label>
        <select
          className="custom-selector"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          id="select-category"
        >
          <option>Виберіть категорію</option>
          {transactions.map((transaction) => (
            <option key={transaction.id} value={transaction.category}>
              {transaction.category}
            </option>
          ))}
        </select>
      </div>
      <div className="custom-block-cover-btns">
        <button type="submit" className="custom-btn-save">
          Згенерувати
        </button>
        <button type="reset" className="custom-btn-reset">
          Очистити
        </button>
        <button type="button" className="custom-btn-reset custom-btn-graphic">
          Графік
        </button>
        <button className="custom-btn-reset custom-btn-date">По датам</button>
      </div>
    </form>
  );
};
export default FormGenerator;
