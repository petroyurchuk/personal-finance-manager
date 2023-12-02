import React from "react";
import { FormTransaction, Title } from "../../components";
import { useParams } from "react-router-dom";
import { filterDataById } from "../../utils/filterData";
import { TransactionsTypes } from "../../@types/transactions";
import CommonLayout from "../../layouts/CommonLayout";
import { useAppSelector } from "../../redux/hooks";

type EditTransactionPageProps = {};

const EditTransactionPage: React.FC<EditTransactionPageProps> = () => {
  const { id } = useParams();
  const { transactions } = useAppSelector((state) => state.transaction);
  if (!id) return <div>No exist transaction</div>;
  const transaction = filterDataById<TransactionsTypes>(
    transactions,
    parseInt(id)
  );
  return (
    <>
      <Title>Edit Transaction</Title>
      <CommonLayout>
        <FormTransaction transaction={transaction} />
      </CommonLayout>
    </>
  );
};
export default EditTransactionPage;
