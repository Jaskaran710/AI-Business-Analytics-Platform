import {
  Database,
  TableProperties
} from "lucide-react";

const DatasetPreview = ({ previewData }) => {

  if (!previewData || previewData.length === 0) {

    return (

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-12 text-center">

        <Database
          size={60}
          className="mx-auto text-slate-400 mb-4"
        />

        <h2 className="text-3xl font-bold text-slate-700">
          No Dataset Preview Available
        </h2>

        <p className="text-slate-500 mt-2">
          Upload a dataset to view records.
        </p>

      </div>

    );

  }

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8">

        <div className="flex items-center justify-between">

          <div>

            <div className="flex items-center gap-3 mb-2">

              <TableProperties size={28} />

              <h2 className="text-3xl font-bold">
                Dataset Preview
              </h2>

            </div>

            <p className="text-blue-100">
              First {previewData.length} records from your uploaded dataset
            </p>

          </div>

          <div className="bg-white/20 px-5 py-3 rounded-2xl">

            <p className="text-sm text-blue-100">
              Records
            </p>

            <p className="text-2xl font-bold">
              {previewData.length}
            </p>

          </div>

        </div>

      </div>

      <div className="overflow-auto max-h-[600px]">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-slate-900 z-10">

            <tr>

              {
                Object.keys(
                  previewData[0]
                ).map((key) => (

                  <th
                    key={key}
                    className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider"
                  >
                    {key}
                  </th>

                ))
              }

            </tr>

          </thead>

          <tbody>

            {
              previewData.map(
                (row, rowIndex) => (

                  <tr
                    key={rowIndex}
                    className={`border-b border-slate-200 hover:bg-blue-50 transition ${
                      rowIndex % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                    }`}
                  >

                    {
                      Object.values(row).map(
                        (value, colIndex) => (

                          <td
                            key={colIndex}
                            className="px-6 py-4 text-slate-700 whitespace-nowrap"
                          >
                            {String(value)}
                          </td>

                        )
                      )
                    }

                  </tr>

                )
              )
            }

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default DatasetPreview;