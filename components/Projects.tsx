import { Card } from "./Card";
import MovixImg from "./icons/movix.png";
import MediumImg from "./icons/medium.png";
import NetflixGptImg from "./icons/netflix-gpt.png";
import EasyEatsImg from "./icons/easy-eats.png";
import GithubCardImg from "./icons/github-card.png";
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
import NextJs from "./icons/nextjs.jpg";
import InvoiceNow from "./icons/Invoicenow.png";
import PropertyRental from "./icons/property-rental.png";

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
          imageName="movix.webp"
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
          imageName="medium.webp"
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
          imageName="wanderlust.webp"
        />
        <Card
          title="Netflix Gpt"
          description=" A Netflix clone built with React, Redux, and Tailwind CSS. The app allows users to browse and search for movies and TV shows."
          image={NetflixGptImg}
          icons={[ReactIcon, ReduxIcon, JavascriptIcon, TailwindIcon]}
          liveLink="https://netflixgemini.vercel.app/"
          githubLink="https://github.com/Shivamch02/netflix-gpt"
          imageName="netflix-gpt.webp"
        />
        <Card
          title="Easy Eats"
          description=" A food ordering app built with React, Redux, and CSS. The app allows users to browse and search for restaurants."
          image={EasyEatsImg}
          icons={[ReactIcon, ReduxIcon, JavascriptIcon, CssIcon]}
          githubLink="https://github.com/Shivamch02/easy-eat"
          liveLink="https://easyeat.vercel.app/"
          imageName="easy-eats.webp"
        />
        <Card
          title="Github Explorer Card"
          description="It is build with React, Typescript, and Tailwind CSS. The app allows users to search for Github users and view their profile."
          image={GithubCardImg}
          icons={[ReactIcon, TypescriptIcon, TailwindIcon]}
          liveLink="https://exploregithub.vercel.app/"
          githubLink="https://github.com/Shivamch02/Github-card"
          imageName="github-card.webp"
        />
        <Card
          title="Invoice Now"
          description="A clean and responsive invoice management interface built with Next.js and Tailwind CSS, designed for seamless invoice creation and tracking."
          image={InvoiceNow}
          icons={[NextJs, TypescriptIcon, TailwindIcon]}
          liveLink="https://invoicenow.vercel.app/"
          githubLink="https://github.com/Shivamch02/invoiceit"
          imageName="Invoicenow.png"
        />
        <Card
          title="Property Rental"
          description="A modern and responsive platform for browsing and renting properties, built with React, JavaScript, and Tailwind CSS for a seamless user experience."
          image={PropertyRental}
          icons={[ReactIcon, JavascriptIcon, TailwindIcon]}
          liveLink="https://rentaapartment.vercel.app/"
          githubLink="https://github.com/Shivamch02/property-rental"
          imageName="property-rental.png"
        />
      </div>
    </div>
  );
};
