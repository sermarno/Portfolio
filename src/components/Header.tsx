"use client";

import Link from "next/link";
// importing icon.svg - Created with Adobe Illustrator :)
import Image from "next/image";
import { useState } from "react";
import { Folder, FileText, Contact } from "lucide-react";

export default function Header() {
  // for toggle dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center bg-black text-white relative z-50">
      <Link
        href="/"
        className="relative w-[120px] h-[50px] group hover:rotate-90 transition-transform duration-300 ease-in-out"
      >
        {/* Default logo */}
        <Image
          src="/logo_default.png"
          alt="Serra Portfolio Logo"
          fill
          className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
          priority
        />

        {/* Hover logo */}
        <Image
          src="/logo_hover.png"
          alt="Serra Portfolio Logo Hover"
          fill
          className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
          priority
        />
      </Link>
      <div className="flex">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white bg-[#2a2a2a] px-2 py-1 mr-4 rounded-lg hover:bg-[#1e1e1e] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FileText size={16} className="flex-shrink-0 mr-2" />
          Resume PDF
        </a>{" "}
        {/* Hamburger Icon - transforms to x when clicked */}
        <button
          className="flex flex-col justify-center cursor-pointer items-center space-y-1 w-8 h-8 mt-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      <nav
        className={`absolute top-full right-4 bg-[#2a2a2a] border border-white/10 rounded-lg cursor-pointer shadow-md flex flex-col items-start p-8 space-y-3 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/resume"
          onClick={() => setIsOpen(false)}
          className="flex items-center relative group w-full py-1"
        >
          <FileText size={16} className="flex-shrink-0 mr-3" />
          Digital Resume
          <span className="h-0.5 bg-white absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsOpen(false)}
          className="flex items-center relative group w-full py-1"
        >
          <Folder size={16} className="flex-shrink-0 mr-3" />
          All Projects
          <span className="h-0.5 bg-white absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="flex items-center relative group w-full py-1"
        >
          <Contact size={16} className="flex-shrink-0 mr-3" />
          Contact Me
          <span className="h-0.5 bg-white absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>
    </header>
  );
}
