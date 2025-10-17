import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  filteredProjects: any[];
  onProjectClick: (project: any) => void;
};

function ProjectCard({ filteredProjects, onProjectClick }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-6">
      <AnimatePresence>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative rounded-2xl overflow-hidden shadow-xl flex flex-col justify-end p-6 cursor-pointer border border-black dark:border-white ${project.span}`}
            onClick={() => onProjectClick(project)}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-50"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300 uppercase mt-1">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ProjectCard;
