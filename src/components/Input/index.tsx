import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCategorySearch } from "../../redux/Category/slice";
type InputProps = {};
const Input: React.FC<InputProps> = () => {
  const { categorySearch } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  return (
    <input
      className="max-w-[320px] focus:outline-none focus:border-2 focus:border-blue-400 rounded-lg p-2 "
      type="text"
      value={categorySearch}
      onChange={(e) => dispatch(setCategorySearch(e.target.value))}
      placeholder="Введіть перші літери назви категорії"
    />
  );
};
export default Input;
