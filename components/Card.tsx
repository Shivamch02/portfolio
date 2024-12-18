import { CardIcon } from "./CardIcon";
import { CardInfo } from "./CardInfo";
import { GithubButton } from "./GithubButton";
import { LiveButton } from "./LiveButton";

export const Card = ({
  title,
  description,
  image,
  icons,
  liveLink,
  githubLink,
}: {
  title: string;
  description: string;
  image: any;
  icons: string[];
  liveLink: string;
  githubLink: string;
}) => {
  return (
    <div className="w-full flex flex-col justify-between h-full rounded-md overflow-hidden shadow-md transform transition duration-200 hover:-translate-y-1 dark:bg-neutral-900/15 backdrop-blur-md border border-white/10">
      <div className="w-full pb-2">
        <CardInfo image={image} title={title} description={description} />
      </div>
      <div className="flex flex-wrap gap-2 px-4">
        {icons &&
          icons.map((icon, index) => (
            <CardIcon icon={icon} key={icon + index} />
          ))}
      </div>
      <div className="px-4 pt-4 pb-2 flex items-center">
        <LiveButton liveLink={liveLink} />
        <GithubButton githubLink={githubLink} />
      </div>
    </div>
  );
};
