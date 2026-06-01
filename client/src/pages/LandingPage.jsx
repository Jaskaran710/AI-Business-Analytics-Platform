import {
  Link
} from "react-router-dom";

import {
  Sparkles,
  Brain,
  BarChart3,
  FileText,
  MessageSquare,
  Database,
  ArrowRight
} from "lucide-react";

const LandingPage = () => {

  return (

    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO */}

<section className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28">

        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2 mb-8">

            <Sparkles
              size={18}
              className="text-blue-400"
            />

            <span className="text-sm text-slate-300">
              AI-Powered Business Intelligence Platform
            </span>

          </div>

<h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight">

            Transform
            <span className="text-blue-500">
              {" "}Data
            </span>

            <br />

            Into Insights

          </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-3xl mt-8 leading-relaxed">
            Upload datasets, generate AI-powered analytics,
            build interactive dashboards and create executive
            reports in seconds.

          </p>
<div className="flex flex-col sm:flex-row gap-5 mt-12">            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Login
            </Link>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="px-8 lg:px-24 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            "AI Insights",
            "Executive Reports",
            "Interactive Dashboards",
            "Dataset Analytics"
          ].map((item) => (

            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}

      <section className="px-8 lg:px-24 py-20">

<h2 className="text-3xl md:text-5xl font-bold text-center mb-16">

          Powerful Features

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              icon: Brain,
              title: "AI Insights",
              desc: "Generate business intelligence automatically."
            },
            {
              icon: BarChart3,
              title: "Dashboards",
              desc: "Visualize KPIs and performance metrics."
            },
            {
              icon: MessageSquare,
              title: "Ask Your Data",
              desc: "Chat with your datasets using AI."
            },
            {
              icon: FileText,
              title: "PDF Reports",
              desc: "Generate executive-ready reports."
            },
            {
              icon: Database,
              title: "Dataset History",
              desc: "Track and revisit uploaded datasets."
            },
            {
              icon: Sparkles,
              title: "AI Recommendations",
              desc: "Receive strategic business suggestions."
            }
          ].map((feature) => (

            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
            >

              <feature.icon
                size={36}
                className="text-blue-500 mb-5"
              />

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="px-8 lg:px-24 py-24">

   <div className="bg-gradient-to-r from-blue-700 to-violet-700 rounded-[40px] p-8 md:p-16 text-center">

<h2 className="text-3xl md:text-5xl font-bold mb-6">

            Ready To Unlock Insights?

          </h2>

          <p className="text-xl mb-10 text-blue-100">

            Start analyzing your data today.

          </p>

          <Link
            to="/register"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold inline-block"
          >
            Create Account
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-800 py-12 text-center">

<h3 className="text-xl md:text-2xl font-bold">
          AI Business Analytics Platform
        </h3>

        <p className="text-slate-400 mt-3">
          Designed & Developed By Jaskaran Arora
        </p>

      </footer>

    </div>

  );

};

export default LandingPage;