const SummaryStatistics = ({ statistics }) => {

  if (!statistics) return null;

  const columns = Object.keys(statistics);

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-800">
          Summary Statistics
        </h2>

        <p className="text-slate-500 mt-2">
          Statistical overview of numeric columns
        </p>

      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left">
                Column
              </th>

              <th className="px-5 py-4 text-left">
                Mean
              </th>

              <th className="px-5 py-4 text-left">
                Min
              </th>

              <th className="px-5 py-4 text-left">
                Max
              </th>

            </tr>

          </thead>

          <tbody>

            {
              columns.map((column) => (

                <tr
                  key={column}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >

                  <td className="px-5 py-4">
                    {column}
                  </td>

                  <td className="px-5 py-4">
                    {statistics[column]?.mean?.toFixed?.(2) ?? "N/A"}
                  </td>

                  <td className="px-5 py-4">
                    {statistics[column]?.min?.toFixed?.(2) ?? "N/A"}
                  </td>

                  <td className="px-5 py-4">
                    {statistics[column]?.max?.toFixed?.(2) ?? "N/A"}
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default SummaryStatistics;