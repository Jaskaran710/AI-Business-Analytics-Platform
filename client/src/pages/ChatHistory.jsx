import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

const ChatHistory = () => {

  const [chats, setChats] = useState([]);

  useEffect(() => {

    const fetchChats = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/ai/history"
        );

        setChats(response.data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchChats();

  }, []);

  return (

    <DashboardLayout>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          Chat History
        </h1>

        <div className="space-y-6">

          {
            chats.map((chat) => (

              <div
                key={chat._id}
                className="bg-white p-6 rounded-2xl shadow-md"
              >

                <div className="font-bold text-blue-600 mb-3">
                  Q: {chat.question}
                </div>

                <div className="mb-3">
                  {chat.answer}
                </div>

                <div className="text-sm text-gray-500">
                  {
                    new Date(
                      chat.createdAt
                    ).toLocaleString()
                  }
                </div>

              </div>

            ))
          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default ChatHistory;
