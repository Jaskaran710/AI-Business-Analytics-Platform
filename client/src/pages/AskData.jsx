import { useContext, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AskData = () => {

  const { analytics } = useContext(AnalyticsContext);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {

  if (!question.trim()) {
    return;
  }

  try {

    setLoading(true);

    const response = await axios.post(
      "http://localhost:5000/api/ai",
      {
        question,
        analytics
      }
    );

    setAnswer(
      response.data.answer
    );

  } catch (error) {

    console.error(error);

    setAnswer(
      "Failed to get AI response."
    );

  } finally {

    setLoading(false);

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
          disabled={loading}
          className="mt-4 px-6 py-3 bg-black text-white rounded disabled:bg-gray-400"
        >
          {
            loading
              ? "Thinking..."
              : "Ask"
          }
        </button>

        <div className="mt-6 text-xl">
          {answer}
        </div>
      </div>
    </DashboardLayout>
  );

};

export default AskData;





