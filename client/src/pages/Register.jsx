import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Registration failed"
      );

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white w-[500px] rounded-3xl shadow-2xl p-10 border border-slate-200">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-slate-800">
            AI Business Analytics
          </h1>

          <p className="text-slate-500 mt-3">
            Create your account
          </p>

        </div>

        <input
          className="w-full border border-slate-300 rounded-xl p-4 mb-4"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border border-slate-300 rounded-xl p-4 mb-4"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border border-slate-300 rounded-xl p-4 mb-6"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Create Account
        </button>

        <div className="text-center mt-6">

          <span className="text-slate-500">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-2"
          >
            Sign In
          </Link>

        </div>

      </div>

    </div>

  );

};

export default Register;