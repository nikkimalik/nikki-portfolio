import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import homePageImg from "../assets/wanderlust/home_page.png";
import listingDetailsImg from "../assets/wanderlust/individual_listing_page.png";
import createListingImg from "../assets/wanderlust/create_page.png";

const ScreenshotCard = ({ src, title, caption }) => (
  <div className="relative rounded-[2rem] border border-white/10 bg-[#081018]/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.3)]">
    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D4A5A5]/10 via-transparent to-[#B07D7D]/10 blur-3xl" />
    <div className="relative overflow-hidden rounded-[1.75rem] bg-[#060b14]">
      <img src={src} alt={title} className="h-72 w-full object-cover" />
    </div>
    <div className="relative mt-6 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-white/5 p-5">
      <h3 className="text-base font-semibold text-[#F9FAFB]">{title}</h3>
      <p className="mt-2 text-sm text-[#D1D5DB]">{caption}</p>
    </div>
  </div>
);

function Wanderlust() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const featureVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
    }),
  };

  const featureList = [
    "User Authentication",
    "Property Listings",
    "CRUD Operations",
    "Image Uploads",
    "Reviews & Ratings",
    "Search & Discovery",
  ];

  const techStack = ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Cloudinary", "Passport.js", "Leaflet"];

  const challenges = [
    "Securing user authentication and session management.",
    "Managing database relationships across users, listings, and reviews.",
    "Maintaining a full-stack architecture with server-rendered views and API endpoints.",
    "Integrating Leaflet maps and handling location-based property visualization.",
  ];

  return (
    <main className="bg-[#030712] text-[#F9FAFB]">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/10 via-transparent to-[#B07D7D]/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center"
          >
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-[#D4A5A5]/20 bg-[#D4A5A5]/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#D4A5A5] shadow-[0_0_30px_rgba(212,165,165,0.12)]">
                Case Study
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Wanderlust
                </h1>
                <p className="max-w-2xl text-[#D1D5DB] text-lg sm:text-xl leading-relaxed">
                  A full-stack accommodation listing platform inspired by Airbnb, helping users browse listings, create and manage properties, upload photos, and share reviews.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#D4A5A5]">Project</p>
                  <p className="mt-3 text-lg font-semibold">Accommodation listing platform</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#D4A5A5]">Role</p>
                  <p className="mt-3 text-lg font-semibold">Full-stack developer</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] px-6 py-3 text-sm font-semibold text-[#030712] shadow-lg shadow-[#D4A5A5]/20 transition hover:shadow-[#D4A5A5]/30"
                >
                  View Overview <ArrowRight size={18} />
                </a>
                <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.08)] bg-white/5 px-6 py-3 text-sm text-[#D1D5DB]">
                  <span className="h-2 w-2 rounded-full bg-[#D4A5A5] animate-pulse" />
                  Live experience in progress
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ScreenshotCard
                src={homePageImg}
                title="Home Page Screenshot"
                caption="Browse available accommodations from the Wanderlust homepage."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="screenshots" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Screenshots</p>
              <h2 className="text-4xl font-bold">Wanderlust Gallery</h2>
              <p className="max-w-3xl text-[#D1D5DB] leading-relaxed">
                Real interface views from the Wanderlust platform showing the homepage, listing details, and creation workflow.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <motion.div variants={featureVariant} custom={0}>
                <ScreenshotCard
                  src={homePageImg}
                  title="Home Page Screenshot"
                  caption="Browse available accommodations and filter results." 
                />
              </motion.div>
              <motion.div variants={featureVariant} custom={1}>
                <ScreenshotCard
                  src={listingDetailsImg}
                  title="Listing Details Screenshot"
                  caption="View property details, ratings, and host information."
                />
              </motion.div>
              <motion.div variants={featureVariant} custom={2}>
                <ScreenshotCard
                  src={createListingImg}
                  title="Create Listing Screenshot"
                  caption="Create and manage new property listings with image uploads."
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariant}
              className="space-y-8"
            >
              <motion.article variants={featureVariant} custom={0} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Project Overview</p>
                <h2 className="mt-3 text-3xl font-semibold">What the project does</h2>
                <p className="mt-4 text-[#D1D5DB] leading-relaxed">
                  Wanderlust is a full-stack web application that allows users to discover, create, and manage accommodation listings.
                  Users can browse available properties, register and log in, upload listing images, add reviews, and maintain their own listings.
                </p>
              </motion.article>

              <motion.article variants={featureVariant} custom={1} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Problem</p>
                <h2 className="mt-3 text-3xl font-semibold">What problem it solves</h2>
                <p className="mt-4 text-[#D1D5DB] leading-relaxed">
                  Finding, managing, and sharing accommodation listings is often scattered across multiple services.
                  Wanderlust addresses that by centralizing property discovery, listing management, image uploads, and review workflows in one platform.
                </p>
              </motion.article>

              <motion.article variants={featureVariant} custom={2} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Solution</p>
                <h2 className="mt-3 text-3xl font-semibold">How the application solves it</h2>
                <p className="mt-4 text-[#D1D5DB] leading-relaxed">
                  By combining authentication, CRUD capabilities, image uploads, and reviews, Wanderlust gives users full control over property listings.
                  The platform supports secure login, property creation, editing, and discovery through a centralized web experience.
                </p>
              </motion.article>
            </motion.div>

            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariant}
              className="space-y-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Key Features</p>
                <h3 className="mt-3 text-2xl font-semibold">Feature highlights</h3>
                <ul className="mt-6 space-y-4 text-[#D1D5DB]">
                  {featureList.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4A5A5]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Tech Stack</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-[#081018] px-4 py-3 text-sm text-[#F9FAFB]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Challenges & Learnings</p>
            <h2 className="mt-3 text-3xl font-semibold">What I learned building Wanderlust</h2>
            <div className="mt-6 space-y-4 text-[#D1D5DB]">
              {challenges.map((challenge) => (
                <p key={challenge}>{challenge}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.15)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A5A5]">Project Links</p>
            <h2 className="mt-3 text-3xl font-semibold">Explore more</h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://github.com/nikkimalik/Wanderlust"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A5A5] via-[#C89AA6] to-[#B07D7D] px-6 py-3 text-sm font-semibold text-[#030712] shadow-lg shadow-[#D4A5A5]/20 transition hover:shadow-[#D4A5A5]/30"
              >
                GitHub
              </a>
              <a
                href="https://wanderlust-by-nikki.onrender.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F9FAFB] transition hover:bg-white/10"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Wanderlust;
