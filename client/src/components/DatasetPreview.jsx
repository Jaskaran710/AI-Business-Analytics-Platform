const DatasetPreview = ({ previewData }) => {

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 overflow-hidden">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-800">
          Dataset Preview
        </h2>

        <p className="text-slate-500 mt-2">
          First few rows from the uploaded dataset
        </p>

      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              {
                previewData.length > 0 &&
                Object.keys(previewData[0]).map((key) => (

                  <th
                    key={key}
                    className="px-5 py-4 text-left text-sm font-semibold text-slate-700"
                  >
                    {key}
                  </th>

                ))
              }

            </tr>

          </thead>

          <tbody>

            {
              previewData.map((row, index) => (

                <tr
                  key={index}
                  className="border-t border-slate-200 hover:bg-slate-50 transition"
                >

                  {
                    Object.values(row).map((value, i) => (

                      <td
                        key={i}
                        className="px-5 py-4 text-slate-700"
                      >
                        {value}
                      </td>

                    ))
                  }

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default DatasetPreview;