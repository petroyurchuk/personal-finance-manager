import React from "react";
import { Form, Title } from "../../components";
import { useParams } from "react-router-dom";
import { filterDataById } from "../../utils/filterData";
import CommonLayout from "../../layouts/CommonLayout";
import { useAppSelector } from "../../redux/hooks";

type EditPageProps = {};

const EditPage: React.FC<EditPageProps> = () => {
  const { id } = useParams();
  const { categories } = useAppSelector((state) => state.category);
  if (!id) return <div>No exist category</div>;
  const category = filterDataById(categories, parseInt(id));
  return (
    <>
      <Title>Edit Category</Title>
      <CommonLayout>
        <Form category={category} />
      </CommonLayout>
    </>
  );
};
export default EditPage;
