import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Journey", path: "/journey" },
    { label: "Skills", path: "/skills" },
    {label: "Lab", path: "/lab" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikkimalik",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/nikkimalik",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "/contact",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative mt-20 bg-[#030712] text-[#F9FAFB]"
    >
      {/* Top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A5A5]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left: Brand info */}
          <motion.div
            variants={containerVariants}
            className="space-y-3"
          >
            <h3 className="text-lg sm:text-xl font-bold">Nikki Malik</h3>
            <p className="text-sm text-[#D1D5DB]">
              MERN Stack Developer & AI Trainer
            </p>
            <p className="text-xs sm:text-sm text-[#D1D5DB] leading-6 max-w-xs">
              Building modern web experiences with React, Node.js, and modern
              technologies.
            </p>
          </motion.div>

          {/* Center: Quick links */}
          <motion.nav
            variants={containerVariants}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D4A5A5]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-[#D1D5DB] hover:text-[#D4A5A5] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Right: Social links */}
          <motion.div
            variants={containerVariants}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D4A5A5]">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4A5A5]/20 bg-white/5 text-[#D4A5A5] hover:bg-[#D4A5A5]/10 hover:border-[#D4A5A5]/40 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-gradient-to-r from-transparent via-[#D4A5A5]/20 to-transparent" />

        {/* Bottom: Copyright */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <p className="text-xs sm:text-sm text-[#D1D5DB]">
            © {currentYear} Nikki Malik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
