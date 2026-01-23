import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ContactUs = () => {
    return (
        <div className="bg-background text-foreground section-container pb-32 mb-16" id="contact">
            <div className="main-container">
                {/* CTA Section */}
                <div className="relative overflow-hidden bg-background border border-gray-200 dark:border-gray-800/50 rounded-3xl p-12 md:p-16 text-center mb-16 shadow-lg dark:shadow-none">
                    {/* Background decorations */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/[0.01] to-transparent rounded-full blur-2xl"></div>
                    </div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                        </p>
                        <a href="mailto:chshivam53@gmail.com">
                            <button className="group relative px-8 py-4 rounded-full inline-flex items-center gap-3 text-base font-semibold overflow-hidden transition-all duration-300 bg-gray-950 text-white dark:bg-white dark:text-gray-900 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                <span className="relative z-10">Get in Touch</span>
                                <FaArrowRight className="relative z-10 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <a
                        href="mailto:chshivam53@gmail.com"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                        chshivam53@gmail.com
                    </a>
                    <span className="text-center md:text-right">
                        © 2024 Shivam Chaurasiya •{" "}
                        <a
                            href="https://github.com/Shivamch02"
                            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        >
                            @Shivamch02
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};
