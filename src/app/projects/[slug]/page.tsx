"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

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
  // Back Button Router
  const router = useRouter();

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
    // Project Cards
    <article
      className="bg-[#4a4a4a] p-1 text-[#e4e4e7] max-w-[300px] rounded-xl shadow-sm transition-all duration-300 ease-in-out
                        hover:shadow-[0_0_40px_rgba(251,91,191,0.4)] hover:-translate-y-1
                        transform perspective-1000"
    >
      {/* Clickable Project Cards */}
      <Link href={href}>
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[150px] object-cover rounded-lg transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a] via-transparent to-transparent opacity-80 pointer-events-none rounded-lg"></div>
        </div>
        {/* Project Title, Subtitle, and description */}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
        <p className="text-sm text-[#f4f4f4] ml-2 mb-2">{subtitle}</p>
        <p className="text-sm text-[#d4d4d8] mt-3 ml-2">{description}</p>
        <div className="flex text-sm flex-col m-1 mt-2 bg-[#5a5a5a] p-3 rounded-lg">
          <h2 className="mb-2">Top Skills</h2>
          {/* Project Skills */}
          <div className="flex flex-col ml-4 gap-2">
            {projSkills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="mr-1" size={14} />
                <p className="text-xs font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );

  return (
    <main className="min-h-screen max-w-[1100px] m-auto m-6 bg-[#2e2e2e] rounded-lg p-6">
      {/* Back Button (mobile only, visible when sidebar is hidden) */}
      <button
        onClick={() => router.back()}
        className="relative flex items-center py-2 mb-2 font-medium group transition-colors gap-2 cursor-pointer"
      >
        <span className="material-symbols-outlined">arrow_top_left</span>
        Go Back
        {/* underline effect */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </button>
      <h1 className="text-2xl md:text-4xl pt-8 pb-10 font-extrabold text-white">
        All Projects
      </h1>

      {/* FRONT-END SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-3">
          Front-End Projects
        </h2>
        <p className="max-w-[700px] m-auto text-xs md:text-sm lg:text-md text-white/70 text-center italic mb-9">
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
            title="Portfolio"
            subtitle="Personal React Portfolio"
            description="Responsive React portfolio featuring interactive animations, dynamic pages, and a modern, minimalist design for enhanced user navigation."
            imageSrc="/portfolioSnippet.png"
            imageAlt="Portfolio Website"
            projSkills={["React", "Tailwind", "Next.js"]}
            href="/projects/portfolio"
          />
          <ProjectCard
            title="Roots & Trails"
            subtitle="Mobile Web Application"
            description="Responsive mobile web application designed from client design goals, integrating interactive features for an engaging user experience."
            imageSrc="/roots&TrailsSnippet.png"
            imageAlt="Roots & Trails Image"
            projSkills={["Prototyping", "Consulting", "Wix"]}
            href="/projects/discover-washington"
          />
          <ProjectCard
            title="Wellness Camp Registration Form"
            subtitle="Interactive Web Form"
            description="Responsive registration form built with HTML, CSS, Bootstrap, and JavaScripts. Features client-side validation, dynamic table rendering from submissions, and local storage."
            imageSrc="/wellnessForm.png"
            imageAlt="Registration Form Image"
            projSkills={["JavaScript", "Form Validation", "Bootstrap"]}
            href="/projects/wellness-form"
          />
          <ProjectCard
            title="Canvas Sketch App"
            subtitle="JavaScript Web App"
            description="Web drawing app where users can sketch with mouse or arrow keys using a variety of color modes. Built with HTML5 and JavaScript; emphasizes interactive graphics and dynamic user input."
            imageSrc="/canvasSketch.png"
            imageAlt="Canvas Sketch App Image"
            projSkills={["JavaScript", "Canvas API", "DOM Manipulation"]}
            href="/projects/wellness-form"
          />
        </div>
      </section>

      {/* BACK-END SECTION */}
      <section className="flex flex-col items-center px-10 py-8 mt-12 mx-auto max-w-7xl bg-[#3a3a3a] rounded-2xl border-2 border-[#5a5a5a] shadow-inner shadow-black/50">
        <h2 className="text-xl md:text-2xl text-white font-bold mb-3">
          Back-End Development & Data
        </h2>
        <p className="max-w-[700px] m-auto text-xs md:text-sm lg:text-md text-white/70 text-center italic mb-9">
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
        <h2 className="text-xl md:text-2xl text-white font-bold mb-3">Other</h2>
        <p className="max-w-[700px] m-auto text-xs md:text-sm lg:text-md text-white/70 text-center italic mb-9">
          Graphic Design, Virtual Reality, 3D Digitalization, Game Design,
          Photoshop
        </p>
        {/* ✅ PROJECTS GRID (all cards in one grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <ProjectCard
            title="Tide Runner"
            subtitle="Side-Scrolling Unity Game"
            description="Side-scrolling Unity game where players control a rolling beach ball, jumping over obstacles and avoiding hazards. Highlights include implementing audio, game resets, and integrating Unity Store assets using C#."
            imageSrc="/tideRunnerSnippet.png"
            imageAlt="Tide Runner Image"
            projSkills={["Unity", "C#", "Game Design"]}
            href="/projects/tide-runner"
          />
          <ProjectCard
            title="Rainy Night"
            subtitle="Adobe Photoshop Work"
            description="Demonstrates Adobe Photoshop skills such as layering, object selections, photo retouching, and adjustment layers."
            imageSrc="/rainyNight.png"
            imageAlt="Rainy Night Image"
            projSkills={["Photoshop", "Color Adjusting", "Compositing"]}
            href="/projects/tide-runner"
          />
        </div>
      </section>
    </main>
  );
}
