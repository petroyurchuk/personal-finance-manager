import React from "react";
import { Form, Title } from "../../components";
import { useParams } from "react-router-dom";
import { filterDataById } from "../../utils/filterData";
import { categories } from "../../data/categories";
import CommonLayout from "../../layouts/CommonLayout";

type EditPageProps = {};

const EditPage: React.FC<EditPageProps> = () => {
  const { id } = useParams();
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
