import { FaGithub } from "react-icons/fa";
export const GithubButton = ({ githubLink }: { githubLink?: string }) => {
  return (
    <div>
      <a href={githubLink} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="focus:ring-4 focus:outline-none rounded-md text-sm px-3 py-1.5 text-center inline-flex items-center me-2 mb-2 dark:text-white cursor-pointer  font-medium text-white dark:border-white border bg-black border-black"
        >
          <FaGithub className="mr-2" />
          Github
        </button>
      </a>
    </div>
  );
};
