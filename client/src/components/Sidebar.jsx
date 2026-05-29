import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        AI Analytics
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Upload Dataset
        </Link>

        <Link
          to="/ai-insights"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          AI Insights
        </Link>

        <Link
          to="/ask-data"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Ask Your Data
        </Link>

        <Link
          to="/login"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Login
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;

