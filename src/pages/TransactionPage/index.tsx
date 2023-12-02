import React from "react";
import {
  Button,
  Selector,
  StatusDisplayComponent,
  Title,
} from "../../components";
import Table from "../../components/Table";
import { TransactionsTypes } from "../../@types/transactions";
import CommonLayout from "../../layouts/CommonLayout";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { filterData } from "../../utils/filterData";
import {
  deleteTransaction,
  fetchTransactions,
} from "../../redux/Transaction/asyncActions";
import { fetchCategories } from "../../redux/Category/asyncActions";
import { transactionsPageColumns } from "../../data/columns";

type TransactionPageProps = {};
const TransactionPage: React.FC<TransactionPageProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { transactions, selectedCategory, error, loading } = useAppSelector(
    (state) => state.transaction
  );
  React.useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTransactions());
  }, []);

  if (loading || error)
    return <StatusDisplayComponent error={error} isLoading={loading} />;

  return (
    <>
      <Title>Транзакції</Title>
      <CommonLayout>
        <Selector />
        <Table<TransactionsTypes>
          items={
            selectedCategory === "all"
              ? transactions
              : filterData(transactions, "category", selectedCategory)
          }
          columns={transactionsPageColumns}
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
