const PatientSatisfaction = ({ analytics }) => {

  if (!analytics) return null;

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mt-6">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-800">
          Patient Satisfaction Analytics
        </h2>

        <p className="text-slate-500 mt-2">
          Satisfaction score performance overview
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">

          <h3 className="text-slate-500 mb-2">
            Average Satisfaction
          </h3>

          <p className="text-4xl font-bold text-blue-600">
            {analytics.average_satisfaction?.toFixed(2)}
          </p>

        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">

          <h3 className="text-slate-500 mb-2">
            Highest Satisfaction
          </h3>

          <p className="text-4xl font-bold text-green-600">
            {analytics.max_satisfaction?.toFixed(2)}
          </p>

        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">

          <h3 className="text-slate-500 mb-2">
            Lowest Satisfaction
          </h3>

          <p className="text-4xl font-bold text-red-600">
            {analytics.min_satisfaction?.toFixed(2)}
          </p>

        </div>

      </div>

    </div>

  );

};

export default PatientSatisfaction;