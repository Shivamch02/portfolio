"use client";

import { motion } from "framer-motion";
import { Card } from "./Card";
import ThreeRounds from "./icons/3rounds.png";
import MovixImg from "./icons/movix.png";
import MediumImg from "./icons/medium.png";
import EasyEatsImg from "../public/easy-eats.png";
import GithubCardImg from "./icons/github-card.png";
import InvoiceNow from "./icons/Invoicenow.png";

export const Projects = () => {
    const projects = [
        {
            title: "3rounds.ai",
            description: "AI-powered assessment platform for interview preparation with customized practice sessions.",
            image: ThreeRounds,
            githubLink: "https://github.com/Shivamch02/3rounds.ai",
            liveLink: "https://3rounds-ai.vercel.app/",
            imageName: "3rounds.png",
            videoSrc: "/3rounds-vid.mp4",
        },
        {
            title: "Movix",
            description: "Movie search app to discover films, view details, ratings, and explore recommendations.",
            image: MovixImg,
            githubLink: "https://github.com/Shivamch02/movix",
            liveLink: "https://movix-psi-two.vercel.app/",
            imageName: "movix.webp",
        },
        {
            title: "Blog App",
            description: "Modern blogging platform with full CRUD functionality for creating and managing posts.",
            image: MediumImg,
            githubLink: "https://github.com/Shivamch02/medium",
            liveLink: "https://medium-seven-flame.vercel.app/signup",
            imageName: "medium.webp",
        },
        {
            title: "Easy Eats",
            description: "Food ordering app to browse restaurants and discover delicious meals nearby.",
            image: EasyEatsImg,
            githubLink: "https://github.com/Shivamch02/easy-eat",
            liveLink: "https://easyeat.vercel.app/",
            imageName: "easy-eats.png",
        },
        {
            title: "Github Explorer",
            description: "Search and explore GitHub profiles with detailed user information and stats.",
            image: GithubCardImg,
            liveLink: "https://exploregithub.vercel.app/",
            githubLink: "https://github.com/Shivamch02/Github-card",
            imageName: "github-card.webp",
        },
        {
            title: "Invoice Now",
            description: "Clean invoice management interface for seamless creation and tracking.",
            image: InvoiceNow,
            liveLink: "https://invoicenow.vercel.app/",
            githubLink: "https://github.com/Shivamch02/invoiceit",
            imageName: "Invoicenow.png",
        },
    ];

    return (
        <section className="relative py-24 bg-white dark:bg-black selection:bg-blue-500/30" id="projects">
            {/* Background pattern */}
            <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.02] pointer-events-none" />

            <div className="main-container relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            Work Gallery
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                        >
                            Selected <span className="italic font-serif">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
                        >
                            A showcase of my recent work, blending technical excellence with elegant design.
                        </motion.p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            imageName={project.imageName}
                            videoSrc={project.videoSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
