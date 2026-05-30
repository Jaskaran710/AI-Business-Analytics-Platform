import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

const DatasetHistory = () => {

  const [datasets, setDatasets] =
    useState([]);

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
                    `Bearer ${
                      localStorage.getItem(
                        "token"
                      )
                    }`
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

  return (

    <DashboardLayout>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          Dataset History
        </h1>

        <div className="space-y-6">

          {
            datasets.map(
              (dataset) => (

                <div
                  key={dataset._id}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >

                  <div className="text-xl font-bold text-blue-600 mb-3">
                    {dataset.fileName}
                  </div>

                  <div className="text-gray-600 mb-3">
                    Uploaded:
                    {" "}
                    {
                      new Date(
                        dataset.createdAt
                      ).toLocaleString()
                    }
                  </div>

                  <pre className="bg-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
                    {
                      JSON.stringify(
                        dataset.analytics,
                        null,
                        2
                      )
                    }
                  </pre>
<button
  onClick={() => {

    window.open(
      `http://localhost:5000/api/report/${dataset._id}`,
      "_blank"
    );

  }}
  className="mt-4 bg-black text-white px-4 py-2 rounded-xl"
>
  Download Report
</button>

                </div>

              )
            )
          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default DatasetHistory;
