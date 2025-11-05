import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SideBar from "@/components/SideBar";

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 py-8 md:py-12 bg-[#2a2a2a] rounded-none md:rounded-xl max-w-5xl mx-auto w-full overflow-x-hidden">
        {/* Back Button (mobile only) */}
        <Link
          href="/projects"
          className="relative flex items-center [@media(min-width:1200px)]:hidden py-2 mb-2 font-medium group transition-colors gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_top_left</span>
          Go Back
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Project Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
          {project.title}
        </h1>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          {project.subtitle}
        </p>

        {/* Project Description */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-200 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {project.extLink && (
                  <a
                    href={project.extLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#ff65c5] text-sm sm:text-base font-medium group"
                  >
                    <span className="inline-flex items-center relative">
                      View GitHub Repository
                      <span className="block h-0.5 bg-[#ff65c5] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
                      <ExternalLink className="ml-2" size={16} />
                    </span>
                  </a>
                )}

                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#ff65c5] text-sm sm:text-base font-medium group"
                  >
                    <span className="inline-flex items-center relative">
                      View Figma File
                      <span className="block h-0.5 bg-[#ff65c5] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
                      <ExternalLink className="ml-2" size={16} />
                    </span>
                  </a>
                )}

                {project.wixLink && (
                  <a
                    href={project.wixLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#ff65c5] text-sm sm:text-base font-medium group"
                  >
                    <span className="inline-flex items-center relative">
                      Visit Wix Website
                      <span className="block h-0.5 bg-[#ff65c5] absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
                      <ExternalLink className="ml-2" size={16} />
                    </span>
                  </a>
                )}
              </div>
            </div>

            {project.logo && (
              <Image
                src={project.logo}
                alt={project.title}
                width={180}
                height={180}
                className="rounded-lg object-contain max-w-[70%] sm:max-w-[200px]"
              />
            )}
          </div>
        </section>

        {/* Gallery Section */}
        {project.images && project.images.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Gallery</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[260px] sm:w-[300px] h-[180px] sm:h-[200px] relative rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Demo Section */}
        {(project.youtubeId || project.video || project.presentation) && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {project.presentation
                ? "Presentation"
                : project.video
                ? "Video Demo"
                : "YouTube Demo"}
            </h2>

            {project.youtubeId && (
              <div className="w-full aspect-video mb-6 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            {project.video && (
              <video
                controls
                className="w-full mb-6 rounded-lg shadow-lg"
                src={project.video}
              />
            )}

            {project.presentation && !project.video && !project.youtubeId && (
              <iframe
                src={project.presentation}
                className="w-full h-[500px] sm:h-[600px] rounded-lg shadow-lg"
              />
            )}
          </section>
        )}

        {/* Skills / Technologies */}
        {project.skills && project.skills.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#ff65c5] text-black px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
