import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Login failed"
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
            Sign in to continue
          </p>

        </div>

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
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Sign In
        </button>

        <div className="text-center mt-6">

          <span className="text-slate-500">
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-2"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>

  );

};

export default Login;