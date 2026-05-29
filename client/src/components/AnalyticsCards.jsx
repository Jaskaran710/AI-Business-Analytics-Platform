import {
  Database,
  DollarSign
} from "lucide-react";

const AnalyticsCards = ({ analytics }) => {

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-2xl shadow-xl hover:scale-[1.02] transition">

        <div className="flex items-center gap-3 mb-4">

          <Database size={30} />

          <h2 className="text-2xl font-bold">
            Dataset Information
          </h2>

        </div>

        <div className="space-y-3 text-lg">

          <p>
            Rows:
            {" "}
            <span className="font-bold">
              {analytics.rows}
            </span>
          </p>

          <p>
            Columns:
            {" "}
            <span className="font-bold">
              {analytics.columns}
            </span>
          </p>

          <p>
            Missing Values:
            {" "}
            <span className="font-bold">
              {analytics.missing_values}
            </span>
          </p>

        </div>

      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white p-8 rounded-2xl shadow-xl hover:scale-[1.02] transition">

        <div className="flex items-center gap-3 mb-4">

          <DollarSign size={30} />

          <h2 className="text-2xl font-bold">
            Sales KPIs
          </h2>

        </div>

        <div className="space-y-3 text-lg">

          <p>
            Total Sales:
            {" "}
            <span className="font-bold">
              {analytics.total_sales ?? "N/A"}
            </span>
          </p>

          <p>
            Average Sales:
            {" "}
            <span className="font-bold">
              {analytics.average_sales ?? "N/A"}
            </span>
          </p>

        </div>

      </div>

    </div>

  );

};

export default AnalyticsCards;
