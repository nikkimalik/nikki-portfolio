import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaBriefcase, FaRobot, FaLaptopCode } from "react-icons/fa";

function AboutSection() {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cards = [
    {
      title: "MCA Graduate",
      desc: "Master's in Computer Applications with a strong foundation in algorithms and software engineering.",
      icon: FaGraduationCap,
    },
    {
      title: "Infosys Experience",
      desc: "Worked as a Software Tester or QA Engineer at Infosys and gained experience working in a professional corporate environment.",
      icon: FaBriefcase,
    },
    {
      title: "AI Evaluation Experience",
      desc: "AI Evaluation, RLHF-style testing, Prompt evaluation, Response quality analysis",
      icon: FaRobot,
    },
    {
      title: "MERN Development Journey",
      desc: "Hands-on experience building React-driven frontends with Node/Express and MongoDB backends.",
      icon: FaLaptopCode,
    },
  ];

  return (
    <section className="py-20 bg-[#030712] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="space-y-8"
        >
          <motion.h2 
          variants={item} 
          onClick={() => navigate("/about")} 
          className="text-4xl font-bold cursor-pointer hover:text-[#D4A5A5] transition-colors duration-300 ">
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-[#D1D5DB] max-w-2xl leading-relaxed"
          >
            I'm Nikki Malik, a MERN Stack Developer and AI Trainer with experience spanning software testing, AI training, and modern web development.
            <br/><br/>
            My journey started at Infosys, where I developed strong problem-solving and collaboration skills. Now, I am working on AI training projects involving prompt assessment, code response quality analysis, and RLHF-style testing.
            I focus on building responsive full-stack applications using React, Node.js, Express, and MongoDB while continuously expanding my skills as a developer.
          </motion.p>

          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >

          {cards.map((c) => {
          const Icon = c.icon;

          return (
            <motion.article
              key={c.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-md border border-[#D4A5A5]/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] text-[#030712]">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>

              <p className="text-[#D1D5DB] text-sm mt-2">{c.desc}</p>
            </motion.article>
          );
        })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;