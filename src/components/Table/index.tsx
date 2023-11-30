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
  total?: number;
}

const Table = <T extends CategoriesTypes | TransactionsTypes>({
  items,
  columns,
  editPath,
  onDelete,
  total,
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
          {onDelete && (
            <th className="border-2  border-gray-500">Управління</th>
          )}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td
                key={column.label}
                className="border-r-2 border-l-2 border-b-2 border-gray-500 text-center"
              >
                {String(item[column.field])}
              </td>
            ))}
            {editPath && onDelete && (
              <td className="border-r-2 border-b-2 border-gray-500 text-center">
                <button
                  onClick={() => navigate(`${editPath}${item.id}`)}
                  className="hover:scale-110 transition-all duration-100"
                >
                  <MdEditSquare size={20} />
                </button>

                <button
                  onClick={() => onDelete(item.id)}
                  className="hover:scale-110 transition-all duration-100"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </td>
            )}
          </tr>
        ))}
        {!onDelete && (
          <tr>
            <td className="border-2 border-t-0 border-gray-500 text-center">
              Всього
            </td>
            <td className="border-2 border-t-0 border-gray-500 text-center">
              {total}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
