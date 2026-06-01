import { useState } from "react";

import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  Brain,
  MessageSquare,
  History,
  Database,
  LogOut,
  UserCircle,
  Menu,
  X
} from "lucide-react";

const Sidebar = () => {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("analytics");

    navigate("/login");

  };

  const menuItems = [

    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard"
    },

    {
      icon: Upload,
      label: "Upload Dataset",
      path: "/upload"
    },

    {
      icon: Brain,
      label: "AI Insights",
      path: "/ai-insights"
    },

    {
      icon: MessageSquare,
      label: "Ask Your Data",
      path: "/ask-data"
    },

    {
      icon: History,
      label: "Chat History",
      path: "/chat-history"
    },

    {
      icon: Database,
      label: "Dataset History",
      path: "/dataset-history"
    }

  ];

  return (

    <>

      {/* MOBILE MENU BUTTON */}

      <button
        onClick={() =>
          setMobileOpen(
            !mobileOpen
          )
        }
        className="
          fixed
          bottom-5
          left-5
          lg:hidden
          z-50

          bg-blue-600
          hover:bg-blue-700

          text-white

          p-3
          rounded-full

          shadow-xl
          transition
        "
      >

        {
          mobileOpen
            ? <X size={22} />
            : <Menu size={22} />
        }

      </button>

      {/* OVERLAY */}

      {

        mobileOpen && (

          <div
            onClick={() =>
              setMobileOpen(
                false
              )
            }
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-40
              lg:hidden
            "
          />

        )

      }

      {/* SIDEBAR */}

      <aside
        className={`
          fixed
          lg:relative

          top-0
          left-0

          z-50

          w-[260px]
          sm:w-72

          min-h-screen

          bg-slate-900
          border-r
          border-slate-800

          flex
          flex-col

          transition-transform
          duration-300

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* HEADER */}

        <div className="p-5 border-b border-slate-800">

          <h1 className="text-2xl sm:text-3xl font-bold text-white">

            AI Analytics

          </h1>

          <p className="text-slate-400 mt-2 text-sm">

            Business Intelligence Platform

          </p>

        </div>

        {/* MENU */}

        <div className="p-4 flex-1">

          <div className="space-y-2">

            {

              menuItems.map((item) => {

                const Icon =
                  item.icon;

                const active =
                  location.pathname ===
                  item.path;

                return (

                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      setMobileOpen(
                        false
                      )
                    }
                    className={`
                      flex
                      items-center
                      gap-3
                      p-4
                      rounded-xl
                      transition-all

                      ${
                        active
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-300 hover:bg-slate-800"
                      }
                    `}
                  >

                    <Icon size={20} />

                    <span>

                      {item.label}

                    </span>

                  </Link>

                );

              })

            }

          </div>

        </div>

        {/* USER CARD */}

        <div className="p-4 border-t border-slate-800">

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-4 mb-4 border border-slate-600 shadow-lg">

            <div className="flex items-center gap-3">

              <div className="bg-blue-600 p-3 rounded-2xl">

                <UserCircle
                  size={32}
                  className="text-white"
                />

              </div>

              <div className="min-w-0">

                <p className="text-white font-bold truncate">

                  {
                    user?.name ||
                    "Analytics User"
                  }

                </p>

                <p className="text-slate-300 text-sm truncate">

                  {
                    user?.email ||
                    ""
                  }

                </p>

                <p className="text-green-400 text-xs mt-2 font-medium">

                  ● Active Session

                </p>

              </div>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2

              bg-red-600
              hover:bg-red-700

              text-white

              p-3
              rounded-xl

              transition
              font-semibold
            "
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>

    </>

  );

};

export default Sidebar;