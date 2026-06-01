import { useContext } from "react";

import {
  Brain,
  Sparkles,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  Database
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AIInsights = () => {

  const { analytics } = useContext(
    AnalyticsContext
  );

  if (!analytics) {

    return (

      <DashboardLayout>

        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-12 text-center">

            <Brain
              size={70}
              className="mx-auto text-violet-600 mb-6"
            />

            <h1 className="text-3xl sm:text-5xl font-bold text-slate-800">

              AI Insights

            </h1>

            <p className="text-slate-500 mt-4 text-base sm:text-lg">

              Upload a dataset to unlock AI-powered business intelligence.

            </p>

          </div>

        </div>

      </DashboardLayout>

    );

  }

  const insights = [];

  if (
    analytics.missing_values > 0
  ) {

    insights.push({
      type: "risk",
      text: `${analytics.missing_values} missing values detected. Data cleaning is recommended before making business decisions.`
    });

  }

  if (
    analytics.missing_values === 0
  ) {

    insights.push({
      type: "success",
      text: "Dataset quality is excellent. No missing values detected."
    });

  }

  if (
    analytics.rows >= 1000
  ) {

    insights.push({
      type: "success",
      text: `Dataset contains ${analytics.rows.toLocaleString()} records, providing a strong foundation for analytics and AI insights.`
    });

  }

  if (
    analytics.total_sales
  ) {

    insights.push({
      type: "success",
      text: `Total sales recorded: ${analytics.total_sales.toLocaleString()}. Monitor this KPI for growth trends.`
    });

  }

  if (
    analytics.average_sales
  ) {

    insights.push({
      type: "success",
      text: `Average sales value is ${analytics.average_sales.toFixed(2)}.`
    });

  }

  if (
    analytics.columns
  ) {

    insights.push({
      type: "success",
      text: `${analytics.columns} columns available for advanced business intelligence analysis.`
    });

  }

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* HERO */}

        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-3xl p-5 sm:p-10 text-white shadow-xl">

          <div className="flex items-center gap-4">

            <Brain
              size={40}
              className="flex-shrink-0"
            />

            <div>

              <h1 className="text-3xl sm:text-5xl font-bold">

                AI Business Copilot

              </h1>

              <p className="text-violet-100 mt-2 text-sm sm:text-lg">

                Automated intelligence generated from your dataset

              </p>

            </div>

          </div>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8">

            <Database
              size={30}
              className="text-blue-600 mb-4"
            />

            <h2 className="text-xl font-bold text-slate-800">

              Records

            </h2>

            <p className="text-3xl sm:text-4xl font-bold text-blue-600 mt-3">

              {analytics.rows?.toLocaleString()}

            </p>

            <p className="text-slate-500">

              Rows analyzed

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8">

            <Sparkles
              size={30}
              className="text-green-600 mb-4"
            />

            <h2 className="text-xl font-bold text-slate-800">

              Columns

            </h2>

            <p className="text-3xl sm:text-4xl font-bold text-green-600 mt-3">

              {analytics.columns}

            </p>

            <p className="text-slate-500">

              Features available

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8">

            <ShieldCheck
              size={30}
              className="text-violet-600 mb-4"
            />

            <h2 className="text-xl font-bold text-slate-800">

              Dataset Status

            </h2>

            <p className="text-3xl sm:text-4xl font-bold text-violet-600 mt-3">

              Ready

            </p>

            <p className="text-slate-500">

              Analysis completed

            </p>

          </div>

        </div>

        {/* INSIGHTS */}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 sm:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold">

              AI Findings

            </h2>

            <p className="text-slate-400 mt-2">

              Key observations generated from uploaded data

            </p>

          </div>

          <div className="p-5 sm:p-8 space-y-5">

            {

              insights.map(
                (item, index) => (

                  <div
                    key={index}
                    className={`rounded-2xl p-5 border ${
                      item.type === "risk"
                        ? "bg-orange-50 border-orange-200"
                        : "bg-green-50 border-green-200"
                    }`}
                  >

                    <div className="flex gap-4">

                      {

                        item.type === "risk"
                          ? (
                            <AlertTriangle
                              className="text-orange-600 flex-shrink-0"
                            />
                          )
                          : (
                            <TrendingUp
                              className="text-green-600 flex-shrink-0"
                            />
                          )

                      }

                      <p className="font-medium text-slate-700">

                        {item.text}

                      </p>

                    </div>

                  </div>

                )
              )

            }

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AIInsights;