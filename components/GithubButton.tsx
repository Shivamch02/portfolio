import { FaGithub } from "react-icons/fa";

export const GithubButton = ({ githubLink }: { githubLink?: string }) => {
    if (!githubLink) return null;

    return (
        <a href={githubLink} target="_blank" rel="noreferrer">
            <button
                type="button"
                className="px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 border-2 text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900"
            >
                <FaGithub className="text-base" />
                Github
            </button>
        </a>
    );
};
