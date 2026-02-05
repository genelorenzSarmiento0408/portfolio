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

const LOGICAL_MATH_DATA = [
  {
    id: "pattern-recognition",
    title: "Pattern Recognition",
    icon: <GitBranch className="w-6 h-6" />,
    color: "border-purple-500",
    description:
      "Ability to identify patterns, sequences, and relationships in mathematical and logical structures.",
    suggestedArtifact:
      "Analysis of algorithmic patterns or mathematical sequence solutions demonstrating pattern identification skills.",
  },
  {
    id: "problem-solving",
    title: "Mathematical Problem Solving",
    icon: <Calculator className="w-6 h-6" />,
    color: "border-blue-500",
    description:
      "Using mathematical operations and logical reasoning to solve complex numerical problems.",
    suggestedArtifact:
      "Collection of solved mathematical problems with detailed step-by-step solutions and explanations.",
  },
  {
    id: "algorithmic-thinking",
    title: "Algorithmic Thinking",
    icon: <Binary className="w-6 h-6" />,
    color: "border-green-500",
    description:
      "Developing systematic approaches and algorithms to solve computational problems efficiently.",
    suggestedArtifact:
      "Flowcharts, pseudocode, or actual code implementations demonstrating algorithmic problem-solving.",
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Interpretation",
    icon: <PieChart className="w-6 h-6" />,
    color: "border-orange-500",
    description:
      "Analyzing datasets, drawing insights, and making data-driven decisions using statistical methods.",
    suggestedArtifact:
      "Data visualization projects, statistical analysis reports, or research with quantitative findings.",
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    icon: <Brain className="w-6 h-6" />,
    color: "border-cyan-500",
    description:
      "Using deductive and inductive reasoning to draw valid conclusions from given premises.",
    suggestedArtifact:
      "Logic puzzle solutions, proof-based mathematics, or philosophical argument analysis.",
  },
  {
    id: "computational-thinking",
    title: "Computational Thinking",
    icon: <Zap className="w-6 h-6" />,
    color: "border-pink-500",
    description:
      "Breaking down complex problems into manageable parts using abstraction and decomposition.",
    suggestedArtifact:
      "Software projects, coding challenges, or system design documentation showing problem decomposition.",
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
                  Suggested Artifact:
                </span>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {activeSkill.suggestedArtifact}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Artifact
                skill={activeSkill.title}
                img=""
                description={`Evidence of ${activeSkill.title} through applied mathematical and logical projects.`}
                isDark={isDark}
              />
              <Artifact
                skill={`${activeSkill.title} - Reflection`}
                img=""
                description="Personal reflection on development of this logical-mathematical skill."
                isDark={isDark}
              />
              <div
                className={`border-2 border-dashed rounded-xl flex items-center justify-center p-8 transition-colors cursor-pointer group ${isDark ? "border-gray-800 hover:border-gray-600" : "border-gray-300 hover:border-gray-400"}`}
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
                  >
                    <span
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
                        ✓ 6 Skills Documented
                      </div>
                      <div
                        className={`py-2 rounded text-xs font-mono text-blue-400 border border-blue-500/20 ${isDark ? "bg-gray-950/50" : "bg-blue-50"}`}
                      >
                        ✓ 12 Artifacts Linked
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
