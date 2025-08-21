import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <div className="py-24 dark:bg-black bg-white" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Experience
          </h2>
          <p className="dark:text-gray-400 text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Experience Cards */}
          <div className="relative z-10">
            <ExperienceCard
              jobTitle="Full Stack Developer - Yutrp"
              location="Gurugram"
              startDate="June 2025"
              endDate="Present"
              description="I am working as a full stack developer at Yutrp and building a travel related product for my organization. I'm responsible for developing scalable web applications using modern technologies and best practices."
              skills={["Nextjs", "Reactjs", "PostgreSql", "Typescript", "Nodejs", "Expressjs", "TailwindCSS"]}
            />
            <ExperienceCard
              jobTitle="Software Developer - Geogo Infotech"
              location="Varanasi"
              startDate="April 2024"
              endDate="May 2025"
              description="I worked as a Web Developer at Geogo Infotech, responsible for developing and maintaining the company's website and mobile application. I collaborated with cross-functional teams to deliver high-quality software solutions."
              skills={["HTML", "CSS", "Javascript", "PHP", "Mysql"]}
            />
            <ExperienceCard
              jobTitle="Full Stack Developer (Intern) - Grid R&D"
              location="Remote"
              startDate="January 2024"
              endDate="March 2024"
              description="I interned as a Full Stack Developer at Grid R&D, where I gained hands-on experience with modern web technologies and contributed to various projects while learning industry best practices."
              skills={["Reactjs", "Reduxjs", "TailwindCSS", "Javascript", "Nodejs", "Expressjs"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
