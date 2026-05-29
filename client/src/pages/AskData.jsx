import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaRobot, FaUser } from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AskData = () => {

  const { analytics } = useContext(AnalyticsContext);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const chatContainerRef = useRef(null);

  useEffect(() => {

    if (chatContainerRef.current) {

      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;

    }

  }, [messages, loading]);

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
      <div className="max-w-5xl mx-auto h-[80vh] flex flex-col">

        <h1 className="text-4xl font-bold mb-6">
          AI Data Assistant
        </h1>

        <div
          ref={chatContainerRef}
          className="flex-1 bg-white rounded-3xl shadow-xl p-6 overflow-y-auto space-y-4">

          {
            messages.length === 0 && (

              <div className="text-center text-gray-500 mt-20">
                Ask questions about your dataset and get AI-powered insights.
              </div>

            )
          }

          {
            messages.map((message, index) => (

              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end items-start gap-3"
                    : "flex justify-start items-start gap-3"
                }
              >

                {
                  message.role === "ai" && (
                    <div className="bg-black text-white p-3 rounded-full">
                      <FaRobot />
                    </div>
                  )
                }

                <div
                  className={
                    message.role === "user"
                      ? "bg-blue-600 text-white p-4 rounded-2xl max-w-2xl shadow-md"
                      : "bg-gray-100 p-4 rounded-2xl max-w-2xl shadow-md"
                  }
                >
                  {message.content}
                </div>

                {
                  message.role === "user" && (
                    <div className="bg-blue-600 text-white p-3 rounded-full">
                      <FaUser />
                    </div>
                  )
                }

              </div>

            ))
          }

          {
            loading && (

              <div className="flex justify-start">

                <div className="bg-gray-100 p-4 rounded-2xl">
                  Thinking...
                </div>

              </div>

            )
          }

        </div>

        <div className="mt-4 flex gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 border p-4 rounded-2xl"
            placeholder="Ask anything about your dataset..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                handleAsk();
              }
            }}
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="px-8 py-4 bg-black text-white rounded-2xl disabled:bg-gray-400"
          >
            Send
          </button>

        </div>

      </div>
    </DashboardLayout>
  );

};

export default AskData;
















