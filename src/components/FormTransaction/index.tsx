import React from "react";
import { TransactionsTypes } from "../../@types/transactions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNewTransaction, changeData } from "../../redux/Transaction/slice";
import { useNavigate } from "react-router-dom";
type FormTransactionProps = {
  transaction?: TransactionsTypes;
};
const FormTransaction: React.FC<FormTransactionProps> = ({ transaction }) => {
  const { categories } = useAppSelector((state) => state.category);
  const [category, setCategory] = React.useState("");
  const [typeOfOperation, setTypeOfOperation] = React.useState(
    transaction?.TypeOfOperation ? transaction.TypeOfOperation : ""
  );
  const [total, setTotal] = React.useState(
    transaction?.total ? transaction.total : ""
  );
  const [description, setDescription] = React.useState(
    transaction?.description ? transaction.description : ""
  );
  const [date, setDate] = React.useState(
    transaction?.date ? transaction.date : ""
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (transaction) {
      if (typeOfOperation && description) {
        dispatch(
          changeData({
            id: transaction.id,
            category,
            TypeOfOperation: typeOfOperation,
            total,
            description,
            date,
          })
        );
        navigate("/transaction");
        return;
      }
    }
    if (typeOfOperation && description) {
      dispatch(
        addNewTransaction({
          id: 3,
          category,
          TypeOfOperation: typeOfOperation,
          total,
          date,
          description,
        })
      );
      navigate("/transaction");
    }
  };
  return (
    <form onSubmit={submit} className="custom-form ">
      <div className="custom-block-cover">
        <label htmlFor="nameCategory">Name of Category</label>
        <select
          className="custom-selector"
          id="nameCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Оберіть категорію</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="custom-block-cover">
        <label htmlFor="operationType">Operation type</label>
        <input
          value={typeOfOperation}
          onChange={(e) => setTypeOfOperation(e.target.value)}
          className="custom-input"
          id="operationType"
          type="text"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="total">Total</label>
        <input
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          id="total"
          className="custom-input"
          type="number"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="description">Short description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          className={`custom-input custom-input-description `}
          type="text"
        />
      </div>
      <div className="custom-block-cover">
        <label htmlFor="date">Date YYY-MM-DD</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          className="custom-input"
          type="date"
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
export default FormTransaction;
