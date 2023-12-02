import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchCategories,
  deleteCategory,
} from "../../redux/Category/asyncActions";
import {
  Button,
  Input,
  Title,
  Table,
  StatusDisplayComponent,
} from "../../components";
import CommonLayout from "../../layouts/CommonLayout";
import { filterData } from "../../utils/filterData";
import { CategoriesTypes } from "../../@types/categories";
import { categoriesPageColumns } from "../../data/columns";

type CategoriesPageProps = {};

const CategoriesPage: React.FC<CategoriesPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const { categorySearch, categories, loading, error } = useAppSelector(
    (state) => state.category
  );

  if (loading || error)
    return <StatusDisplayComponent error={error} isLoading={loading} />;

  return (
    <div>
      <Title>Категорії витрат / доходів</Title>
      <CommonLayout>
        <Input />
        <Table<CategoriesTypes>
          items={filterData(categories, "name", categorySearch)}
          columns={categoriesPageColumns}
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
