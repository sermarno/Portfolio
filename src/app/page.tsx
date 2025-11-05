"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import {
  SiPython,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiJavascript,
  SiCanva,
  SiAdobecreativecloud,
  SiTailwindcss,
  SiReact,
  SiGithub,
  SiLinux,
  SiDocker,
  SiMysql,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import { ExternalLink, Eye, Check, Github } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Landing Page Header */}
      <section className="flex justify-center items-center m-4 bg-black text-[#f4f6f7] px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Name and Description */}
          <div className="text-left">
            <h1 className="text-5xl">Serra Arnold</h1>
            <p className="text-2xl mt-1">UX-Focused Informatics Graduate</p>
            <p className="mt-6 max-w-[700px] text-[#a3b2bd] text-xl">
              {" "}
              First-generation university graduate from IU with a B.S. in
              Informatics and focused studies in web development and design.
              Actively identifying ways to enhance existing user interfaces on
              devices, improve digital intuition with modernized technology, and
              utilize UX research and design principals to identify user needs,
              build low to high-fidelity prototypes, and develop clean,
              effective code for user-centered intuitive interfaces.
            </p>
            <div className="mt-2">
              <Link
                href="/projects"
                className="inline-flex w-full md:w-[200px] items-center justify-center text-white bg-[#fb5bbf] px-2 py-1 mt-6 rounded-sm hover:bg-[#d63d9d] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                See Projects
                <span className="material-symbols-outlined text-white m-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          {/* Portrait Image */}
          <Image
            src="/self-portrait.png"
            alt="Professional Self-Portrait"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex justify-center px-6 py-12 bg-[#1a1a1a] relative">
        <div className="max-w-6xl w-full">
          <div className="relative mb-3 md:mb-15">
            <h2 className="text-2xl text-center mb-2 md:mb-0 font-semibold text-white">
              Project Highlights
            </h2>
            <Link
              href="/projects"
              className="flex md:absolute md:top-0 md:right-0 items-center justify-center text-white bg-[#2e2e2e] px-4 py-2 rounded-lg hover:bg-[#1e1e1e] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              All Projects
              <span className="material-symbols-outlined text-white m-1">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Arrows for Scrolling */}
          <button
            onClick={() => {
              document
                .getElementById("project-scroll")
                ?.scrollBy({ left: -400, behavior: "smooth" });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full z-10 hover:bg-opacity-80"
          >
            ◀
          </button>
          <button
            onClick={() => {
              document
                .getElementById("project-scroll")
                ?.scrollBy({ left: 400, behavior: "smooth" });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full z-10 hover:bg-opacity-80"
          >
            ▶
          </button>

          {/* Scrollable Project Cards */}
          <div
            id="project-scroll"
            className="flex overflow-x-auto gap-6 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg cursor-pointer">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} Screenshot`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p>{project.subtitle}</p>
                  </div>

                  {/* Hover Role Banner */}
                  <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    {project.role}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Hide scrollbar in Safari/Chrome */}
          <style jsx>{`
            #project-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>
      {/* Informatics Section */}
      <section className="md:flex-row m-4 p-6">
        <div className="flex">
          {/* Journey and Skills */}
          <div className="p-3 max-w-[600px]">
            <h2 className="text-4xl mb-3">My Informatics Journey</h2>
            <p className="text-[#a3b2bd] text-lg mb-2">
              My B.S. in Informatics has granted me a great ability to leverage
              technology to enhance business productivity, improve user
              experiences, and design intuitive digital solutions for
              today&apos;s complex technology landscape.
            </p>
            <p className="text-[#a3b2bd] text-lg mb-2">
              Through my studies, I gained hands-on experience in UX/UI design,
              web development, data management, and human-computer interaction —
              all skills that allow me to bridge the gap between users and
              technology.
            </p>
            <div className="mt-4">
              <div className="flex flex-wrap gap-3">
                {[
                  "UX/UI Design",
                  "Human-Computer Interaction",
                  "Data Analysis & Management",
                  "VBA Programming",
                  "Database Design & SQL",
                  "User Research & Usability Testing",
                  "Responsive & Accessible Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-[#2a2a2a] text-[#ff65c5] px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                  >
                    <Check size={16} className="text-[#ff65c5]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col justify-center m-auto max-w-[800px]">
            {/* Image + hover overlay */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/aldeasHome.png"
                alt="Aldeas Connect Project"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Overlay (semi-transparent, fades in on hover) */}
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 
                        flex flex-col pointer-events-none group-hover:pointer-events-auto"
              >
                <div className="flex flex-1">
                  {/* View Project (left half) */}
                  <Link
                    href={`/projects/aldeas-connect`}
                    className="flex-1 flex items-center justify-center gap-2 text-white text-sm bg-black/30 hover:bg-black/50 transition-colors"
                  >
                    <Eye size={16} />
                    <span>View Project</span>
                  </Link>

                  {/* Visit Website (right half) */}
                  <a
                    href="https://github.com/sermarno/Aldeas-Connect.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-white text-sm bg-black/30 hover:bg-black/50 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Github Repository</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Static caption */}
            <p className="mt-2 text-xs text-white-700 text-right">
              IU Informatics: Full-Stack Project
            </p>
            <p className="mt-2 text-xs text-right">
              <b> Aldeas Connect</b>
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Tech Section */}
      <section className="my-12 text-center border border-[#2a2a2a] p-6 max-w-[1100px] m-auto">
        <h2 className="text-2xl font-bold text-white mb-6">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center">
            <SiPython size={48} className="text-[#3776AB]" />
            <span className="mt-2 text-white text-sm">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFigma size={48} className="text-[#F24E1E]" />
            <span className="mt-2 text-white text-sm">Figma</span>
          </div>
          <div className="flex flex-col items-center">
            <SiAdobephotoshop size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Photoshop</span>
          </div>
          <div className="flex flex-col items-center">
            <SiAdobeillustrator size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Illustrator</span>
          </div>
          <div className="flex flex-col items-center">
            <SiAdobecreativecloud size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Creative Cloud</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCanva size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Canva</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiReact size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGithub size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <SiLinux size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Linux</span>
          </div>
          <div className="flex flex-col items-center">
            <SiDocker size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPhp size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript size={48} className="text-[#31A8FF]" />
            <span className="mt-2 text-white text-sm">TypeScript</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#2e2e2e]">
        <h1 className="text-xl pt-4 text-center">Get in Touch</h1>
        <div className="flex justify-center px-6 py-12 relative w-full">
          <div className="flex justify-center space-x-20">
            {/* GitHub */}
            <a
              href="https://github.com/sermarno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <Github size={48} />
              <p className="mt-1">Github</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/serraarnold"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col text-white hover:text-gray-300 transition items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
    2.761 2.239 5 5 5h14c2.762 0 5-2.239 
    5-5v-14c0-2.761-2.238-5-5-5zm-11 
    19h-3v-10h3v10zm-1.5-11.268c-.966 
    0-1.75-.79-1.75-1.764s.784-1.764 
    1.75-1.764 1.75.79 
    1.75 1.764-.784 1.764-1.75 
    1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.865-3.059-1.868 
    0-2.155 1.459-2.155 2.963v5.7h-3v-10h2.885v1.367h.041c.403-.763 
    1.387-1.566 2.853-1.566 3.051 0 3.621 
    2.008 3.621 4.621v5.578z"
                />
              </svg>
              <p className="mt-1">LinkedIn</p>
            </a>

            {/* Gmail */}
            <a
              href="mailto:serraarnold0@gmail.com"
              className="flex flex-col items-center text-white hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12.713l-11.985-7.713v13.928c0 
      1.104.896 2 2 2h19.97c1.104 
      0 2-.896 2-2v-13.928l-11.985 
      7.713zm11.985-10.713h-23.97l11.985 
      7.713 11.985-7.713z"
                />
              </svg>
              <p className="mt-1">Email</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
