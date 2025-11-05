"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Folder, Github } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 bg-[#2e2e2e] rounded-xl m-3">
        {/* Header */}
        <div className="relative flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-0 md:absolute left-1/2 transform md:-translate-x-1/2 text-white">
            Serra Arnold
          </h1>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center text-white bg-[#4a4a4a] px-4 py-2 rounded-lg border border-[#2a2a2a] hover:bg-[#3a3a3a] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out mb-4 md:mb-0"
          >
            <FileText size={28} className="mr-2" />
            View Resume
          </a>
        </div>

        {/* Contact Section */}
        <section className="flex justify-center bg-[#2e2e2e] py-5">
          <div className="flex flex-wrap justify-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/sermarno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white text-sm px-3 py-2 rounded-lg hover:bg-[#3a3a3a] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <Github size={28} />
              <p className="px-1">GitHub</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/serraarnold"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white text-sm px-3 py-2 rounded-lg hover:bg-[#3a3a3a] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.059-1.865-3.059-1.868 0-2.155 1.459-2.155 2.963v5.7h-3v-10h2.885v1.367h.041c.403-.763 1.387-1.566 2.853-1.566 3.051 0 3.621 2.008 3.621 4.621v5.578z" />
              </svg>
              <p className="px-1">LinkedIn</p>
            </a>

            {/* Gmail */}
            <a
              href="mailto:serraarnold0@gmail.com"
              className="flex items-center text-white text-sm px-3 py-2 rounded-lg hover:bg-[#3a3a3a] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12.713l-11.985-7.713v13.928c0 1.104.896 2 2 2h19.97c1.104 0 2-.896 2-2v-13.928l-11.985 7.713zm11.985-10.713h-23.97l11.985 7.713 11.985-7.713z"
                />
              </svg>
              <p className="px-1">Email</p>
            </a>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 py-4">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image
              src="/resumeImg1.png"
              alt="Self Portait"
              width={250}
              height={200}
              className="object-cover rounded-xl border-2 border-pink-200 shadow-[0_0_30px_5px_rgba(255,105,180,0.6)] w-full max-w-[250px] h-auto"
            />
          </div>
          <div className="flex flex-col px-3 py-4 w-full md:w-2/3">
            <h3 className="text-xl font-bold mb-2 text-white">
              Professional Summary
            </h3>
            <p className="text-white/90">
              First-generation university graduate from IU with a B.S. in
              Informatics and focused studies in web development and design.
              Actively identifying ways to enhance existing user interfaces on
              devices, improve digital intuition with modernized technology, and
              utilize UX research and design principals to identify user needs,
              build low to high-fidelity prototypes, and develop clean,
              effective code for user-centered intuitive interfaces.
            </p>
            <Link
              href="/projects"
              className="inline-flex flex-col items-center justify-center text-white bg-[#fb5bbf] px-1 py-1 mt-3 rounded-lg hover:bg-[#d63d9d] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out w-full max-w-xs"
            >
              <Folder size={28} className="mb-1" />
              View Projects
            </Link>
          </div>
        </section>

        {/* Education Section */}
        <section className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 m-6">
          <div className="flex-1 text-white">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <h3>Indiana University</h3>
            <p className="italic">Bloomington, IN</p>
            <p className="mt-2">
              B.S. Informatics, <span className="italic">May 2025</span>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>GPA: 3.54 Overall (Major GPA: 3.9)</li>
              <li>Achievements: Dean&apos;s List - 3 Semesters</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image
              src="/resumeImg2.png"
              alt="Luddy Grad Photo"
              width={250}
              height={200}
              className="object-cover rounded-xl border-2 border-pink-200 shadow-[0_0_30px_5px_rgba(255,105,180,0.6)] w-full max-w-[250px] h-auto"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
