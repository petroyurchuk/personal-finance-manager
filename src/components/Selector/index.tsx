import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedCategory } from "../../redux/Transaction/slice";
type SelectorProps = {};
const Selector: React.FC<SelectorProps> = () => {
  const { transactions, selectedCategory } = useAppSelector(
    (state) => state.transaction
  );
  const dispatch = useAppDispatch();
  return (
    <select
      value={selectedCategory}
      className="custom-selector"
      onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
    >
      <option value={"all"}>Filter by categories</option>
      {transactions.map((transaction) => (
        <option key={transaction.id} value={transaction.category}>
          {transaction.category}
        </option>
      ))}
    </select>
  );
};
export default Selector;
