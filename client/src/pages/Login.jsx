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
        JSON.stringify(
          response.data.user
        )
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

    <div className="min-h-screen bg-slate-950 overflow-hidden relative">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[180px] opacity-30" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-violet-600 blur-[180px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-10 py-12">

        <div className="text-center mb-12">

          <h1 className="text-6xl font-bold text-white">
            AI Business Analytics
          </h1>

          <p className="text-slate-400 text-xl mt-4">
            AI Powered Business Intelligence Platform
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">

          <div className="lg:col-span-2">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8">

              <div className="grid md:grid-cols-3 gap-5 mb-6">

                <div className="bg-blue-500/20 border border-blue-500/30 rounded-3xl p-6">

                  <p className="text-slate-300 text-sm">
                    Revenue
                  </p>

                  <h2 className="text-4xl font-bold text-white mt-2">
                    $2.4M
                  </h2>

                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-3xl p-6">

                  <p className="text-slate-300 text-sm">
                    Growth
                  </p>

                  <h2 className="text-4xl font-bold text-white mt-2">
                    +18%
                  </h2>

                </div>

                <div className="bg-violet-500/20 border border-violet-500/30 rounded-3xl p-6">

                  <p className="text-slate-300 text-sm">
                    AI Score
                  </p>

                  <h2 className="text-4xl font-bold text-white mt-2">
                    92%
                  </h2>

                </div>

              </div>

              <div className="bg-slate-900/60 rounded-3xl p-8 border border-white/10">

                <h2 className="text-white text-2xl font-bold mb-6">
                  AI Copilot Preview
                </h2>

                <div className="space-y-4">

                  <div className="bg-blue-600 text-white p-4 rounded-2xl w-fit">
                    What are the key insights?
                  </div>

                  <div className="bg-white/10 text-slate-200 p-4 rounded-2xl max-w-xl">
                    Revenue increased by 18%. Customer satisfaction remains stable. Wait time optimization is recommended.
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div>

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

              <h2 className="text-4xl font-bold text-white mb-2">
                Welcome Back
              </h2>

              <p className="text-slate-400 mb-8">
                Sign in to continue
              </p>

              <input
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 mb-4"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 mb-6"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
              >
                Sign In
              </button>

              <div className="text-center mt-6">

                <span className="text-slate-400">
                  New user?
                </span>

                <Link
                  to="/register"
                  className="text-blue-400 ml-2 font-semibold"
                >
                  Create Account
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Login;