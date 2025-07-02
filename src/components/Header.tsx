"use client";

import Link from "next/link";
// importing icon.svg - Created with Adobe Illustrator :)
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  // for toggle dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center bg-black text-white relative z-50">
      <Link href="/">
        <Image
          src="/icon.svg"
          alt="Serra Portfolio Icon"
          width={120}
          height={50}
        />
      </Link>

      {/* Hamburger Icon - transforms to x when clicked */}
      <button
        className="flex flex-col justify-center items-center space-y-1 w-8 h-8"
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

      {/* Mobile Dropdown Menu */}
      <nav
        className={`absolute top-full right-4 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-md flex flex-col items-start p-4 space-y-2 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="hover:underline"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => setIsOpen(false)}
          className="hover:underline"
        >
          About
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsOpen(false)}
          className="hover:underline"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="hover:underline"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
