"use client";

import { motion } from "framer-motion";
import { CardInfo } from "./CardInfo";


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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 w-full"
        >
            {/* Glossy overlay effect on hover */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none z-10" />

            <div className="w-full flex-grow">
                <CardInfo
                    image={image}
                    title={title}
                    description={description}
                    imageName={imageName}
                    videoSrc={videoSrc}
                />
            </div>

            <div className="px-5 pb-5 pt-2 flex items-center gap-3 mt-auto">
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                    >
                        <button className="w-full py-2.5 px-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2">
                            <span>View Site</span>
                        </button>
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={liveLink ? "" : "flex-1"}
                    >
                        <button className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </a>
                )}
            </div>
        </motion.div>
    );
};
