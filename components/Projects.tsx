import { Card } from "./Card";
import MovixImg from "./icons/movix.png";
import MediumImg from "./icons/medium.png";
import NetflixGptImg from "./icons/netflix-gpt.png";
import EasyEatsImg from "./icons/easy-eats.png";
import PropertyRentalImg from "./icons/property-rental.png";
import WanderLustImg from "./icons/wanderlust.png";
import ReactIcon from "./icons/react.svg";
import JavascriptIcon from "./icons/javascript.svg";
import ReduxIcon from "./icons/redux.svg";
import CloudFlareIcon from "./icons/cloudflare.svg";
import ExpressIcon from "./icons/expressjs.svg";
import MongoDBIcon from "./icons/mongodb.svg";
import NodejsIcon from "./icons/node.svg";
import PostgresqlIcon from "./icons/postgresql.svg";
import TypescriptIcon from "./icons/typescript.svg";
import PrismaIcon from "./icons/prisma.svg";
import TailwindIcon from "./icons/tailwind.svg";
import CssIcon from "./icons/css.svg";
import EjsIcon from "./icons/ejs.svg";

export const Projects = () => {
  return (
    <div className="w-full dark:bg-black bg-white" id="projects">
      <div className=" py-10 lg:px-20 md:px-10 sm:px-6">
        <h1 className="lg:mt-10 relative z-10 text-4xl md:text-7xl  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 text-black  text-center font-sans font-bold pb-6">
          Projects
        </h1>
        <p className="text-gray-600 text-center text-xl md:text-2xl">
          Check out some of the projects I have worked on. From web applications
          to mobile apps, I have built a diverse portfolio showcasing my skills
          and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-20 md:px-6 px-4">
        <Card
          title="Movix"
          description="Movix is a movie search app that allows users to search for movies and view details about them."
          image={MovixImg}
          icons={[ReactIcon, ReduxIcon, JavascriptIcon, TailwindIcon]}
          githubLink="https://github.com/Shivamch02/movix"
          liveLink="https://movix-psi-two.vercel.app/"
        />
        <Card
          title="Blog App"
          description="A blog app built with Next.js, TypeScript, and Tailwind CSS. The app allows users to create, edit, and delete blog posts."
          image={MediumImg}
          icons={[
            TypescriptIcon,
            ReactIcon,
            PostgresqlIcon,
            PrismaIcon,
            TailwindIcon,
            CloudFlareIcon,
          ]}
          githubLink="https://github.com/Shivamch02/medium"
          liveLink="https://medium-seven-flame.vercel.app/signup"
        />
        <Card
          title="Wanderlust"
          description="A travel app built with Ejs, Node.js, and MongoDB. The app allows users to search for travel destinations."
          image={WanderLustImg}
          icons={[
            JavascriptIcon,
            ExpressIcon,
            NodejsIcon,
            MongoDBIcon,
            CssIcon,
            EjsIcon,
          ]}
          githubLink="https://github.com/Shivamch02/Wanderlust"
          liveLink="https://wanderlust-vn1l.onrender.com/listings"
        />
        <Card
          title="Netflix Gpt"
          description=" A Netflix clone built with React, Redux, and Tailwind CSS. The app allows users to browse and search for movies and TV shows."
          image={NetflixGptImg}
          icons={[ReactIcon, ReduxIcon, JavascriptIcon, TailwindIcon]}
          liveLink="https://netflixgpt-ivory.vercel.app/browse"
          githubLink="https://github.com/Shivamch02/netflix-gpt"
        />
        <Card
          title="Easy Eats"
          description=" A food ordering app built with React, Redux, and CSS. The app allows users to browse and search for restaurants."
          image={EasyEatsImg}
          icons={[ReactIcon, ReduxIcon, JavascriptIcon, CssIcon]}
          githubLink="https://github.com/Shivamch02/Easy-Eats"
          liveLink="https://easy-eats-osf3.vercel.app/"
        />
        <Card
          title="Property Rental Website"
          description=" A property rental website built with React, Redux, and Tailwind CSS. The app allows users to browse and search for properties for rent."
          image={PropertyRentalImg}
          icons={[ReactIcon, JavascriptIcon, TailwindIcon]}
          liveLink="https://totality-frontend-challenge-kappa-three.vercel.app/"
          githubLink="https://github.com/Shivamch02/property-rental"
        />
      </div>
    </div>
  );
};
