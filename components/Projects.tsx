import { Card } from "./Card";

export const Projects = () => {
  return (
    <div className="w-full px-20">
      <div className="py-10">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-6">
          Projects
        </h1>
        <p className="text-gray-600 text-center text-xl md:text-2xl">
          Check out some of the projects I have worked on. From web applications
          to mobile apps, I have built a diverse portfolio showcasing my skills
          and creativity.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};
