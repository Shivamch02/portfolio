import Image from "next/image";
import ExternalLink from "./icons/external-link.svg";
export const LiveButton = ({ liveLink }: { liveLink?: string }) => {
  return (
    <div>
      <a href={liveLink} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center me-2 mb-2 cursor-pointer font-medium"
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
