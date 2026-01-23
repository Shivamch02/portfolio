"use client";

import { motion } from "framer-motion";

export const ExperienceCard = ({
  jobTitle,
  company,
  location,
  startDate,
  endDate,
  description,
  skills,
}: {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}) => {
  const isPresent = endDate.toLowerCase() === "present";

  return (
    <div className="group relative pl-10 md:pl-14">
      {/* Timeline indicator */}
      <div className="absolute left-[21px] md:left-[29px] top-8 z-10 flex flex-col items-center">
        <div className={`w-2.5 h-2.5 rounded-full border-2 ${isPresent ? 'border-green-500 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'border-gray-400 dark:border-white/20 bg-gray-200 dark:bg-[#0A0A0A]'} group-hover:scale-125 transition-transform duration-300`}>
          {isPresent && (
            <span className="absolute inset-0 rounded-full animate-ping bg-green-500/40"></span>
          )}
        </div>
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-xl border border-gray-200 dark:border-white/[0.05] rounded-[1.5rem] p-5 md:p-6 overflow-hidden transition-colors duration-300 hover:border-gray-300 dark:hover:border-white/10 shadow-lg dark:shadow-none"
      >
        {/* Background Gradient Effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100/50 dark:from-white/[0.02] to-transparent pointer-events-none"></div>

        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-tight">
                {jobTitle}
              </h3>
              <div className="flex items-center gap-2 mt-1.5 text-sm font-medium">
                <span className="text-gray-700 dark:text-gray-300">{company}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-white/20"></span>
                <span className="text-gray-500 dark:text-gray-500 font-normal">{location}</span>
              </div>
            </div>

            <div className={`shrink-0 inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold h-fit ${isPresent ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10'}`}>
              {startDate} — {endDate}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {skills.map((skill, index) => (
              <span
                key={skill + index}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-white/5 transition-all duration-300 group-hover:bg-white dark:group-hover:bg-zinc-800 dark:group-hover:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

