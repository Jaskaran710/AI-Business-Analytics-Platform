import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
  Database,
  Brain,
  BarChart3,
  Sparkles,
  FileText
} from "lucide-react";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async () => {
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {

  alert(
    "Please enter a valid email address."
  );

  return;

}
const allowedDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com"
];

const domain =
  email.split("@")[1]?.toLowerCase();

if (!allowedDomains.includes(domain)) {

  alert(
    "Please use a valid email."
  );

  return;

}

if (password.length < 8) {

  alert(
    "Password must be at least 8 characters long."
  );

  return;

}

if (!/[A-Z]/.test(password)) {

  alert(
    "Password must contain at least one uppercase letter."
  );

  return;

}

if (!/[0-9]/.test(password)) {

  alert(
    "Password must contain at least one number."
  );

  return;

}

    try {

      await axios.post(
        "https://ai-business-analytics-api.onrender.com/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Registration failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-violet-600 blur-[180px] opacity-30" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[180px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-10 sm:py-12">

        {/* HEADER */}

        <div className="text-center mb-10 sm:mb-12">

          <h1 className="text-4xl sm:text-6xl font-bold text-white">

            AI Business Analytics

          </h1>

          <p className="text-slate-400 text-base sm:text-xl mt-4">

            Create your account and start generating AI-powered insights

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

                    Dataset Analysis

                  </h3>

                  <p className="text-slate-300 text-sm mt-2">

                    Upload and analyze CSV or Excel datasets

                  </p>

                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-3xl p-6">

                  <Brain
                    size={32}
                    className="text-emerald-400 mb-3"
                  />

                  <h3 className="text-white font-bold">

                    AI Insights

                  </h3>

                  <p className="text-slate-300 text-sm mt-2">

                    Generate intelligent recommendations

                  </p>

                </div>

                <div className="bg-violet-500/20 border border-violet-500/30 rounded-3xl p-6">

                  <BarChart3
                    size={32}
                    className="text-violet-400 mb-3"
                  />

                  <h3 className="text-white font-bold">

                    Dashboards

                  </h3>

                  <p className="text-slate-300 text-sm mt-2">

                    Interactive visual analytics

                  </p>

                </div>

              </div>

              <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-white/10">

                <div className="flex items-center gap-3 mb-6">

                  <Sparkles
                    className="text-yellow-400"
                  />

                  <h2 className="text-white text-2xl font-bold">

                    Platform Capabilities

                  </h2>

                </div>

                <div className="space-y-5">

                  <div className="flex items-center gap-3 text-slate-300">

                    <BarChart3 size={18} />

                    <span>
                      Interactive Dashboards
                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <Brain size={18} />

                    <span>
                      AI Generated Insights
                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <FileText size={18} />

                    <span>
                      Executive PDF Reports
                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <Sparkles size={18} />

                    <span>
                      Ask Your Data with AI
                    </span>

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <Database size={18} />

                    <span>
                      Dataset History Tracking
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* REGISTER FORM */}

          <div>

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 sm:p-8 shadow-2xl">

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">

                Create Account

              </h2>

              <p className="text-slate-400 mb-8">

                Join the platform

              </p>

              <input
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 mb-4"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
              />

              <input
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4 mb-4"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />

              <input
                type="password"
                className="w-full bg-white/5 border border-white/10 text-white rounded-2xl p-4"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />
<p className="text-xs text-slate-400 mt-2">
  Password must be at least 8 characters long and contain:
  1 uppercase letter and 1 number.
</p>
              <button
                onClick={handleRegister}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
              >
                Create Account
              </button>

              <div className="text-center mt-6">

                <span className="text-slate-400">

                  Already have an account?

                </span>

                <Link
                  to="/login"
                  className="text-blue-400 ml-2 font-semibold"
                >
                  Sign In
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Register;