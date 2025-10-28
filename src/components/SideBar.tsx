"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Home, Folder } from "lucide-react";
import projects from "@/data/projects";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [hoverSidebar, setHoverSidebar] = useState(false);
  const [hoverProjects, setHoverProjects] = useState(false);

  // Group projects by category
  const groupedProjects: Record<string, typeof projects> = {};
  projects.forEach((p) => {
    const category =
      p.skills.includes("React") || p.skills.includes("UX/UI")
        ? "Back-End"
        : "Front-End";
    if (!groupedProjects[category]) groupedProjects[category] = [];
    groupedProjects[category].push(p);
  });

  return (
    <aside
      className={`hidden [@media(min-width:1200px)]:flex [@media(min-width:1200px)]:fixed top-50 left-4 bg-[#1f1f1f] text-white rounded-lg shadow-[0_0_20px_4px_grey] p-4 flex flex-col items-center md:items-start gap-4 z-50
        transition-all duration-300
        ${hoverSidebar || hoverProjects ? "w-48 md:w-64" : "w-16"}
      `}
      onMouseEnter={() => setHoverSidebar(true)}
      onMouseLeave={() => setHoverSidebar(false)}
    >
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center md:justify-start w-full py-2 px-2 rounded hover:bg-[#333] transition-colors gap-2"
      >
        <span className="material-symbols-outlined">arrow_top_left</span>
        <span
          className={`whitespace-nowrap transition-opacity duration-300 ${
            hoverSidebar ? "opacity-100" : "opacity-0"
          }`}
        >
          Back
        </span>
      </button>

      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center justify-center md:justify-start w-full py-2 px-2 rounded hover:bg-[#333] transition-colors gap-2"
      >
        <Home size={16} className="flex-shrink-0" />
        <span
          className={`whitespace-nowrap transition-opacity duration-300 ${
            hoverSidebar ? "opacity-100" : "opacity-0"
          }`}
        >
          Home
        </span>
      </button>

      {/* Projects Button + Dropdown */}
      <div
        className="w-full flex flex-col items-center md:items-start relative"
        onMouseEnter={() => setHoverProjects(true)}
        onMouseLeave={() => setHoverProjects(false)}
      >
        <button className="flex items-center justify-center md:justify-start w-full py-2 px-2 rounded hover:bg-[#333] transition-colors gap-2">
          <Folder size={16} className="flex-shrink-0" />
          <span
            className={`whitespace-nowrap transition-opacity duration-300 ${
              hoverSidebar || hoverProjects ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="/projects"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white rounded-lg"
            >
              All Projects
            </a>
          </span>
        </button>

        {/* Dropdown inside sidebar */}
        {hoverProjects && (
          <div className="w-full mt-1 rounded shadow-lg overflow-y-auto max-h-64 transition-all duration-300">
            {Object.keys(groupedProjects).map((category) => (
              <div key={category} className="border-b border-gray-700">
                <button
                  onClick={() =>
                    setOpenCategory(openCategory === category ? null : category)
                  }
                  className="flex justify-between w-full px-3 py-2 rounded hover:bg-[#333] transition-colors items-center text-left"
                >
                  {category}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openCategory === category ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Nested project list */}
                {openCategory === category && (
                  <div className="ml-4 flex flex-col gap-1 pb-2">
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
        )}
      </div>
    </aside>
  );
}
