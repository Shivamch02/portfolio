"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-black selection:bg-blue-500/30" id="experience">
      <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.02] pointer-events-none" />

      <div className="main-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
            >
              Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
            >
              Professional <span className="italic font-serif">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
            >
              My professional journey in software development, building impact one ship at a time.
            </motion.p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Experience Cards */}
            <div className="space-y-6">
              {[
                {
                  jobTitle: "Full Stack Developer",
                  company: "Yutrp",
                  location: "Gurugram",
                  startDate: "June 2025",
                  endDate: "Present",
                  description: "Building a travel-related product using modern technologies. Responsible for developing scalable web applications with best practices.",
                  skills: ["Next.js", "React", "PostgreSQL", "TypeScript", "Node.js", "Express", "Tailwind"]
                },
                {
                  jobTitle: "Software Developer",
                  company: "Geogo Infotech",
                  location: "Varanasi",
                  startDate: "April 2024",
                  endDate: "May 2025",
                  description: "Developed and maintained company website and mobile application. Collaborated with cross-functional teams to deliver high-quality software solutions.",
                  skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
                },
                {
                  jobTitle: "Full Stack Developer Intern",
                  company: "Grid R&D",
                  location: "Remote",
                  startDate: "January 2024",
                  endDate: "March 2024",
                  description: "Gained hands-on experience with modern web technologies and contributed to various projects while learning industry best practices.",
                  skills: ["React", "Redux", "Tailwind", "JavaScript", "Node.js", "Express"]
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
