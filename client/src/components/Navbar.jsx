import { UserCircle } from "lucide-react";

const Navbar = () => {

  return (

    <div className="h-20 bg-white shadow-md flex items-center justify-between px-8 border-b">

      <div>

        <h2 className="text-3xl font-bold text-slate-800">
          Business Analytics Dashboard
        </h2>

        <p className="text-gray-500">
          Monitor insights and analytics
        </p>

      </div>

      <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl">

        <UserCircle
          size={36}
          className="text-slate-700"
        />

        <div>

          <p className="font-semibold">
            Welcome Back
          </p>

          <p className="text-sm text-gray-500">
            Analytics User
          </p>

        </div>

      </div>

    </div>

  );

};

export default Navbar;
