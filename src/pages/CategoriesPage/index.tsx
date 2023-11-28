import React from "react";
import { Button, Input, Title } from "../../components";
import CommonLayout from "../../layouts/CommonLayout";
import Table from "../../components/Table";
import { filterData } from "../../utils/filterData";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

type CategoriesPageProps = {};
const CategoriesPage: React.FC<CategoriesPageProps> = () => {
  const { categorySearch, categories } = useAppSelector(
    (state) => state.category
  );
  const navigate = useNavigate();
  return (
    <div>
      <Title>Категорії витрат / доходів</Title>
      <CommonLayout>
        <Input />
        <Table items={filterData(categories, "name", categorySearch)} />
        <Button whatToDo={() => navigate("/registration")}>
          Додати нову категорію
        </Button>
      </CommonLayout>
    </div>
  );
};
export default CategoriesPage;
