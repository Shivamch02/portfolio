"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export const ExperienceCard = ({
  jobTitle,
  company,
  location,
  startDate,
  endDate,
  description,
  skills,
}: ExperienceCardProps) => {
  return (
    <div className="relative group p-6 sm:p-8 rounded-[2rem] bg-gray-50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/5 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl dark:hover:shadow-blue-500/5">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
            {jobTitle}
          </h3>
          <p className="text-gray-500 dark:text-blue-400 font-medium">
            {company} <span className="text-gray-400 dark:text-gray-600 mx-2">•</span> {location}
          </p>
        </div>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/10 shadow-sm">
          <span className="text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-400">
            {startDate} — {endDate}
          </span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/5 shadow-sm group-hover:border-blue-500/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
