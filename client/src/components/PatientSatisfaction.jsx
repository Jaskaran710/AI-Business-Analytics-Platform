import {
  HeartHandshake,
  Smile,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const PatientSatisfaction = ({ analytics }) => {

  if (!analytics) return null;

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mt-6">

      <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white p-8">

        <div className="flex items-center gap-3">

          <HeartHandshake size={30} />

          <div>

            <h2 className="text-3xl font-bold">
              Patient Satisfaction Analytics
            </h2>

            <p className="text-pink-100">
              Experience and service quality metrics
            </p>

          </div>

        </div>

      </div>

      <div className="p-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">

            <div className="flex items-center gap-3 mb-3">

              <Smile className="text-blue-600" />

              <h3 className="font-semibold">
                Average Satisfaction
              </h3>

            </div>

            <p className="text-5xl font-bold text-blue-600">
              {analytics.average_satisfaction?.toFixed(2)}
            </p>

          </div>

          <div className="bg-green-50 rounded-3xl p-6 border border-green-100">

            <div className="flex items-center gap-3 mb-3">

              <TrendingUp className="text-green-600" />

              <h3 className="font-semibold">
                Highest Score
              </h3>

            </div>

            <p className="text-5xl font-bold text-green-600">
              {analytics.max_satisfaction?.toFixed(2)}
            </p>

          </div>

          <div className="bg-red-50 rounded-3xl p-6 border border-red-100">

            <div className="flex items-center gap-3 mb-3">

              <TrendingDown className="text-red-600" />

              <h3 className="font-semibold">
                Lowest Score
              </h3>

            </div>

            <p className="text-5xl font-bold text-red-600">
              {analytics.min_satisfaction?.toFixed(2)}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default PatientSatisfaction;