import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  Brain,
  Database,
  BarChart3,
  Sparkles,
  Eye,
  EyeOff
} from "lucide-react";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");
const [showPassword, setShowPassword] =
  useState(false);

  const handleLogin = async () => {

    try {

      const response =
        await axios.post(
          "https://ai-business-analytics-api.onrender.com/api/auth/login",
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

      {/* BACKGROUND */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[180px] opacity-30" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-violet-600 blur-[180px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-10 sm:py-12">

        {/* HEADER */}

        <div className="text-center mb-10 sm:mb-12">

          <h1 className="text-4xl sm:text-6xl font-bold text-white">

            AI Business Analytics

          </h1>

          <p className="text-slate-400 text-base sm:text-xl mt-4">

            AI Powered Business Intelligence Platform

          </p>

        </div>

        {/* MAIN */}

        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* LEFT PANEL */}

          <div className="lg:col-span-2">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 sm:p-8">

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">

                <div className="bg-blue-500/20 border border-blue-500/30 rounded-3xl p-6">

                  <Database
                    size={32}
                    className="text-blue-400 mb-3"
                  />

                  <h3 className="text-white font-bold">

                    Dataset Analytics

                  </h3>

                  <p className="text-slate-300 text-sm mt-2">

                    Upload CSV & Excel files for instant analysis

                  </p>

                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-3xl p-6">

                  <BarChart3
                    size={32}
                    className="text-emerald-400 mb-3"
                  />

                  <h3 className="text-white font-bold">

                    Interactive Dashboards

                  </h3>

                  <p className="text-slate-300 text-sm mt-2">

                    Charts, KPIs and business intelligence

                  </p>

                </div>

                <div className="bg-violet-500/20 border border-violet-500/30 rounded-3xl p-6">

                  <Brain
                    size={32}
                    className="text-violet-400 mb-3"
                  />

                  <h3 className="text-white font-bold">

                    AI Copilot

                  </h3>

                  <p className="text-slate-300 text-sm mt-2">

                    Ask questions and generate insights

                  </p>

                </div>

              </div>

              <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-white/10">

                <div className="flex items-center gap-3 mb-6">

                  <Sparkles
                    className="text-yellow-400"
                  />

                  <h2 className="text-white text-2xl font-bold">

                    Platform Features

                  </h2>

                </div>

                <div className="space-y-4 text-slate-300">

                  <p>
                    • Upload CSV and Excel datasets
                  </p>

                  <p>
                    • Generate executive dashboards
                  </p>

                  <p>
                    • Download AI-powered PDF reports
                  </p>

                  <p>
                    • Query data using natural language
                  </p>

                  <p>
                    • Explore trends and business insights
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* LOGIN FORM */}

          <div>

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl">

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">

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

             <div className="relative mb-6">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 pr-14"
    placeholder="Password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
  >

    {
      showPassword
        ? <EyeOff size={20} />
        : <Eye size={20} />
    }

  </button>

</div>

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