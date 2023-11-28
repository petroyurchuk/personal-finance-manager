import { Form, Title } from "../../components";
import CommonLayout from "../../layouts/CommonLayout";

type Props = {};
const RegistrationPage = (props: Props) => {
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
