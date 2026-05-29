const AIRecommendations = ({ analytics }) => {

  if (!analytics) return null;

  const recommendations = [];

  if (
    analytics.average_wait_time &&
    analytics.average_wait_time > 30
  ) {
    recommendations.push(
      "Average patient wait time is high. Consider increasing staffing levels."
    );
  }

  if (
    analytics.average_satisfaction &&
    analytics.average_satisfaction < 5
  ) {
    recommendations.push(
      "Patient satisfaction is low. Review patient experience processes."
    );
  }

  if (
    analytics.department_counts
  ) {

    const topDepartment =
      Object.entries(
        analytics.department_counts
      ).sort(
        (a, b) => b[1] - a[1]
      )[0];

    if (topDepartment) {

      recommendations.push(
        `${topDepartment[0]} has the highest referral volume.`
      );

    }

  }

  return (

    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Recommendations
      </h2>

      <div className="space-y-4">

        {
          recommendations.map(
            (item, index) => (

              <div
                key={index}
                className="border rounded-xl p-4"
              >
                {item}
              </div>

            )
          )
        }

      </div>

    </div>

  );

};

export default AIRecommendations;
