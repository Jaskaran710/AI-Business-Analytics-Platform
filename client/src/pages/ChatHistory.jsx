import { useEffect, useState } from "react";
import axios from "axios";

import {
  Brain,
  User,
  Search,
  MessageSquare
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

const ChatHistory = () => {

  const [chats, setChats] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const fetchChats =
      async () => {

        try {

          const response =
            await axios.get(
              "http://localhost:5000/api/ai/history",
              {
                headers: {
                  Authorization:
                    "Bearer " +
                    localStorage.getItem(
                      "token"
                    )
                }
              }
            );

          setChats(
            response.data
          );

        } catch (error) {

          console.error(error);

        }

      };

    fetchChats();

  }, []);

  const filteredChats =
    chats.filter((chat) => {

      const query =
        search.toLowerCase();

      return (

        chat.question
          ?.toLowerCase()
          .includes(query)

        ||

        chat.answer
          ?.toLowerCase()
          .includes(query)

      );

    });

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* HERO */}

        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl p-5 sm:p-8 text-white shadow-xl">

          <div className="flex items-center gap-4">

            <MessageSquare
              size={40}
              className="flex-shrink-0"
            />

            <div>

              <h1 className="text-3xl sm:text-5xl font-bold">

                AI Conversation History

              </h1>

              <p className="text-indigo-100 mt-2 text-sm sm:text-base">

                Review previous conversations with AI Copilot

              </p>

            </div>

          </div>

        </div>

        {/* SEARCH */}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-5 sm:p-6">

          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">

            <div>

              <p className="text-slate-500">

                Total Conversations

              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">

                {filteredChats.length}

              </h2>

            </div>

            <div className="relative w-full lg:w-96">

              <Search
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search conversations..."
                className="
                  w-full
                  border
                  border-slate-300
                  rounded-2xl
                  pl-12
                  pr-4
                  py-3
                "
              />

            </div>

          </div>

        </div>

        {

          filteredChats.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-16 text-center">

              <Brain
                size={70}
                className="mx-auto text-violet-600 mb-4"
              />

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">

                No Conversations Found

              </h2>

              <p className="text-slate-500 mt-2">

                Start using AI Copilot to build conversation history.

              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {

                filteredChats.map(
                  (chat) => (

                    <div
                      key={chat._id}
                      className="
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        border-slate-200
                        overflow-hidden
                      "
                    >

                      {/* HEADER */}

                      <div className="bg-slate-900 text-white p-5">

                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">

                          <div className="flex items-center gap-3">

                            <Brain size={22} />

                            <span className="font-semibold">

                              AI Conversation

                            </span>

                          </div>

                          <span className="text-slate-400 text-sm">

                            {
                              new Date(
                                chat.createdAt
                              ).toLocaleString()
                            }

                          </span>

                        </div>

                      </div>

                      {/* QUESTION */}

                      <div className="p-5 sm:p-6">

                        <div className="flex gap-3 mb-5">

                          <div className="bg-blue-600 p-3 rounded-2xl text-white h-fit">

                            <User size={18} />

                          </div>

                          <div className="bg-blue-50 rounded-2xl p-4 flex-1">

                            <p className="font-semibold text-blue-700 mb-1">

                              Question

                            </p>

                            <p className="text-slate-700 break-words">

                              {chat.question}

                            </p>

                          </div>

                        </div>

                        {/* ANSWER */}

                        <div className="flex gap-3">

                          <div className="bg-violet-600 p-3 rounded-2xl text-white h-fit">

                            <Brain size={18} />

                          </div>

                          <div className="bg-violet-50 rounded-2xl p-4 flex-1">

                            <p className="font-semibold text-violet-700 mb-2">

                              AI Response

                            </p>

                            <p className="text-slate-700 whitespace-pre-wrap break-words">

                              {chat.answer}

                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  )
                )

              }

            </div>

          )

        }

      </div>

    </DashboardLayout>

  );

};

export default ChatHistory;