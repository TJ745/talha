"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const categories = ["All", "Web", "Mobile", "AI", "Dashboard"];

// Example projects
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Fullstack web app with Next.js, Supabase & Stripe.",
    image: "/projects/ecommerce.jpg",
    link: "https://yourproject1.com",
    source: "https://github.com/yourrepo1",
    category: "Web",
    tech: ["Next.js", "Supabase", "Stripe", "TailwindCSS"],
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Mobile Game App",
    description: "React Native multiplayer game with Supabase backend.",
    image: "/projects/game.jpg",
    link: "https://yourproject2.com",
    source: "https://github.com/yourrepo2",
    category: "Mobile",
    tech: ["React Native", "Expo", "Supabase"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Portfolio Website",
    description: "Minimal personal portfolio built with Next.js & Tailwind.",
    image: "/projects/portfolio.jpg",
    link: "https://yourportfolio.com",
    source: "https://github.com/yourrepo3",
    category: "Web",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "AI Chatbot",
    description: "Custom AI assistant using OpenAI & LangChain.",
    image: "/projects/chatbot.jpg",
    link: "https://yourproject3.com",
    source: "https://github.com/yourrepo4",
    category: "AI",
    tech: ["Next.js", "LangChain", "OpenAI API"],
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Analytics Dashboard",
    description: "Beautiful dashboard with Next.js & D3.js.",
    image: "/projects/dashboard.jpg",
    link: "https://yourproject4.com",
    source: "https://github.com/yourrepo5",
    category: "Dashboard",
    tech: ["Next.js", "D3.js", "TailwindCSS"],
    span: "lg:col-span-1 lg:row-span-2",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // Add this state near selectedIndex
  const [direction, setDirection] = useState<1 | -1>(1);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % filteredProjects.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredProjects.length) % filteredProjects.length
            : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredProjects.length]);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gray-800 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
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
                className={`relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 text-white flex flex-col justify-end p-6 cursor-pointer ${project.span}`}
                onClick={() => setSelectedIndex(index)}
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
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        {/* Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
                >
                  ✕
                </button>

                {/* Prev / Next */}
                <button
                  onClick={() => {
                    setDirection(-1);
                    setSelectedIndex(
                      (selectedIndex - 1 + filteredProjects.length) %
                        filteredProjects.length
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    setDirection(1);
                    setSelectedIndex(
                      (selectedIndex + 1) % filteredProjects.length
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
                >
                  →
                </button>

                {/* Direction-aware Animated Project Content */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={selectedIndex}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir > 0 ? 300 : -300,
                        opacity: 0,
                      }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({
                        x: dir > 0 ? -300 : 300,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -100) {
                        setDirection(1); // swipe left → next
                        setSelectedIndex(
                          (selectedIndex + 1) % filteredProjects.length
                        );
                      } else if (info.offset.x > 100) {
                        setDirection(-1); // swipe right → prev
                        setSelectedIndex(
                          (selectedIndex - 1 + filteredProjects.length) %
                            filteredProjects.length
                        );
                      }
                    }}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={filteredProjects[selectedIndex].image}
                        alt={filteredProjects[selectedIndex].title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">
                        {filteredProjects[selectedIndex].title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {filteredProjects[selectedIndex].description}
                      </p>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {filteredProjects[selectedIndex].tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4">
                        <Link
                          href={filteredProjects[selectedIndex].link}
                          target="_blank"
                          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                        >
                          Live Demo
                        </Link>
                        <Link
                          href={filteredProjects[selectedIndex].source}
                          target="_blank"
                          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
                        >
                          Source Code
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
