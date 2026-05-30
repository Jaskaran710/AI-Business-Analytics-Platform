import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  Brain,
  MessageSquare,
  User,
  History,
  LogOut
} from "lucide-react";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="w-72 min-h-screen bg-slate-900 text-white p-6 shadow-2xl">

      <h1 className="text-3xl font-bold mb-10">
        AI Analytics
      </h1>

      <div className="flex flex-col gap-3">

        <Link
          to="/"
          className="flex items-center gap-3 hover:bg-slate-800 p-4 rounded-xl transition"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="flex items-center gap-3 hover:bg-slate-800 p-4 rounded-xl transition"
        >
          <Upload size={20} />
          Upload Dataset
        </Link>

        <Link
          to="/ai-insights"
          className="flex items-center gap-3 hover:bg-slate-800 p-4 rounded-xl transition"
        >
          <Brain size={20} />
          AI Insights
        </Link>

        <Link
          to="/ask-data"
          className="flex items-center gap-3 hover:bg-slate-800 p-4 rounded-xl transition"
        >
          <MessageSquare size={20} />
          Ask Your Data
        </Link>

        <Link
          to="/chat-history"
          className="flex items-center gap-3 hover:bg-slate-800 p-4 rounded-xl transition"
        >
          <History size={20} />
          Chat History
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 hover:bg-red-700 p-4 rounded-xl transition text-left"
        >
          <LogOut size={20} />
          Logout
        </button>

        <Link
          to="/login"
          className="flex items-center gap-3 hover:bg-slate-800 p-4 rounded-xl transition"
        >
          <User size={20} />
          Login
        </Link>

      </div>

    </div>

  );

};

export default Sidebar;