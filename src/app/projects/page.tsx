"use client";
import Link from "next/link";
import { Eye, CheckCircle } from "lucide-react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  projSkills: string[];
  href: string;
};

export default function ProjectsPage() {
  // Project Card Component
  const ProjectCard = ({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    projSkills,
    href,
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
      <h3 className="text-2xl font-semibold ml-2">{title}</h3>
      <p className="text-[#f4f4f4] ml-2 mb-2">{subtitle}</p>
      <p className="text-[#d4d4d8] mt-3 ml-2">{description}</p>
      <div className="flex justify-between items-start m-3 mt-6">
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
            href={href}
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
    <main className="min-h-screen m-6 bg-[#2e2e2e] rounded-lg p-6">
      <h1 className="text-5xl pt-8 pb-10 font-extrabold text-white">
        All Projects
      </h1>

      {/* FRONT-END SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-4xl text-white font-bold mb-3">
          Front-End Projects
        </h2>
        <p className="text-white/70 text-center italic mb-9">
          UX/UI, User Testing, User Research & Design, Prototyping, Branding,
          HTML, CSS, JavaScript, Responsive Design, Debugging, APIs, Team
          Collaboration
        </p>

        {/* ✅ PROJECTS GRID (all cards in one grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProjectCard
            title="Weight Time"
            subtitle="Website and Web App Prototype"
            description="Multi-platform branding and web app prototype for an online store, featuring cohesive design systems and user-centered visual elements."
            imageSrc="/weightTimeSnippet.png"
            imageAlt="Weight Time Prototype"
            projSkills={["Wireframing", "Branding", "UI Design"]}
            href="/projects/weight-time"
          />
          <ProjectCard
            title="Foodie Match"
            subtitle="Mobile Application Prototype"
            description="Mobile app prototype addressing food insecurity through personalized pickup and delivery services from local food banks."
            imageSrc="/foodieMatchSnippet.png"
            imageAlt="Foodie Match Prototype"
            projSkills={["UX Design", "User Testing", "Prototyping"]}
            href="/projects/foodie-match"
          />
          <ProjectCard
            title="Portfolio Showcase"
            subtitle="Personal React Portfolio"
            description="Responsive React portfolio featuring interactive animations and a modern, minimalist design for enhanced user navigation."
            imageSrc="/portfolioSnippet.png"
            imageAlt="Portfolio Website"
            projSkills={["React", "Tailwind", "Next.js"]}
            href="/projects/portfolio"
          />
          <ProjectCard
            title="Discover Downtown Washington"
            subtitle="Mobile Web Application"
            description="Responsive mobile web application designed from client design goals, integrating interactive features for an engaging user experience."
            imageSrc="/roots&TrailsSnippet.png"
            imageAlt="Roots & Trails Image"
            projSkills={["Prototyping", "Consulting", "Wix"]}
            href="/projects/discover-washington"
          />
        </div>
      </section>

      {/* BACK-END SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mt-12 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-4xl text-white font-bold mb-3">
          Back-End Development & Data
        </h2>
        <p className="text-white/70 text-center italic">
          Python, C#, PHP, SQL, Database Management
        </p>
        {/* ✅ PROJECTS GRID (all cards in one grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProjectCard
            title="Aldeas Connect"
            subtitle="Full-Stack Developed Website"
            description="Information system that manages Smart Village operations, enabling rural communities to showcase their developmental projects."
            imageSrc="/aldeasConnect2.png"
            imageAlt="Aldeas Connect Image"
            projSkills={["PHP", "SQL", "APIs"]}
            href="/projects/aldeas-connect"
          />
        </div>
      </section>

      {/* OTHER SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mt-12 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-4xl text-white font-bold mb-3">Other</h2>
        <p className="text-white/70 text-center italic">
          Graphic Design, Virtual Reality
        </p>
        {/* ✅ PROJECTS GRID (all cards in one grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProjectCard
            title="Tide Runner"
            subtitle="Side-Scrolling Unity Game"
            description="Beach-themed side-scrolling game where players control a rolling beach ball, jumping over obstacles and avoiding hazards. Highlights include implementing audio, game resets, and integrating Unity Store assets using C#."
            imageSrc="/tideRunnerSnippet.png"
            imageAlt="Tide Runner Image"
            projSkills={["Unity", "C#", "Game Design"]}
            href="/projects/tide-runner"
          />
        </div>
      </section>
    </main>
  );
}
