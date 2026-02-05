"use client";

import React, { useState } from "react";
import { Briefcase, GraduationCap, ExternalLink, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";

const SCHOOL_PROJECTS = [
  {
    id: "ssaige",
    title: "SSAIGE",
    subtitle: "Study Simplifier, AI-based Gamified Education",
    description:
      "An innovative educational application that leverages AI to gamify the learning experience, making studying more engaging and effective.",
    url: "https://ssaige.app",
    date: "2025",
    status: "Live",
    category: "school",
  },
  {
    id: "ssimulation",
    title: "SSIMULATION Preview",
    subtitle: "Model of Statefields School, Inc. Mabini Building",
    description:
      "3D architectural model and visualization of the Mabini building at Statefields School, Inc. Project discontinued due to administrative restrictions.",
    url: null,
    date: "2025",
    status: "Discontinued",
    category: "school",
  },
  {
    id: "eternal-quest",
    title: "Work Immersion - Eternal Quest",
    subtitle: "Educational Quest Game Across Academic Strands",
    description:
      "An interactive educational game where users journey through different academic strands. Each strand features a gate with questions - correct answers unlock the next level with harder challenges, while wrong answers require retrying.",
    url: null,
    date: "2025",
    status: "Completed",
    category: "school",
  },
];

const OUTSIDE_PROJECTS = [
  {
    id: "myfriend-ai",
    title: "Myfriend AI",
    subtitle: "AI Therapist for Women's Mental Wellness",
    description:
      "My Friend is an AI therapist company specifically designed for women, focusing on mental wellness. Establishing an online presence to communicate the mission while engaging users to join a waitlist for future updates and services.",
    url: "https://my-friend-ai-ten.vercel.app/",
    date: "October 2024 - January 2025",
    status: "Completed",
    category: "outside",
  },
  {
    id: "capstone-revision",
    title: "Revisions of a Capstone Project",
    subtitle: "Digital Appointment & Assessment Tool for SSU",
    description:
      "DEVELOPMENT OF DIGITAL APPOINTMENT AND ASSESSMENT TOOL FOR SAMAR STATE UNIVERSITY WITH SMS NOTIFICATION. Focused on revising text sizes, nomenclature, and color schemes for improved usability.",
    url: null,
    date: "Feb 2025",
    status: "Completed",
    category: "outside",
  },
  {
    id: "teaching-fullstack",
    title: "Teaching Next.js, MongoDB, Full-stack",
    subtitle: "Educational Mentorship Program",
    description:
      "Conducting comprehensive full-stack development training covering Next.js framework, MongoDB database management, and modern web development practices.",
    url: null,
    date: "July 2025 - Ongoing",
    status: "Ongoing",
    category: "outside",
  },
  {
    id: "guidr",
    title: "Guidr App",
    subtitle: "AI-based Match-making for Students and Organizations",
    description:
      "An intelligent platform that uses AI algorithms to match students with organizations based on interests, skills, and goals, facilitating meaningful connections in educational settings.",
    url: null,
    date: "April 2025 - Ongoing",
    status: "Ongoing",
    category: "outside",
  },
  {
    id: "photobooth",
    title: "Photobooth App",
    subtitle: "Client Project - Pampanga",
    description:
      "Custom photobooth application developed for a client in Pampanga, featuring interactive photo capture, filters, and instant sharing capabilities.",
    url: "https://photobooth-glsarmiento.vercel.app/",
    date: "May 2025 - Ongoing",
    status: "Ongoing",
    category: "outside",
  },
];

const ProjectCard = ({
  project,
  isDark,
}: {
  project: any;
  isDark: boolean;
}) => {
  const statusColors: Record<string, string> = {
    Live: "bg-green-500/20 text-green-400 border-green-500/30",
    Completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Ongoing: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "In Development": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Discontinued: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div
      className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${isDark ? "bg-gray-900/50 border-gray-800 hover:bg-gray-900" : "bg-white border-gray-200 hover:shadow-xl"}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-blue-400 text-sm font-medium mb-3">
            {project.subtitle}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[project.status] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}
        >
          {project.status}
        </span>
      </div>

      <p
        className={`mb-4 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
      >
        {project.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}">
        <div className="flex items-center gap-2">
          <Calendar
            size={14}
            className={isDark ? "text-gray-500" : "text-gray-400"}
          />
          <span
            className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
          >
            {project.date}
          </span>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Visit <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default function OutputsProjects() {
  const [isDark, setIsDark] = useState(true);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "school" | "outside"
  >("all");

  const filteredProjects =
    activeCategory === "all"
      ? [...SCHOOL_PROJECTS, ...OUTSIDE_PROJECTS]
      : activeCategory === "school"
        ? SCHOOL_PROJECTS
        : OUTSIDE_PROJECTS;

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"} selection:bg-blue-500 selection:text-white`}
    >
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            Project Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Presented{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Outputs & Projects
            </span>
            .
          </h1>

          <div
            className={`p-6 rounded-2xl border backdrop-blur-sm mb-8 ${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white/50 border-gray-200 shadow-lg"}`}
          >
            <p
              className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              A comprehensive collection of projects and outputs developed both
              within academic settings and through independent initiatives.
              These projects demonstrate practical application of technical
              skills, problem-solving abilities, and commitment to creating
              impactful solutions across various domains including AI,
              education, and web development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : isDark
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              All Projects ({SCHOOL_PROJECTS.length + OUTSIDE_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveCategory("school")}
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeCategory === "school"
                  ? "bg-blue-600 text-white shadow-lg"
                  : isDark
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <GraduationCap size={18} /> In School ({SCHOOL_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveCategory("outside")}
              className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeCategory === "outside"
                  ? "bg-blue-600 text-white shadow-lg"
                  : isDark
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <Briefcase size={18} /> Outside School [to be approved by the
              Principal] ({OUTSIDE_PROJECTS.length})
            </button>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            className={`text-center py-20 ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            <p>No projects found in this category.</p>
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
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
