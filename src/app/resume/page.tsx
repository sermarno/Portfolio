"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { Github } from "lucide-react";
import { FileText } from "lucide-react";
import { ExternalLink, Eye } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="py-5 bg-[#2e2e2e] rounded-xl m-3">
      <div className="relative flex items-center w-full px-4">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl">
          Serra Arnold
        </h1>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center text-white px-4 py-2 rounded-lg border border-grey hover:bg-gray-700 transition"
        >
          <FileText size={28} className="mr-2" />
          View Resume
        </a>
      </div>

      {/* Contact Section */}
      <section className="flex justify-center bg-[#2e2e2e] relative py-5">
        <div className="max-w-6xl w-full">
          <div className="flex justify-center space-x-10">
            {/* GitHub */}
            <a
              href="https://github.com/sermarno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-white text-sm items-center hover:text-gray-300 transition"
            >
              <Github size={28} />
              <p className="px-1">GitHub</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/serraarnold"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-white text-sm items-center hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
              </svg>{" "}
              <p className="px-1">LinkedIn</p>
            </a>
            {/* Gmail */}
            <a
              href="mailto:serraarnold0@gmail.com"
              className="flex text-white text-sm items-center hover:text-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
              <p className="px-1">Email</p>
            </a>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="m-9">
        {/* Professional Summary */}
        <h3 className="flex justify-center text-xl">Professional Summary</h3>
        <div className="flex justify-center py-1">
          <div className="flex-shrink-0">
            <Image
              src="/resumeImage.png"
              alt="Self Portait"
              width={250}
              height={200}
              className="object-cover rounded-xl border-2 border-pink-200 shadow-[0_0_30px_5px_rgba(255,105,180,0.6)]"
            />
          </div>
          <div className="px-3">
            <p className="m-2">
              First-generation university graduate from IU with a B.S. in
              Informatics and focused studies in web development and design.
              Actively identifying ways to enhance existing user interfaces on
              devices, improve digital intuition with modernized technology, and
              utilize UX research and design principals to identify user needs,
              build low to high-fidelity prototypes, and develop clean,
              effective code for user-centered intuitive interfaces.
            </p>
          </div>
        </div>
      </section>
      <section className="m-9">
        <h3 className="text-center text-xl mb-2">Education</h3>
        {/* Education Section */}
        <div className="flex justify-between items-start gap-10">
          <div className="flex-1">
            <h3 className="text-lg">Indiana University</h3>
            <p className="italic">Bloomington, IN</p>
            <p className="mt-2">
              B.S. Informatics, <span className="italic">May 2025</span>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>GPA: 3.54 Overall (Major GPA: 3.9)</li>
              <li>Achievments: Dean's List - 3 Semesters</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/luddy.png"
              alt="Luddy Grad Photo"
              width={250}
              height={200}
              className="object-cover rounded-xl border-2 border-pink-200 shadow-[0_0_30px_5px_rgba(255,105,180,0.6)]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
