import { HiOutlineGlobeAlt } from "react-icons/hi2";

export const LiveButton = ({ liveLink }: { liveLink?: string }) => {
    if (!liveLink) return null;

    return (
        <a href={liveLink} target="_blank" rel="noreferrer">
            <button
                type="button"
                className="px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300 bg-gray-900 text-white border border-gray-900 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100"
            >
                <HiOutlineGlobeAlt className="text-sm" />
                Website
            </button>
        </a>
    );
};

