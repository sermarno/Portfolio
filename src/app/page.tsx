"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { Github } from "lucide-react";
import { Check } from "lucide-react";
import { FileText } from "lucide-react";
import { ExternalLink, Eye, Folder } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Landing Page Header */}
      <section className="flex justify-center items-center min-h-screen bg-black text-white px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Portrait Image */}
          <Image
            src="/self-portrait.png"
            alt="Professional Self-Portrait"
            width={300}
            height={400}
            className="rounded-lg"
          />

          {/* Name and Description */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">Serra Arnold</h1>
            <p className="mt-2">UX-Focused Informatics Graduate</p>
            <Link
              href="/resume"
              className="inline-block mt-4 text-[#ff65c5] text-sm font-medium relative group"
            >
              About Me ⇒
              <span className="block h-0.5 bg-[#ff65c5] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="mt-2">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#2e2e2e] text-white px-4 py-2 rounded-lg hover:bg-[#1e1e1e] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <FileText size={28} className="mr-2" />
                View Resume
              </a>
              <a
                href="/projects"
                rel="noopener noreferrer"
                className="m-2 inline-flex items-center justify-center text-white bg-[#fb5bbf] px-4 py-2 mt-3 rounded-lg hover:bg-[#d63d9d] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <Folder size={28} className="mr-1 " />
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex justify-center px-6 py-12 bg-[#3d3d3d] relative">
        <div className="max-w-6xl w-full">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              Project Highlights
            </h2>
            <a
              href="/projects"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center justify-center text-white bg-[#2e2e2e] px-4 py-2 rounded-lg hover:bg-[#1e1e1e] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <Folder size={28} className="mr-2 " />
              All Projects
            </a>
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
      <section className="flex flex-col px-6 py-12 relative">
        <div className="max-w-6xl mx-auto">
          {/* Dictionary-style Informatics Header */}
          <div className="flex">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 mb-6">
              <h2 className="text-3xl font-bold text-white">Informatics</h2>
              <p className="text-gray-400 italic mt-1">/in·fr·ma·tuhks/</p>
              <p className="text-gray-400 uppercase text-xs mt-1">noun</p>
              <p className="text-white mt-3">
                The study of how people, technology, and data interact. Focuses
                on designing and leveraging technology to enhance user
                experiences and improve productivity.
              </p>
            </div>
            <div className="flex flex-col ml-3 bg-[#1a1a1a] rounded">
              <h2 className="flex justify-center p-8 text-xl font-bold items-center">
                Technical Skills
              </h2>
              {/* Skills underneath */}
              <div className="flex flex-wrap gap-4 m-5">
                {[
                  "UX/UI Design",
                  "Human-Computer Interaction",
                  "Data Analysis & Management",
                  "Python & VBA Programming",
                  "Database Design & SQL",
                  "User Research & Usability Testing",
                  "Responsive & Accessible Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1 text-[#ff65c5] px-7 text-sm font-medium"
                  >
                    <Check size={16} className="text-[#ff65c5]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text + Image Container */}
          <div className="flex flex-col md:flex-row items-start gap-8 mt-[50px]">
            {/* Text on the left */}
            <div className="md:w-2/3 ml-4">
              <h2 className="text-xl mb-2">My Growth in Informatics</h2>
              <p className="text-white mb-4">
                My B.S. in Informatics has granted me a great ability to
                leverage technology to enhance business productivity, improve
                user experiences, and design intuitive digital solutions for
                today's complex technology landscape.
              </p>

              <p className="text-white">
                Through my studies, I gained hands-on experience in UX/UI
                design, web development, data management, and human-computer
                interaction — all skills that allow me to bridge the gap between
                users and technology.
              </p>
            </div>

            {/* Project Card */}
            <div className="md:w-1/3">
              {/* Image + hover overlay */}
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/aldeasHome.png"
                  alt="Aldeas Connect Project"
                  width={500}
                  height={400}
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex justify-center bg-[#2e2e2e] px-6 py-12 relative">
        <div className="max-w-6xl w-full">
          <div className="flex justify-center space-x-20">
            {/* GitHub */}
            <a
              href="https://github.com/sermarno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <Github size={108} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/serraarnold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="108"
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
            </a>
            {/* Gmail */}
            <a
              href="mailto:serraarnold0@gmail.com"
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="108"
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
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
