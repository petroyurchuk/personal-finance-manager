import React from "react";
import { Button, Selector, Title } from "../../components";
import Table from "../../components/Table";
import { TransactionsTypes } from "../../@types/transactions";
import { TableColumn } from "../../@types/table";
import CommonLayout from "../../layouts/CommonLayout";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteTransaction } from "../../redux/Transaction/slice";
import { filterData } from "../../utils/filterData";
const columns: TableColumn<TransactionsTypes>[] = [
  { label: "ID", field: "id" },
  { label: "Category", field: "category" },
  { label: "TypeOfOperation", field: "TypeOfOperation" },
  { label: "Total", field: "total" },
  { label: "Date", field: "date" },
  { label: "Опис", field: "description" },
];
type TransactionPageProps = {};
const TransactionPage: React.FC<TransactionPageProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { transactions, selectedCategory } = useAppSelector(
    (state) => state.transaction
  );
  return (
    <>
      <Title>Transactions</Title>
      <CommonLayout>
        <Selector />
        <Table<TransactionsTypes>
          items={
            selectedCategory === "all"
              ? transactions
              : filterData(transactions, "category", selectedCategory)
          }
          columns={columns}
          editPath="/edit-transaction/"
          onDelete={(id) => dispatch(deleteTransaction(id))}
        />
        <Button whatToDo={() => navigate("/new-transaction")}>
          Add new transaction
        </Button>
      </CommonLayout>
    </>
  );
};
export default TransactionPage;
