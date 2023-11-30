import React from "react";
import { Button, Input, Title } from "../../components";
import CommonLayout from "../../layouts/CommonLayout";
import Table from "../../components/Table";
import { filterData } from "../../utils/filterData";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { TableColumn } from "../../@types/table";
import { deleteCategory } from "../../redux/Category/slice";
import { CategoriesTypes } from "../../@types/categories";

const columns: TableColumn<CategoriesTypes>[] = [
  { label: "ID", field: "id" },
  { label: "Назва", field: "name" },
  { label: "Опис", field: "description" },
  // Додайте інші колонки, які вам потрібно відображати
];

type CategoriesPageProps = {};
const CategoriesPage: React.FC<CategoriesPageProps> = () => {
  const dispatch = useAppDispatch();
  const { categorySearch, categories } = useAppSelector(
    (state) => state.category
  );
  const navigate = useNavigate();
  return (
    <div>
      <Title>Категорії витрат / доходів</Title>
      <CommonLayout>
        <Input />
        <Table<CategoriesTypes>
          items={filterData(categories, "name", categorySearch)}
          columns={columns}
          editPath={"/editing/"}
          onDelete={(id) => dispatch(deleteCategory(id))}
        />
        <Button whatToDo={() => navigate("/registration")}>
          Додати нову категорію
        </Button>
      </CommonLayout>
    </div>
  );
};
export default CategoriesPage;
