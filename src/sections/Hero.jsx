import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
    <section className="min-h-screen bg-[#030712] text-white flex items-center justify-center overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 hover:border-cyan-400/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-cyan-400 font-medium">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Nikki Malik
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold">
                Frontend-Focused MERN Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                I craft beautiful, responsive web experiences using React, Node.js, 
                and modern JavaScript. Passionate about clean code and user-centric design.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Explore My Work Button */}
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => navigate("/projects")}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
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
                href="#"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 border border-cyan-400/30 text-white font-semibold hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300"
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
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Circular Glow Background */}
            <div className="absolute w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>

            {/* Inner glow ring */}
            <div className="absolute w-80 h-80 border border-cyan-400/30 rounded-full blur-xl"></div>

            {/* Image Placeholder */}
            <div className="relative w-72 h-72 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full border border-cyan-400/20 flex items-center justify-center overflow-hidden">
              {/* Placeholder content */}
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-gray-400 text-sm">Profile Image</p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-500/20 animate-pulse"></div>
            </div>

            {/* Floating particles effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-sm"></div>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-blue-500 rounded-full blur-sm"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
