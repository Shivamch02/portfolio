import { FaGithub } from "react-icons/fa";
export const GithubButton = ({ githubLink }: { githubLink?: string }) => {
  return (
    <div>
      <a href={githubLink} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 mb-2 text-white cursor-pointer  font-medium border-2 border-white box-border"
        >
          <FaGithub className="mr-2" />
          Github
        </button>
      </a>
    </div>
  );
};
