import {
  Sparkles,
  Brain,
  AlertTriangle,
  TrendingUp,
  Database
} from "lucide-react";

const AIRecommendations = ({ analytics }) => {

  if (!analytics) return null;

  const recommendations = [];

  /*
  ==========================
  DATA QUALITY INSIGHTS
  ==========================
  */

  if (
    analytics.missing_values &&
    analytics.missing_values > 0
  ) {

    recommendations.push({
      type: "warning",
      text: `${analytics.missing_values} missing values detected. Consider cleaning the dataset before making business decisions.`
    });

  }

  if (
    analytics.rows &&
    analytics.rows < 100
  ) {

    recommendations.push({
      type: "warning",
      text: "Dataset contains a limited number of records. Additional data may improve analytical accuracy."
    });

  }

  if (
    analytics.rows &&
    analytics.rows >= 1000
  ) {

    recommendations.push({
      type: "success",
      text: "Dataset size is sufficient for meaningful business intelligence analysis."
    });

  }

  /*
  ==========================
  SALES INSIGHTS
  ==========================
  */

  if (
    analytics.total_sales
  ) {

    recommendations.push({
      type: "success",
      text: `Total sales volume of ${analytics.total_sales.toLocaleString()} indicates active business performance.`
    });

  }

  if (
    analytics.average_sales
  ) {

    recommendations.push({
      type: "success",
      text: `Average sales value is ${analytics.average_sales.toFixed(2)}. Monitor this KPI over time for growth trends.`
    });

  }

  /*
  ==========================
  COLUMN INSIGHTS
  ==========================
  */

  if (
    analytics.columns
  ) {

    recommendations.push({
      type: "success",
      text: `Dataset contains ${analytics.columns} columns available for advanced analytics and AI exploration.`
    });

  }

  /*
  ==========================
  FALLBACK
  ==========================
  */

  if (
    recommendations.length === 0
  ) {

    recommendations.push({
      type: "success",
      text: "Dataset appears healthy and ready for further AI-driven analysis."
    });

  }

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      {/* HEADER */}

      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-5 sm:p-8">

        <div className="flex items-center gap-3">

          <Brain size={26} />

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              AI Recommendations
            </h2>

            <p className="text-violet-100 text-sm sm:text-base">
              Intelligent insights generated from dataset analytics
            </p>

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-5 sm:p-8">

        <div className="space-y-4">

          {

            recommendations.map(
              (item, index) => (

                <div
                  key={index}
                  className={`
                    rounded-2xl
                    p-4
                    sm:p-5
                    border
                    ${
                      item.type === "warning"
                        ? "bg-orange-50 border-orange-200"
                        : "bg-green-50 border-green-200"
                    }
                  `}
                >

                  <div className="flex gap-3 sm:gap-4">

                    {

                      item.type === "warning"
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

                    <p className="text-slate-700 font-medium text-sm sm:text-base">

                      {item.text}

                    </p>

                  </div>

                </div>

              )
            )

          }

        </div>

        {/* FOOTER */}

        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-4">

          <div className="flex items-center gap-3">

            <Database
              size={18}
              className="text-blue-600"
            />

            <p className="text-sm text-slate-600">

              Insights generated from dataset structure, quality metrics,
              and business analytics indicators.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AIRecommendations;