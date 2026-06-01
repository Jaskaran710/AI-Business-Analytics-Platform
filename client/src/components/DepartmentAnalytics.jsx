import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const DepartmentAnalytics = ({
  departmentCounts
}) => {

  if (!departmentCounts) return null;

  const chartData =
    Object.entries(
      departmentCounts
    ).map(
      ([department, count]) => ({
        department,
        count
      })
    );

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-5 sm:p-8 mt-6">

      <div className="mb-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">

          Department Referrals

        </h2>

        <p className="text-slate-500 mt-2 text-sm sm:text-base">

          Referral distribution across departments

        </p>

      </div>

      <div className="h-[320px] sm:h-[400px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 50
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="department"
              angle={-25}
              textAnchor="end"
              interval={0}
              height={70}
              tick={{
                fontSize: 11
              }}
            />

            <YAxis
              tick={{
                fontSize: 11
              }}
            />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default DepartmentAnalytics;