import { useContext } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { AnalyticsContext }
from "../context/AnalyticsContext";

const AIInsights = () => {

  const { analytics } =
    useContext(AnalyticsContext);

  if (!analytics) {

    return (

      <DashboardLayout>

        <div className="p-10">

          <h1 className="text-4xl font-bold mb-4">
            AI Insights
          </h1>

          <p>
            Upload a dataset first.
          </p>

        </div>

      </DashboardLayout>

    );

  }

  const insights = [];

  insights.push(
    `Dataset contains ${analytics.rows} rows and ${analytics.columns} columns.`
  );

  if (analytics.missing_values === 0) {

    insights.push(
      "Dataset is clean with no missing values."
    );

  } else {

    insights.push(
      `Dataset contains ${analytics.missing_values} missing values.`
    );

  }

  if (analytics.total_sales) {

    insights.push(
      `Total sales are ${analytics.total_sales.toFixed(2)}.`
    );

  }

  if (analytics.average_sales) {

    insights.push(
      `Average sales are ${analytics.average_sales.toFixed(2)}.`
    );

  }

  return (

    <DashboardLayout>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          AI Insights
        </h1>

        <div className="space-y-4">

          {
            insights.map(
              (insight, index) => (

                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  {insight}
                </div>

              )
            )
          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AIInsights;
