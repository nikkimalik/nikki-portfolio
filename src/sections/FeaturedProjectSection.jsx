import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import wanderlust from "../assets/wanderlust/wanderlust.png";
import {FaGithub} from "react-icons/fa";

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
          onClick={() => navigate("/projects")}
          className="text-3xl sm:text-4xl font-bold cursor-pointer hover:text-[#D4A5A5] transition-colors duration-300">
            Featured Project
          </motion.h2>

          <motion.div
            variants={item}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image / Visual */}
            <motion.div
              variants={imgVariants}
                className="rounded-2xl overflow-hidden border border-[#D4A5A5]/10 bg-gradient-to-br from-[#D4A5A5]/5 to-blue-500/5 p-4"
              >
            <img
              src={wanderlust}
              alt="Wanderlust Project"
              className="w-full h-auto object-contain"
            />
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
                  <p className="text-[#D1D5DB] mt-3 max-w-xl leading-relaxed">
                   A full-stack accommodation listing platform where users can browse properties, create listings, upload images, leave reviews, and manage authentication.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/6 border border-white/8 text-[#F9FAFB]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={buttonHover}
                      className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] text-[#030712] font-semibold hover:shadow-lg hover:shadow-[#D4A5A5]/35 transition-all duration-300"
                      onClick={() => navigate("/projects/wanderlust")}
                    >
                      View Case Study
                      <ArrowRight size={18} />
                    </motion.button>

                    <a
                      href="https://github.com/nikkimalik/Wanderlust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/3 text-[#F9FAFB] text-sm transition-colors hover:border-[#D4A5A5]/30 hover:bg-[#D4A5A5]/10"
                    >
                      <FaGithub size ={18}/>
                      GitHub
                    </a>

                    <a
                      href="https://wanderlust-by-nikki.onrender.com/listings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/3 text-[#F9FAFB] text-sm transition-colors hover:border-[#D4A5A5]/30 hover:bg-[#D4A5A5]/10"
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
