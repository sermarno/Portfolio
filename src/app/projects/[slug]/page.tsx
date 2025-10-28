// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SideBar from "@/components/SideBar";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex">
      <SideBar />
      <main className="px-6 py-12 bg-[#2a2a2a] rounded-xl max-w-4xl mx-auto">
        {/* Project Title */}
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-400 mb-6">{project.subtitle}</p>

        {/* Project Description */}
        <section className="mb-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-200 mt-5 max-w-[600px]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {project.extLink && (
                  <a
                    href={project.extLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#ff65c5] text-sm font-medium group"
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
                    className="inline-block text-[#ff65c5] text-sm font-medium group"
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
                    className="inline-block text-[#ff65c5] text-sm font-medium group"
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
            <div className="flex flex-col justify-center items-center">
              <Image
                src={project.logo!}
                alt={project.title}
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] h-[200px] relative rounded-lg overflow-hidden shadow-lg"
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
        {/* Demo Section */}
        {(project.youtubeId || project.video || project.presentation) && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              {project.presentation
                ? "Presentation"
                : project.video
                ? "Video Demo"
                : "YouTube Demo"}
            </h2>

            {/* YouTube (works for Shorts too) */}
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

            {/* Local video file */}
            {project.video && (
              <video
                controls
                className="w-full mb-6 rounded-lg shadow-lg"
                src={project.video}
              />
            )}

            {/* PDF Presentation */}
            {project.presentation && !project.video && !project.youtubeId && (
              <iframe
                src={project.presentation}
                className="w-full h-[600px] rounded-lg shadow-lg"
              />
            )}
          </section>
        )}
      </main>
    </div>
  );
}
