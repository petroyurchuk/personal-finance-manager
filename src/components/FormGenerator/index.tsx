import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setCategory,
  setOperationType,
  setDateTo,
  setDateFrom,
} from "../../redux/Generate/slice";

type FormGeneratorProps = {};

const FormGenerator: React.FC<FormGeneratorProps> = () => {
  const [error, setError] = React.useState("");
  const { transactions } = useAppSelector((state) => state.transaction);
  const { dateFrom, dateTo, operationType, category } = useAppSelector(
    (state) => state.generate
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (dateFrom && dateTo && operationType) {
      setError("");
      navigate("/graphic-page");
      return;
    }
    setError("Заповніть всі поля");
  };
  const handleGraphic = () => {
    navigate("/line-graphic");
  };
  const reset = () => {
    setCategory({ key: "" });
    setOperationType({ key: "" });
    setDateTo({ key: "" });
    setDateFrom({ key: "" });
  };
  return (
    <form className="custom-form " onSubmit={submit} onReset={reset}>
      <div className="custom-block-cover">
        <label htmlFor="data-from">Дата YYYY-MM-DD</label>
        <input
          className="custom-input"
          id="data-from"
          value={dateFrom}
          onChange={(e) => dispatch(setDateFrom({ key: e.target.value }))}
          type="date"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="data-to">Дата YYYY-MM-DD</label>
        <input
          className="custom-input"
          id="data-to"
          value={dateTo}
          onChange={(e) => dispatch(setDateTo({ key: e.target.value }))}
          type="date"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="type-operation">Тип операції</label>
        <select
          id="type-operation"
          className="custom-selector"
          value={operationType}
          onChange={(e) => dispatch(setOperationType({ key: e.target.value }))}
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
          onChange={(e) => dispatch(setCategory({ key: e.target.value }))}
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
      {error && <p className="custom-form-error">{error}</p>}
      <div className="custom-block-cover-btns">
        <button type="submit" className="custom-btn-save">
          Згенерувати
        </button>
        <button type="reset" className="custom-btn-reset">
          Очистити
        </button>
        <button
          onClick={handleGraphic}
          type="button"
          className="custom-btn-reset custom-btn-graphic"
        >
          Графік
        </button>
        <button className="custom-btn-reset custom-btn-date">По датам</button>
      </div>
    </form>
  );
};
export default FormGenerator;
