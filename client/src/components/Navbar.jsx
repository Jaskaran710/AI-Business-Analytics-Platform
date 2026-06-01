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

    <div
      className="
        min-h-[90px]
        bg-slate-900
        border-b
        border-slate-800
        flex
        items-center
        justify-between
        px-4
        sm:px-6
        lg:px-8
        py-4
      "
    >

      {/* LEFT SIDE */}

      <div className="min-w-0">

        <div className="flex items-center gap-2">

          <Sparkles
            size={18}
            className="text-blue-400"
          />

          <span className="text-blue-400 font-semibold text-xs sm:text-sm">
            AI Powered Platform
          </span>

        </div>

        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mt-1 truncate">

          AI Business Analytics

        </h2>

        <p className="text-slate-400 text-xs sm:text-sm hidden sm:block">

          Monitor insights, analytics and performance

        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-3">

        {/* DARK MODE PLACEHOLDER */}

        <button
          className="
            hidden
            sm:flex
            bg-slate-800
            hover:bg-slate-700
            transition
            p-3
            rounded-xl
            text-white
            border
            border-slate-700
          "
          title="Dark Mode Coming Soon"
        >

          <Moon size={18} />

        </button>

        {/* USER CARD */}

        <div
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-2xl
            sm:rounded-3xl
            px-3
            sm:px-5
            py-3
            flex
            items-center
            gap-3
          "
        >

          <div className="bg-blue-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl">

            <UserCircle
              size={28}
              className="text-white"
            />

          </div>

          <div className="hidden md:block flex-1">

            <p className="text-xs uppercase tracking-wider text-blue-400">

              Logged In User

            </p>

            <p className="text-white font-bold">

              {user?.name || "Analytics User"}

            </p>

            <p className="text-slate-400 text-sm">

              {user?.email || ""}

            </p>

          </div>

          <div className="hidden lg:block text-right">

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