import { motion } from "framer-motion";

function AboutSection() {
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
      emoji: "🎓",
    },
    {
      title: "Infosys Experience",
      desc: "Worked as an Operations Executive at Infosys and gained experience working in a professional corporate environment.",
      emoji: "💼",
    },
    {
      title: "AI Evaluation Experience",
      desc: "AI Evaluation, RLHF-style testing, Prompt evaluation, Response quality analysis",
      emoji: "🤖",
    },
    {
      title: "MERN Development Journey",
      desc: "Hands-on experience building React-driven frontends with Node/Express and MongoDB backends.",
      emoji: "🧩",
    },
  ];

  return (
    <section className="py-20 bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="space-y-8"
        >
          <motion.h2 variants={item} className="text-4xl font-bold">
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 max-w-2xl leading-relaxed"
          >
            I build polished, accessible front-end experiences focused on performance
            and delightful user interactions. I enjoy collaborating across teams to
            turn complex problems into elegant, maintainable solutions.
          </motion.p>

          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cards.map((c, idx) => (
              <motion.article
                key={c.title}
                variants={item}
                whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(2,6,23,0.6)" }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 min-h-[150px] flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-[#030712] text-xl font-bold">
                    {c.emoji}
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>

                <p className="text-gray-300 text-sm mt-2 flex-1">{c.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
