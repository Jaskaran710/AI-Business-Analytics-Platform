import { useContext } from "react";
import { Database } from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

import AnalyticsCards from "../components/AnalyticsCards";
import DatasetPreview from "../components/DatasetPreview";
import SummaryStatistics from "../components/SummaryStatistics";
import DepartmentAnalytics from "../components/DepartmentAnalytics";
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

        <div className="flex justify-center items-center py-10 sm:py-20">

          <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-12 text-center max-w-xl w-full border border-slate-200">

            <div className="flex justify-center mb-6">

              <Database
                size={60}
                className="text-blue-600"
              />

            </div>

            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-slate-800">

              No Dataset Uploaded

            </h1>

            <p className="text-gray-500 text-base sm:text-lg mb-8">

              Upload a CSV or Excel dataset to unlock analytics,
              insights, charts and AI-powered recommendations.

            </p>

            <a
              href="/upload"
              className="
                inline-block
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-xl
                font-semibold
                transition
              "
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

      <div className="space-y-6">

        {/* HERO */}

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-8">

          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6">

            <div>

              <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">

                AI Business Analytics Platform

              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800">

                Executive Dashboard

              </h1>

              <p className="text-slate-500 mt-3 text-sm sm:text-base">

                Monitor KPIs, analytics, insights and business performance.

              </p>

            </div>

            <a
              href="http://localhost:5000/api/report"
              target="_blank"
              rel="noreferrer"
              className="
                w-full
                sm:w-auto
                text-center
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-4
                rounded-2xl
                font-semibold
                transition
                shadow-lg
              "
            >
              Export PDF Report
            </a>

          </div>

        </div>

        {/* KPI CARDS */}

        <AnalyticsCards analytics={analytics} />

        {/* CHARTS */}

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

          <SalesBarChart data={chartData} />

          <RevenueLineChart data={chartData} />

        </div>

        {/* DISTRIBUTION */}

        <DataDistributionChart
          data={chartData}
        />

        {/* DATASET PREVIEW */}

        <DatasetPreview
          previewData={
            analytics.preview_data
          }
        />

        {/* SUMMARY STATISTICS */}

        <SummaryStatistics
          statistics={
            analytics.summary_statistics
          }
        />

        {/* DEPARTMENT ANALYTICS */}

        {
          analytics.department_counts && (

            <DepartmentAnalytics
              departmentCounts={
                analytics.department_counts
              }
            />

          )
        }

        {/* AI RECOMMENDATIONS */}

        <AIRecommendations
          analytics={analytics}
        />

      </div>

    </DashboardLayout>

  );

};

export default Dashboard;