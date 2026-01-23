import { HiExternalLink } from "react-icons/hi";

export const LiveButton = ({ liveLink }: { liveLink?: string }) => {
    if (!liveLink) return null;

    return (
        <a href={liveLink} target="_blank" rel="noreferrer">
            <button
                type="button"
                className="px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 bg-gray-900 text-white border border-gray-900 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100"
            >
                <HiExternalLink className="text-base" />
                Live Demo
            </button>
        </a>
    );
};
