"use client";
import Link from "next/link";
import { Eye, CheckCircle } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  projSkills: string[];
};

export default function ProjectsPage() {
  // Project Card Component
  const ProjectCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    projSkills,
  }: ProjectCardProps) => (
    <article
      className="bg-[#4a4a4a] p-1 text-[#e4e4e7] rounded-xl shadow-sm transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_40px_rgba(251,91,191,0.4)] hover:-translate-y-1
                        transform perspective-1000"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a] via-transparent to-transparent opacity-80 pointer-events-none rounded-lg"></div>
      </div>
      <h3 className="text-2xl font-semibold m-2">{title}</h3>
      <p className="text-[#d4d4d8] m-2">{description}</p>
      <div className="flex justify-between items-start m-3 mt-4">
        {/* Project Skills */}
        <div className="flex flex-col gap-2">
          {projSkills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="mr-1" size={14} />
              <p className="text-sm font-medium">{skill}</p>
            </div>
          ))}
        </div>
        <div>
          <Link
            href="/projects/weight-time"
            className="flex px-3 py-1 items-center text-black bg-[#e4e4e7] rounded-lg duration-300 ease-in-out hover:bg-[#a1a1aa]"
          >
            View Project
            <Eye className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen bg-[#2e2e2e] p-6">
      <h1 className="text-5xl pt-8 pb-10 font-extrabold text-white">
        All Projects
      </h1>

      {/* FRONT-END SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-4xl text-white font-bold mb-10">
          Front-End Projects
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProjectCard
            title="Multi-Platform Branding"
            description="Online Store and Application Design, Prototyping & Visuals"
            imageSrc="/weightTimeSnippet.png"
            imageAlt="Weight Time Prototype"
            projSkills={["UX/UI", "Prototyping", "Branding"]}
          />
        </div>
      </section>

      {/* BACK-END SECTION (Placeholder for future content) */}
      <section className="flex flex-col items-center px-10 py-8 mt-12 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-4xl text-white font-bold mb-10">
          Back-End Development & Data
        </h2>
        <p className="text-white/70 text-center italic">
          (Content for Python, C#, PHP, and SQL projects will go here in a
          similar grid layout.)
        </p>
      </section>
    </main>
  );
}
