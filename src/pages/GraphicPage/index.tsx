import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PieChart, Pie, Cell } from "recharts";
import { fetchTransactions } from "../../redux/Transaction/asyncActions";
import { Table, Title } from "../../components";
import {
  filterDatesInRange,
  filterTransactions,
  calcTotal,
} from "../../utils/filterData";
import { graphicPageColumns } from "../../data/columns";
import { COLORS } from "../../constants/colors";

type GraphicPageProps = {};

const GraphicPage: React.FC<GraphicPageProps> = () => {
  const { transactions } = useAppSelector((state) => state.transaction);
  const { dateFrom, dateTo, category, operationType } = useAppSelector(
    (state) => state.generate
  );

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const filteredTransactions = filterTransactions(
    filterDatesInRange(transactions, dateFrom, dateTo),
    category ? [operationType, category] : operationType
  );
  return (
    <>
      <Title>
        Звіт за період {dateFrom} - {dateTo}{" "}
      </Title>
      <Table
        columns={graphicPageColumns}
        items={filteredTransactions}
        total={calcTotal(filteredTransactions)}
      />
      <PieChart width={800} height={800}>
        <Pie
          dataKey="total"
          endAngle={0}
          startAngle={360}
          data={filteredTransactions}
          cx={500}
          cy={200}
          outerRadius={80}
          fill="#FFBB28"
          label={({ index }) => `${filteredTransactions[index].category}`}
        >
          {transactions.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};
export default GraphicPage;
