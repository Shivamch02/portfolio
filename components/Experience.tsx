import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <div className="pb-32 bg-black">
      <div className="py-8">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-6">
          Experience
        </h1>
      </div>
      <div>
        <ExperienceCard
          jobTitle="Web Developer at Geogo Infotech"
          location="Varanasi"
          startDate="April 2024"
          endDate="Present"
          description="I am currently working as a Web Developer at Geogo Infotech. I am responsible for developing and maintaining the company's website. I am also responsible for developing and maintaining the company's mobile application."
          skills={["HTML", "CSS", "Javascript", "PHP", "Mysql"]}
        />
        <ExperienceCard
          jobTitle="React Developer at Oasis Infobyte"
          location="Remote"
          startDate="March 2023"
          endDate="April 2023"
          description="I am currently working as a React Developer at Oasis Infobyte. I am responsible for developing and maintaining the company's website. I am also responsible for developing and maintaining the company's mobile application."
          skills={["Reactjs", "Reduxjs", "TailwindCSS", "Javascript"]}
        />
      </div>
      <div className="flex justify-center items-center pt-24 pb-6 font-bold">
        Shivam Chaurasiya ❤️
      </div>
    </div>
  );
};
