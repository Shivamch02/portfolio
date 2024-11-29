import Image from "next/image";
import ExternalLink from "./icons/external-link.svg";
export const LiveButton = ({ liveLink }: { liveLink?: string }) => {
  return (
    <div>
      <a href={liveLink} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="dark:text-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:border dark:border-gray-200 focus:ring-4 focus:outline-none dark:focus:ring-gray-100 rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center me-2 mb-2 cursor-pointer font-medium border-2 border-black text-black"
        >
          <Image
            className="mr-2"
            src={ExternalLink}
            alt="Icon"
            width={20}
            height={20}
          />
          Live Site
        </button>
      </a>
    </div>
  );
};
