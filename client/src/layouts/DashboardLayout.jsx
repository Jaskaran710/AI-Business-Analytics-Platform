import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {

  return (

    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

          {children}

        </main>

      </div>

    </div>

  );

};

export default DashboardLayout;