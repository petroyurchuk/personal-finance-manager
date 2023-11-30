import React from "react";
import { FormTransaction, Title } from "../../components";
import CommonLayout from "../../layouts/CommonLayout";

type NewTransactionPageProps = {};

const NewTransactionPage: React.FC<NewTransactionPageProps> = () => {
  return (
    <>
      <Title>Registration transaction</Title>
      <CommonLayout>
        <FormTransaction />
      </CommonLayout>
    </>
  );
};
export default NewTransactionPage;
