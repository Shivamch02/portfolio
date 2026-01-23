"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const ContactUs = () => {
    return (
        <section className="relative py-24 bg-white dark:bg-black selection:bg-blue-500/30 overflow-hidden" id="contact">
            {/* Background elements */}
            <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.02] pointer-events-none" />

            <div className="main-container relative z-10">
                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-gray-50 dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-[2.5rem] sm:rounded-[3rem] px-6 py-12 md:p-20 text-center shadow-2xl dark:shadow-[0_0_80px_-15px_rgba(255,255,255,0.05)]"
                >

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            Get in touch
                        </motion.span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                            Let&apos;s Work <span className="italic font-serif">Together</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed">
                            Have a project in mind or want to collaborate? I&apos;m currently open to new opportunities and would love to hear from you.
                        </p>

                        <a href="mailto:chshivam53@gmail.com" className="inline-block group w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-2xl inline-flex items-center justify-center gap-4 text-base sm:text-lg font-bold transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1 active:scale-95">
                                Start a Conversation
                                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Footer Section */}
                <div className="mt-16 sm:mt-20 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-gray-900 dark:text-white font-bold text-lg">Shivam Chaurasiya</p>
                        <a
                            href="mailto:chshivam53@gmail.com"
                            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-mono text-sm sm:text-base"
                        >
                            chshivam53@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <p>© 2026 Shivam Chaurasiya • All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="https://github.com/Shivamch02" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
                            <a href="https://linkedin.com/in/shivamch02" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
                            <a href="https://x.com/shivamch02" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
