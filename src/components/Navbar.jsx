import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Nikki_Malik_Resume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Journey", path: "/journey" },
    { name: "Skills", path: "/skills" },
    { name: "Lab", path: "/lab" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => setIsOpen(false);

  // Link styling for NavLink active states
  const getLinkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive
        ? "text-[#D4A5A5] font-semibold"
        : "text-[#F9FAFB] hover:text-[#D4A5A5]"
    }`;

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-40 border-b border-[#D4A5A5]/20 bg-[#030712]/40 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <NavLink to="/" className="flex items-center gap-2">
               <div className="w-11 h-11 rounded-xl border border-white/10 bg-gradient-to-br from-[#EBC6C6] to-[#B07D7D] flex items-center justify-center shadow-[0_8px_24px_rgba(212,165,165,0.25)]">
              <span
              className="text-[#030712] text-xl"
              style={{
                fontFamily: "Playfair Display",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              N
            </span>
            </div>
                <span className="font-bold text-lg text-[#F9FAFB]">
              Nikki M.
            </span>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={getLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Resume Button & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Resume Button - Hidden on Mobile */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block px-6 py-2 rounded-lg bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] text-[#030712] font-semibold hover:shadow-lg hover:shadow-[#D4A5A5]/35 transition-all duration-300"
              >
                Resume
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-[#D4A5A5]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-[#F9FAFB]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-[rgba(255,255,255,0.08)] overflow-hidden"
              >
                <div className="px-4 py-4 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={handleNavClick}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-[#D4A5A5]/20 text-[#D4A5A5] font-semibold border-l-2 border-[#D4A5A5]"
                              : "text-[#F9FAFB] hover:bg-white/10 hover:text-[#D4A5A5]"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Mobile Resume Button */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-3 border-t border-[rgba(255,255,255,0.08)]"
                  >
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-lg bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] text-[#030712] font-semibold text-center hover:shadow-lg hover:shadow-[#D4A5A5]/35 transition-all duration-300"
                    >
                      Resume
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
