import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  UploadCloud,
  FileSpreadsheet,
  Database,
  Sparkles
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const Upload = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setAnalytics } =
    useContext(AnalyticsContext);

  const handleFileChange = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);

  };

  const handleUpload = async () => {

    if (!selectedFile) {

      toast.error(
        "Please select a file first"
      );

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

          <p className="text-slate-500 mt-3 text-lg">
            Upload CSV or Excel files and instantly generate
            analytics, charts and AI-powered insights.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

            <div className="flex items-center gap-3 mb-6">

              <UploadCloud
                size={32}
                className="text-blue-600"
              />

              <h2 className="text-3xl font-bold text-slate-800">
                Upload Dataset
              </h2>

            </div>

            <div className="border-2 border-dashed border-blue-300 bg-blue-50 rounded-3xl p-10 text-center">

              <UploadCloud
                size={70}
                className="mx-auto text-blue-600 mb-4"
              />

              <h3 className="text-xl font-bold text-slate-800">
                Drag & Drop Dataset
              </h3>

              <p className="text-slate-500 mt-2 mb-6">
                CSV, XLSX and XLS files supported
              </p>

              <label
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl cursor-pointer font-semibold transition mb-6"
              >

                <UploadCloud size={20} />

                Choose Dataset

                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileChange}
                  className="hidden"
                />

              </label>

              {selectedFile && (

                <div className="bg-white rounded-2xl border border-green-200 p-5 mb-6">

                  <div className="flex items-center gap-3 justify-center">

                    <FileSpreadsheet
                      size={28}
                      className="text-green-600"
                    />

                    <div>

                      <p className="font-bold text-green-700">
                        Dataset Ready
                      </p>

                      <p className="text-slate-700">
                        {selectedFile.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {(selectedFile.size / 1024).toFixed(2)} KB
                      </p>

                    </div>

                  </div>

                </div>

              )}

              <button
                onClick={handleUpload}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-2xl font-semibold transition w-full"
              >
                {
                  loading
                    ? "Uploading Dataset..."
                    : "Upload Dataset"
                }
              </button>

            </div>

          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-3xl shadow-xl p-10">

            <div className="flex items-center gap-3 mb-8">

              <Sparkles
                size={30}
                className="text-yellow-400"
              />

              <h2 className="text-3xl font-bold">
                What Happens Next?
              </h2>

            </div>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Database
                  size={26}
                  className="text-blue-300"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    Dataset Processing
                  </h3>

                  <p className="text-slate-300">
                    Data is cleaned and validated automatically.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Sparkles
                  size={26}
                  className="text-green-300"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    AI Insights
                  </h3>

                  <p className="text-slate-300">
                    Generate business intelligence and recommendations.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FileSpreadsheet
                  size={26}
                  className="text-yellow-300"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    Visual Analytics
                  </h3>

                  <p className="text-slate-300">
                    Interactive charts and KPI dashboards are created automatically.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default Upload;