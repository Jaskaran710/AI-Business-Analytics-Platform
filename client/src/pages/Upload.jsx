import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const { analytics, setAnalytics } = useContext(AnalyticsContext);

  const handleFileChange = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only CSV and Excel files are allowed");
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {

    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }

    try {

      setLoading(true);

      toast.loading(
        "Uploading dataset...",
        {
          id: "upload"
        }
      );

      const formData = new FormData();

      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );

      setAnalytics(response.data.analytics);

      toast.success(
  "Dataset uploaded successfully",
  {
    id: "upload"
  }
);

    } catch (error) {

      console.error(error);

      toast.error(
  "Upload failed",
  {
    id: "upload"
  }
);

    } finally {

      setLoading(false);

    }

  };

  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold mb-8">
          Upload Dataset
        </h1>

        <div className="bg-white p-10 rounded-2xl shadow-md border-2 border-dashed border-gray-300 mb-8">

          <div className="flex flex-col items-center justify-center text-center">

            <h2 className="text-2xl font-bold mb-4">
              Upload CSV or Excel File
            </h2>

            <p className="text-gray-500 mb-6">
              Drag and drop your dataset here
              or click below to browse files
            </p>

            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
              className="mb-6"
            />

            {
              selectedFile && (
                <div className="mb-6 text-green-600 font-semibold">
                  Selected File: {selectedFile.name}
                </div>
              )
            }

            <button
              onClick={handleUpload}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              {
                loading
                  ? "Uploading..."
                  : "Upload Dataset"
              }
            </button>

          </div>

        </div>

        {
          analytics && (

            <>

              <div className="grid grid-cols-2 gap-6 mb-8">

                <div className="bg-white p-6 rounded-xl shadow-md">

                  <h2 className="text-2xl font-bold mb-4">
                    Dataset Information
                  </h2>

                  <p>
                    <strong>Rows:</strong>
                    {" "}
                    {analytics.rows}
                  </p>

                  <p>
                    <strong>Columns:</strong>
                    {" "}
                    {analytics.columns}
                  </p>

                  <p>
                    <strong>Missing Values:</strong>
                    {" "}
                    {analytics.missing_values}
                  </p>

                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">

                  <h2 className="text-2xl font-bold mb-4">
                    Sales KPIs
                  </h2>

                  <p>
                    <strong>Total Sales:</strong>
                    {" "}
                    {analytics.total_sales ?? "N/A"}
                  </p>

                  <p>
                    <strong>Average Sales:</strong>
                    {" "}
                    {analytics.average_sales ?? "N/A"}
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">

                <h2 className="text-2xl font-bold mb-6">
                  Dataset Preview
                </h2>

                <table className="min-w-full border border-gray-300">

                  <thead className="bg-gray-200">

                    <tr>

                      {
                        analytics.preview_data.length > 0 &&
                        Object.keys(
                          analytics.preview_data[0]
                        ).map((key) => (

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
                      analytics.preview_data.map(
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

            </>

          )
        }

      </div>

    </DashboardLayout>
  );
};

export default Upload;







