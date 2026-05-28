import DashboardLayout from "../layouts/DashboardLayout";
import KpiCard from "../components/KpiCard";
import ChartCard from "../components/ChartCard";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <KpiCard
            title="Revenue"
            value="$45,000"
            color="text-black"
          />

          <KpiCard
            title="Customers"
            value="1,250"
            color="text-blue-600"
          />

          <KpiCard
            title="Orders"
            value="320"
            color="text-purple-600"
          />

          <KpiCard
            title="Growth"
            value="+18%"
            color="text-green-600"
          />

        </div>

        <ChartCard />

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
