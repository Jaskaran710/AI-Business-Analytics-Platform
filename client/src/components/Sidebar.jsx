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
  UserCircle
} from "lucide-react";

const Sidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const user =
    JSON.parse(
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

    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          AI Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Business Intelligence Platform
        </p>

      </div>

      <div className="p-4 flex-1">

        <div className="space-y-2">

          {

            menuItems.map((item) => {

              const Icon = item.icon;

              const active =
                location.pathname === item.path;

              return (

                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >

                  <Icon size={20} />

                  {item.label}

                </Link>

              );

            })

          }

        </div>

      </div>

      <div className="p-4 border-t border-slate-800">

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-5 mb-4 border border-slate-600 shadow-lg">

          <div className="flex items-center gap-4">

            <div className="bg-blue-600 p-3 rounded-2xl">

              <UserCircle
                size={36}
                className="text-white"
              />

            </div>

            <div>

              <p className="text-white font-bold text-lg">
                {user?.name || "Analytics User"}
              </p>

              <p className="text-slate-300 text-sm">
                {user?.email || ""}
              </p>

              <p className="text-green-400 text-xs mt-2 font-medium">
                ● Active Session
              </p>

            </div>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition font-semibold"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>

  );

};

export default Sidebar;