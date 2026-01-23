import { Card } from "./Card";
import ThreeRounds from "./icons/3rounds.png";
import MovixImg from "./icons/movix.png";
import MediumImg from "./icons/medium.png";
import EasyEatsImg from "./icons/easy-eats.png";
import GithubCardImg from "./icons/github-card.png";
import InvoiceNow from "./icons/Invoicenow.png";

export const Projects = () => {
    return (
        <div className="dark:bg-black bg-white section-container" id="projects">
            <div className="main-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of projects I&apos;ve built, from web applications to
                        interactive experiences.
                    </p>
                </div>

                {/* Projects Grid - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card
                        title="3rounds.ai"
                        description="AI-powered assessment platform for interview preparation with customized practice sessions."
                        image={ThreeRounds}
                        githubLink=""
                        liveLink="https://3rounds-ai.vercel.app/"
                        imageName="3rounds.png"
                        videoSrc="/3rounds-vid.mp4"
                    />
                    <Card
                        title="Movix"
                        description="Movie search app to discover films, view details, ratings, and explore recommendations."
                        image={MovixImg}
                        githubLink="https://github.com/Shivamch02/movix"
                        liveLink="https://movix-psi-two.vercel.app/"
                        imageName="movix.webp"
                    />
                    <Card
                        title="Blog App"
                        description="Modern blogging platform with full CRUD functionality for creating and managing posts."
                        image={MediumImg}
                        githubLink="https://github.com/Shivamch02/medium"
                        liveLink="https://medium-seven-flame.vercel.app/signup"
                        imageName="medium.webp"
                    />
                    <Card
                        title="Easy Eats"
                        description="Food ordering app to browse restaurants and discover delicious meals nearby."
                        image={EasyEatsImg}
                        githubLink="https://github.com/Shivamch02/easy-eat"
                        liveLink="https://easyeat.vercel.app/"
                        imageName="easy-eats.webp"
                    />
                    <Card
                        title="Github Explorer"
                        description="Search and explore GitHub profiles with detailed user information and stats."
                        image={GithubCardImg}
                        liveLink="https://exploregithub.vercel.app/"
                        githubLink="https://github.com/Shivamch02/Github-card"
                        imageName="github-card.webp"
                    />
                    <Card
                        title="Invoice Now"
                        description="Clean invoice management interface for seamless creation and tracking."
                        image={InvoiceNow}
                        liveLink="https://invoicenow.vercel.app/"
                        githubLink="https://github.com/Shivamch02/invoiceit"
                        imageName="Invoicenow.png"
                    />
                </div>
            </div>
        </div>
    );
};
