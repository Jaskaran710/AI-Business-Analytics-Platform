const DatasetPreview = ({ previewData }) => {

  return (

    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">

      <h2 className="text-2xl font-bold mb-6">
        Dataset Preview
      </h2>

      <table className="min-w-full border border-gray-300">

        <thead className="bg-gray-200">

          <tr>

            {
              previewData.length > 0 &&
              Object.keys(previewData[0]).map((key) => (

                <th
                  key={key}
                  className="border p-3 text-left"
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
              (row, index) => (

                <tr key={index}>

                  {
                    Object.values(row).map(
                      (value, i) => (

                        <td
                          key={i}
                          className="border p-3"
                        >
                          {value}
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

  );
};

export default DatasetPreview;
