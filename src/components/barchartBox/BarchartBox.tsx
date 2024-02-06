import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barchartBox.scss";

type BarChartProps = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BarchartBox = (props: BarChartProps) => {
  return (
    <div className="barchartBox">
      <h2>{props.title}</h2>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
          <Tooltip
            contentStyle={{ borderRadius: "5px", background: "#2a3447" }}
            labelStyle={{ display: "none" }}
            cursor = {{fill:'none'}}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarchartBox;
