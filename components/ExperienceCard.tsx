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
    <div className="group relative pl-12 md:pl-16">
      {/* Timeline dot with pulse for present */}
      <div className="absolute left-4 md:left-6 top-8 z-10">
        <div className={`w-3 h-3 rounded-full border-2 ${isPresent ? 'border-green-400 bg-green-400/20' : 'border-gray-400 dark:border-gray-500 bg-gray-200 dark:bg-gray-800'} group-hover:scale-150 transition-transform duration-300`}>
          {isPresent && (
            <span className="absolute inset-0 rounded-full animate-ping bg-green-400/40"></span>
          )}
        </div>
      </div>

      {/* Card */}
      <div className="relative bg-white dark:bg-black backdrop-blur-xl border border-gray-200 dark:border-gray-700/40 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-gray-300 dark:hover:border-gray-500/60 shadow-lg hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] group-hover:-translate-y-1">

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-2xl"></div>

        {/* Header */}
        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              {jobTitle}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium flex items-center gap-2">
              <span className="text-gray-700 dark:text-white/80">{company}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
              <span>{location}</span>
            </p>
          </div>

          {/* Date badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-wide ${isPresent ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700/50'} transition-all duration-300`}>
            {startDate} — {endDate}
          </div>
        </div>

        {/* Description */}
        <p className="relative text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Skills */}
        <div className="relative flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={skill + index}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
