import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "SQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Codex", "Google AI Studio", "Replit"],
  },
];

const categoryDescriptions = {
  Frontend: "Frontend tools for building responsive, interactive, and user-friendly interfaces.",
  Backend: "Backend tools for creating APIs, handling business logic, and server-side functionality.",
  Database: "Databases for managing and storing application data efficiently.",
  Tools: "Other tools for development, debugging, collaboration, and productivity.",
};

function SkillsSection() {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-[#030712] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="space-y-10"
        >
          <motion.header variants={item} className="space-y-4">
            <div className="inline-flex rounded-full bg-[#D4A5A5]/10 px-4 py-2 text-sm font-medium text-[#D4A5A5] border border-[#D4A5A5]/20">
              Skills & Technologies
            </div>
            <h2 
              onClick={() => navigate("/skills")}
              className="text-4xl sm:text-5xl font-bold cursor-pointer hover:text-[#D4A5A5] transition-colors duration-300"
            >
              Skills & Technologies
            </h2>
            <p className="max-w-2xl text-[#D1D5DB] leading-relaxed">
              The tools and technologies I use to build modern web applications.
            </p>
          </motion.header>

          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <motion.section
                key={category.category}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 210, damping: 20 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-xl font-semibold text-[#F9FAFB]">{category.category}</h3>
                <p className="mt-3 text-[#D1D5DB] text-sm leading-relaxed">
                  {categoryDescriptions[category.category]}
                </p>
                <ul className="mt-6 space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#F9FAFB] transition-colors duration-200 hover:border-[#D4A5A5]/30 hover:bg-[#D4A5A5]/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
