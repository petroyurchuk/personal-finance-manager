import React from "react";
import { CategoriesTypes } from "../../@types/categories";
import { MdEditSquare } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { deleteCategory } from "../../redux/Category/slice";
type TableProps = {
  items: CategoriesTypes[];
};
const Table: React.FC<TableProps> = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border-2  border-gray-500">#</th>
          <th className="border-2  border-gray-500">Назва</th>
          <th className="border-2  border-gray-500">Опис</th>
          <th className="border-2  border-gray-500">Управління</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="border-r-2 border-l-2 border-b-2 border-gray-500">
              {item.id}
            </td>
            <td className="border-r-2 border-b-2 border-gray-500">
              {item.name}
            </td>
            <td className="border-r-2 border-b-2 border-gray-500">
              {item.description}
            </td>
            <td className="border-r-2 border-b-2 border-gray-500 text-center">
              <button
                onClick={() => navigate(`/editing/${item.id}`)}
                className="hover:scale-110 transition-all duration-100"
              >
                <MdEditSquare size={20} />
              </button>{" "}
              <button
                onClick={() => dispatch(deleteCategory(item.id))}
                className="hover:scale-110 transition-all duration-100"
              >
                <AiOutlineDelete size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
