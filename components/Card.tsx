import Image from "next/image";
import MovixImg from "./icons/movix.png";
import ReactIcon from "./icons/react.svg";
import JavascriptIcon from "./icons/javascript.svg";
import ReduxIcon from "./icons/redux.svg";
import ExternalLink from "./icons/external-link.svg";
import { FaGithub } from "react-icons/fa";

export const Card = () => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full h-48 object-cover"
          src={MovixImg}
          alt="Movix"
          layout="responsive"
        />
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className=" mt-2 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 px-4">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            title="Next.js"
          >
            <Image src={ReactIcon} alt="Icon" width={32} height={32} />
          </div>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            title="Next.js"
          >
            <Image src={ReduxIcon} alt="Icon" width={32} height={32} />
          </div>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            title="Next.js"
          >
            <Image src={JavascriptIcon} alt="Icon" width={32} height={32} />
          </div>
        </div>
        <div className="px-4 pt-4 pb-2">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 mb-2 cursor-pointer font-medium"
          >
            <Image
              className="mr-2"
              src={ExternalLink}
              alt="Icon"
              width={20}
              height={20}
            />
            Live Demo
          </button>
          <button
            type="button"
            className=" border border-white focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 mb-2 text-white cursor-pointer  font-medium"
          >
            <FaGithub className="mr-2" />
            Github
          </button>
        </div>
      </div>
    </div>
  );
};
