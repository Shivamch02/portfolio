import { LiveButton } from "./LiveButton";
import { GithubButton } from "./GithubButton";
import { CardInfo } from "./CardInfo";
import { CardIcon } from "./CardIcon";

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
    <div className="box-border">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <CardInfo image={image} title={title} description={description} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2 px-4">
        {icons.map((icon) => (
          <CardIcon icon={icon} key={icon} />
        ))}
      </div>
      <div className="px-4 pt-4 pb-2 flex gap-2">
        <LiveButton liveLink={liveLink} />
        <GithubButton githubLink={githubLink} />
      </div>
    </div>
  );
};
