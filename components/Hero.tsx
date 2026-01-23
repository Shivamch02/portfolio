import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

export const Hero = () => {
    return (
        <div className="flex flex-col justify-center">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Shivam Chaurasiya
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
                Full Stack Developer
            </p>

            {/* About */}
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                I&apos;m a passionate developer from Varanasi, India, crafting modern web experiences.
                I love building scalable applications with clean code and elegant user interfaces
                that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
                <a
                    href="https://github.com/Shivamch02"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300 bg-gray-900 text-white border border-gray-900 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100">
                        <FaGithub className="text-lg" />
                        View Github
                    </button>
                </a>
                <a
                    href="https://drive.google.com/file/d/1qxPGkaBUmXpMqC6QHdtzt17VcB6voIUi/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300 border-2 text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-900">
                        <HiDocumentText className="text-lg" />
                        My Resume
                    </button>
                </a>
            </div>
        </div>
    );
};
