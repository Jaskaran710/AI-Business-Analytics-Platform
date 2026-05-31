import {
  Sparkles,
  Brain,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

const AIRecommendations = ({ analytics }) => {

  if (!analytics) return null;

  const recommendations = [];

  if (
    analytics.average_wait_time &&
    analytics.average_wait_time > 30
  ) {

    recommendations.push({
      type: "warning",
      text: "Average patient wait time is high. Consider increasing staffing levels."
    });

  }

  if (
    analytics.average_satisfaction &&
    analytics.average_satisfaction < 5
  ) {

    recommendations.push({
      type: "warning",
      text: "Patient satisfaction is below target. Review service quality processes."
    });

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

      recommendations.push({
        type: "success",
        text: `${topDepartment[0]} is currently generating the highest patient volume.`
      });

    }

  }

  return (

    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mt-6">

      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-8">

        <div className="flex items-center gap-3">

          <Brain size={30} />

          <div>

            <h2 className="text-3xl font-bold">
              AI Recommendations
            </h2>

            <p className="text-violet-100">
              AI-generated business intelligence insights
            </p>

          </div>

        </div>

      </div>

      <div className="p-8">

        <div className="space-y-5">

          {

            recommendations.map(
              (item, index) => (

                <div
                  key={index}
                  className={`rounded-2xl p-5 border ${
                    item.type === "warning"
                      ? "bg-orange-50 border-orange-200"
                      : "bg-green-50 border-green-200"
                  }`}
                >

                  <div className="flex gap-4">

                    {

                      item.type === "warning"
                        ? (
                          <AlertTriangle
                            className="text-orange-600"
                          />
                        )
                        : (
                          <TrendingUp
                            className="text-green-600"
                          />
                        )

                    }

                    <p className="text-slate-700 font-medium">
                      {item.text}
                    </p>

                  </div>

                </div>

              )
            )

          }

          {recommendations.length === 0 && (

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <Sparkles
                  className="text-blue-600"
                />

                <p className="font-medium text-slate-700">
                  No critical issues detected. Dataset performance appears healthy.
                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default AIRecommendations;