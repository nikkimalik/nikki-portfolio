import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaTasks,
  FaColumns,
} from "react-icons/fa";

const labProjects = [
  {
    title: "Users Finder",
    description:
      "React application that fetches user data and provides real-time search, filtering, and pagination features.",
    tech: ["React", "JavaScript", "API"],
    icon: FaUsers,
  },
  {
    title: "Task Management App",
    description:
      "Productivity-focused application for creating, organizing, updating, and managing tasks efficiently.",
    tech: ["React", "JavaScript"],
    icon: FaTasks,
  },
  {
    title: "Trello Clone",
    description:
      "Kanban-style task management interface inspired by Trello with drag-and-drop style workflows.",
    tech: ["React", "CSS"],
    icon: FaColumns,
  },
];

function LabSection() {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-[#030712] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="space-y-10"
        >
          <motion.div variants={item} className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D4A5A5] opacity-90">
              Experiments & Mini Projects
            </p>
            <h1 
              onClick={() => navigate("/lab")}
              className="text-4xl sm:text-5xl font-bold leading-tight cursor-pointer hover:text-[#D4A5A5] transition-colors duration-300"
            >
              Lab of Experiments
            </h1>
            <p className="text-[#D1D5DB] text-base sm:text-lg leading-8">
              A collection of smaller applications and UI experiments that helped me strengthen my React, JavaScript, and frontend development skills.
            </p>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {labProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group rounded-3xl border border-[#D4A5A5]/20 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#D4A5A5]/15 via-[#C89AA6]/10 to-[#B07D7D]/15 text-2xl">
                  <Icon size={24} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-[#F9FAFB]">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#D1D5DB]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#D4A5A5]/20 bg-white/5 px-3 py-1 text-xs text-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default LabSection;
