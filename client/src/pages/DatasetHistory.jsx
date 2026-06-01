import { useEffect, useState } from "react";
import axios from "axios";

import {
  Database,
  Search,
  Calendar,
  FileSpreadsheet,
  Download
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

const DatasetHistory = () => {

  const [datasets, setDatasets] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const fetchDatasets =
      async () => {

        try {

          const response =
            await axios.get(
              "http://localhost:5000/api/datasets/history",
              {
                headers: {
                  Authorization:
                    "Bearer " +
                    localStorage.getItem("token")
                }
              }
            );

          setDatasets(
            response.data
          );

        } catch (error) {

          console.error(error);

        }

      };

    fetchDatasets();

  }, []);

  const filteredDatasets =
    datasets.filter(
      (dataset) =>
        dataset.fileName
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (

    <DashboardLayout>

      <div>

        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl mb-8">

          <div className="flex items-center gap-4">

            <Database size={48} />

            <div>

              <h1 className="text-5xl font-bold">
                Dataset History
              </h1>

              <p className="text-blue-100 mt-2">
                Review all uploaded datasets and generated reports
              </p>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 mb-8">

          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

            <div>

              <p className="text-slate-500">
                Total Datasets
              </p>

              <h2 className="text-4xl font-bold text-slate-800">
                {filteredDatasets.length}
              </h2>

            </div>

            <div className="relative w-full md:w-96">

              <Search
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search datasets..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="w-full border border-slate-300 rounded-2xl pl-12 pr-4 py-3"
              />

            </div>

          </div>

        </div>

        {

          filteredDatasets.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-16 text-center">

              <Database
                size={70}
                className="mx-auto text-blue-600 mb-4"
              />

              <h2 className="text-3xl font-bold text-slate-800">
                No Datasets Found
              </h2>

              <p className="text-slate-500 mt-2">
                Upload datasets to start building history.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {

                filteredDatasets.map(
                  (dataset) => (

                    <div
                      key={dataset._id}
                      className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
                    >

                      <div className="bg-slate-900 text-white p-5 flex justify-between items-center">

                        <div className="flex items-center gap-3">

                          <FileSpreadsheet
                            size={22}
                          />

                          <span className="font-semibold text-lg">
                            {dataset.fileName}
                          </span>

                        </div>

                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                          Processed
                        </span>

                      </div>

                      <div className="p-6">

                        <div className="flex items-center gap-2 text-slate-500 mb-6">

                          <Calendar
                            size={18}
                          />

                          {
                            new Date(
                              dataset.createdAt
                            ).toLocaleString()
                          }

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                          <div className="bg-blue-50 rounded-2xl p-4">

                            <p className="text-sm text-slate-500">
                              Rows
                            </p>

                            <p className="text-2xl font-bold text-blue-600">
                              {
                                dataset.analytics?.rows
                                ?? "N/A"
                              }
                            </p>

                          </div>

                          <div className="bg-green-50 rounded-2xl p-4">

                            <p className="text-sm text-slate-500">
                              Columns
                            </p>

                            <p className="text-2xl font-bold text-green-600">
                              {
                                dataset.analytics?.columns
                                ?? "N/A"
                              }
                            </p>

                          </div>

                          <div className="bg-orange-50 rounded-2xl p-4">

                            <p className="text-sm text-slate-500">
                              Missing Values
                            </p>

                            <p className="text-2xl font-bold text-orange-600">
                              {
                                dataset.analytics?.missing_values
                                ?? "N/A"
                              }
                            </p>

                          </div>

                        </div>

                        <button
                          onClick={async () => {

                            try {

                              const response =
                                await axios.get(
                                  `http://localhost:5000/api/report/${dataset._id}`,
                                  {
                                    responseType: "blob",
                                    headers: {
                                      Authorization:
                                        "Bearer " +
                                        localStorage.getItem("token")
                                    }
                                  }
                                );

                              const url =
                                window.URL.createObjectURL(
                                  new Blob([response.data])
                                );

                              const link =
                                document.createElement("a");

                              link.href = url;

                              link.download =
                                `${dataset.fileName}.pdf`;

                              document.body.appendChild(link);

                              link.click();

                              link.remove();

                              window.URL.revokeObjectURL(url);

                            } catch (error) {

                              console.error(error);

                              alert(
                                "Failed to download report"
                              );

                            }

                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
                        >

                          <Download size={18} />

                          Download Report

                        </button>

                      </div>

                    </div>

                  )
                )

              }

            </div>

          )

        }

      </div>

    </DashboardLayout>

  );

};

export default DatasetHistory;