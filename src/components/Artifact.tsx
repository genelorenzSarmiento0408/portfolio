import React from "react";
import { ExternalLink, Calendar } from "lucide-react";

interface ArtifactProps {
  skill: string;
  img: string;
  description: string;
  date?: string;
  isDark?: boolean;
}

export default function Artifact({
  skill,
  img,
  description,
  date,
  isDark = true,
}: ArtifactProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden border transition-all group ${isDark ? "bg-gray-800 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-500 shadow-md"}`}
    >
      <div
        className={`h-48 flex items-center justify-center relative ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
      >
        {img ? (
          <img src={img} alt={skill} className="w-full h-full object-cover" />
        ) : (
          <div
            className={`flex flex-col items-center ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            <ExternalLink size={32} className="mb-2" />
            <span className="text-xs font-mono">NO_IMAGE_PLACEHOLDER</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h4
          className={`text-sm font-bold mb-2 uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          {skill}
        </h4>
        {date && (
          <div
            className={`flex items-center gap-1 mb-2 text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
          >
            <Calendar size={12} />
            <span>{date}</span>
          </div>
        )}
        <p
          className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
