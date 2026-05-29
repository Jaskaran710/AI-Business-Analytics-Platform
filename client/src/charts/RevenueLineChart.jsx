import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const RevenueLineChart = ({ data }) => {

  if (!data || data.length === 0) {
    return null;
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-xl border">

      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Revenue Trend
      </h2>

      <p className="text-gray-500 mb-6">
        Performance trend across metrics
      </p>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="4 4"
          />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
};

export default RevenueLineChart;
