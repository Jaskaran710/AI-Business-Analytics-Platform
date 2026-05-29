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

    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Department Referrals
      </h2>

      <div className="h-96">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="department"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default DepartmentAnalytics;
