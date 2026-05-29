import { useContext, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AskData = () => {

  const { analytics } = useContext(AnalyticsContext);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {

    const q = question.toLowerCase();

    if (q.includes("rows")) {
      setAnswer(`Dataset has ${analytics.rows} rows.`);
    }
    else if (q.includes("columns")) {
      setAnswer(`Dataset has ${analytics.columns} columns.`);
    }
    else if (q.includes("age")) {
      setAnswer(`Average age is ${analytics.average_age?.toFixed(2)}.`);
    }
    else if (q.includes("wait")) {
      setAnswer(`Average wait time is ${analytics.average_wait_time?.toFixed(2)}.`);
    }
    else if (q.includes("average satisfaction")) {
      setAnswer(`Average satisfaction is ${analytics.average_satisfaction?.toFixed(2)}.`);
    }
    else if (q.includes("highest satisfaction")) {
      setAnswer(`Highest satisfaction is ${analytics.max_satisfaction?.toFixed(2)}.`);
    }
    else if (q.includes("lowest satisfaction")) {
      setAnswer(`Lowest satisfaction is ${analytics.min_satisfaction?.toFixed(2)}.`);
    }
    else if (q.includes("department")) {

      const topDepartment =
        Object.entries(
          analytics.department_counts || {}
        ).sort(
          (a, b) => b[1] - a[1]
        )[0];

      if (topDepartment) {
        setAnswer(
          `${topDepartment[0]} has the highest referrals (${topDepartment[1]}).`
        );
      } else {
        setAnswer("No department data available.");
      }

    }
    else {
      setAnswer("Question not recognized.");
    }

  };

  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6">Ask Your Data</h1>

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-3 w-full"
          placeholder="Ask a question..."
        />

        <button
          onClick={handleAsk}
          className="mt-4 px-6 py-3 bg-black text-white rounded"
        >
          Ask
        </button>

        <div className="mt-6 text-xl">
          {answer}
        </div>
      </div>
    </DashboardLayout>
  );

};

export default AskData;

