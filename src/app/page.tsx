"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"} selection:bg-blue-500 selection:text-white`}
    >
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            Welcome to My Portfolio
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              Gene Lorenz
            </span>
          </h1>

          <p
            className={`text-2xl md:text-3xl mb-8 max-w-3xl ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            A passionate{" "}
            <span className="text-blue-400 font-semibold">
              All-around, Multifaceted, Lifelong Learner
            </span>{" "}
            dedicated to innovation, technology, and continuous growth.
          </p>

          <p
            className={`text-lg md:text-xl mb-12 max-w-2xl leading-relaxed ${isDark ? "text-gray-500" : "text-gray-600"}`}
          >
            Full-stack developer, AI enthusiast, and lifelong learner committed
            to creating impactful solutions and mastering the skills needed for
            tomorrow&apos;s challenges.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/ssi/21st"
              className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
            >
              View Skills Portfolio
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              href="/outputs-projects"
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100 border-2 border-gray-300"}`}
            >
              View Projects
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/glsarmiento"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/glsarmiento"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gene@example.com"
              className={`p-3 rounded-lg transition-all hover:scale-110 ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <Link
            href="/ssi/21st"
            className={`group p-8 rounded-2xl border transition-all hover:scale-105 ${isDark ? "bg-gray-900/50 border-gray-800 hover:bg-gray-900 hover:border-blue-500" : "bg-white border-gray-200 hover:shadow-2xl hover:border-blue-500"}`}
          >
            <div
              className={`p-3 rounded-xl mb-4 w-fit ${isDark ? "bg-gray-800" : "bg-blue-50"}`}
            >
              <Sparkles className="text-blue-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
              21st Century Skills
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Explore my comprehensive portfolio showcasing mastery of 9
              essential competencies for modern success.
            </p>
            <span className="text-blue-400 font-medium flex items-center gap-2">
              Explore Skills <ArrowRight size={18} />
            </span>
          </Link>

          <Link
            href="/outputs-projects"
            className={`group p-8 rounded-2xl border transition-all hover:scale-105 ${isDark ? "bg-gray-900/50 border-gray-800 hover:bg-gray-900 hover:border-emerald-500" : "bg-white border-gray-200 hover:shadow-2xl hover:border-emerald-500"}`}
          >
            <div
              className={`p-3 rounded-xl mb-4 w-fit ${isDark ? "bg-gray-800" : "bg-emerald-50"}`}
            >
              <Briefcase className="text-emerald-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
              Outputs & Projects
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Discover innovative projects from SSAIGE to full-stack
              applications, demonstrating practical expertise.
            </p>
            <span className="text-emerald-400 font-medium flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </span>
          </Link>

          <Link
            href="/ssi/logical"
            className={`group p-8 rounded-2xl border transition-all hover:scale-105 ${isDark ? "bg-gray-900/50 border-gray-800 hover:bg-gray-900 hover:border-purple-500" : "bg-white border-gray-200 hover:shadow-2xl hover:border-purple-500"}`}
          >
            <div
              className={`p-3 rounded-xl mb-4 w-fit ${isDark ? "bg-gray-800" : "bg-purple-50"}`}
            >
              <Brain className="text-purple-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
              Logical Intelligence
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Dive into analytical skills, algorithmic thinking, and logical
              problem-solving capabilities.
            </p>
            <span className="text-purple-400 font-medium flex items-center gap-2">
              Explore Intelligence <ArrowRight size={18} />
            </span>
          </Link>
        </section>

        {/* Stats Section */}
        <section
          className={`p-12 rounded-3xl mb-20 ${isDark ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300"}`}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">15+</div>
              <div
                className={`text-sm uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-600"}`}
              >
                Skills Mastered
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">8+</div>
              <div
                className={`text-sm uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-600"}`}
              >
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">
                100+
              </div>
              <div
                className={`text-sm uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-600"}`}
              >
                Hours of Learning
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-400 mb-2">∞</div>
              <div
                className={`text-sm uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-600"}`}
              >
                Passion for Growth
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p
            className={`text-xl mb-10 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Dive into my portfolio to discover my journey, skills, and the
            projects that define my commitment to excellence.
          </p>
          <Link
            href="/ssi/21st"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
          >
            Start Exploring
            <ArrowRight size={24} />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`mt-20 border-t py-12 ${isDark ? "border-gray-900 bg-gray-950" : "border-gray-200 bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className={`text-sm mb-4 ${isDark ? "text-gray-600" : "text-gray-500"}`}
          >
            © 2026 Gene Lorenz Sarmiento. Built with Next.js, Tailwind CSS, and
            Passion for Innovation.
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
