import { useContext, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AskData = () => {

  const { analytics } = useContext(AnalyticsContext);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleAsk = async () => {

  if (!question.trim()) {
    return;
  }

  try {

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question
      }
    ]);

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

    setMessages((prev) => [
      ...prev,
      {
        role: "ai",
        content: response.data.answer
      }
    ]);

  } catch (error) {

    console.error(error);

    setAnswer(
      "Failed to get AI response."
    );

  } finally {

    setQuestion("");

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

        <div className="mt-8 space-y-4">

          {
            messages.map((message, index) => (

              <div
                key={index}
                className={
                  message.role === "user"
                    ? "bg-blue-600 text-white p-4 rounded-2xl ml-auto max-w-2xl"
                    : "bg-white p-4 rounded-2xl shadow-md max-w-2xl"
                }
              >
                {message.content}
              </div>

            ))
          }

          {
            loading && (
              <div className="bg-white p-4 rounded-2xl shadow-md max-w-2xl">
                Thinking...
              </div>
            )
          }

        </div>
      </div>
    </DashboardLayout>
  );

};

export default AskData;









