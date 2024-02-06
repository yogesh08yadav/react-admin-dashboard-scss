import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piechartBox.scss";
const PiechartBox = () => {
  const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="piechartBox">
      <h1>Pie Chart</h1>
      <ResponsiveContainer height={300} width="99%">
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            // cx={120}
            // cy={200}
            innerRadius={"70%"}
            outerRadius={"90%"}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="options">
        {data.map((item) => (
          <div className="option">
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
              <span>{item.name}</span>
            </div>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PiechartBox;
