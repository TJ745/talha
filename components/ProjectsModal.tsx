import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projectsData";

type Project = (typeof projects)[number];

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose} // close when clicking outside
    >
      <div
        className="relative rounded-2xl max-w-2xl w-[80%] p-6 shadow-xl border border-black dark:border-white bg-white dark:bg-black"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-xl mb-4"
        />

        {/* Project Title */}
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech: string) => (
            <span
              key={tech}
              className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-black dark:border-white transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Live Site
            </Link>
          )}
          {project.source === "" ? (
            ""
          ) : (
            <Link
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-lg border border-black dark:border-white transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
