import { FaGithub } from "react-icons/fa";
export const GithubButton = ({ githubLink }: { githubLink?: string }) => {
  return (
    <div>
      <a href={githubLink} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="focus:ring-4 focus:outline-none rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center me-2 mb-2 dark:text-white cursor-pointer  font-medium dark:border-white box-border  bg-black text-white"
        >
          <FaGithub className="mr-2" />
          Github
        </button>
      </a>
    </div>
  );
};
