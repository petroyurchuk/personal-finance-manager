import React from "react";
import { CategoriesTypes } from "../../@types/categories";
import { MdEditSquare } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TableColumn } from "../../@types/table";
import { TransactionsTypes } from "../../@types/transactions";

interface TableProps<T> {
  items: T[];
  columns: TableColumn<T>[];
  editPath?: string;
  onDelete?: (id: number) => void;
}

const Table = <T extends CategoriesTypes | TransactionsTypes>({
  items,
  columns,
  editPath,
  onDelete,
}: TableProps<T>) => {
  const navigate = useNavigate();

  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.label} className="border-2  border-gray-500">
              {column.label}
            </th>
          ))}
          <th className="border-2  border-gray-500">Управління</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td
                key={column.label}
                className="border-r-2 border-l-2 border-b-2 border-gray-500"
              >
                {String(item[column.field])}
              </td>
            ))}
            <td className="border-r-2 border-b-2 border-gray-500 text-center">
              {editPath && (
                <button
                  onClick={() => navigate(`${editPath}${item.id}`)}
                  className="hover:scale-110 transition-all duration-100"
                >
                  <MdEditSquare size={20} />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(item.id)}
                  className="hover:scale-110 transition-all duration-100"
                >
                  <AiOutlineDelete size={20} />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
