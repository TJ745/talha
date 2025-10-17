"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectsModal";
import { projects, categories } from "@/data/projectsData";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface LocaleProps {
  locale: "en" | "ar";
}

type Project = (typeof projects)[number];

export default function Projects({ locale }: LocaleProps) {
  const t = useTranslations("Projects");

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 font-montserrat uppercase"
        >
          {t("title")}
        </motion.h1>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedProject(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-black text-white dark:bg-gray-100 dark:text-black"
                  : "bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white border dark:border-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ProjectCard
          filteredProjects={filteredProjects}
          onProjectClick={handleProjectClick}
        />

        {/* Modal */}
        <ProjectModal
          isOpen={isOpen}
          onClose={handleClose}
          project={selectedProject}
        />
      </div>
    </section>
  );
}
