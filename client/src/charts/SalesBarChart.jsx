import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const SalesBarChart = ({ data }) => {

  if (!data || data.length === 0) {
    return null;
  }

  return (

    <div className="bg-white p-8 rounded-2xl shadow-xl border">

      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Sales Overview
      </h2>

      <p className="text-gray-500 mb-6">
        Dataset metric distribution
      </p>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 10
          }}
        >

          <CartesianGrid
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="name"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

};

export default SalesBarChart;
