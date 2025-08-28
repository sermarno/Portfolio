"use client";
import Image from "next/image";
import Link from "next/link";

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
            {/* Aldeas Connect */}
            <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg">
              <Image
                src="/aldeasConnect.png"
                alt="Aldeas Connect Website Screenshot"
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Aldeas Connect
                </h3>
                <p>Informatics Capstone, Fall 2024 - Spring 2025</p>
              </div>

              <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                Full-Stack Development
              </div>
            </div>
            {/* Discover Washington */}
            <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg">
              <Image
                src="/discoverWashington.png"
                alt="Discover Washington Mobile App Screenshot"
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Discover Washington
                </h3>
                <p>IU HCC, Spring 2025</p>
              </div>

              <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                UX Research
              </div>
            </div>
            {/* Weight Time */}
            <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg">
              <Image
                src="/weightTime.png"
                alt="Weight Time Website Prototype Screenshot"
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Weight Time
                </h3>
                <p>IU Visual Design, Fall 2023</p>
              </div>

              <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                Web Design
              </div>
            </div>
            {/* Weight Time */}
            <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg">
              <Image
                src="/weightTime.png"
                alt="Weight Time Website Prototype Screenshot"
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Weight Time
                </h3>
                <p>IU Visual Design, Fall 2023</p>
              </div>

              <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                Web Design
              </div>
            </div>
            {/* Adobe Photoshop */}
            <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg">
              <Image
                src="/rainyNight.png"
                alt="Rainy Night Photoshop Practice"
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Rainy Night
                </h3>
                <p>IU Visual Design, Spring 2025</p>
              </div>

              <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                Adobe Photoshop
              </div>
            </div>
            {/* Foodie Match Prototype */}
            <div className="w-[300px] h-[350px] flex-shrink-0 bg-[#2e2e2e] rounded-xl overflow-hidden relative group shadow-lg">
              <Image
                src="/foodieMatch.png"
                alt="Foodie Match Prototype Screenshot"
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  Foodie Match
                </h3>
                <p>IU HCI, Fall 2023</p>
              </div>

              <div className="absolute top-0 left-0 w-full bg-[#ff65c5] text-black text-sm font-medium py-2 px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                UX Research
              </div>
            </div>
          </div>

          {/* Hide scrollbar in Safari/Chrome */}
          <style jsx>{`
            #project-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}
