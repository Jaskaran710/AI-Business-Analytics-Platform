import { UserCircle, Moon } from "lucide-react";

const Navbar = () => {

  return (

    <div className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          AI Business Analytics
        </h2>

        <p className="text-slate-400">
          Monitor insights and analytics
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button
          className="bg-slate-800 hover:bg-slate-700 transition p-3 rounded-xl text-white"
        >
          <Moon size={20} />
        </button>

        <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-2xl border border-slate-700">

          <UserCircle
            size={38}
            className="text-blue-400"
          />

          <div>

            <p className="font-semibold text-white">
              Welcome Back
            </p>

            <p className="text-sm text-slate-400">
              Analytics User
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Navbar;