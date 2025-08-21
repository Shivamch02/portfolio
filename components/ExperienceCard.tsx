import Image from "next/image";
import AvatarImg from "./icons/dev.webp";
import { TagButton } from "./TagButton";

export const ExperienceCard = ({
  jobTitle,
  location,
  startDate,
  endDate,
  description,
  skills,
}: {
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}) => {
  return (
    <div className="group relative mb-12 last:mb-0 overflow-hidden">
      {/* Timeline marker */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-sm group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors duration-300 z-10">
        <div className="absolute inset-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Connecting line - only for non-last items */}
      <div className="absolute left-6 top-12 w-px bg-gray-200 dark:bg-gray-700" style={{ height: 'calc(100% + 2rem)' }}></div>
      
      <div className="ml-12">
        <div className="relative bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                    <Image
                      className="w-8 h-8 object-cover rounded"
                      height={32}
                      width={32}
                      src={AvatarImg}
                      alt="Company"
                    />
                  </div>
                </div>
                
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 leading-tight">
                    {jobTitle}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                  </div>
                </div>
              </div>
              
              {/* Date */}
              <div className="flex-shrink-0 ml-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  {startDate} — {endDate}
                </div>
              </div>
            </div>
            
            {/* Description */}
            {description && (
              <div className="mb-5">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {description}
                </p>
              </div>
            )}
            
            {/* Skills */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <TagButton language={skill} key={skill + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
