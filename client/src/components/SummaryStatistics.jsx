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

      {/* HEADER */}

      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-5 sm:p-8 text-white shadow-xl mb-6">

        <div className="flex items-center gap-3">

          <BarChart3 size={26} />

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Summary Statistics
            </h2>

            <p className="text-indigo-100 text-sm sm:text-base">
              AI Generated Statistical Overview
            </p>

          </div>

        </div>

      </div>

      {/* STAT CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {

          columns.map((column) => (

            <div
              key={column}
              className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-slate-200
                p-5
                sm:p-6
                hover:shadow-2xl
                hover:-translate-y-1
                transition
              "
            >

              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 break-words">

                {column}

              </h3>

              <div className="space-y-4">

                {/* MEAN */}

                <div className="flex justify-between items-center bg-blue-50 p-4 rounded-2xl">

                  <div className="flex items-center gap-2 min-w-0">

                    <TrendingUp
                      size={18}
                      className="text-blue-600 flex-shrink-0"
                    />

                    <span className="font-medium text-sm sm:text-base">
                      Mean
                    </span>

                  </div>

                  <span className="font-bold text-blue-700 text-sm sm:text-base text-right">

                    {
                      statistics[column]?.mean?.toFixed?.(2)
                      ?? "N/A"
                    }

                  </span>

                </div>

                {/* MIN */}

                <div className="flex justify-between items-center bg-red-50 p-4 rounded-2xl">

                  <div className="flex items-center gap-2 min-w-0">

                    <ArrowDown
                      size={18}
                      className="text-red-600 flex-shrink-0"
                    />

                    <span className="font-medium text-sm sm:text-base">
                      Minimum
                    </span>

                  </div>

                  <span className="font-bold text-red-700 text-sm sm:text-base text-right">

                    {
                      statistics[column]?.min?.toFixed?.(2)
                      ?? "N/A"
                    }

                  </span>

                </div>

                {/* MAX */}

                <div className="flex justify-between items-center bg-green-50 p-4 rounded-2xl">

                  <div className="flex items-center gap-2 min-w-0">

                    <ArrowUp
                      size={18}
                      className="text-green-600 flex-shrink-0"
                    />

                    <span className="font-medium text-sm sm:text-base">
                      Maximum
                    </span>

                  </div>

                  <span className="font-bold text-green-700 text-sm sm:text-base text-right">

                    {
                      statistics[column]?.max?.toFixed?.(2)
                      ?? "N/A"
                    }

                  </span>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default SummaryStatistics;