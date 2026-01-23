import { FaGithub } from "react-icons/fa";

export const GithubButton = ({ githubLink }: { githubLink?: string }) => {
    if (!githubLink) return null;

    return (
        <a href={githubLink} target="_blank" rel="noreferrer">
            <button
                type="button"
                className="px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300 border text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900"
            >
                <FaGithub className="text-sm" />
                Github
            </button>
        </a>
    );
};

