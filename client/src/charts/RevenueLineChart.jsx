import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { TrendingUp } from "lucide-react";

const RevenueLineChart = ({ data }) => {

  if (!data || data.length === 0) {
    return null;
  }

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      <div className="bg-gradient-to-r from-emerald-600 to-green-500 p-6 text-white">

        <div className="flex items-center gap-3">

          <TrendingUp size={28} />

          <div>

            <h2 className="text-2xl font-bold">
              Revenue Trend
            </h2>

            <p className="text-green-100">
              Performance trend across metrics
            </p>

          </div>

        </div>

      </div>

      <div className="p-6">

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={4}
              dot={{ r: 6 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default RevenueLineChart;