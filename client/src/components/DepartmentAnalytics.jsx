import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const DepartmentAnalytics = ({ departmentCounts }) => {

  if (!departmentCounts) return null;

  const chartData =
    Object.entries(departmentCounts).map(
      ([department, count]) => ({
        department,
        count
      })
    );

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mt-6">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-800">
          Department Referrals
        </h2>

        <p className="text-slate-500 mt-2">
          Referral distribution across departments
        </p>

      </div>

      <div className="h-96">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="department" />

            <YAxis />

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