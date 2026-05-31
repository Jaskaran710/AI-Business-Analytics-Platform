import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {

  return (

    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>

  );

};

export default DashboardLayout;