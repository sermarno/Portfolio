"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Home } from "lucide-react";
import projects from "@/data/projects";

interface SideBarProps {
  categories?: string[];
}

export default function SideBar({ categories }: SideBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Group projects by category
  const groupedProjects: Record<string, typeof projects> = {};
  projects.forEach((p) => {
    const category =
      p.skills.includes("React") || p.skills.includes("UX/UI")
        ? "Front-End"
        : "Back-End";
    if (!groupedProjects[category]) groupedProjects[category] = [];
    groupedProjects[category].push(p);
  });

  return (
    <aside className="fixed h-full w-64 bg-[#1f1f1f] text-white shadow-lg p-4 flex flex-col gap-4">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 py-2 rounded hover:bg-[#333] transition-colors"
      >
        <span className="material-symbols-outlined">arrow_top_left</span>
      </button>
      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-[#333] transition-colors"
      >
        <Home size={16} />
      </button>

      {/* Project Categories */}
      <div className="mt-4">
        {Object.keys(groupedProjects).map((category) => (
          <div key={category} className="mb-2">
            <button
              onClick={() =>
                setOpenCategory(openCategory === category ? null : category)
              }
              className="flex justify-between w-full px-3 py-2 rounded hover:bg-[#333] transition-colors items-center"
            >
              {category}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  openCategory === category ? "rotate-180" : ""
                }`}
              />
            </button>
            {openCategory === category && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                {groupedProjects[category].map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`px-2 py-1 rounded hover:bg-[#444] transition-colors text-sm ${
                      pathname === `/projects/${project.slug}`
                        ? "bg-[#333]"
                        : ""
                    }`}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
