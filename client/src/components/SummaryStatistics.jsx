import {
  BarChart3,
  TrendingUp,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const SummaryStatistics = ({ statistics }) => {

  if (!statistics) return null;

  const columns = Object.keys(statistics);

  return (

    <div className="mb-8">

      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-8 text-white shadow-xl mb-6">

        <div className="flex items-center gap-3">

          <BarChart3 size={30} />

          <div>

            <h2 className="text-3xl font-bold">
              Summary Statistics
            </h2>

            <p className="text-indigo-100">
              AI Generated Statistical Overview
            </p>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {columns.map((column) => (

          <div
            key={column}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition"
          >

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              {column}
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-2xl">

                <div className="flex items-center gap-2">

                  <TrendingUp
                    size={18}
                    className="text-blue-600"
                  />

                  <span className="font-medium">
                    Mean
                  </span>

                </div>

                <span className="font-bold text-blue-700">
                  {statistics[column]?.mean?.toFixed?.(2) ?? "N/A"}
                </span>

              </div>

              <div className="flex justify-between items-center bg-red-50 p-4 rounded-2xl">

                <div className="flex items-center gap-2">

                  <ArrowDown
                    size={18}
                    className="text-red-600"
                  />

                  <span className="font-medium">
                    Minimum
                  </span>

                </div>

                <span className="font-bold text-red-700">
                  {statistics[column]?.min?.toFixed?.(2) ?? "N/A"}
                </span>

              </div>

              <div className="flex justify-between items-center bg-green-50 p-4 rounded-2xl">

                <div className="flex items-center gap-2">

                  <ArrowUp
                    size={18}
                    className="text-green-600"
                  />

                  <span className="font-medium">
                    Maximum
                  </span>

                </div>

                <span className="font-bold text-green-700">
                  {statistics[column]?.max?.toFixed?.(2) ?? "N/A"}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default SummaryStatistics;