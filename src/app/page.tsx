import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
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
            className="inline-block mt-4 px-3 py-1 bg-gradient-to-r from-[#ff65c5] to-[#404040] text-white text-sm font-medium rounded-md shadow-md transition-all duration-300 hover:scale-105"
          >
            ABOUT ME {">"}
          </Link>
        </div>
      </div>
    </section>
  );
}
