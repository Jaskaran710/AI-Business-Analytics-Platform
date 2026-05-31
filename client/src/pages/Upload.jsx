import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setAnalytics } = useContext(AnalyticsContext);

  const handleFileChange = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);

  };

  const handleUpload = async () => {

    if (!selectedFile) {

      toast.error("Please select a file first");
      return;

    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append(
        "file",
        selectedFile
      );

      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            Authorization:
              "Bearer " +
              localStorage.getItem("token")
          }
        }
      );

      setAnalytics(
        response.data.analytics
      );

      toast.success(
        "Dataset uploaded successfully"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Upload failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <DashboardLayout>

      <div>

        <div className="mb-10">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Data Management
          </p>

          <h1 className="text-5xl font-bold text-slate-800 mt-2">
            Upload Dataset
          </h1>

          <p className="text-slate-500 mt-3">
            Upload CSV or Excel datasets and generate analytics instantly.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-12">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Upload Your Dataset
            </h2>

            <p className="text-slate-500 mb-8">
              CSV, XLSX and XLS files supported
            </p>

            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
              className="mb-6"
            />

            {selectedFile && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 max-w-xl mx-auto">
                <p className="font-semibold text-green-700">
                  Selected File
                </p>

                <p className="text-slate-700">
                  {selectedFile.name}
                </p>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-2xl font-semibold transition"
            >
              {loading ? "Uploading..." : "Upload Dataset"}
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default Upload;