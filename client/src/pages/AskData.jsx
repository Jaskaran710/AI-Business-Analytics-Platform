import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";

import {
  Brain,
  Send,
  Sparkles,
  User
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import { AnalyticsContext } from "../context/AnalyticsContext";

const AskData = () => {

  const { analytics } = useContext(
    AnalyticsContext
  );

  const [question, setQuestion] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState([]);

  const chatContainerRef =
    useRef(null);

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

      const userQuestion =
        question;

      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: userQuestion
        }
      ]);

      setQuestion("");

      setLoading(true);

      const response =
        await axios.post(
          "http://localhost:5000/api/ai",
          {
            question: userQuestion,
            analytics
          },
          {
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem("token")
            }
          }
        );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            response.data.answer
        }
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Failed to generate response."
        }
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (

    <DashboardLayout>

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-3xl p-5 sm:p-8 text-white shadow-xl mb-8">

          <div className="flex items-center gap-4">

            <Brain
              size={40}
              className="flex-shrink-0"
            />

            <div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">

                AI Data Copilot

              </h1>

              <p className="text-violet-100 mt-2 text-sm sm:text-base">

                Ask natural language questions about your dataset

              </p>

            </div>

          </div>

        </div>

        {/* MAIN LAYOUT */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* SUGGESTIONS */}

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 h-fit">

            <h2 className="font-bold text-xl mb-4">

              Suggested Questions

            </h2>

            <div className="space-y-3">

              <button
                onClick={() =>
                  setQuestion(
                    "What are the key insights from this dataset?"
                  )
                }
                className="w-full text-left bg-slate-100 hover:bg-slate-200 rounded-xl p-3 transition"
              >
                Key Insights
              </button>

              <button
                onClick={() =>
                  setQuestion(
                    "What trends do you see?"
                  )
                }
                className="w-full text-left bg-slate-100 hover:bg-slate-200 rounded-xl p-3 transition"
              >
                Detect Trends
              </button>

              <button
                onClick={() =>
                  setQuestion(
                    "What are the biggest risks?"
                  )
                }
                className="w-full text-left bg-slate-100 hover:bg-slate-200 rounded-xl p-3 transition"
              >
                Business Risks
              </button>

              <button
                onClick={() =>
                  setQuestion(
                    "Give me recommendations."
                  )
                }
                className="w-full text-left bg-slate-100 hover:bg-slate-200 rounded-xl p-3 transition"
              >
                AI Recommendations
              </button>

            </div>

          </div>

          {/* CHAT */}

          <div className="lg:col-span-3">

            <div
              ref={chatContainerRef}
              className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-slate-200
                h-[500px]
                sm:h-[600px]
                overflow-y-auto
                p-4
                sm:p-6
              "
            >

              {

                messages.length === 0 && (

                  <div className="text-center mt-20 sm:mt-32">

                    <Sparkles
                      size={60}
                      className="mx-auto text-violet-600 mb-4"
                    />

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">

                      Start a Conversation

                    </h2>

                    <p className="text-slate-500 mt-2">

                      Ask anything about your dataset.

                    </p>

                  </div>

                )

              }

              <div className="space-y-5">

                {

                  messages.map(
                    (
                      message,
                      index
                    ) => (

                      <div
                        key={index}
                        className={
                          message.role === "user"
                            ? "flex justify-end"
                            : "flex justify-start"
                        }
                      >

                        <div
                          className={
                            message.role === "user"
                              ? "bg-blue-600 text-white p-4 rounded-3xl max-w-full sm:max-w-3xl"
                              : "bg-slate-100 text-slate-800 p-4 rounded-3xl max-w-full sm:max-w-3xl"
                          }
                        >

                          <div className="flex items-center gap-2 mb-2">

                            {

                              message.role === "user"
                                ? (
                                  <User size={18} />
                                )
                                : (
                                  <Brain size={18} />
                                )

                            }

                            <span className="font-semibold">

                              {
                                message.role === "user"
                                  ? "You"
                                  : "AI Copilot"
                              }

                            </span>

                          </div>

                          <div className="whitespace-pre-wrap break-words">

                            {message.content}

                          </div>

                        </div>

                      </div>

                    )
                  )

                }

                {

                  loading && (

                    <div className="flex justify-start">

                      <div className="bg-slate-100 rounded-3xl p-4">

                        AI is analyzing your dataset...

                      </div>

                    </div>

                  )

                }

              </div>

            </div>

            {/* INPUT */}

            <div className="mt-5 flex flex-col sm:flex-row gap-3">

              <input
                value={question}
                onChange={(e) =>
                  setQuestion(
                    e.target.value
                  )
                }
                className="
                  flex-1
                  border
                  border-slate-300
                  rounded-2xl
                  px-5
                  py-4
                "
                placeholder="Ask anything about your data..."
                onKeyDown={(e) => {

                  if (
                    e.key === "Enter" &&
                    !loading
                  ) {

                    handleAsk();

                  }

                }}
              />

              <button
                onClick={handleAsk}
                disabled={loading}
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >

                <Send size={18} />

                Send

              </button>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AskData;