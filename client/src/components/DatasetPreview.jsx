import {
  Database,
  TableProperties
} from "lucide-react";

const DatasetPreview = ({ previewData }) => {

  if (!previewData || previewData.length === 0) {

    return (

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-12 text-center">

        <Database
          size={60}
          className="mx-auto text-slate-400 mb-4"
        />

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-700">
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

      {/* HEADER */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-5 sm:p-8">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>

            <div className="flex items-center gap-3 mb-2">

              <TableProperties size={24} />

              <h2 className="text-2xl sm:text-3xl font-bold">

                Dataset Preview

              </h2>

            </div>

            <p className="text-blue-100 text-sm sm:text-base">

              First {previewData.length} records from your uploaded dataset

            </p>

          </div>

          <div className="bg-white/20 px-4 py-3 rounded-2xl w-fit">

            <p className="text-sm text-blue-100">
              Records
            </p>

            <p className="text-xl sm:text-2xl font-bold">
              {previewData.length}
            </p>

          </div>

        </div>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto overflow-y-auto max-h-[600px]">

        <table className="min-w-[900px] w-full">

          <thead className="sticky top-0 bg-slate-900 z-10">

            <tr>

              {
                Object.keys(
                  previewData[0]
                ).map((key) => (

                  <th
                    key={key}
                    className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                      text-xs
                      sm:text-sm
                      font-semibold
                      text-white
                      uppercase
                      tracking-wider
                      whitespace-nowrap
                    "
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
                    className={`
                      border-b
                      border-slate-200
                      hover:bg-blue-50
                      transition
                      ${
                        rowIndex % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50"
                      }
                    `}
                  >

                    {
                      Object.values(row).map(
                        (value, colIndex) => (

                          <td
                            key={colIndex}
                            className="
                              px-4
                              sm:px-6
                              py-4
                              text-slate-700
                              text-sm
                              whitespace-nowrap
                            "
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