import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { PieChart as PieChartIcon } from "lucide-react";

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4"
];

const DataDistributionChart = ({ data }) => {

  if (!data || data.length === 0) {
    return null;
  }

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      <div className="bg-gradient-to-r from-purple-600 to-violet-500 p-6 text-white">

        <div className="flex items-center gap-3">

          <PieChartIcon size={28} />

          <div>

            <h2 className="text-2xl font-bold">
              Data Distribution
            </h2>

            <p className="text-purple-100">
              Distribution of dataset metrics
            </p>

          </div>

        </div>

      </div>

      <div className="p-6">

        <ResponsiveContainer
          width="100%"
          height={420}
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default DataDistributionChart;