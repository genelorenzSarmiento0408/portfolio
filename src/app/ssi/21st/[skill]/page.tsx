import React from "react";
import Link from "next/link";

const skills: Record<string, string> = {
  "collaboration-leadership": "Collaboration and Leadership",
  "critical-thinking": "Critical Thinking and Problem Solving",
  "creativity-innovation": "Creativity and Innovation",
  "social-responsibility":
    "Social Responsibility, and Cultural, Global and Environmental Awareness",
  communication: "Communication and Conveying",
  "computing-literacy":
    "Computing and Information, Media, and Technology Literacies",
  "lifelong-learning":
    "Lifelong Learning, Self-Direction and Personal Management",
  citizenship: "Citizenship and Cross-Cultural Understanding Skills",
  "control-coping": "Control and Coping Skills",
};

// This will generate static pages for all skills
export async function generateStaticParams() {
  return Object.keys(skills).map((slug) => ({
    skill: slug,
  }));
}

export default function SkillPage({ params }: { params: { skill: string } }) {
  const skillName = skills[params.skill] || "Unknown Skill";

  // Placeholder artifacts - you can replace this with actual data
  const artifacts = [
    {
      id: 1,
      title: "Artifact 1",
      description: "Placeholder description for artifact 1",
      image: "",
    },
    {
      id: 2,
      title: "Artifact 2",
      description: "Placeholder description for artifact 2",
      image: "",
    },
    {
      id: 3,
      title: "Artifact 3",
      description: "Placeholder description for artifact 3",
      image: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/ssi/21st"
          className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
          ← Back to 21st Century Skills
        </Link>

        <h1 className="text-4xl font-bold mb-4">{skillName}</h1>
        <p className="text-gray-400 mb-12">
          Here are all the artifacts demonstrating mastery of this skill.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="border-2 border-gray-600 p-6 hover:bg-gray-800 transition-colors"
            >
              {artifact.image && (
                <div className="mb-4 h-48 bg-gray-700 flex items-center justify-center">
                  <img
                    src={artifact.image}
                    alt={artifact.title}
                    className="max-h-full object-contain"
                  />
                </div>
              )}
              {!artifact.image && (
                <div className="mb-4 h-48 bg-gray-700 flex items-center justify-center text-gray-500">
                  No image
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{artifact.title}</h3>
              <p className="text-gray-400">{artifact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
