import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FeaturedProjectSection() {
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
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonHover = { y: -3, scale: 1.02, transition: { duration: 0.2 } };

  const tech = ["React", "Node.js", "Express", "MongoDB"];

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
          <motion.h2 variants={item} className="text-3xl sm:text-4xl font-bold">
            Featured Project
          </motion.h2>

          <motion.div
            variants={item}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image / Visual */}
            <motion.div
              variants={imgVariants}
              className="rounded-xl overflow-hidden bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border border-cyan-400/10 p-6 flex items-center justify-center"
            >
              <div className="relative w-full h-72 sm:h-96 rounded-lg bg-[#081018] flex items-center justify-center">
                <div className="absolute -inset-6 rounded-full bg-cyan-400/8 blur-3xl -z-10"></div>

                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl">🧭</div>
                    <p className="text-gray-400 mt-4">Wanderlust Project Image</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.article
              variants={item}
              whileHover={{ translateY: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="bg-white/5 backdrop-blur-md border border-white/8 rounded-xl p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Wanderlust</h3>
                  <p className="text-gray-300 mt-3 max-w-xl leading-relaxed">
                   A full-stack accommodation listing platform where users can browse properties, create listings, upload images, leave reviews, and manage authentication.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/6 border border-white/8 text-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={buttonHover}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-semibold"
                      onClick={() => navigate("/projects/wanderlust")}
                    >
                      View Case Study
                      <ArrowRight size={18} />
                    </motion.button>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/3 text-white text-sm"
                    >
                      🐙 GitHub
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/3 text-white text-sm"
                    >
                      ↗ Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProjectSection;
