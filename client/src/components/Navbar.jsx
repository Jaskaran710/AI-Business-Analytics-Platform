import {
  UserCircle,
  Moon,
  Sparkles
} from "lucide-react";

const Navbar = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="h-24 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      <div>

        <div className="flex items-center gap-2">

          <Sparkles
            size={22}
            className="text-blue-400"
          />

          <span className="text-blue-400 font-semibold">
            AI Powered Platform
          </span>

        </div>

        <h2 className="text-4xl font-bold text-white mt-1">
          AI Business Analytics
        </h2>

        <p className="text-slate-400">
          Monitor insights, analytics and performance
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button
          className="bg-slate-800 hover:bg-slate-700 transition p-3 rounded-xl text-white border border-slate-700"
          title="Dark Mode Coming Soon"
        >
          <Moon size={20} />
        </button>

        <div className="flex items-center gap-3 bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700">

          <UserCircle
            size={42}
            className="text-blue-400"
          />

          <div>

            <p className="font-semibold text-white">
              Welcome Back
            </p>

            <p className="text-sm text-slate-300">
              {user?.name || "Analytics User"}
            </p>

            <p className="text-xs text-slate-500">
              {user?.email || ""}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Navbar;