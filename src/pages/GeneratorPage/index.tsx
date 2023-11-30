import React from "react";
import { FormGenerator, Title } from "../../components";
import CommonLayout from "../../layouts/CommonLayout";
type GeneratorPageProps = {};
const GeneratorPage: React.FC<GeneratorPageProps> = () => {
  return (
    <>
      <Title>Генератор звітів</Title>
      <CommonLayout>
        <FormGenerator />
      </CommonLayout>
    </>
  );
};
export default GeneratorPage;
