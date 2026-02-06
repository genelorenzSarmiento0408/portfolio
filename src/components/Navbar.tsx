"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${isDark ? "bg-gray-950/80 border-gray-800" : "bg-white/80 border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <Image
              src="/logo512.png"
              alt="Gene Lorenz Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold tracking-tight hidden sm:block">
            Gene Lorenz | Portfolio
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <div
            className={`flex gap-6 text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            <Link
              href="/ssi/21st"
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              21st Century Skills
            </Link>
            <Link
              href="/outputs-projects"
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Outputs and Projects
            </Link>
            <Link
              href="/ssi/logical"
              className="hover:text-blue-400 cursor-pointer transition-colors"
            >
              Logical Intelligence
            </Link>
          </div>
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
