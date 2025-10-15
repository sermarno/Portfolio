"use client";
import { ExternalLink, Eye } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  projSkill: string;
};

export default function ProjectsPage() {
  // Project Card Component
  const ProjectCard = ({
    title,
    description,
    imageSrc,
    imageAlt,
    projSkill,
  }: ProjectCardProps) => (
    <article
      className="bg-[#4a4a4a] p-1 rounded-xl shadow-sm transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_40px_rgba(251,91,191,0.5)] hover:-translate-y-1
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
      <h3 className="text-2xl font-semibold text-white m-2">{title}</h3>
      <p className="text-gray-300 text-base m-2">{description}</p>
      <div className="flex mt-5 justify-between">
        <p className="m-3">{projSkill}</p>
        <p className="px-5 py-1 m-3 text-black bg-[#9a9a9a] rounded-lg">
          View Project
        </p>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen bg-[#2e2e2e] p-6">
      <h1 className="text-5xl text-center pt-8 pb-10 font-extrabold text-white">
        All Projects
      </h1>

      {/* FRONT-END SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-4xl text-white font-bold mb-10">
          Front-End & Design
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProjectCard
            title="Multi-Platform Branding"
            description="Online Store and Application Design, Prototyping & Visuals"
            imageSrc="/weightTimeSnippet.png"
            imageAlt="Weight Time Prototype"
            projSkill="UX/UI"
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
