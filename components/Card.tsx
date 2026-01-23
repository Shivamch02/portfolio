import { CardInfo } from "./CardInfo";
import { GithubButton } from "./GithubButton";
import { LiveButton } from "./LiveButton";

export const Card = ({
    title,
    description,
    image,
    liveLink,
    githubLink,
    imageName,
    videoSrc,
}: {
    title: string;
    description: string;
    image: any;
    liveLink: string;
    githubLink: string;
    imageName: string;
    videoSrc?: string;
}) => {
    return (
        <div className="group bg-white dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-gray-800/50 rounded-xl flex flex-col justify-between h-full overflow-hidden shadow-lg hover:shadow-xl dark:shadow-sm dark:hover:shadow-white/5 transition-all duration-300 hover:-translate-y-1">
            <div className="w-full">
                <CardInfo
                    image={image}
                    title={title}
                    description={description}
                    imageName={imageName}
                    videoSrc={videoSrc}
                />
            </div>
            <div className="px-4 pb-3 flex items-center gap-2">
                <LiveButton liveLink={liveLink} />
                <GithubButton githubLink={githubLink} />
            </div>
        </div>
    );
};
