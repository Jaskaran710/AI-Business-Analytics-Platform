import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { BarChart3 } from "lucide-react";

const SalesBarChart = ({ data }) => {

  if (!data || data.length === 0) {
    return null;
  }

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

        <div className="flex items-center gap-3">

          <BarChart3 size={28} />

          <div>

            <h2 className="text-2xl font-bold">
              Sales Overview
            </h2>

            <p className="text-blue-100">
              Dataset metric distribution
            </p>

          </div>

        </div>

      </div>

      <div className="p-6">

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default SalesBarChart;