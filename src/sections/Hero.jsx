import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Nikki_Malik_Resume.pdf";
import profileImage from "../assets/profile_picture.jpeg";

function Hero() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  const buttonTap = {
    scale: 0.95,
  };

  return (
    <section className="relative isolate min-h-screen bg-[#030712] text-[#F9FAFB] flex items-start lg:items-center justify-center overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:space-y-9"
          >
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm {" "}
                <span className="block sm:inline bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,165,165,0.18)]">
                  Nikki Malik
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl text-[#D1D5DB] font-semibold">
                MERN Stack Developer and AI Trainer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-[#D1D5DB] max-w-md leading-relaxed">
                I craft beautiful, responsive web experiences using React, Node.js, 
                and modern JavaScript. Passionate about clean code and user-centric design.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* Explore My Work Button */}
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => navigate("/projects")}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#D4A5A5]/30 bg-white/5 backdrop-blur-md text-white font-semibold hover:border-[#D4A5A5]/60 hover:bg-white/10 transition-all duration-300"
              >
                Explore My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>

              {/* Download Resume Button */}
              <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#EBCACA]/20 bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] text-[#030712] font-semibold shadow-lg shadow-[#D4A5A5]/15 hover:shadow-[#D4A5A5]/35 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Placeholder with Glow */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-first flex items-center justify-center lg:order-none"
          >
            {/* Circular Glow Background */}
            <motion.div
              animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/20 via-indigo-500/15 to-blue-500/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.96, 1.06, 0.96] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-[#D4A5A5]/25 via-[#C89AA6]/20 to-[#B07D7D]/20 rounded-full blur-3xl"
            ></motion.div>

            {/* Inner glow ring */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border border-[#D4A5A5]/30 rounded-full blur-xl"></div>

            {/* Image Placeholder */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#D4A5A5]/10 via-[#D4A5A5]/8 to-blue-500/10 rounded-full border border-[#D4A5A5]/20 flex items-center justify-center overflow-hidden">
              {/* Placeholder content */}
              <img
                src={profileImage}
                alt="Nikki Malik"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 rounded-full ring-1 ring-[#D4A5A5]/20"></div>
              <div className="absolute inset-0 rounded-full ring-2 ring-[#D4A5A5]/30"></div>
            </div>

            {/* Floating particles effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 sm:w-96 sm:h-96"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#D4A5A5] rounded-full blur-sm"></div>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-[#D4A5A5] rounded-full blur-sm"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
