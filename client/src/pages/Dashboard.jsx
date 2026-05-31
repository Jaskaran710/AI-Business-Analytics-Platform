import { useContext } from "react";
import { Database } from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

import AnalyticsCards from "../components/AnalyticsCards";
import DatasetPreview from "../components/DatasetPreview";
import SummaryStatistics from "../components/SummaryStatistics";
import DepartmentAnalytics from "../components/DepartmentAnalytics";
import PatientSatisfaction from "../components/PatientSatisfaction";
import AIRecommendations from "../components/AIRecommendations";

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

        <div className="flex justify-center items-center py-20">

          <div className="bg-white shadow-xl rounded-3xl p-12 text-center max-w-xl w-full">

            <div className="flex justify-center mb-6">

              <Database
                size={70}
                className="text-blue-600"
              />

            </div>

            <h1 className="text-4xl font-bold mb-4 text-slate-800">
              No Dataset Uploaded
            </h1>

            <p className="text-gray-500 text-lg mb-8">
              Upload a CSV or Excel dataset to unlock analytics,
              insights, charts and AI-powered recommendations.
            </p>

            <a
              href="/upload"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Upload Dataset
            </a>

          </div>

        </div>

      </DashboardLayout>

    );

  }

  const chartData =
    generateChartData(analytics);

  return (

    <DashboardLayout>

      <div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 mb-8">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-blue-600 font-semibold mb-2">
                AI Business Analytics Platform
              </p>

              <h1 className="text-5xl font-bold text-slate-800">
                Executive Dashboard
              </h1>

              <p className="text-slate-500 mt-3">
                Monitor KPIs, analytics, insights and business performance.
              </p>

            </div>

            <a
              href="http://localhost:5000/api/report"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
            >
              Export PDF Report
            </a>

          </div>

        </div>

        <AnalyticsCards analytics={analytics} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <SalesBarChart data={chartData} />

          <RevenueLineChart data={chartData} />

        </div>

        <div className="mt-6">

          <DataDistributionChart data={chartData} />

        </div>

        <div className="mt-6">

          <DatasetPreview
            previewData={analytics.preview_data}
          />

        </div>

        <div className="mt-6">

          <SummaryStatistics
            statistics={analytics.summary_statistics}
          />

        </div>

        <div className="mt-6">

          <DepartmentAnalytics
            departmentCounts={analytics.department_counts}
          />

        </div>

        <div className="mt-6">

          <PatientSatisfaction
            analytics={analytics}
          />

        </div>

        <div className="mt-6">

          <AIRecommendations
            analytics={analytics}
          />

        </div>

      </div>

    </DashboardLayout>

  );

};

export default Dashboard;