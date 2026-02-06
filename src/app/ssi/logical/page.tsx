"use client";

import React, { useState } from "react";
import {
  Brain,
  Calculator,
  Binary,
  GitBranch,
  PieChart,
  Zap,
  ArrowLeft,
  ChevronRight,
  Compass,
} from "lucide-react";
import Artifact from "@/components/Artifact";
import Navbar from "@/components/Navbar";

const ARTIFACTS_DATA: Record<
  string,
  Array<{ title: string; img: string; description: string; date: string }>
> = {
  competitions: [
    {
      title: "Scaled Down Distances Problem",
      img: "/artifacts/21st/CT-PS/Astro-1.png",
      description:
        "Figure answer demonstrating problem-solving approach for scaled down distances in IAAC (International Astronomy and Astrophysics Competition)",
      date: "November 2025",
    },
    {
      title: "Molarity Calculation Using I-P-O Method",
      img: "/artifacts/21st/CT-PS/Chem-1.png",
      description:
        "Applied Input-Process-Output method to solve molarity problems in chemistry",
      date: "January 2025",
    },
    {
      title: "PV=NRT Law Diagram",
      img: "/artifacts/21st/CT-PS/Chem-p6-1.png",
      description:
        "Visual diagram explaining the ideal gas law (PV=NRT) for International Physics Competition",
      date: "January 2026",
    },
    {
      title: "Static Balance Problem",
      img: "/artifacts/21st/CT-PS/P6-1.png",
      description:
        "Diagram showing systematic approach to solving static balance problems in International Physics Competition",
      date: "January 2026",
    },
  ],
  "group-leader": [
    {
      title: "Group Leader - General Mathematics",
      img: "/artifacts/21st/CL/MATH-1.png",
      description:
        "Served as group leader for Grade 11 General Mathematics, facilitating collaborative learning and guiding peers through complex mathematical concepts",
      date: "Grade 11 - Term 1",
    },
    {
      title: "Group Leader - Statistics",
      img: "/artifacts/21st/CL/MATH-2.png",
      description:
        "Led group discussions and activities in Statistics, helping classmates understand statistical analysis and data interpretation",
      date: "Grade 11 - Term 2",
    },
    {
      title: "Group Leader - Pre-Calculus",
      img: "/artifacts/21st/CL/MATH-3.png",
      description:
        "Guided peers through Pre-Calculus concepts, organizing study sessions and collaborative problem-solving activities",
      date: "Grade 12 - Term 1",
    },
    {
      title: "Group Leader - Basic Calculus",
      img: "/artifacts/21st/CL/MATH-4.png",
      description:
        "Facilitated group learning in Basic Calculus, breaking down complex calculus concepts for peer understanding",
      date: "Grade 12 - Term 2",
    },
  ],
  "data-analysis": [
    {
      title: "Statistical Data Analysis Project",
      img: "/artifacts/21st/CL/MATH-2.png",
      description:
        "Conducted comprehensive statistical analysis using real-world datasets, applying hypothesis testing and regression analysis",
      date: "Grade 11 - Term 2",
    },
    {
      title: "Data Interpretation and Visualization",
      img: "/artifacts/21st/CL/MATH-2.png",
      description:
        "Created data visualizations and interpreted complex datasets to derive meaningful insights and conclusions",
      date: "Grade 11 - Grade 12",
    },
  ],
  "top-scorers": [
    {
      title: "Exemplary Score - General Mathematics",
      img: "/artifacts/21st/CL/MATH-1.png",
      description:
        "Achieved top scores in General Mathematics, demonstrating mastery of fundamental mathematical concepts",
      date: "Grade 11 - Term 1",
    },
    {
      title: "Exemplary Score - Statistics",
      img: "/artifacts/21st/CL/MATH-2.png",
      description:
        "Consistently scored at the top in Statistics, showcasing strong understanding of statistical methods and analysis",
      date: "Grade 11 - Term 2",
    },
    {
      title: "Exemplary Score - Pre-Calculus",
      img: "/artifacts/21st/CL/MATH-3.png",
      description:
        "Demonstrated excellence in Pre-Calculus with outstanding performance across all assessments",
      date: "Grade 12 - Term 1",
    },
    {
      title: "Exemplary Score - Basic Calculus",
      img: "/artifacts/21st/CL/MATH-4.png",
      description:
        "Achieved exceptional scores in Basic Calculus, showing advanced understanding of calculus principles",
      date: "Grade 12 - Term 2",
    },
  ],
};

const LOGICAL_MATH_DATA = [
  {
    id: "competitions",
    title: "Mathematics Competitions",
    icon: <Calculator className="w-6 h-6" />,
    color: "border-blue-500",
    description:
      "Participated in various mathematics and science competitions, demonstrating problem-solving skills and mathematical reasoning under pressure.",
    artifactCount: ARTIFACTS_DATA["competitions"]?.length || 0,
  },
  {
    id: "group-leader",
    title: "Group Leader Gallery",
    icon: <Brain className="w-6 h-6" />,
    color: "border-purple-500",
    description:
      "Served as group leader across all mathematics subjects (Gen Math, Statistics, Pre-Calculus, Basic Calculus), facilitating peer learning and collaboration.",
    artifactCount: ARTIFACTS_DATA["group-leader"]?.length || 0,
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Interpretation",
    icon: <PieChart className="w-6 h-6" />,
    color: "border-green-500",
    description:
      "Analyzing datasets, drawing insights, and making data-driven decisions using statistical methods and visualization techniques.",
    artifactCount: ARTIFACTS_DATA["data-analysis"]?.length || 0,
  },
  {
    id: "top-scorers",
    title: "Top Scorers Gallery",
    icon: <Zap className="w-6 h-6" />,
    color: "border-orange-500",
    description:
      "Showcasing exemplary scores and academic excellence across all mathematics subjects throughout Grade 11 and Grade 12.",
    artifactCount: ARTIFACTS_DATA["top-scorers"]?.length || 0,
  },
];

export default function LogicalMathematicalIntelligence() {
  const [activeSkill, setActiveSkill] = useState<
    (typeof LOGICAL_MATH_DATA)[0] | null
  >(null);
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"} selection:bg-blue-500 selection:text-white`}
    >
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {activeSkill ? (
          // Skill Detail View
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={() => setActiveSkill(null)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 font-medium transition-colors"
            >
              <ArrowLeft size={20} /> Back to Dashboard
            </button>

            <div
              className={`p-8 rounded-2xl border-l-4 ${activeSkill.color} mb-12 ${isDark ? "bg-gray-900" : "bg-white shadow-lg"}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-xl text-blue-400 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                >
                  {activeSkill.icon}
                </div>
                <h2 className="text-3xl font-bold">{activeSkill.title}</h2>
              </div>
              <p
                className={`text-xl max-w-3xl mb-6 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {activeSkill.description}
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg inline-block">
                <span className="text-blue-400 font-bold text-sm uppercase mr-2">
                  Artifacts:
                </span>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {activeSkill.artifactCount} artifacts documented
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTIFACTS_DATA[activeSkill.id]?.map((artifact, index) => (
                <Artifact
                  key={index}
                  skill={artifact.title}
                  img={artifact.img}
                  description={artifact.description}
                  date={artifact.date}
                  isDark={isDark}
                />
              ))}
                      className={`text-2xl ${isDark ? "text-gray-500" : "text-gray-400"}`}
                    >
                      +
                    </span>
                  </div>
                  <p
                    className={`text-sm font-medium ${isDark ? "text-gray-500" : "text-gray-600"}`}
                  >
                    Add New Artifact
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Dashboard View
          <div className="animate-in fade-in duration-700">
            {/* Header Section */}
            <header className="mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                Intelligence Portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Mastering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Logical-Mathematical
                </span>{" "}
                Intelligence.
              </h1>

              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div
                    className={`p-6 rounded-2xl border backdrop-blur-sm ${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white/50 border-gray-200 shadow-lg"}`}
                  >
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Compass className="text-purple-500" size={20} />{" "}
                      Intelligence Overview
                    </h3>
                    <p
                      className={`leading-relaxed mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Logical-mathematical intelligence involves the capacity to
                      analyze problems logically, carry out mathematical
                      operations, and investigate issues scientifically. This
                      portfolio demonstrates proficiency in pattern recognition,
                      algorithmic thinking, data analysis, and computational
                      problem-solving.
                    </p>
                    <p
                      className={`leading-relaxed italic ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Through various projects and challenges, I have developed
                      strong analytical skills that enable me to approach
                      complex problems systematically and derive elegant
                      solutions through logical reasoning and mathematical
                      principles.
                    </p>
                  </div>
                </div>

                {/* Profile Card */}
                <div
                  className={`p-6 rounded-2xl border shadow-2xl ${isDark ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"}`}
                >
                  <div
                    className={`w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 border-4 shadow-xl flex items-center justify-center text-4xl ${isDark ? "border-gray-900" : "border-white"}`}
                  >
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">
                      Logical-Mathematical Profile
                    </h2>
                    <p className="text-purple-400 text-sm font-medium mb-4">
                      Analytical Thinker
                    </p>
                    <div className="space-y-2">
                      <div
                        className={`py-2 rounded text-xs font-mono text-purple-400 border border-purple-500/20 ${isDark ? "bg-gray-950/50" : "bg-purple-50"}`}
                      >
                        ✓ 4 Categories Documented
                      </div>
                      <div
                        className={`py-2 rounded text-xs font-mono text-blue-400 border border-blue-500/20 ${isDark ? "bg-gray-950/50" : "bg-blue-50"}`}
                      >
                        ✓{" "}
                        {Object.values(ARTIFACTS_DATA).reduce(
                          (sum, artifacts) => sum + artifacts.length,
                          0,
                        )}{" "}
                        Artifacts Linked
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOGICAL_MATH_DATA.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => setActiveSkill(skill)}
                  className={`group relative p-6 rounded-2xl border-x border-b transition-all cursor-pointer overflow-hidden border-t-4 ${skill.color} ${isDark ? "bg-gray-900/30 border-x-gray-800 border-b-gray-800 hover:bg-gray-900" : "bg-white border-x-gray-200 border-b-gray-200 hover:shadow-xl"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`p-2 rounded-lg group-hover:scale-110 transition-transform ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                    >
                      {skill.icon}
                    </div>
                    <ChevronRight className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p
                    className={`text-sm line-clamp-2 ${isDark ? "text-gray-500" : "text-gray-600"}`}
                  >
                    {skill.description}
                  </p>
                  <div
                    className={`mt-4 pt-4 border-t flex items-center justify-between ${isDark ? "border-gray-800/50" : "border-gray-200"}`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-tighter ${isDark ? "text-gray-600" : "text-gray-500"}`}
                    >
                      View Artifacts
                    </span>
                    <div className="flex -space-x-2">
                      <div
                        className={`w-6 h-6 rounded-full border-2 ${isDark ? "bg-gray-700 border-gray-900" : "bg-gray-300 border-white"}`}
                      ></div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 ${isDark ? "bg-gray-800 border-gray-900" : "bg-gray-400 border-white"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`mt-20 border-t py-12 ${isDark ? "border-gray-900 bg-gray-950" : "border-gray-200 bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className={`text-sm mb-4 ${isDark ? "text-gray-600" : "text-gray-500"}`}
          >
            Built with Next.js, Tailwind CSS, and Passion for Innovation.
          </p>
          <div className="flex justify-center gap-6 grayscale opacity-50">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
