import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TransactionsTypes } from "../../@types/transactions";

type LineGraphicProps = {
  data: TransactionsTypes[];
  keyX: keyof TransactionsTypes;
  keyY: keyof TransactionsTypes;
};
const LineGraphic: React.FC<LineGraphicProps> = ({ data, keyX, keyY }) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={keyX} />
      <YAxis dataKey={keyY} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="total"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
export default LineGraphic;
