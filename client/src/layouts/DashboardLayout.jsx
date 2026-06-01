import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {

  return (

    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">

        <Navbar />

        <main
          className="
            flex-1
            p-4
            sm:p-6
            lg:p-8
            bg-gradient-to-br
            from-slate-50
            via-blue-50
            to-slate-100
            overflow-x-hidden
          "
        >

          {children}

        </main>

      </div>

    </div>

  );

};

export default DashboardLayout;