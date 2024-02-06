import { Link } from "react-router-dom";
import "./chartbox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type ChartboxProps = {
    color: string,
    icon: string,
    title : string,
    number: number | string,
    dataKey: string,
    percentage : number,
    chartData : object[]
}
const Chartbox = (props : ChartboxProps) => {

  return (
    <div className="chartbox">
      <div className="boxinfo">
        <div className="user">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartinfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
              <Tooltip contentStyle={{ backgroundColor: "transparent",border:'none',fontSize:'10px' }} 
              labelStyle={{display:'none'}}
              position={{x:10,y:70}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percent" style={{color: props.percentage < 0 ? 'coral': 'limegreen'}}>{props.percentage}</span>
          <span className="time">this month</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
