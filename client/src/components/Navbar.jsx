import {
  UserCircle,
  Moon,
  Sparkles,
  ShieldCheck
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

        <div className="bg-slate-800 border border-slate-700 rounded-3xl px-5 py-3 flex items-center gap-4 min-w-[320px]">

          <div className="bg-blue-600 p-3 rounded-2xl">

            <UserCircle
              size={36}
              className="text-white"
            />

          </div>

          <div className="flex-1">

            <p className="text-xs uppercase tracking-wider text-blue-400">
              Logged In User
            </p>

            <p className="text-white font-bold text-lg">
              {user?.name || "Analytics User"}
            </p>

            <p className="text-slate-400 text-sm">
              {user?.email || ""}
            </p>

          </div>

          <div className="text-right">

            <ShieldCheck
              size={22}
              className="text-green-400 ml-auto"
            />

            <p className="text-xs text-green-400 mt-1">
              Verified
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Navbar;