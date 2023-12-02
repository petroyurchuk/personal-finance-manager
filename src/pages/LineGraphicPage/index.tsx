import React from "react";
import { LineGraphic, Title } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { filterDatesInRange } from "../../utils/filterData";

type LineGraphicPageProps = {};

const LineGraphicPage: React.FC<LineGraphicPageProps> = () => {
  const { category, dateFrom, dateTo } = useAppSelector(
    (state) => state.generate
  );
  const { transactions } = useAppSelector((state) => state.transaction);
  return (
    <>
      <Title>Розподіл {category} за період [По датам]</Title>
      <LineGraphic
        data={filterDatesInRange(transactions, dateFrom, dateTo)}
        keyX="date"
        keyY="total"
      />
    </>
  );
};
export default LineGraphicPage;
