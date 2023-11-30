import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Table, Title } from "../../components";
import { PieChart, Pie } from "recharts";
import { TransactionsTypes } from "../../@types/transactions";
import { TableColumn } from "../../@types/table";
import {
  filterDatesInRange,
  filterTransactions,
  total,
} from "../../utils/filterData";
type GraphicPageProps = {};

const columns: TableColumn<TransactionsTypes>[] = [
  { label: "Категорія", field: "category" },
  { label: "Total", field: "total" },
];
const GraphicPage: React.FC<GraphicPageProps> = () => {
  const { generatedData, dateFrom, dateTo, category, operationType } =
    useAppSelector((state) => state.generate);
  const { transactions } = useAppSelector((state) => state.transaction);
  const filteredTransactions = filterTransactions(
    filterDatesInRange(transactions, dateFrom, dateTo),
    category ? [operationType, category] : operationType
  );
  return (
    <>
      <Title>
        Звіт за період {generatedData[0]?.dateFrom || dateFrom} -{" "}
        {generatedData[0]?.dateTo || dateTo}{" "}
      </Title>
      <Table
        columns={columns}
        items={filteredTransactions}
        total={total(filteredTransactions)}
      />
      <PieChart width={800} height={800}>
        <Pie
          dataKey="total"
          endAngle={0}
          startAngle={360}
          data={filteredTransactions}
          cx={500}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
          label={({ index }) => `${filteredTransactions[index].category}`}
        />
      </PieChart>
    </>
  );
};
export default GraphicPage;
