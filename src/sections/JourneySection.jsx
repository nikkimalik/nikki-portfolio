import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

const journeyItems = [
  {
    title: "2023 - MCA Graduate",
    description:
      "Completed MCA and built a strong foundation in software development.",
  },
  {
    title: "2024 - Infosys",
    description:
      "Worked as a Software Tester or QA Engineer and gained professional industry experience.",
  },
  {
    title: "2025 - AI Evaluation",
    description:
      "Working on AI evaluation and response quality projects involving analytical thinking and prompt assessment.",
  },
  {
    title: "2025 - MERN Development",
    description:
      "Started learning React, Node.js, Express, and MongoDB while building practical projects.",
  },
  {
    title: "2026 - Building Products",
    description:
      "Creating full-stack applications and continuously improving frontend and backend engineering skills.",
  },
];

function JourneySection() {
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-[#030712] text-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="space-y-10"
        >
          <motion.div variants={item} className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">
              Career Journey
            </p>
            <h2 
            onClick={() => navigate("/journey")}
            className="text-4xl sm:text-5xl font-bold cursor-pointer hover:text-[#D4A5A5] transition-colors duration-300">
              My Journey
            </h2>
            <p className="max-w-2xl text-[#D1D5DB] leading-relaxed">
              A timeline of my growth from academics to professional experience and practical MERN development.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#D4A5A5]/20" />

            <div className="space-y-10">
              {journeyItems.map((itemData, index) => (
                <motion.article
                  key={itemData.title}
                  variants={item}
                  className="relative flex flex-col sm:flex-row gap-6"
                >
                  <div className="flex flex-col items-center sm:items-start sm:w-40">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#081018] border border-[#D4A5A5]/30 shadow-[0_0_30px_rgba(212,165,165,0.12)]">
                      <div className="absolute inset-0 rounded-full bg-[#D4A5A5]/20 blur-xl" />
                      <span className="relative text-[#D4A5A5] font-semibold">{index + 1}</span>
                    </div>
                    <span className="mt-4 text-sm text-[#D1D5DB]">Step {index + 1}</span>
                  </div>

                  <div className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-[#D4A5A5]/10 blur-3xl" />
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-xl font-semibold text-[#F9FAFB]">{itemData.title}</h3>
                      <p className="text-[#D1D5DB] leading-relaxed">{itemData.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default JourneySection;
