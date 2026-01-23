import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <div className="bg-background text-foreground section-container" id="experience">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] md:left-[30px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-700 to-transparent"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              <ExperienceCard
                jobTitle="Full Stack Developer"
                company="Yutrp"
                location="Gurugram"
                startDate="June 2025"
                endDate="Present"
                description="Building a travel-related product using modern technologies. Responsible for developing scalable web applications with best practices."
                skills={["Next.js", "React", "PostgreSQL", "TypeScript", "Node.js", "Express", "Tailwind"]}
              />
              <ExperienceCard
                jobTitle="Software Developer"
                company="Geogo Infotech"
                location="Varanasi"
                startDate="April 2024"
                endDate="May 2025"
                description="Developed and maintained company website and mobile application. Collaborated with cross-functional teams to deliver high-quality software solutions."
                skills={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
              />
              <ExperienceCard
                jobTitle="Full Stack Developer Intern"
                company="Grid R&D"
                location="Remote"
                startDate="January 2024"
                endDate="March 2024"
                description="Gained hands-on experience with modern web technologies and contributed to various projects while learning industry best practices."
                skills={["React", "Redux", "Tailwind", "JavaScript", "Node.js", "Express"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
