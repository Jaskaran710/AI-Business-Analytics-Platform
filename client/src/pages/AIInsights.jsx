import { useContext } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AIInsights = () => {

  const { analytics } = useContext(
    AnalyticsContext
  );

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

  return (

    <DashboardLayout>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          AI Insights
        </h1>

        <div className="space-y-4">

          <div className="bg-white p-6 rounded-xl shadow-md">
            Dataset contains {analytics.rows} rows and {analytics.columns} columns.
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            Missing Values: {analytics.missing_values}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            Total Sales: {analytics.total_sales ?? "N/A"}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            Average Sales: {analytics.average_sales ?? "N/A"}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            Columns:
            <br />
            {analytics.column_names?.join(", ")}
          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AIInsights;
