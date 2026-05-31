import { useContext } from "react";

import {
  Brain,
  Sparkles,
  AlertTriangle,
  TrendingUp,
  ShieldCheck
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

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-12 text-center">

            <Brain
              size={80}
              className="mx-auto text-violet-600 mb-6"
            />

            <h1 className="text-5xl font-bold text-slate-800">
              AI Insights
            </h1>

            <p className="text-slate-500 mt-4 text-lg">
              Upload a dataset to unlock AI-powered business intelligence.
            </p>

          </div>

        </div>

      </DashboardLayout>

    );

  }

  const insights = [];

  if (analytics.missing_values > 0) {

    insights.push({
      type: "risk",
      text: `${analytics.missing_values} missing values detected. Data cleaning recommended.`
    });

  }

  if (analytics.average_sales) {

    insights.push({
      type: "growth",
      text: `Average sales currently stand at ${analytics.average_sales.toFixed(2)}.`
    });

  }

  if (analytics.total_sales) {

    insights.push({
      type: "growth",
      text: `Total recorded sales are ${analytics.total_sales.toLocaleString()}.`
    });

  }

  return (

    <DashboardLayout>

      <div>

        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-3xl p-10 text-white shadow-xl mb-8">

          <div className="flex items-center gap-4">

            <Brain size={50} />

            <div>

              <h1 className="text-5xl font-bold">
                AI Business Copilot
              </h1>

              <p className="text-violet-100 text-lg mt-2">
                Automated intelligence generated from your dataset
              </p>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

            <Sparkles
              size={32}
              className="text-blue-600 mb-4"
            />

            <h2 className="text-xl font-bold text-slate-800">
              Dataset Health
            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-3">
              {analytics.rows}
            </p>

            <p className="text-slate-500">
              Records Analyzed
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

            <TrendingUp
              size={32}
              className="text-green-600 mb-4"
            />

            <h2 className="text-xl font-bold text-slate-800">
              Growth Score
            </h2>

            <p className="text-4xl font-bold text-green-600 mt-3">
              92%
            </p>

            <p className="text-slate-500">
              AI Confidence
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

            <ShieldCheck
              size={32}
              className="text-violet-600 mb-4"
            />

            <h2 className="text-xl font-bold text-slate-800">
              Status
            </h2>

            <p className="text-4xl font-bold text-violet-600 mt-3">
              Ready
            </p>

            <p className="text-slate-500">
              Analysis Complete
            </p>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">

            <h2 className="text-3xl font-bold">
              AI Findings
            </h2>

            <p className="text-slate-400 mt-2">
              Key observations generated from uploaded data
            </p>

          </div>

          <div className="p-8 space-y-5">

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
                              className="text-orange-600"
                            />
                          )
                          : (
                            <TrendingUp
                              className="text-green-600"
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

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">

              <p className="font-medium text-slate-700">
                Recommendation: Continue monitoring KPI trends and leverage AI-generated insights to optimize operational performance.
              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AIInsights;