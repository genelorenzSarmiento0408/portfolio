import React from "react";
import { ExternalLink } from "lucide-react";

interface ArtifactProps {
  skill: string;
  img: string;
  description: string;
  isDark?: boolean;
}

export default function Artifact({
  skill,
  img,
  description,
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
        <div className="absolute top-2 right-2 bg-blue-600 text-[10px] px-2 py-1 rounded-full text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          VIEW ARTIFACT
        </div>
      </div>
      <div className="p-4">
        <h4
          className={`text-sm font-bold mb-2 uppercase tracking-wider ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          {skill}
        </h4>
        <p
          className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
