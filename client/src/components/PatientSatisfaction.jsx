const PatientSatisfaction = ({ analytics }) => {

  if (!analytics) return null;

  return (

    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Patient Satisfaction Analytics
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <div className="border rounded-xl p-4">

          <h3 className="font-semibold">
            Average Satisfaction
          </h3>

          <p className="text-2xl font-bold">
            {analytics.average_satisfaction?.toFixed(2)}
          </p>

        </div>

        <div className="border rounded-xl p-4">

          <h3 className="font-semibold">
            Highest Satisfaction
          </h3>

          <p className="text-2xl font-bold">
            {analytics.max_satisfaction?.toFixed(2)}
          </p>

        </div>

        <div className="border rounded-xl p-4">

          <h3 className="font-semibold">
            Lowest Satisfaction
          </h3>

          <p className="text-2xl font-bold">
            {analytics.min_satisfaction?.toFixed(2)}
          </p>

        </div>

      </div>

    </div>

  );

};

export default PatientSatisfaction;
