const SummaryStatistics = ({ statistics }) => {

  if (!statistics) return null;

  const columns = Object.keys(statistics);

  return (

    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Summary Statistics
      </h2>

      <div className="overflow-x-auto">

        <table className="min-w-full border">

          <thead>

            <tr className="bg-gray-200">

              <th className="border p-2">
                Column
              </th>

              <th className="border p-2">
                Mean
              </th>

              <th className="border p-2">
                Min
              </th>

              <th className="border p-2">
                Max
              </th>

            </tr>

          </thead>

          <tbody>

            {
              columns.map((column) => (

                <tr key={column}>

                  <td className="border p-2">
                    {column}
                  </td>

                  <td className="border p-2">
                    {statistics[column]?.mean?.toFixed?.(2) ?? "N/A"}
                  </td>

                  <td className="border p-2">
                    {statistics[column]?.min?.toFixed?.(2) ?? "N/A"}
                  </td>

                  <td className="border p-2">
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
