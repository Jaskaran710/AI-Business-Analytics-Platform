import { useContext } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import AnalyticsCards from "../components/AnalyticsCards";
import DatasetPreview from "../components/DatasetPreview";
import SummaryStatistics from "../components/SummaryStatistics";

import SalesBarChart from "../charts/SalesBarChart";
import RevenueLineChart from "../charts/RevenueLineChart";
import DataDistributionChart from "../charts/DataDistributionChart";

import { AnalyticsContext } from "../context/AnalyticsContext";

import { generateChartData } from "../utils/chartData";

const Dashboard = () => {

  const { analytics } = useContext(
    AnalyticsContext
  );


  if (!analytics) {

    return (

      <DashboardLayout>

        <div className="text-center py-20">

          <h1 className="text-4xl font-bold mb-4">
            No Dataset Uploaded
          </h1>

          <p className="text-gray-500">
            Upload a dataset first to see analytics.
          </p>

        </div>

      </DashboardLayout>

    );

  }

  const chartData =
    generateChartData(analytics);

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold mb-8">
          Business Dashboard
        </h1>

        <AnalyticsCards
          analytics={analytics}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <SalesBarChart
            data={chartData}
          />

          <RevenueLineChart
            data={chartData}
          />

        </div>

        <div className="mt-6">

          <DataDistributionChart
            data={chartData}
          />

        </div>

        <div className="mt-6">

          <DatasetPreview
            previewData={analytics.preview_data}
          />

        </div>

      </div>

    </DashboardLayout>

  );
};

export default Dashboard;









