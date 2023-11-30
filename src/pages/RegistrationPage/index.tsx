import React from "react";
import { Form, Title } from "../../components";
import CommonLayout from "../../layouts/CommonLayout";

type RegistrationPageProps = {};
const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <>
      <Title>
        Реєстрація / Редагування інформації про категорію доходів / витрат
      </Title>
      <CommonLayout>
        <Form />
      </CommonLayout>
    </>
  );
};
export default RegistrationPage;
