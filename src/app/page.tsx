"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { Github } from "lucide-react";
import { FileText } from "lucide-react";

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
              href="/about"
              className="inline-block mt-4 text-[#ff65c5] text-sm font-medium relative group"
            >
              About Me ⇒
              <span className="block h-0.5 bg-[#ff65c5] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>{" "}
            <br />
            <Link
              href="/about"
              className="inline-block mt-4 text-[#ff65c5] text-sm font-medium relative group"
            >
              My Resume
              <span className="block h-0.5 bg-[#ff65c5] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex justify-center px-6 py-12 bg-[#3d3d3d] relative">
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>

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
      {/* About Informatics Section */}
      <section className="flex justify-center px-6 py-12 relative">
        <h2 className="text-2xl font-semibold text-white mb-6">
          About Informatics
        </h2>
      </section>
      {/* Contact Section */}
      <section className="flex justify-center bg-[#ff65c5] px-6 py-12 relative">
        <div className="max-w-6xl w-full">
          <div className="flex justify-center space-x-6">
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
            {/* Resume PDF */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FileText size={108} />
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
      {/* Skills Section */}
      <section className="flex justify-center px-6 py-12 relative">
        <h2 className="text-2xl font-semibold text-white mb-6">
          My Passion in Tech
        </h2>
      </section>
    </main>
  );
}
