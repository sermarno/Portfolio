// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Image from "next/image";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.subtitle}</p>

      {/* Project Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-200 whitespace-pre-line">
          {project.description}
        </p>
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
      {/* Youtube Video or Presentation */}
      {(project.youtubeId || project.video || project.presentation) && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            {project.presentation ? "Presentation" : "Video Demo"}
          </h2>

          {/* YouTube */}
          {project.youtubeId && (
            <div className="w-full aspect-video mb-6 rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* PDF Presentation */}
          {!project.youtubeId && !project.video && project.presentation && (
            <iframe
              src={project.presentation}
              className="w-full h-[600px] rounded-lg shadow-lg"
            />
          )}
        </section>
      )}

      {/* Skills / Technologies */}
      {project.skills && project.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
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
  );
}
