import { useState } from "react";
import { motion } from "framer-motion";
import resume from "../assets/Nikki_Malik_Resume.pdf";
import ContactForm from "../components/ContactForm";
import { useNavigate } from "react-router-dom";
import { FaCopy, FaCheck, FaExternalLinkAlt, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "nikkimalik355@gmail.com",
    icon: FaEnvelope,
    action: "copy", // Special action for email card
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nikkimalik",
    href: "https://www.linkedin.com/in/nikkimalik",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/nikkimalik",
    href: "https://github.com/nikkimalik",
    icon: FaGithub,
  },
  {
    label: "Location",
    value: "India",
    href: null,
    icon: FaMapMarkerAlt,
  },
  {
    label: "Resume Download",
    value: "Download PDF",
    href: resume,
    icon: FaDownload,
    download: true,
  },
];

function Contact() {
  const navigate = useNavigate();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("nikkimalik355@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] py-20 text-[#F9FAFB]">
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-[#D4A5A5]/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-6rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A5A5]/40 to-transparent" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8"
      >
        <motion.header variants={item} className="max-w-3xl space-y-5">
          <div className="inline-flex items-center rounded-full border border-[#D4A5A5]/20 bg-[#D4A5A5]/10 px-4 py-2 text-sm font-medium text-[#D4A5A5] shadow-[0_0_24px_rgba(212,165,165,0.12)]">
            Available for Opportunities
          </div>

          <div className="space-y-4">
            <h1 
              onClick={() => navigate("/contact")}
              className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl cursor-pointer hover:text-[#D4A5A5] transition-colors duration-300"
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#D1D5DB] sm:text-xl">
              Open to frontend, MERN stack, and software engineering
              opportunities.
            </p>
          </div>
        </motion.header>

        <motion.div
          variants={item}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;

            // Special handling for email card - copy to clipboard
            if (contact.action === "copy") {
              return (
                <motion.button
                  key={contact.label}
                  onClick={handleEmailCopy}
                  variants={item}
                  whileHover={{
                    y: -8,
                    borderColor: "rgba(212, 165, 165, 0.35)",
                    boxShadow: "0 24px 80px rgba(212, 165, 165, 0.18)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="group relative min-h-[190px] overflow-hidden rounded-3xl border border-[#D4A5A5]/20 bg-white/[0.05] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-300 text-left"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A5A5]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4A5A5]/20 bg-[#D4A5A5]/10 text-[#D4A5A5]">
                        <Icon size={22} />
                      </div>
                      <span className="text-sm font-medium text-[#D4A5A5]/90">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-lg font-semibold text-[#F9FAFB]">
                        {contact.label}
                      </h2>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <p className="break-words text-sm leading-relaxed text-[#D1D5DB]">
                            {contact.value}
                          </p>
                          {copiedEmail ? (
                            <FaCheck
                              size={18}
                              className="shrink-0 text-[#D4A5A5] opacity-100 transition-transform duration-300"
                            />
                          ) : (
                            <FaCopy
                              size={18}
                              className="shrink-0 text-[#D4A5A5] opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                            />
                          )}
                        </div>
                        {copiedEmail && (
                          <p className="text-sm text-[#D4A5A5] opacity-90">
                            Email copied!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            }

            // Regular cards for external links
            const CardTag = contact.href ? motion.a : motion.div;

            return (
              <CardTag
                key={contact.label}
                href={contact.href || undefined}
                target={contact.href ? "_blank" : undefined}
                rel={contact.href ? "noopener noreferrer" : undefined}
                download={contact.download || undefined}
                variants={item}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(212, 165, 165, 0.35)",
                  boxShadow: "0 24px 80px rgba(212, 165, 165, 0.18)",
                }}
                whileTap={contact.href ? { scale: 0.98 } : undefined}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group relative min-h-[190px] overflow-hidden rounded-3xl border border-[#D4A5A5]/20 bg-white/[0.05] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A5A5]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4A5A5]/20 bg-[#D4A5A5]/10 text-[#D4A5A5]">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-medium text-[#D4A5A5]/90">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-[#F9FAFB]">
                      {contact.label}
                    </h2>
                    <div className="flex items-center justify-between gap-3">
                      <p className="break-words text-sm leading-relaxed text-[#D1D5DB]">
                        {contact.value}
                      </p>
                      {contact.href && (
                        <FaExternalLinkAlt
                          size={18}
                          className="shrink-0 text-[#D4A5A5] opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CardTag>
            );
          })}
        </motion.div>

        <ContactForm />
      </motion.div>
    </section>
  );
}

export default Contact;
