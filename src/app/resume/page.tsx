"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="py-8 bg-[#2e2e2e] rounded-xl m-3">
      <h1 className="text-3xl py-9 text-center">Serra Arnold</h1>
      <div className="flex justify-center m-5">
        <div className="flex px-2 py-2">
          <Image
            src="/resumeImage.png"
            alt="Self Portait"
            width={450}
            height={100}
            className="w-full h-auto object-cover rounded-xl border-2 border-pink-200 shadow-[0_0_30px_5px_rgba(255,105,180,0.6)]"
          />
        </div>
        <div className="px-3">
          <p className="m-2">
            First-generation university graduate from IU with a B.S. in
            Informatics and focused studies in web development and design.
            Actively identifying ways to enhance existing user interfaces on
            devices, improve digital intuition with modernized technology, and
            utilizing UX research and design principals to identify user needs,
            build low to high-fidelity prototypes, and finally developing clean,
            effective code for user-centered intuitive interfaces.
          </p>
        </div>
      </div>
      <div className="ml-8">
        <h3 className="font-bold">Education</h3>
        <p className="py-2">
          <i>Indiana University</i> - Luddy School of Informatics, Computing,
          and Engineering <br /> B.S. Informatics, May 2025 <br />
        </p>
      </div>
    </section>
  );
}
