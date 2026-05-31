import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <div className="flex-1 overflow-hidden">

        <Navbar />

        <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8">

          <div className="max-w-7xl mx-auto">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;